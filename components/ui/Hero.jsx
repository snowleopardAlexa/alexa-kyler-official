const Hero = () => {
  return (
    <div class="bg-stone-900 mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full py-1 px-3 text-sm leading-6 text-neutral-200 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Customized Pet Portraits, mugs, blankets, and more on <a href="#" class="font-semibold text-orange-600"><span class="absolute inset-0" aria-hidden="true"></span>Petico Art <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-4xl font-bold text-neutral-200 sm:text-6xl">ALE<span class="text-6xl text-orange-500 font-bold">X</span>A K<span class="text-6xl text-orange-500 font-bold">Y</span>LER</h1>
        <p class="mt-6 text-lg leading-8 text-neutral-200">Web development | Web design | Digital art</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" class="bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">CONTACT</a>
          <a href="#" class="text-sm font-semibold leading-6 text-neutral-200">Services <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  )
}

export default Hero