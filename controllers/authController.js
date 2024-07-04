import userModel from "../model/userModel.js"
import errorResponse from "../utility/errorResponse.js";


//JWT   token
export  const sendToken=(user,statusCode,res)=>{
    const token=user.getSignedToken(res);
    
    res.status(statusCode).json({
        success:true,
        token,
    })
}

export const registerController=async(req,res,next)=>{
    try{
        const {username,email,password}=req.body
        if(!username||!email||!password){
            return  next(new errorResponse("Provide all  the details",500))
        }
        //existing user
        const existEmail= await userModel.findOne({email})
        if(existEmail){
            return next(new errorResponse("accont is already registered",500))
        }
        const user=await userModel.create({username,email,password})
            sendToken(user,201,res) 
    }catch(error){
        console.log(error)
        next(error)
    }

}

//login controller
export const loginController=async(req,res,next)=>{
    try{
    const{email,password}=req.body
    if(!email||!password){
        return next(new errorResponse("enter email or password",500))
    }
    const user=await userModel.findOne({email})
    if(!user){
        return next(new errorResponse("INVALID credentials",401))
    }

    const isMatch=await user.matchPass(password)
    if(!isMatch){
        return next(new errorResponse("incorrect mail or password",401))
    }
    sendToken(user,200,res)

    }catch(error){
        console.log(error);
        next(error)
    }
}
//logout
export const logoutController=async(req,res)=>{
 res.clearCookie("refreshToken")
 return res.status(200).json({
    success:true,
    message:"Logout successfull"
 })
}