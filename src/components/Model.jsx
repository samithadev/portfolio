import React from 'react'
import portfolios from '../assets/data/PortfolioData'

export default function Model({activeID, setShowModel}) {

    const portfolio = portfolios.find(portfolio=> portfolio.id=== activeID)

  return (
    <div className='w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40'>
        <div className='w-11/12 md:max-w-[600px] md:w-full mt-[30px]  absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5 '>
            <div>
                <figure>
                    <img className='rounded-[8px] w-[200px]' src={portfolio.imgUrl} alt=''/>
                </figure>
            </div>

            <div>
                <h2 className='text-2xl text-headingColor font-[700] my-5'>{portfolio.title}</h2>
            </div>

            <div>
                <h2 className='text-[15px] leading-7 text-smallTextColor'>{portfolio.description}</h2>
            </div>

            <div className='mt-5 flex items-center gap-3 flex-wrap'>
                <h4 className='text-headingColor text-[18px] text-[700]'>
                    Technologies:
                </h4>

                {portfolio.technologies.map((item,index) => (
                    <span key={index} className='bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0'>{item}</span>
                ))}
            </div>

            <div className="flex items-center gap-[30px]">
            <a target='_blank' rel="noreferrer" href={portfolio.siteUrl}>
                <button className='bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300'>
                    Live Site
                </button>
            </a>
            <a target='_blank' rel="noreferrer" href={portfolio.gitUrl}>
            <button className="bg-smallTextColor text-white text-[25px] shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i class="ri-github-fill"></i></button>
            </a>
            </div>

            <button onClick={()=> setShowModel()} className='w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer'>
                &times;
            </button>
            

        </div>
        
    </div>
  )
}
