"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { skills } from '@/data/resume/skills'

const ResumeSkills = () => {
  const skillCategories = ['all', 'frontend', 'backend', 'testing', 'devops', 'tools'];
  const [filter, setFilter] = useState('all');

  const filteredSkills = filter === 'all'
    ? skills
    : skills.filter(skill => skill.category === filter);

  return (
    <div>

      <div  className="filter-skills flex">
        {skillCategories.map(cat => (
          
            <button key={cat} onClick={() => setFilter(cat)} 
              className={`bg-[#f1f1f1] cursor-pointer p-2 rounded-sm mr-3 border-2 transition-all duration-150 ${
                filter === cat ? 'border-indigo-500 bg-indigo-100' : 'border-gray-300'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          
        ))}
      </div>

      <div className="skill py-4 grid grid-cols-7 gap-4 w-[600px]">

        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="skill-item p-1 rounded-sm inline-block border-2 bg-green-50 border-green-500"
          >
            <Image src={skill.src} alt={skill.name} width={62} height={62} />
          </div>
        ))}

      </div>
    </div>
  )
}

export default ResumeSkills