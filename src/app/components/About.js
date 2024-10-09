import ScrollAnimation from 'react-animate-on-scroll';
import Image from 'next/image'

export default function About({id}){
  return(
    <ScrollAnimation animateIn='fadeIn'>
      <div id={id} className="container mx-auto max-w-mobile md:max-w-pc flex justify-between flex-wrap flex-col md:flex-row justify-between items-center xl:py-32 md:py-28 pt-4 pb-28">
      <div className="xl:w-1/4 md:w-2/5 mb-10 md:mb-0 w-full relative mx-auto h-full rounded-lg">
      <ScrollAnimation animateIn='bounceInLeft' duration={3}>
      <Image width={0} height={0} sizes="100vw" src="/img/img_phototest.jpg" alt="Project 05" className="w-full h-full z-0 rounded-lg transition-all duration-300" />
      </ScrollAnimation>
      </div>
      <div className='xl:w-3/5 md:w-2/4 font-bold w-full'>
        <ScrollAnimation animateIn='zoomIn'>
        <h2 className="block xl:text-3xl md:text-xl custom-text text-left custom-text font-bold">
             Who Am I?
        </h2>
           <p className='custom-text pt-2 text-sm md:text-base xl:text-lg'>I have over 3 years of experience in frontend development. My skills have improved through hands-on projects and learning. I enjoy creating user-friendly websites that look great and work smoothly. I'm always eager to learn new tools and techniques to improve my work.</p>
           <p className='block text-sm md:text-base xl:text-lg custom-text text-left custom-text py-5'>Here is my educational background.</p>
        </ScrollAnimation>
           <ul className='text-sm md:text-base xl:text-lg custom-text pb-3'>
           <ScrollAnimation animateIn='zoomIn' duration={2}>
            <li className='xl:text-xl font-bold'>M.C.Sc(Course-Work)</li>
            <li className="block text-sm custom-text font-semibold pt-2">University Of Computer Studies(Yangon) | 2019 ~ 2020</li>
            </ScrollAnimation>
           </ul>
           <ul className='text-sm md:text-base xl:text-lg custom-text '>
           <ScrollAnimation animateIn='zoomIn' duration={3}>
            <li className='xl:text-xl font-bold'>B.C.Sc(Hons)</li>
            <li className="block text-sm custom-text font-semibold pt-2">University Of Computer Studies(Maubin) | 2014 ~ 2019</li>
            </ScrollAnimation>
           </ul>
        </div>
      
        </div>
    </ScrollAnimation>
  )
}