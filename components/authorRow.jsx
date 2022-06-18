import moment from 'moment'

export const AuthorRow = ({element})=>{
    return(
            <div className="flex   flex-row h-[60px] items-center justify-between w-full  border-b  px-2 font-poppins space-x-5">
                <div  className="w-[20px]">
                    <input className="w-[20px] h-[20px]" type='checkbox'></input>                    
                </div>
                
              
                
                <div className="w-[200px]  flex space-x-3 justify-start">
                <img src="https://static.independent.co.uk/2022/04/26/16/054348ef248cdd6196d71ae7a049b305Y29udGVudHNlYXJjaGFwaSwxNjUxMDcxMzkz-2.66390146.jpg?quality=75&width=982&height=726&auto=webp" className="rounded-full w-[24px] h-[24px]"/>
                    <p>{element?.name}</p>
                </div>
                
                <div className="w-[230px]">
                    <h4>{moment(element.createdAt).format('LL')   }</h4>
                </div>
                
                <div className="w-[230px] flex space-x-2">
             
                    <h4>{element.designation}</h4>
                </div>
                
                <div className="w-[140px] ">
                    <button className='text-white flex justify-center text-sm w-[60px] rounded-[20px] bg-primary shadow-sm p-1 py-2'>
                    {element?.articles.length}
                    </button>
                </div>
                
            
                
                <div className="max-w-[60px] flex space-x-4">
                <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="#394867" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke="#394867" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                </button>




                    <button className='stroke-primary'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6H5H21"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 11V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 11V17"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    
                    </button>
                </div>
            
        </div>)

    }