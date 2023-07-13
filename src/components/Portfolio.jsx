import React, { useEffect, useState } from 'react'
import data from '../assets/data/PortfolioData'
import Model from './Model'

export default function Portfolio() {
  const [portfolios, setPortfolios] = useState(data)
  const [selectTab, setSelectTab] = useState('all')
  const [showModel, setShowModel] = useState(false)
  const [activeID, setActiveID] = useState(null)

  const showModelHandler = id => {
    setShowModel(true)
    setActiveID(id)
  }

  useEffect(() => {
    if (selectTab === 'all') {
      setPortfolios(data)
    }
    if (selectTab === 'Mern') {
      const filterData = data.filter(item => item.category === 'MERN')
      setPortfolios(filterData)
    }
    if (selectTab === 'React') {
      const filterData = data.filter(item => item.category === 'React')
      setPortfolios(filterData)
    }
    if (selectTab === 'Java') {
      const filterData = data.filter(item => item.category === 'Java')
      setPortfolios(filterData)
    }
  }, [selectTab])

  return (
    <section id='portfolio'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='text-smallTextColor font-[800] text-[2.4rem]'>Recent Projects👀</h2>
        </div>
        <p className='max-w-[600px] mx-auto mt-3 text-center leading-7 text-smallTextColor font-[500] text-[16px]'>
        Accomplished a range of challenging programming projects, demonstrating my proficiency in various languages and technologies.<br/>These are some example projects I have done.
        </p>

        <div className='flex gap-3 justify-center mt-5'>
          <button onClick={() => setSelectTab('all')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>All</button>
          <button onClick={() => setSelectTab('Mern')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>Mern</button>
          <button onClick={() => setSelectTab('React')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>React</button>
          <button onClick={() => setSelectTab('Java')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>Java</button>
        </div>

        <div className='flex gap-4 items-center flex-wrap mt-12'>
          {
            portfolios?.map((portfolio, index) => (
              <div data-aos="fade-zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000" className='group max-w-full relative md:w-[31.8%] sm:w-[48.5%] z-[1]'>
                <figure>
                  <img className='rounded-[8px]' src={portfolio.imgUrl} alt='' />
                </figure>

                <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] rounded-[8px] hidden group-hover:block'>
                  <div className='w-full h-full flex items-center justify-center'>
                    <button onClick={() => showModelHandler(portfolio.id)} className='bg-headingColor hover:bg-smallTextColor text-white px-4 py-2 rounded-[8px] font-[500] ease-in duration-200'>More Details</button>
                  </div>
                </div>

              </div>

            ))
          }
        </div>
      </div>

      {
        showModel && <Model setShowModel={setShowModel} activeID={activeID} />
      }
    </section>
  )
}
