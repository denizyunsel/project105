 import React from 'react'
 import { Box, Card, CardContent, TextField } from '@mui/material'
import Center from './Center'


 



 
 export default function  Login() {
   return (

    <Center>
    <Card sx={{  width:400  }}>
    
    <CardContent>
    <Box sx={{
      '& .MuiTextField-root':{
        m:1,
        width:'90%'

      }
      
    }} >
      <form noValidate autoComplete='off'>
    <TextField
        label="Email"
        name="email"
        variant="outlined"
        />
        <TextField
        label="Email"
        name="email"
        variant="outlined"
        />
    <button 
    type='submit'
    variant="contained"
    size="large" sx={{
      width:'90'
    }} >
      start
    </button>
    

         </form>
      </Box>
    </CardContent>

    </Card>

    </Center>
    
    
    
   
    
   
    
        
        
   )
 }
 