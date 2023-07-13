import React from 'react'

export default function Footer() {
  return (
    <footer class="w-full relative bg-smallTextColor text-white pt-8 pb-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-5/12 px-4">
            <h4 class="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch! 👀</h4>
            <h5 class="font-[700] text-lg mt-3 mb-2 text-blueGray-600">
              I strive to bring ideas to life through clean code and creative problem-solving. Explore my projects and let's collaborate on transforming your vision into reality!
            </h5>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-top mb-6 ">
              <div class="w-full px-4 ml-auto">
                <ul class="flex list-unstyled justify-center gap-[30px]">
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#about">About Us</a>
                  </li>
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            
              <div className=" mt-6 lg:mb-0 mb-6 max-w-[100px] m-auto">
                <button className="bg-white text-smallTextColor text-[25px] shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i class="ri-linkedin-box-fill"></i></button>
                <button className="bg-white text-smallTextColor text-[25px] shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i class="ri-github-fill"></i></button>
              </div>
            
          </div>
        </div>
        <hr class="my-6 border-blueGray-300" />
        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span><a class="text-blueGray-500 hover:text-gray-800" target="_blank"> Developed by </a><br />
              <a class="text-blueGray-500 hover:text-blueGray-800">Samitha Wickramasinghe</a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
