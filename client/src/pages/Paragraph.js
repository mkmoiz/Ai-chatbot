
import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import axios from 'axios';
import { Typography,Box,useMediaQuery,TextField,Button,Alert,Collapse,useTheme,Card} from '@mui/material';

const Paragraph= () => {
  const notMobile=useMediaQuery("(min-width:1000px)")
  const theme=useTheme();
  const navigate=useNavigate()
//state
const[text,setText]=useState("")
const[para,setPara]=useState("")
const[error,setError]=useState("")

//functions
const handleSubmit=async(e)=>{
  e.preventDefault()
   fetch("http://localhost:8080/api/v1/openai/paragraph",{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify({text})
   }).then(response=>response.json())
   .then(data=>setPara(data.para)).catch(error=>console.error('Error:',error))

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
  <Typography variant="h5" >Generate the text</Typography>

 <TextField required margin="normal" label="Enter the text" fullWidth value={text} onChange={(e)=>{setText(e.target.value)}}/>
<Button type='submit' fullWidth variant="contained" sx={{color:"white",mt:2}}>Generate</Button>
<Typography mt={3}>diffrent function?         <Link to="/">to mainpage</Link></Typography>
  </form>
 
  {para ? (
        <Card
          sx={{
            mt: 4,
            border: 1,
            boxShadow: 0,
            height: "500px",
            borderRadius: 5,
            borderColor: "natural.medium",
            bgcolor: "background.default",
          }}
        >
          <Typography p={2}>{para}</Typography>
        </Card>
      ) : (
        <Card
          sx={{
            mt: 4,
            border: 1,
            boxShadow: 0,
            height: "500px",
            borderRadius: 5,
            borderColor: "natural.medium",
            bgcolor: "background.default",
          }}
        >
          <Typography
            variant="h5"
            color="natural.main"
            sx={{
              textAlign: "center",
              verticalAlign: "middel",
              lineHeight: "450px",
            }}
          >
            Paragraph will Apprea Here
          </Typography>
        </Card>
      )}
</Box>  )
}

export default Paragraph