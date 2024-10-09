import ScrollAnimation from 'react-animate-on-scroll';
import ProjectList from './ProjectList';

export default function Project({id}){
    return(
        <ScrollAnimation animateIn='fadeIn'>
        <div id={id} className="container mx-auto max-w-mobile md:max-w-pc">
        <ScrollAnimation animateIn='zoomIn'>
            <h2 className="block xl:text-3xl md:text-xl custom-text text-center custom-text font-bold">
             Some Of The Projects
            </h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn='zoomIn'>
            <span className="block text-center custom-text font-semibold pt-2">Instead of just talking, let my work do the talking. Here are some of the projects you shouldn’t miss!</span>
        </ScrollAnimation>
        <ProjectList></ProjectList>
        </div>
         </ScrollAnimation>

    )
}