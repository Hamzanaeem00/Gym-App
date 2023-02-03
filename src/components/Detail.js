import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system'
import React from 'react'
import BodyPartImg from '../assets/assets/icons/body-part.png'
import TargetImg from '../assets/assets/icons/target.png'
import EquipmentImg from '../assets/assets/icons/equipment.png' 


const Detail = ({exerciseDetail}) => {
    console.log("exerciseDetailData===>", exerciseDetail);

    const {bodyPart, gifUrl, name, target, equipment }= exerciseDetail
    const extraDetail =[
        {
            icon: BodyPartImg,
            name: bodyPart,
        },
        {
            icon: TargetImg,
            name: target,
        },
        {
            icon: EquipmentImg,
            name: equipment,
        },
    ]

  return (
   <Stack gap="60px" sx={{flexDirection: {lg:"row"},p:'20px',alignItems:'center'}} >
    <img src={gifUrl} alt={name} loading="lazy" className='detail-img' />
    <Stack sx={{gap:{lg :'35px', xs: '20px'}}}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize" >
            {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        {
            extraDetail?.map((item)=>(
                <Stack key={item.name} direction='row' gap= "24px" allignItems="center">
                    <Button>
                        <img src={item.icon} alt="" />
                    </Button>
                    <Typography variant='h5' textTransform='capitalize'>
                        {item.name}
                    </Typography>
                </Stack>

            ))
        }
     
     </Stack>
   </Stack>
  )
}

export default Detail
