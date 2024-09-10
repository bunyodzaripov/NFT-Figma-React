import React from 'react'
import joinPhoto from '../../images/join.png'
import convert from '../../images/convert.svg'

const Index = () => {
    return (
        <section className='py-[40px] text-[#fff]'>
            <div className="container m-auto  px-[30px]">
                <div className='p-[20px] md:flex items-center justify-evenly gap-[30px] bg-[#3B3B3B] py-[40px] px-[30px] rounded-[20px] xl:p-[60px] gap-[80px] min-h-[430px]'>
                    <div className='min-w-[315px] min-h-[255px] rounded-[30px] overflow-hidden bg-slate-300'>
                        <img className='w-full object-cover  xl:w-[425px]' src={joinPhoto} alt="photo" />
                    </div>
                    <div className='mt-[30px]'>
                        <div>
                            <h2 className='mb-[10px] text-[28px] leading-[39.2px] font-[600]'>Join our weekly digest</h2>
                            <p className='text-[16px] leading-[22.8px] '>Get exclusive promotions & updates straight to your inbox.</p>
                        </div>
                        <div className='w-full xl:relative'>
                            <input type="text" placeholder='Enter Your Email Address' className=' w-full min-w-[300px] px-[20px] py-[12px] outline-none rounded-[20px] text-[#2B2B2B] mt-[16px] mb-[16px]  placeholder:text-[#2B2B2B] xl:min-h-[60px]' />
                            <button className=' flex items-center justify-center gap-[12px] w-full min-w-[240px] px-[20px] py-[12px] bg-[#A259FF] rounded-[20px] xl:absolute w-full top-[16px] right-0 max-w-[20px] min-h-[60px]'>
                                <img src={convert} alt="convert photo" />
                                <span className='font-[600]'>Subscribe</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index