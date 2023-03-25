import { FaPaintBrush, FaLaptopCode } from "react-icons/fa"
import { MdDesignServices, MdEmojiPeople } from "react-icons/md"

const Services = () => {
  return (
    <div class="bg-stone-900 mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-neutral-200 sm:text-6xl">SERVICES</h1>
    <div class="mt-10 flex items-center justify-center gap-x-6">    
    <ul class="flex flex-wrap items-center justify-center mt-8 mb-6 dark:text-white">
    <li>
        <a href="#" class="text-orange-600 dark:hover:text-white">
          <MdDesignServices size={60} class="" />
        </a>
        <p class="mt-4 md:mr-14 uppercase">Web design</p>
     </li>
     <li>
        <a href="#" class="text-orange-600 mt-4 mb-4 dark:hover:text-white">
          <FaLaptopCode size={60} />
        </a>
        <p href="#" class="mt-4 md:mr-14 uppercase">Web development</p>
    </li>
    <li>
        <a href="#" class="text-orange-600 mt-4 mb-4 dark:hover:text-white">
          <MdEmojiPeople size={60} />
        </a>
        <p href="#" class="mt-4 md:mr-14 uppercase">Web consulting</p>
    </li>
    <li>
       <a href="#" class="text-orange-600 mt-4 mb-4 dark:hover:text-white">
          <FaPaintBrush size={60} />
        </a>
        <p href="#" class="mt-4 uppercase">Digital Art</p>
    </li>
</ul>
  </div>
  <button class="bg-orange-600 hover:bg-stone-100 hover:text-orange-600 text-white py-2 px-4 mt-12">
    READ MORE
  </button>
    </div>
  </div>
  )
}

export default Services
