import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import HeroBannerImage from '../assets/assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px', xs:'70px'},
            ml:{sm:'50px'}}} position= "relative" p ="20px">
        <Typography color="#FF2625" fontWeight="600px" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700} sx ={{ fontSize:{lg:'44px', xs: '40px'}}} mb="23px" mt="30px" >
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px"> 
            Check out the most  effective exercises
        </Typography>
        <Button  sx={{backgroundColor:'#ff2625', padding:"10px", marginTop:"40px"}}  variant="contained" color='error' mb={4} href="#exercises">Explore Excercises</Button>
        <Typography fontWeight={600} fontSize='200px'
        color="#ff2625" sx={{opacity: "0.1", display: {lg:'block', sm:'none'}}} >Exercise</Typography>
        <img src={HeroBannerImage} alt="banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner