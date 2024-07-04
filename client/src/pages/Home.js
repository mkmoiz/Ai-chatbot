import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Box,Typography,Card,Stack,useTheme} from "@mui/material"
import DescriptionRounded from "@mui/icons-material/DescriptionRounded"
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";

const Home = () => {
  const theme=useTheme()
  const navigate=useNavigate()
  return (
    <>
    <Box sx={{display:'flex',flexDirection:'row'}}>
    <Box p={3} >
      <Typography variant="h3" mb={2} fontWeight="bold">Text Generator</Typography>
      <Card onClick={()=>navigate("/summary")} sx={{boxShadow:2,borderRadius:5,height:200,width:200,'&hover':{border:2,boxShadow:0,borderColor:"primary.dark",cursor:"pointer"}}}>
       <DescriptionRounded sx={{fontSize:80,color:"primary.main",mt:2,ml:2}}/>
       <Stack p={3} pt={0}>
       <Typography fontWeight="bold" variant="h5"> Text Summary</Typography>
       <Typography variant="h6">Summarize the text</Typography>

       </Stack>
      </Card>
    </Box>  
    <Box p={3} >
      <Typography variant="h3" mb={2} fontWeight="bold">Text Generator</Typography>
      <Card onClick={()=>navigate("/paragraph")} sx={{boxShadow:2,borderRadius:5,height:200,width:200,'&hover':{border:2,boxShadow:0,borderColor:"primary.dark",cursor:"pointer"}}}>
       <FormatAlignLeftOutlined sx={{fontSize:80,color:"primary.main",mt:2,ml:2}}/>
       <Stack p={3} pt={0}>
       <Typography fontWeight="bold" variant="h5"> Generate text</Typography>
       <Typography variant="h6">generate paragraph with words</Typography>

       </Stack>
      </Card>
    </Box>  
    </Box>
    </>)
}

export default Home