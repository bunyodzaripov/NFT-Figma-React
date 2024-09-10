import React from 'react'
import { Creators, Trending, Discover, Browse, Info, Mashroom, Works, Join } from '@components'

const Index = () => {
    return (
        <section id='home' className=' mt-[150px]'>
            <Discover />
            <Trending />
            <Creators />
            <Browse />
            <Info />
            <Mashroom />
            <Works />
            <Join />
        </section>
    )
}

export default Index