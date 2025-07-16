import React from 'react'
import Image from 'next/image'

type experienceData = {
  companyImage: string,
  startDate: string,
  endDate: string,
  actual: boolean,
  companyName: string,
  role: string,
  country: string,
  tasks: Array<string>
};

const ResumeExperience = ({companyImage, startDate, endDate, actual: boolean = false, companyName, role, country, tasks}: experienceData) => {
  return (
    <div>
      <div className="exp-item flex relative mb-12">
        <div className="exp-img w-[128px] h-[68px] flex justify-center items-center p-2 rounded-sm border-[#d1d1d1] border-2">
          <Image 
            src={companyImage}
            alt='Company Logo'
            className='object-contain'
            width={128}
            height={68}
          />
        </div>

        <div className="experience-content ml-8">
          <div className='flex justify-between'>
            <h1>{companyName}</h1>
            <h3 className='text-space-mono self-end'>{startDate} - {endDate}</h3>
          </div>
          <div className='flex justify-between'>
            <h3>{role}</h3>
            <h3>{country}</h3>
          </div>
          
          <ul className="list-disc list-inside mt-4">
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default ResumeExperience