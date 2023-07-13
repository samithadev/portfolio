import React from 'react'
import hand from '../assets/Waving Hand Emoji [Free Download IOS Emojis].png'
import me from '../assets/me.jpeg'
import SpinText from '../SpinText'
import react from '../assets/react.png'
import mongo from '../assets/mongo.png'
import express from '../assets/express.png'
import node from '../assets/node.png'
import sql from '../assets/sql.png'
import java from '../assets/java.png'

export default function Hero() {
    return (
        <section id='about'>
            <div className="container">
                <div className='md:flex'>
                    {/*===Hero Left Content===*/}
                    <div className='w-full md:basis-1/2'>
                        <div className='flex items-center gap-[10px]'>
                            <h5
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                className='text-headingColor font-[600] text-[20px]'>Hello Welocome</h5>

                            <img data-aos="fade-right"
                                data-aos-duration="1500" src={hand} alt="My Image" style={{ width: '30px', height: 'auto' }} />
                        </div>

                        <h1
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            className='text-headingColor font-[800] text-[2.5rem] leading-[55px] mt-5'>
                            Samitha Wickramasinghe <br />Full Stack Developer
                        </h1>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="1800"
                            className='flex items-center gap-6 mt-5'>
                            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/samitha-wickramasinghe/">
                                <button className='flex items-center gap-[10px] border-2 border-solid font-[600] max-h-[40px] px-3 py-5 rounded-md bg-primaryColor hover:bg-smallTextColor text-white ease-in duration-300'><i class="ri-mail-send-line"></i>Hire Me</button>
                            </a>
                            <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1rfhqM5Wq2m9re9d1XL421lZ2P4VGItQW/view?usp=sharing" className='flex items-center gap-[10px] font-[600] border-b-2 border-solid border-smallTextColor text-smallTextColor ease-in duration-300 cursor-pointer hover:bg-lightblue'><i class="ri-article-line"></i>My CV</a>

                        </div>

                        <p
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            className='flex gap-3 font-[500] text-[16px] leading-7 mt-10 text-smallTextColor '>
                            I am a passionate Software Engineering undergraduate at SLIIT, driven by my dedication to solving complex problems through coding. In addition to being a full-time developer, I am also an enthusiastic traveler, always seeking new adventures and experiences.
                        </p>

                        <div className='flex items-center mt-10 gap-5'>
                            <span className='text-smallTextColor font-[600] text-[20px]'>Follow Me:</span>
                            <span className='text-smallTextColor font-[600] text-[25px]'><a target='_blank' rel="noreferrer" href="https://github.com/samithadev"><i class="ri-github-fill"></i></a></span>
                            <span className='text-smallTextColor font-[600] text-[25px]'><a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/samitha-wickramasinghe/"><i class="ri-linkedin-box-fill"></i></a></span>
                            <span className='text-smallTextColor font-[600] text-[25px]'><a target='_blank' rel="noreferrer" href="https://stackoverflow.com/users/17325052/samitha"><i class="ri-stack-overflow-line"></i></a></span>
                        </div>

                        <div className='flex items-center mt-10 gap-6 w-[40px] md:w-[100px]'>
                            <span className='text-smallTextColor font-[600] text-[20px]'>Stack:</span>
                            <img src={react} alt="react" style={{ width: '40px', height: 'auto' }} />
                            <img src={mongo} alt="mongo" style={{ width: '60px', height: 'auto' }} />
                            <img src={express} alt="express" style={{ width: '60px', height: 'auto' }} />
                            <img src={node} alt="node" style={{ width: '60px', height: 'auto' }} />
                        
                        </div>


                    </div>

                    {/*===Hero Right Content===*/}
                    <div className='basis-1/2 md:mt-[-20px] sm:mt-[30px]'>
                        <figure className='flex items-center justify-center'>
                            <img data-aos="fade-left"
                                data-aos-duration="1500" src={me} alt="me" style={{ width: '600px', height: 'auto' }} />
                        </figure>
                        <div className='flex mt-[-200px]'>
                            <SpinText />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
