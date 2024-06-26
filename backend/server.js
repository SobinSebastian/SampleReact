const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
app.use(express.json())
app.use(cors());
app.use(express.static('public'))
const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now() + path.extname(file.originalname))
    }
}
)

const upload = multer({
    storage : storage
})
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"cars",
    port:3307
})


app.get("/",(req,res)=> {
    const sql = "SELECT * FROM models";
    db.query(sql,(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data); 
    });
});


app.get("/imv",(req,res)=> {
    const sql = "SELECT * FROM img";
    db.query(sql,(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data); 
    });
});


app.post('/uploads',upload.single('image'),(req,res)=>{
    const image = req.file.filename;
    const sql ="INSERT INTO `img`(`images`) VALUES (?)";
    db.query(sql,[image],
        (err,data)=>{
            if(err) return res.json("error");
            return res.json(data);
        }
    )
})

app.post('/create',(req,res)=>{
    const sql ="INSERT INTO models(`name`, `type`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.type
    ]
    db.query(sql,[values],(err,data)=>{
        if(err) return res.json("error");
        return res.json(data);
    });
});

app.put('/carupdate/:id', (req, res) => {
    const sql = "UPDATE models SET `name` = ?, `type` = ? WHERE `id` = ?";
    const values = [
        req.body.name,
        req.body.type,
        req.params.id
    ];
    db.query(sql, values, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });
});



app.delete('/rmcar/:id', (req, res) => {
    const sql = "DELETE FROM `models` WHERE `id` = ?";
    const id = req.params.id;
    db.query(sql, id, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });
});


app.get('/car/:id',(req, res)=>{
    const id = req.params.id
    const sql = "SELECT * FROM models WHERE id = ?";
    db.query(sql,id,(err,data)=>{
        if(err) return res.json("Error");
        return (res.json(data));
    });
});


const verifyjwt=(req,res,next) =>{
    const token = req.headers["access-token"];
    if(!token){
        return res.json("Need Token");
    }else{
        jwt.verify(token,"jsonkey",(err,decoded)=>{
            if(err){
                return res.json("Not");
            }
            else{
                req.userId = decoded.id;
                next();
            }
        })
    }
}

app.get('/checkauth',verifyjwt,(req,res)=>{
    return res.json("successed");
})


app.post('/login',(req,res)=>{
    const sql ="SELECT * FROM login WHERE `email` = ? AND `password`=?";
    db.query(sql,[req.body.email,req.body.password],(err,data)=>{
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            const id = data[0].id;
            const token = jwt.sign({id},"jsonkey",{expiresIn :300})
            return res.json({Login : true,token,data});
        }
        else{
            return res.json("fail");
        }
    })
})

app.post('/reg',(req,res)=>{
    const sql  = "INSERT INTO `login`(`name`, `email`, `password`) VALUES (?,?,?)";
    const values =[
        req.body.uname,
        req.body.email,
        req.body.password
    ]
    db.query(sql,values,(err,data)=>{
        if (err) return res.json("error");
        return res.json(data);
    })

})




app.listen(8081,()=>{
    console.log("running ");
})