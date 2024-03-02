

async function signup(req,res){

    res.json({msg:'signup'})
}

async function login(req,res){

    res.json({msg:'login'})
}

module.exports = {signup,login}