import { LogoCard,LogoCardMobile } from '../components/logocard';
import {Footer} from '../components/footer'
 
 
const About=()=>{




    return (<div className="flex items-start  justify-center min-h-screen font-poppins w-full  ">
      
    <div className='flex flex-col w-full items-center text-justify  justify-center'>
    <LogoCard/>
      <LogoCardMobile/>

    <div className='flex flex-col  items-center p-10 w-full desktop:max-w-[80%] space-y-3 '>
    <h1 className='text-lg font-[600] my-2 tablet:my-12 desktop:text-2xl desktop:my-5'>About the Centre</h1>




    <p className='text-md font-[400]  desktop:text-xl'>
    Prof. N. R. Madhava Menon Interdisciplinary Centre for Research Ethics and Protocols is an Inter University Centre of Excellence which undertakes research and academic programs in the field of bioethics as well as in all areas of application of research ethics. The Centre is housed in the main campus of Cochin University of Science and Technology. The Centre was launched on 10th of January 2020 by Dr. Michael Levitt, 2013 Nobel Prize Winner in Chemistry. Since then, the Centre has been actively engaged in promoting its objectives with utmost excellence and perfection. The Centre endeavours to further expand its wings to innovative and promising research in Interdisciplinary areas through propagating ethical ideals and thereby setting an example for other budding research institutions.
    <div className='flex justify-between w-full p-0 desktop: py-10 text-justify'>
    
    <div className='text-sm desktop:text-xl'>
      <h1 className='mb-2 font-[600]'>Office Mob:+91 80780 19688</h1>
  

    </div>
    
    <div className='text-sm desktop:text-xl'>
    <h1 className='font-[600]'>Email: icrep@cusat.ac.in</h1>

    
    </div>

    
    </div>
    <ul className='space-y-2 font-[500] mt-5 list-disc p-1 desktop:p-3' >
   <h1 className='font-[600] text-lg desktop:text-xl'>Programs</h1>
   <div className='px-10 py-2'>
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
    </div>
    </ul>
 

    <ul className='space-y-2 font-[500] mt-5 list-disc p-1 desktop:p-3' >
   <h1 className='font-[600]'>Objectives</h1>
   <div className='px-10 py-2'>
    <li>To seek integrity in academic and scientific pursuits</li>
    <li>To focus on particular niche areas where existence and awareness of scientific protocols is essential. </li>
    <li>To explore the possibilities of collaborative research, teaching, and exchange of scholarship with institutes of international repute that specialises on bioethics.
</li>
    <li>To initiate and develop academic programs of interdisciplinary character.
</li>

</div>
    </ul>

    <ul className='space-y-2 font-[500] mt-5 list-disc p-1 desktop:p-3' >
   <h1 className='font-[600]'>Other Activities</h1>
   <div className='px-10 py-2'>
   <li>Short term research grants</li>
<li>Summer school internships</li>
<li>Visiting faculty programs</li>

</div>
    </ul>


 

    </p>


    </div>
  


    <Footer/>


    </div>
 

  </div>)

}

export default About;