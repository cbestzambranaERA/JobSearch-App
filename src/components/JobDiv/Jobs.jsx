import React from 'react'

//Imported Icons
import {BiTimeFive} from 'react-icons/bi'

//Imported Images
import logo1 from '../../assets/logo (1).png'
import logo2 from '../../assets/logo (2).png'
import logo3 from '../../assets/logo (3).png'
import logo4 from '../../assets/logo (4).png'
import logo5 from '../../assets/logo (5).png'
import logo6 from '../../assets/logo (6).png'
import logo7 from '../../assets/logo (7).png'
import logo8 from '../../assets/logo (8).png'

//For all the jobs, use high order array method Map...
//for this scenario let's list all the jobs into an array called Data...

const Data = [
  {
    id: 1,
    image: logo1,
    title: 'Software Dev',
    time: 'Now',
    location: 'Winsted, CT 06098',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, perspiciatis!',
    company: 'Vacor Leaf Co.'
  },
  {
    id: 2,
    image: logo2,
    title: 'UI Designer',
    time: '12Hrs',
    location: 'Hartford, CT 06101',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, perspiciatis!',
    company: 'Heart DesignX Co.'
  },
  {
    id: 3,
    image: logo3,
    title: 'Software Eng',
    time: '8Hrs',
    location: 'Farmington, CT 06030',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, perspiciatis!',
    company: 'Voters Now Co.'
  },
  {
    id: 4,
    image: logo4,
    title: 'Ui/Ux Designer',
    time: '11Hrs',
    location: 'Arizona',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, perspiciatis!',
    company: 'State Pe Co.'
  },
  {
    id: 5,
    image: logo5,
    title: 'Project Manager',
    time: 'Now',
    location: 'Texas',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, perspiciatis!',
    company: 'Water Banks Co.'
  },
  {
    id: 6,
    image: logo6,
    title: 'Data Scientists',
    time: '4Hrs',
    location: 'California',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, perspiciatis!',
    company: 'Niner Co.'
  },{
    id: 7,
    image: logo7,
    title: 'Lead Developer',
    time: '15Hrs',
    location: 'Florida',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, perspiciatis!',
    company: 'AE Sports Co.'
  },
  {
    id: 8,
    image: logo8,
    title: 'Dev Mentor',
    time: '3 Days',
    location: 'Oklahoma',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, perspiciatis!',
    company: 'Metal Rockers Co.'
  },
]

//Let's map the single company

const Jobs = () => {
  return (
    <div>
      <div className="jobsContainer flex gap-10 justify-center flex-wrap items-center py-10">
        
        

        {/**Mapping the single company */}
        {
          Data.map(({id, image, title, time, location, desc, company}) => {
            return (
              //This will return a single job post based on the ID
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

                <span className='flex justify-between items-center gap-4'>
                  <h1 className='text-[16px] font-semibold text-textColor 
                  group-hover:text-white'>{title}</h1>
                  <span className='flex items-center text-[#ccc} gap-1'>
                    <BiTimeFive />
                    <h6 className='text-[#ccc]'>{time}</h6>
                  </span>
                </span>
                <h6 className='text-[#ccc] text-[13px]'>{location}</h6>

                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                  {desc}
                </p>

                <div className='company flex items-center gap-2'>
                  <img src={image} alt="Company Logo" className='w-[10%]' />
                  <span className='text-[14px] py-[1rem] block group-hover:text-white'>
                    {company}</span>
                </div>

                <button className='border-[2px] rounded-[10px] block p-[10px] w-full 
                text-[14px] font-semibold text-textColor hover:bg-white 
                group-hover/item:text-textColor'>
                  Apply Now
                </button>

              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Jobs