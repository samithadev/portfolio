import React, {useRef,useEffect} from 'react'

export default function Header() {

    const headerRef = useRef(null)
    const menuRef = useRef(null)

    const stickyHeaderFunc = ()=>{
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky_header')
            }
            else{
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }

    useEffect(()=>{
        stickyHeaderFunc()

        return window.removeEventListener('scroll', stickyHeaderFunc)
    },[])

    const handleClick = e =>{
        e.preventDefault();

        const targetAttr = e.target.getAttribute("href")
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            top: location - 80,
            left:0,
        })
    }

    const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')

    return (
            <header ref={headerRef} className='w-full h-[80px] leading-[80px] flex items-center'>
                <div className="container">
                    <div className='flex items-center justify-between'>
                        {/*===logo===*/}
                        <div className='flex items-center gap-[10px]'>
                            <span className='w-[35px] h-[35px] bg-primaryColor text-white rounded-full flex items-center justify-center'>S</span>
                            <div className='leading-[20px]'>
                                <h1 className='text-xl text-smallTextColor font-[700]'>Samitha</h1>
                                <p className='text-[16px] text-smallTextColor font-[500]'>Personal</p>
                            </div>
                        </div>

                        {/*===Menu===*/}
                        <div className='Menu' ref={menuRef} onClick={toggleMenu}>
                            <ul className='flex item-center gap-[20px]'>
                                <li><a onClick={handleClick} className='text-smallTextColor font-[600] hover:border-b-2 border-smallTextColor' href="#about">About</a></li>
                                <li><a onClick={handleClick} className='text-smallTextColor font-[600] hover:border-b-2 border-smallTextColor' href="#portfolio">Portfolio</a></li>
                                <li><a onClick={handleClick} className='text-smallTextColor font-[600] hover:border-b-2 border-smallTextColor' href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className='flex item-center gap-[10px]'>
                            <button onClick={handleClick} href="#contact" className='flex items-center gap-[10px] border-2 border-solid font-[600] text-smallTextColor max-h-[40px] px-3 rounded-md hover:bg-smallTextColor hover:text-white ease-in duration-300'>
                                <i class="ri-send-plane-fill"></i>Let's Talk
                            </button>

                            <span onClick={toggleMenu} className='text-2xl text-smallTextColor md:hidden'><i class="ri-bar-chart-horizontal-line"></i></span>
                        </div>

                    </div>
                </div>
            </header>
    )
}
