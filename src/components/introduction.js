import React from 'react';
import { motion } from "framer-motion"

const Introduction = () => {
  return (
    <div className='bg-gradient-to-tl from-[#83472A] via-[#26150D] to-black h-screen'>
      <div className='h-screen flex items-center flex-col justify-center text-center'>
        <motion.div
          initial={{ opacity: 0, x:-200 }}
          animate={{ opacity: 1, x:0 }}
          transition={{ ease: "easeOut", duration: 1.2 }}
          >
          <div className='text-[#E3CCAE]  text-5xl'>Hey, I'm <span className='text-[#FB8720] transition-all hover:text-[#ffdd00z] duration-300'>Bashir Hilaly</span></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x:200 }}
          animate={{ opacity: 1, x:0 }}
          transition={{ ease: "easeOut", duration: 1.4 }}
          >
          <div className='text-[#E3CCAE]  text-5xl mt-2'>I'm a Software Developer</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y:100 }}
          animate={{ opacity: 1, y:0 }}
          transition={{ delay: 1, ease: "easeOut", duration: 1 }}
          >
          <div className="flex flex-row mt-4">
            <a href="#about" class="relative inline-block text-lg group">
              <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-1 border-[#FB8720] rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#E3CCAE]"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#FB8720] group-hover:-rotate-180 ease"></span>
              <span class="relative">Take a look</span>
              </span>
              <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#FB8720] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </a>
          </div>
        </motion.div>

      </div>
      <div class="static"></div>
    </div>
  )
}

export default Introduction;