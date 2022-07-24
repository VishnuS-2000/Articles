
import { LogoCard,LogoCardMobile } from '../components/logocard';
import {Footer} from '../components/footer'
 
 
const About=()=>{




    return (<div className="flex items-start  justify-center min-h-screen font-poppins w-full  ">
      
    <div className='flex flex-col w-full items-center text-justify  justify-center'>
    <LogoCard/>
      <LogoCardMobile/>

    <div className='flex flex-col  items-center p-10 w-full desktop:max-w-[80%] space-y-3 '>
    <h1 className='text-lg font-[500] my-2 tablet:my-12 desktop:text-2xl desktop:my-5'>About the Centre</h1>




    <p className='text-md font-[400]  desktop:text-xl'>
    Prof. N. R. Madhava Menon Interdisciplinary Centre for
    Research Ethics and Protocols is an Inter University Centre of
    Excellence which undertakes research and academic programs
    in the field of bioethics as well as in all areas of application of
    research ethics. The Centre is established in 2020 and situated
    in the main campus of Cochin University of Science and
    Technology, Kochi, Kerala, India.
    The Centre is engaged in carrying out various academic
    programs as listed below:
    <ul className='space-y-2 font-[500] mt-5 list-disc p-1 desktop:p-3' >
    <li>Masters in Bioethics Program</li>
    <li>Advanced Certificate Program in Medical Law, Clinical</li>
    <li>Research and Bioethics</li>
    <li>Advanced Certificate Program in Law relating to Startups
    and Business Ethics</li>
    <li>Research and Publication Ethics Course work programs for
    M. Phil/ Ph. D scholars</li>
    <li>Scholarship support for Summer School Interns</li>
    <li>Short term Student Research grants</li>
    <li>Visiting Faculty Programs</li>
    </ul>
    </p>

    <div className='flex justify-between w-full p-0 desktop:px-3 py-20 text-justify'>
    
    <div className='text-sm desktop:text-xl'>
      <h1 className='mb-2'>Office Mob</h1>
      <h1 className='font-[600]'>Email: icrep@cusat.ac.in</h1>

    </div>
    
    <div className='text-sm desktop:text-xl'>
      <h1 className='mb-2'>Coordinator</h1>
      <h1 className='font-[600]'>Dr Vani Kesari A</h1>
      <h1 className='font-[600]'>Associate Professor</h1>

    
    </div>

    
    </div>
    </div>
  

    <div className='right-0 left-0 w-full absolute bottom-0'>
    <Footer/>
    </div>

    </div>
 

  </div>)

}

export default About;