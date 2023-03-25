import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'
import workpic from 'styles/img/alexa.jpg'

const About = () => {
  return (
    <div class="mt-12 max-w-sm w-full lg:max-w-full lg:flex">
    <div class="">
    <Image
        src={workpic}
        alt="Picture of my work"
        width={500}
        height={500}
      />
    </div>
    <div class="">
      <div class="mb-8">
      <div class=" text-stone-200 font-bold text-4xl mb-2">About</div>
      <div class="text-stone-200 mt-8">
        <h1>HI, I’M ALEXA!</h1>
        <div class="mt-4">
         <p>I am passionate about user experience design, user interface design, and front-end development. I believe this passion stems from my longstanding love for art and writing. My comfort and skill utilizing technology and designing / developing user interfaces has transformed my passion into a career.</p>
         <p class="mt-4">For the last 5 years, I have been studying web design and development, performing freelance work, and building personal projects.</p>
         <p class="mt-4">I enjoy combining design part of my work since I can work with visuals, and I like the technical aspect of it which is coding. </p>
       </div>
      </div>
     
      <p class="mt-6 mb-4 text-stone-200 hover:text-orange-600"><a href="#" class="inline-flex items-center justify-center text-sm">Follow me<FaLinkedin size={20} class="ml-2" /></a></p>
       
      </div>
    </div>
  </div>
  )
}

export default About