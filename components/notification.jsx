import {Alert,AlertIcon,AlertTitle,AlertDescription} from '@chakra-ui/react'
import { useToast ,Button} from '@chakra-ui/react'

import { useEffect, useState } from 'react'



export const Notification=({options})=>{
    
  const [show,setShow]=useState(true)

  useEffect(()=>{


    setTimeout(()=>{
      setShow(!show)
    },[5000])

  },[])

  return<>{show && <Alert status={options.status}>
<AlertIcon/>
<AlertDescription>{options.message}</AlertDescription>
</Alert>}

</> 


    
}

