import { FaBehanceSquare, FaGithubSquare } from "react-icons/fa"
import { BsArrowRight } from "react-icons/bs"
import Image from 'next/image'
import workpic from 'styles/img/kion.png'

const Work = () => {
  return (
  <div class="max-w-sm w-full lg:max-w-full lg:flex">
  <div class="">
    <div class="mb-8">
    <div class=" text-stone-200 font-bold text-4xl mb-2">CHECK OUT MY WORK</div>
    <div class="text-stone-200 mt-8">
      <p class="mb-4"><a href="#" class="inline-flex items-center justify-center">UX / UI Portfolio <BsArrowRight size={20} class="ml-8" /></a></p>
      <p class="mb-4"><a href="#" class="inline-flex items-center justify-center">Front-End Development Portfolio <BsArrowRight size={20} class="ml-8" /></a></p>
    </div>

      <p class="text-stone-200 font-bold text-1xl mt-12">Check my digital art work on Behance and my coding skills on Github</p>
      <div class="mt-4">
        <div class="flex flex-wrap gap-4 mt-8 mb-6 text-stone-200">
          <a href="" class="hover:text-orange-600"><FaBehanceSquare size={40} /></a>
          <a href="" class="hover:text-orange-600"><FaGithubSquare size={40} /></a>
        </div>
       </div>
    </div>
  </div>
  <div class="">
  <Image
      src={workpic}
      alt="Picture of my work"
      width={500}
      height={500}
    />
  </div>
</div>
  )
}

export default Work