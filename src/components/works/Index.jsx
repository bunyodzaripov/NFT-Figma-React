import React from 'react'
import { works } from '../../db'

const Index = () => {
    return (
        <section className='text-white mt-[40px]'>
            <div className="container m-auto  px-[30px]">
                <div className='md:max-w-[540px]'>
                    <h1 className='text-[28px] font-semibold leading-[39.2px] mb-[10px] md:text-[38px] leading-[45.6px] xl:text-[67px] leading-[73.7px] '>How it works</h1>
                    <p className='text-[16px] leading-[22.4px] font-[400] text-[#ffffffd5] xl:text-[22px] leading-[35.2px]'>Find out how to get started</p>
                </div>
                <div className='grid grid-cols-1 gap-[20px] mt-[60px] sm:grid-cols-3'>
                    {
                        works.map(item => {
                            return <div key={item.id} className='min-h-[157px] bg-[#3B3B3B] p-[20px] flex items-center justify-center gap-[20px] rounded-[20px] sm:flex-col text-center md:max-w-[330px] '>
                                <div className='w-full max-w-[100px] h-[100px] rounded-full'>
                                    <img className='object-cover w-[200px]' src={item.url} alt="svg photo" />
                                </div>
                                <div>
                                    <h2 className='text-[16px] leading-[22.4px] font-[600] mb-[10px] md:mt-[20px] xl:text-[22.4px] leading-[30.8px]'>{item.title}</h2>
                                    <p className='text-[12px] leading-[16.8px] font-[400] sm:text-center xl:text-[16px] leading-[22.8px]'>{item.description}</p>
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