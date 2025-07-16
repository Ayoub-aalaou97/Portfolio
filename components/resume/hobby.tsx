import React from 'react'
import Image from 'next/image'

const ResumeHobby = () => {
  return (
    <div className='grid grid-cols-4 gap-4 w-[300px] mb-4'>
      <div className="skill-item p-1 rounded-sm inline-block border-2 bg-[#f1f1f1]">
        <Image src="/img/resume/traveler.svg" alt="Travel" width={62} height={62} />
      </div>
      <div className="skill-item p-1 rounded-sm inline-block border-2 bg-[#f1f1f1]">
        <Image src="/img/resume/soccer_ball.svg" alt="Football" width={62} height={62} />
      </div>
      <div className="skill-item p-1 rounded-sm inline-block border-2 bg-[#f1f1f1]">
        <Image src="/img/resume/swimming.svg" alt="Swimming" width={62} height={62} />
      </div>
      <div className="skill-item p-1 rounded-sm inline-block border-2 bg-[#f1f1f1]">
        <Image src="/img/resume/paint_palette.svg" alt="Drawing" width={62} height={62} />
      </div>
    </div>
  )
}

export default ResumeHobby