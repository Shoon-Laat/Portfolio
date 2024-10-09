
import Image from 'next/image'
import ScrollAnimation from 'react-animate-on-scroll';
export default function Banner({id}){
return(
  <div className="md:h-screen">
    <div className="banner bg-custom-image bg-cover bg-center relative">
    <ScrollAnimation  animateIn='fadeIn'>
        <div id={id} className="container mx-auto max-w-mobile md:max-w-pc flex flex-wrap flex-col-reverse md:flex-row justify-between items-center md:py-32 py-20 md:py-0">
        <div className="xl:w-2/5 md:w-2/4 font-bold w-full">
        <ScrollAnimation animateIn='bounceInLeft' duration={3}>
          <span className="custom-text text-sm md:text-base xl:text-lg">Hello! I'm</span>
          <h2 className="xl:text-5xl md:text-3xl custom-text pt-2">Shoon Laat Pyae
            <span className="block xl:text-3xl md:text-xl custom-text pt-2">A Front-End Developer</span>
          </h2>
          <p className="custom-text pt-2 text-sm md:text-base xl:text-lg">I am a dedicated Frontend Developer with expertise in React and Next.js, specializing in creating visually engaging, responsive web applications. With a strong command of HTML, CSS, and JavaScript, I transform design concepts into seamless, high-performing user interfaces across all devices.</p>
        </ScrollAnimation>
        </div>
        <div className='md:w-2/4 w-full'>
        <ScrollAnimation animateIn='bounceInRight' duration={5}>
        <Image className='mx-auto2 img-bounce w-full h-full'
        src="/img/mv.png"
        width={0} height={0} sizes="100vw"
        alt="Picture of the author"
        />
        </ScrollAnimation>
        </div>
        </div>
        </ScrollAnimation>
        </div>
  </div>
)

}
