import React from 'react';
import visionVault from '../images/vision-vault.PNG';
import reactBudgeter from '../images/react-budgeter.png'; 


function Project(title, madeIn, link, image) {
    this.title = title;
    this.madeIn = madeIn;
    this.link = link;
    this.image = image
};

const projects = [];

const InspirationEngine = new Project(
    "Inspiration Engine", 
    "React & Express", 
    "https://www.codedbykids.com/student-projects?utm_campaign=cbkinternship&utm_source=linkedin&utm_medium=social&utm_content=cbkinternship_SM_VisionVaultProject", 
    visionVault);
const BudgetingApp = new Project(
    "Budgeting App", 
    "React & Tailwind", 
    "https://github.com/BashirHilaly/react-budget-maker",
    reactBudgeter);
const Gaiden = new Project(
    "Gaiden", 
    "Flask & SQLalchemy", 
    "https://github.com/BashirHilaly/Gaiden", 
    "https://beecrowd.io/wp-content/uploads/2022/08/Beecrowd-Agosto-6-02-larger.png");
const GPT2EssayWriter = new Project("GPT2EssayWriter", 
    "Python & Selenium", 
    "https://github.com/BashirHilaly/GPT-2-EssayWriter",
    "https://beecrowd.io/wp-content/uploads/2022/08/Beecrowd-Agosto-6-02-larger.png");
const RoadTo10kHours = new Project("Road To 10k Hours", 
    "Python", 
    "https://github.com/BashirHilaly/Road-To-10k-Hours",
    "https://beecrowd.io/wp-content/uploads/2022/08/Beecrowd-Agosto-6-02-larger.png");

projects.push(InspirationEngine);
projects.push(BudgetingApp);
projects.push(Gaiden);
projects.push(GPT2EssayWriter);
projects.push(RoadTo10kHours);


const Projects = () => {
  return (
    <div className='h-fit bg-[#381E11]'>
        <div className='flex items-center flex-col justify-center text-5xl pt-[5%] text-[#E3CCAE]'>Projects</div>
        <hr class="w-28 h-1 mx-auto mt-4 bg-[#F5971B] border-0 rounded md:my-10"/>

        <div className='container mx-auto text-center grid justify-center sm:grid-cols-1 lg:grid-cols-4 pb-14'>
            {projects.map((project) => (
                <div className='flex flex-col items-center w-80 h-56 group mt-6'>
                    <div style={{backgroundImage: `url(${project.image})`}} className={`w-80 h-56 transition filter group-hover:opacity-0 duration-500 bg-cover bg-center`}>
                    </div>
                    <div className='absolute transition opacity-0 translate-y-4 text-3xl text-[#D9D9D9] group-hover:opacity-100 duration:700'>{ project.title }</div>
                    <div className='absolute transition opacity-0 translate-y-14 text-sm text-[#FB8720] group-hover:opacity-100 duration:700'>{ project.madeIn }</div>
                    <div className='absolute transition opacity-0 translate-y-36 group-hover:opacity-100 duration:700'>
                        <a href={ project.link } class="relative inline-flex transition-all ease-in duration-400 hover:scale-125 items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:from-pink-500 hover:to-orange-400 text-white focus:ring-4 focus:outline-none focus:ring-pink-200">
                            <span class="relative px-5 py-2.5 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                View
                            </span>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Projects;