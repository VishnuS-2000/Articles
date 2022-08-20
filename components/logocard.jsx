import {useEffect,useState} from 'react'
import Link from 'next/link'
import {

    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,Button,Input,InputGroup,InputRightAddon, InputLeftAddon
  } from '@chakra-ui/react'


  import { Textarea } from '@chakra-ui/react'
  import axios from 'axios'
  import { Notification } from './notification'
  import CloseIcon from '@mui/icons-material/Close';
import  moment  from 'moment';

import MoreVertIcon from '@mui/icons-material/MoreVert';

export const LogoCard=()=>{


    const [scroll,setScroll]=useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()



    const handleScroll=(()=>{

  
        if(window.scrollY>0){
            setScroll(true)
        }
        else{
            setScroll(false)
        }
    })

    useEffect(()=>{

     window.addEventListener('scroll',handleScroll)

     return ()=>window.removeEventListener('scroll',handleScroll)

    }) 



 
   


    return <>
    <div className='flex w-full space-x-5 px-5 bg-primary'>
    
    <Link href='/'>
    <h1 className='text-white font-[500] cursor-pointer'>Home</h1>
    </Link>

    <Link href='/about'>
    <h1 className='text-white font-[500] cursor-pointer'>About Us</h1>
    </Link>


    <h1 className='text-white font-[500] cursor-pointer' onClick={onOpen}>Contribute</h1>
 
    </div>

    <div className={`hidden desktop:flex   w-full  items-center  sticky z-50 top-0 right-0 bg-white justify-between ${scroll?"drop-shadow-sm":"shadow-none"} duration-800 `}>

    
 
    
    <Link href={'/'}>
    <img src='/assets/logo/logo.png' className='max-w-[120px] cursor-pointer   '/>
    </Link>
    
    <div className='flex flex-col justify-center items-center '>


     <p className='text-2xl font-[600]'>JOURNAL OF INTERDISCIPLINARY STUDIES</p>

 
    </div>
    
    <Link href={'https://www.cusat.ac.in'}>
    <img src='/assets/index/cusat-logo.png' className='max-w-[120px] cursor-pointer  '/>
    </Link>

    
    </div>
    
   <ContributeModal isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>

    



   
    </>
}



export const LogoCardMobile=()=>{

    const [scroll,setScroll]=useState(false)
    const[show,setShow]=useState(false);

    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleScroll=(()=>{

        if(window.scrollY>0){
            setShow(false);
            setScroll(true)
        }
        else{
            setScroll(false)
        }
    })

    useEffect(()=>{

     window.addEventListener('scroll',handleScroll)

     return ()=>window.removeEventListener('scroll',handleScroll)

    }) 



    return   <div className={`w-full flex fixed top-0 right-0 z-50 px-2 py-2  left-0  h-[60px] items-center justify-between bg-white  ${scroll?"drop-shadow":"shadow-none"} desktop:hidden  `}>

    {!scroll&&<button className='fixed left-[2px] ' onClick={()=>setShow(true)}><MoreVertIcon/></button>}



    <img src='/assets/logo/logo.png' className='max-w-[80px]   '/>

    <div className='flex flex-col justify-center items-center '>

       <p className='text-sm font-[600] tablet:text-lg'>JOURNAL OF INTERDISCIPLINARY STUDIES</p>

    </div>
    
    <Link href={'https://www.cusat.ac.in'}>
    <img src='/assets/index/cusat-logo.png' className='max-w-[80px] cursor-pointer  '/>
    </Link>
        
    {show&&
      <div className='fixed w-full left-0 right-0 top-[60px] flex items-center justify-center drop-shadow-lg bg-white h-[10%] z-50'>
      
      <button className='absolute right-[10px] top-0 rounded-full hover:bg-slate-100 ' onClick={()=>setShow(false)}>
      <CloseIcon/>
      </button>
      
      <ul className='flex md:text-xl flex-[1] justify-evenly font-medium cursor-pointer'>
          <li>
          <Link href={'/'}>
          Home
          </Link>
          </li>
          <li>
          <button onClick={()=>onOpen()}>
          Contribute
          </button>
          </li>
          <li>
          <Link href={`/about`}>
          About Us
          </Link>
          </li>
          </ul>
      
      
      </div>
      
      
      
      
      }
      <ContributeModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
    </div>

}







