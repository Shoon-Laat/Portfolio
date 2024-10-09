import ScrollAnimation from 'react-animate-on-scroll';
import Image from 'next/image'
import { project } from "./fetcher"
export default function ProjectList(){
    return(
        <ul className="flex flex-wrap justify-between mt-12">
        {project.map((proj,id)=>
         <li key={id} className='xl:w-[32.3%] w-full mb-3'>
              <ScrollAnimation animateIn='fadeIn'>
                <div className="w-full relative mx-auto h-[300px] overflow-hidden rounded-lg ">
                <Image width={0} height={0} sizes="100vw" src={proj.image} alt={proj.name} className="w-full h-full z-0 rounded-lg transition-all duration-300 hover:scale-110" />
                </div>
                <div className='py-4'>
                   <div className='flex justify-between'>
                        <h4 className='custom-text pt-2 text-sm md:text-base xl:text-lg font-bold'>{proj.name}</h4>
                        <a href={proj.link} target='_blank' className="text-white border-2 border-[#8a8aadbf] bg-transparent hover:bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 transition-all duration-300 rounded-full inline-flex items-center p-2.5 group">
                        <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        </a>
                   </div>
                   <p className='md:text-base text-sm font-semibold py-3'>{proj.description}</p>
                   <ScrollAnimation animateIn='bounce'
                    initiallyVisible={true}
                    animateOnce={true}>
                        <ul className='flex md:text-sm text-xs items-center'>
                        {Object.values(proj.language).map((lang, id) => (
                         <li className='header-color p-2 rounded-md mr-3' key={id}>{lang}</li>  // Dynamically display each language
                          ))}
                        </ul>
                    </ScrollAnimation>
                </div>
              </ScrollAnimation>
               
         </li>
         )}
        </ul>
       
    )
}