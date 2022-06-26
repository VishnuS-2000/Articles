import {Alert,AlertIcon,AlertTitle,AlertDescription} from '@chakra-ui/react'
import { useToast ,Button} from '@chakra-ui/react'

import { useEffect, useState } from 'react'



export const Notification=({options})=>{
    
  const [show,setShow]=useState(false)

  useEffect(()=>{

    setShow(true)
    setTimeout(()=>{
      setShow(false)
    },[4000])



  },[options.createdAt])

  return<>{show && <Alert status={options.status} className='fixed top-0 left-0 drop-shadow-md z-[50]'>
<AlertIcon/>
<AlertDescription>{options.message}</AlertDescription>
</Alert>}

</> 


    
}

