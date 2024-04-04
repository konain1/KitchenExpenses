
 const User = require('../db/user')


async function signup(req,res){

    let {username,email,password} = req.body;

    let user = await User.findOne({username,email})

    if(!user){

        await User.create({
            username,
            email,
            password
        }).then(()=>console.log('signed-up~~~~!'))

        res.json({msg:'signup'})
    }else{
        res.json({msg:'user already Exists'})
    }
}


async function AddExpenses(req,res){

  res.json({msg:'expenses added'})

}

async function login(req,res){

    let {username,password} = req.body;

    let user = await User.findOne({username,password})

    if(!user){
        return res.json({msg:'user does not Exist !'})
    }

    res.json({msg:'login'})

}


async function Getusers(req,res){
 

    let users = await User.find()

    res.json({users:users})
}
async function GetUserById(req,res){
    let id = req.params.id

    let user = await User.findById({id})

    res.json({user:user})
}

module.exports = {signup,login,Getusers ,AddExpenses,GetUserById}