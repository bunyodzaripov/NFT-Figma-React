import React from 'react'
import { arts } from '../../db'

const Index = () => {
    return (
        <section id='browse' className='py-[40px]  mt-[60px]'>
            <div className="container m-auto  w-full text-white  px-[30px]">
                <h2 className='text-[28px] leading-[39.2px] font-[600] xl:text-[38px] leading-[45.6px] mb-[40px]'>Browse Categories</h2>
                <div className='flex flex-wrap gap-[20px] items-center justify-center md:grid grid-cols-4 justify-center '>
                    {
                        arts.map(art => {
                            return <div key={art.id} className='min-w-[200px] rounded-[30px] overflow-hidden md:mb-[20px]'>
                                <div className='w-full min-w-[200px] min-h-[142px] rounded-t-[20px]  overflow-hidden md:w-full max-w-[260px] flex items-center justify-center'>
                                    <img src={art.url} className=' min-w-[200px] object-contain md:min-w-[260px] object-cover' alt="photos" />
                                </div>
                                <div className='bg-[#3B3B3B] min-w-[150px] rounded-b-[20px] md:max-w-[260px] min-h-[90px] py-[30px] px-[24px]' >
                                    <h3 className='text-[16px] font-[600] md:text-[22px] leading-[30.8px]'>{art.title}</h3>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Index