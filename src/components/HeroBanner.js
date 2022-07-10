import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box position='relative'
    p='20px' 
    sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
    }}>
        <Typography color='#FF2625' fontSize='26px' fontWeight={600}>
            Fitness Club
        </Typography>
        <Typography fontWeight={700} mb='23p' mt='30px'
        sx={{ fontSize: { lg: '44px', xs: '40px'}}}
        >
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4}>
            Check Out the most effective exercises
        </Typography>
        <Button variant='contained' href="#exercises"
            sx={{backgroundColor: '#ff2625', padding: '10px'}}
        >
            Explore Exercises</Button>
        <Typography
            fontWeight={600}
            color='#ff2625'
            fontSize='200px'
            sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none'}
            }}
        >
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner