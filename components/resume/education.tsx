import React from 'react'
import Image from 'next/image'

type educationData = {
  schoolImage: string,
  startDate: string,
  endDate: string,
  actual: boolean,
  schoolName: string,
  country: string,
  description: string
};

const ResumeEducation = ({schoolImage, startDate, endDate, actual: boolean = false, schoolName, country, description}: educationData) => {
  return (
    <div>
      <div className="edu-item flex relative mb-12">
        <div className="edu-img w-[128px] h-[68px] flex justify-center items-center p-2 rounded-sm border-[#d1d1d1] border-2">
          <Image 
            src={schoolImage}
            alt='school Image'
            className='object-contain'
            width={128}
            height={68}
          />
        </div>

        <div className="education-content ml-8 w-[100%]">
          <div className='flex justify-between'>
            <h1>{schoolName}</h1>
            <div className='flex flex-col'>
              <h3 className='text-space-mono'>{startDate} - {endDate}</h3>  
              <h3 className='self-end'>{country}</h3>
            </div>
          </div>
          
          <ul className="list-disc list-inside">
            {/* {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))} */}
            <li className='mt-1'>{description}</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default ResumeEducation