const ContributeModal=({isOpen, onOpen, onClose })=>{


  const [manuscript,setManuscript]=useState({
    name:'',
    phone:'',
    email:'',
    bio:'',
    
  })
  


  const [file,setFile]=useState()
  const [accepted,setAccepted]=useState()


  const [notification,setNotification]=useState({})



  const handleChange=({target})=>{
      
    setAccepted(false)
    if(target.files.length){
        const raw=target.files[0]

        if(raw.type== 'application/msword' || raw.type=='application/vnd.openxmlformats-officedocument.wordprocessingml.document'||raw.type=='application/vnd.oasis.opendocument.text'){

          const url=URL.createObjectURL(target.files[0])
          setFile({
              raw:raw,
              url:url
          })
          setAccepted(true)

          console.log(url)
        }

      }
  }


  const uploadDocument=async()=>{

    try{

      const response=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/upload/document`,{file:file.raw},{
        headers:{
            "Content-Type": "multipart/form-data",

        }
      
    })



    return {url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/documents/${response.data.filename}`}            
    }

    catch(err){
        
        setNotification({status:'error',message:'Document Upload Failed!',createdAt:moment()})
    }

    }

 




  const handleSubmit=async(e)=>{
      e.preventDefault()


      try{
      
        var documentURL={}

        if(file.raw){
        documentURL=await uploadDocument()

        }

        const response=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/manuscript`,{ 
          name:manuscript.name,
          phone:'+91 '+manuscript.phone,
          email:manuscript.email+'.com',
          bio:manuscript.bio,
          document:documentURL?.url
        })

      
      

    }
      

    catch(err){

      setNotification({status:'error',message:'Internal Server Error',createdAt:moment.now()})
    }

  }


  return <Modal isOpen={isOpen} onClose={onClose}  isCentered>
  <ModalOverlay />
  <ModalContent>

  <form onSubmit={handleSubmit}>
    <ModalHeader>
    <div className='space-y-2'>
    <div className='text-sm font-poppins font-[500]'>
    {notification.message&&<Notification options={notification}/>}
    </div>
    
      <h1 className='text-lg font-[poppins] desktop:text-xl'>Submit Your Manuscript</h1>
      <p className='font-[poppins] text-sm text-slate-600'>Please fill your correct details.</p>
      </div>
    </ModalHeader>

    
    <ModalCloseButton />
    <ModalBody>

 
    <div className='space-y-5 font-poppins '>


    <Input variant='outline' placeholder='Full Name'  required={true} value={manuscript.name} onChange={(e)=>{setManuscript({...manuscript,name:e.target.value})}}/>


    <InputGroup>
    <InputLeftAddon children='+91'  required={true} />
    <Input type='tel' placeholder='Phone number' variant='outline' required={true} value={manuscript.phone} onChange={(e)=>{setManuscript({...manuscript,phone:e.target.value})}}/>
    </InputGroup>

    <InputGroup>
  
    <Input type='email' placeholder='Email' variant='outline'  required={true} value={manuscript.email} onChange={(e)=>{setManuscript({...manuscript,email:e.target.value})}}/>
    <InputRightAddon children='.com' />
    </InputGroup>
    

    <Textarea placeholder='Bio'  required={true} value={manuscript.bio} onChange={(e)=>{setManuscript({...manuscript,bio:e.target.value})}}/>

    <Input type='file' placeholder='document' variant='outline' required={true} onChange={handleChange} />
    {!accepted&&<p className='text-red-600 font-[500] text-sm'>File not accepted,Try Again</p>}
    <p className='text-slate-600 text-sm'>Accepted File types : .doc,.docx,.odt</p>
    
    </div>

 

    </ModalBody>

  


    <ModalFooter>
      <Button colorScheme='red' mr={5} onClick={onClose} className='font-poppins'>
        Close
      </Button>
      {accepted?<Button type='submit' colorScheme='blue' className='font-poppins'>Submit</Button>:<Button type='submit' colorScheme='blue' className='font-poppins' disabled={true}>Submit</Button>}
    </ModalFooter>
    </form>
  </ModalContent>

</Modal>

}