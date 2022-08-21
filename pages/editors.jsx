
import { LogoCard,LogoCardMobile } from '../components/logocard';
import {Footer} from '../components/footer'
import Image from "next/image"


 
const Editors=()=>{




    return (<div className="flex items-start  justify-center min-h-screen font-poppins w-full  ">
      
    <div className='flex flex-col w-full items-center text-justify  justify-start'>
    <LogoCard/>
      <LogoCardMobile/>

      <h1 className='text-lg font-[600] my-2 tablet:my-12 desktop:text-2xl desktop:my-5'>Editors Note</h1>
    <div className='flex flex-col-reverse w-full items-start p-2  desktop: max-w-[90%] desktop:flex-row items-center desktop:space-x-10  '>
      <div className='w-full  '>
          <p className='text-sm desktop:text-xl italic text-gray-800 '>"The quest for addressing the challenges faced by humanity needs a broadening of the intellectual
frontiers from a particular discipline to different fields of knowledge through research studies. This
journal is a confluence of various articles addressing different issues confronted in our day to day
lives and gives a thorough insight as to how these challenges can be solved by undertaking
interdisciplinary approach. It provides insights as to the latest development in different fields of
knowledge and kindles an interest in undertaking interdisciplinary studies and research among the
readers. This is a peer reviewed online journal published quarterly. It contains articles from
different disciplines like science, technology, law etc. but would high lighten the ethical, legal, socio
economic and political challenges. It contains articles addressing contemporary issues of relevance.
It contains not only articles by academicians, researchers etc but also students who undertake field
studies and come up with outstanding findings and suggestions relevant for the policy makers. Thus
the journal would attempt to propagate the ideas of young researchers and students thereby
broadening the vistas of knowledge ."</p>




</div>
<div className=' flex flex-col justify-center  '>
  <div className='flex  flex-col items-center desktop:hidden'>
<Image src="/assets/editors/editor.png" height="140px" width="140px" className='rounded-lg '/>
</div>

<div className='hidden desktop:flex  flex-col items-center'>
<Image src="/assets/editors/editor.png" height="280px" width="280px" className='rounded-lg '/>
</div>
<div className='flex flex-col  items-center p-5'>

<h1 className="text-lg font-[600] desktop:text-xl">Dr Vani Kesari A</h1>
<h1 className='text-sm desktop:text-lg'>Coordinator ICREP</h1>

</div>


</div>

{/* <div className='absolute bottom-0 right-0 left-0'>
<Footer/>
</div> */}
</div>
<div className='absolute left-0 right-0 bottom-0'>
<Footer/>
</div>

<div className='desktop:hidden'>
<Footer/>
</div>
  </div>

  </div>
  )

}

export default Editors;