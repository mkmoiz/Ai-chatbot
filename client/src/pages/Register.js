import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import axios from 'axios';
import { Typography,Box,useMediaQuery,TextField,Button,Alert,Collapse,useTheme } from '@mui/material';
const Register = () => {
  const notMobile=useMediaQuery("(min-width:1000px)")
  const theme=useTheme();
  const navigate=useNavigate()
//state
const[username,setUserName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[error,setError]=useState("")
//functions
const handleSubmit=async(e)=>{
  e.preventDefault()
  try{
  await axios.post("http://localhost:8080/api/v1/auth/register",{username,email,password})
  toast.success("registered successfully")
  navigate('/login')
  }catch(error){
console.log(error)
if(error.response.data.error){
  setError(error.response.data.error)
}else if(error.message)
  setError(error.message)
  setTimeout(()=>{
    setError("")
  },5000)
  }

}
  return (
<Box width={notMobile?'40%':'80%'}
p={'2rem'}
m={'2rem auto'}
backgroundColor={theme.palette.background.alt}
sx={{boxShadow:5}}
borderRadius={5}>
  <Collapse in={error}>
  <Alert severity='error' sx={{mb:2}}>{error}</Alert>
  </Collapse>
  <form onSubmit={handleSubmit}>
  <Typography variant="h3" >Sign up</Typography>
 <TextField required margin="normal" label="username" fullWidth value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
 <TextField required margin="normal" label="email" fullWidth value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
 <TextField required margin="normal" type="password" label="password" fullWidth value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
<Button type='submit' fullWidth variant="contained" sx={{color:"white",mt:2}}>Sign up</Button>
<Typography mt={3}>Already registered ?         <Link to="/login">Login</Link></Typography>
  </form>
</Box>  )
}

export default Register



