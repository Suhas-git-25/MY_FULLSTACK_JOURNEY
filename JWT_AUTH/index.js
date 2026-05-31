const express = require('express')
const bodyParser= require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const app = express()

app.listen(3000,()=>{
    console.log("Server started runnning on port 3000")
})

app.use(cors({origin:'*'}))
app.use(bodyParser.json())

app.use(express.urlencoded({extended: true}))
const JWT_Token_Secret='thisisasecretkeyforsiginingtoken'
app.get('/',(req,res)=>{
    console.log('New Request to the default route')
    res.send('Hi, this is the default route')
})

const portalUser={
    "prasad":{
        ID:1,
        name: "prasad",
        role:'faculty',
        password:"myclz@888"
    } ,
    "jeshwanth":{
        ID:1,
        name: "jeshwanth",
        role:'student',
        password:"student@222"
    }
}

app.post('/login',(req,res)=>{
    
    const{username,password}= req.body;
    const user = portalUser[username];
    console.log('User: ',user);

    if (!user) {
        return res.status(401).send('User login failed');
    }

    if(user.password=== password){
        const userPayload={
            user_ID: user.ID,
            user_role: user.role
        };
        const token = jwt.sign(userPayload,JWT_Token_Secret ,{expiresIn:"1h"})
        return res.status(200).send({message:'User succesfully logged In ',token: token });
    }

    return res.status(401).send('User login failed');
})

const authenticateFaculty= (req,res,next)=>{
    const bearerToken=req.headers.authorization
    console.log('Bearer token from client: ', bearerToken);

    if(!bearerToken || !bearerToken.startsWith('Bearer ')){
        return res.status(401).send("Bearer token missing")
    }

    const token=bearerToken.split('Bearer ')[1]
    console.log('Line 36: ',token)

    const decodedVersion = jwt.verify(token,JWT_Token_Secret)
    console.log('Decode version: ', decodedVersion);

    if (decodedVersion.user_role !== 'faculty') {
        return res.status(403).send("Only faculty can access this route")
    }

    next()
}

app.get('/anyone-can-access',(req,res)=>{
    res.send("Welcome anyone can access this route ");
})

app.get('/student-attendance',authenticateFaculty,(req,res)=>{
    const students={
        'jaswanth': '75%',
        'student2': '85%'
    }
    res.status(200).send({data:students , message: "only faculty can access"})
})
