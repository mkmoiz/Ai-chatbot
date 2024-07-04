import errorResponse from "../utility/errorResponse.js";

export const errorHandler=(errr,req,res,next)=>{
    let error={...errr}
    error.message=error.message

    //mongoose cast Error

    if(error.name==="castError"){
        const message="values not found"
   error =new errorResponse(message,404)
    }
    //duplicate key error
    if(error.code ===11000){
        const message="Duplicate value received"
        error=new errorResponse(message,400)
    }
    //mongoose validation
    if(error.name==="ValidationError"){
        const message=Object.values(error.errors).map(val=>val.message)
        error=new errorResponse(message,400)
        res.status(error.statusCode || 500).json({
            success:false,
            error:error.message||"server error"

        })
    }
    
}
