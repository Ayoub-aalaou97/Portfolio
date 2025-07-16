import React from 'react'
import {Icon} from '@iconify/react';
import Image from "next/image";
import myImg from "@/public/img/myimg_out.png";
import ResumeExperience from "@/components/resume/experience"
import { experiences } from "@/data/resume/experiences"
import ResumeEducation from "@/components/resume/education"
import { educations } from "@/data/resume/educations"
import ResumeSkills from  "@/components/resume/skill"
import ResumeHobby from  "@/components/resume/hobby"

const Resume = () => {
  return (
    <div className='container w-[800px] mx-auto'>
      <div className="resume-info-container grid grid-cols-2 gap-0">

        <div className="resume-info mt-10">
          <h1>Ayoub Aalaou</h1>
          <h3 className='mt-2'>Web Developer</h3>
          <p className='flex items-center mt-2'><Icon icon="heroicons:map-pin-16-solid" width="24" height="24" /> Bremen, Germany</p>
          <div className="social-media flex mt-4">
            <a className="mr-4 bg-[#f1f1f1] p-1 rounded-sm" href="#"><Icon icon="uit:linkedin-alt" width="24" height="24" /></a>
            <a className="mr-4 bg-[#f1f1f1] p-1 rounded-sm" href="#"><Icon icon="mdi:github" width="24" height="24" /></a>
            <a className="mr-4 bg-[#f1f1f1] p-1 rounded-sm" href="#"><Icon icon="famicons:mail-outline" width="24" height="24" /></a>
            <a className="bg-[#f1f1f1] p-1 rounded-sm" href="#"><Icon icon="mdi-light:file" width="24" height="24" /></a>
          </div>
          <h2 className='mt-4'>About me</h2>
          <p>My Name is Ayoub Aalaou I’m developer of mobile and 
            web applications. I learned to codefrom a young age in 
            various programming languages (C, C#, JavaScript). 
            I have created personal project in the different categories (Management, Logo, prototype).
            Also I master the different stages of creating a 
            website and understanding the user's need
          </p>
        </div>
        <div className="resume-Image mt-16">
          <Image 
            src={myImg}
            alt="Ayoub Image"
            width={144}
            height={144}
            className="block mx-auto"
          />
        </div>

      </div>
      {/* start Experience */}
      <section className="experience-container">
        <h1 className='my-4'>Experience</h1>

        {experiences.map((exp, index) => (
                <ResumeExperience key={index} {...exp} />
        ))}
      </section>
      
      {/* Start Education */}
      <section className='education-container'>
        <h1 className='my-4'>Education</h1>
        {educations.map((edu, index) => (
            <ResumeEducation key={index} {...edu} />
        ))}
      </section>

      <section className="skills-container">
        <h1 className='my-4'>Skills</h1>
        <ResumeSkills/>
      </section>

      <section>
        <h1 className='my-4'>Hobby</h1>
        <ResumeHobby />
      </section>

    </div>
  )
}

export default Resume