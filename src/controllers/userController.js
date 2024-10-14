const userRepository = require("../repositories/userRepository");
const userService = require("../services/userServices")

async function createUser(req,res){
    console.log('Create user controlle called')

    console.log(req.body)
    //Todo: Register the user

    const UserService= new userService(new userRepository());
    console.log("Hitteng server layer")

    try{
        const response=await UserService.registerUser(req.body);
        console.log(response)
        return res.status(201).json({
            message: 'Successfully registered the user',
            success: true,
            data: response,
            error: {}
            
            
        })
    }catch(error){
        return res.status(error.statusCode).json({
            success:false,
            message:error.reason,
            data:{},
            error:error,
        })
    }

}

module.exports={
    createUser
}