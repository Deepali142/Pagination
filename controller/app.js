
const User = require('../models/app');
var Bcrypt = require('bcryptjs');


exports.create = (req, res ) =>{
    if (!req.body.username && !req.body.password){
        return res.send("Fields cannot be Empty");
        
    };
  
    req.body.password = Bcrypt.hashSync(req.body.password,10);

    var newUser = new User({
    username:req.body.username,
    password:req.body.password
});

newUser.save().then(result =>{
    return res.send("User created sucessfully");
}).catch(err =>{
    return res.send({message : err.message});
});

};

exports.list = async(req, res) =>{
    try{
        let{ page ,sort ,size } = req.query;

        if(!page){
            page = 1;
        }
        if(!size){
            size = 10;
        }
        const limit =parseInt(size);
        const user = await User.find().sort({ votes:1, _id: -1 }).limit(limit)

        return res.json({page,size, Info: user});  
    }
    catch(err){
        return res.json({message:err.message});
    }
};

    