import React from 'react';
import { motion } from "framer-motion";
import me from '../PhotoForPortfolio (2).jpg'; 

const About = () => {
  return (
    <div id="about" className='bg-[#0B0B0B] h-fit'>
        <div className='flex items-center flex-col justify-center text-5xl pt-[5%] text-[#E3CCAE]'>About</div>
        <hr class="w-28 h-1 mx-auto my-4 bg-[#F5971B] border-0 rounded md:my-10 dark:bg-[#F5971B]"/>

        <section class="">
          <div class="container mx-auto grid justify-center sm:grid-cols-2 lg:grid-cols-4">
            <div class="flex flex-col items-center p-4 transition ease-in-out hover:scale-110 duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#D9D9D9" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0B0B0B" class="w-32 h-32">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
              <h3 class="my-3 text-[#E3CCAE] text-3xl font-semibold">Communication</h3>
              <div class="space-y-1 text-[#D9D9D9] text-base font-extralight text-center">
                <p>Effective communication with non-technical clients to understand requirements and explain technical concepts.</p>
              </div>
            </div>
            <div class="flex flex-col items-center p-4 transition ease-in-out hover:scale-110 duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#D9D9D9" class="w-32 h-32">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
              <h3 class="my-3 text-[#E3CCAE] text-3xl font-semibold">Technical</h3>
              <div class="space-y-1 text-[#D9D9D9] text-base font-extralight text-center">
                <p>Mastery of relevant programming languages, frameworks, and tools.</p>
              </div>
            </div>
            <div class="flex flex-col items-center p-4 transition ease-in-out hover:scale-110 duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#D9D9D9" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" class="w-32 h-32">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <h3 class="my-3 text-[#E3CCAE] text-3xl font-semibold">Speed</h3>
              <div class="space-y-1 text-[#D9D9D9] text-base font-extralight text-center">
                <p>Fast feedback and delivery times as well as quick load times without lag.</p>
              </div>
            </div>
            <div class="flex flex-col items-center p-4 transition ease-in-out hover:scale-110 duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#D9D9D9" class="w-32 h-32">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
              <h3 class="my-3 text-[#E3CCAE] text-3xl font-semibold">Adaptability</h3>
              <div class="space-y-1 text-[#D9D9D9] text-base font-extralight text-center">
                <p>Willingness to learn new technologies and tools as needed as well as the ability to adjust to changing project requirements or emerging trends.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='container mx-auto grid justify-center sm:grid-cols-1 lg:grid-cols-3 pt-12'>
            <div className='flex flex-col items-center'>
              <p className='lg:text-left text-[#D9D9D9] text-3xl p-6 sm:text-center'>
                I’m a passionate Web and Software Developer situated in Philadelphia, PA. 
                With an affinity for clean code, elegant design, and seamless user experiences, I thrive on turning complex problems into polished solutions. 
                Whether it’s crafting pixel-perfect interfaces or architecting robust backends, I’m your go-to developer. 
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <img className=' h-73 rounded-full p-6' src={ me } alt='Me'/>
            </div>
            <div className='flex flex-col items-center'> 

              <div class="w-5/6 bg-[#D9D9D9] h-6 mb-4 rounded-md">            
                <motion.div
                style={{ originX: 0 }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 2, delay: 0.2 }}
                >
                  <div class="bg-[#BB9457] h-6 w-10/12 rounded-md">
                    <div className='bg-[#99582A] h-6 w-24 text-center text-white text-xs font-bold rounded-md'>HTML</div>
                  </div>
                </motion.div>
              </div>
              <div class="w-5/6 bg-[#D9D9D9] h-6 my-4 rounded-md">            
                <motion.div
                style={{ originX: 0 }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 2, delay: 0.2 }}
                >
                  <div class="bg-[#BB9457] h-6 w-9/12 rounded-md">
                    <div className='bg-[#99582A] h-6 w-24 text-center text-white text-xs font-bold rounded-md'>CSS</div>
                  </div>
                </motion.div>
              </div>
              <div class="w-5/6 bg-[#D9D9D9] h-6 my-4 rounded-md">            
                <motion.div
                style={{ originX: 0 }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 2, delay: 0.2 }}
                >
                  <div class="bg-[#BB9457] h-6 w-10/12 rounded-md">
                    <div className='bg-[#99582A] h-6 w-24 text-center text-white text-xs font-bold rounded-md'>PYTHON</div>
                  </div>
                </motion.div>
              </div>
              <div class="w-5/6 bg-[#D9D9D9] h-6 my-4 rounded-md">            
                <motion.div
                style={{ originX: 0 }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 2, delay: 0.2 }}
                >
                  <div class="bg-[#BB9457] h-6 w-8/12 rounded-md">
                    <div className='bg-[#99582A] h-6 w-24 text-center text-white text-xs font-bold rounded-md'>C#</div>
                  </div>
                </motion.div>
              </div>
              <div class="w-5/6 bg-[#D9D9D9] h-6 my-4 rounded-md">            
                <motion.div
                style={{ originX: 0 }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 2, delay: 0.2 }}
                >
                  <div class="bg-[#BB9457] h-6 w-9/12 rounded-md">
                    <div className='bg-[#99582A] h-6 w-24 text-center text-white text-xs font-bold rounded-md'>UNITY</div>
                  </div>
                </motion.div>
              </div>
              <div class="w-5/6 bg-[#D9D9D9] h-6 my-4 rounded-md">            
                <motion.div
                style={{ originX: 0 }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 2, delay: 0.2 }}
                >
                  <div class="bg-[#BB9457] h-6 w-8/12 rounded-md">
                    <div className='bg-[#99582A] h-6 w-24 text-center text-white text-xs font-bold rounded-md'>JAVA</div>
                  </div>
                </motion.div>
              </div>
              <div class="w-5/6 bg-[#D9D9D9] h-6 my-4 rounded-md">            
                <motion.div
                style={{ originX: 0 }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 2, delay: 0.2 }}
                >
                  <div class="bg-[#BB9457] h-6 w-7/12 rounded-md">
                    <div className='bg-[#99582A] h-6 w-24 text-center text-white text-xs font-bold rounded-md'>JAVASCRIPT</div>
                  </div>
                </motion.div>
              </div>
              <div class="w-5/6 bg-[#D9D9D9] h-6 my-4 rounded-md">            
                <motion.div
                style={{ originX: 0 }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 2, delay: 0.2 }}
                >
                  <div class="bg-[#BB9457] h-6 w-6/12 rounded-md">
                    <div className='bg-[#99582A] h-6 w-24 text-center text-white text-xs font-bold rounded-md'>UI DESIGN</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      <div className='h-11'></div>
      <div class="static"></div>
    </div>
  )
}

export default About;