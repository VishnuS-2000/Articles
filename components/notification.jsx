import {Alert,AlertIcon,AlertTitle,AlertDescription} from '@chakra-ui/react'
import { useToast ,Button} from '@chakra-ui/react'



export const Notification=({options})=>{
    const toast=useToast()   

    return (options.float?toast({
    title: options.title,
    description:options.message,
    status: options.status,
    duration: 5000,
    isClosable: true,
  }):
  <Alert status={options.status}>
<AlertIcon/>
<AlertDescription>{options.message}</AlertDescription>
</Alert>)


    
}

