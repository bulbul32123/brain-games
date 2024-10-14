import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center'>
            <h1>Numbers Game</h1>
            <Link to='/numbers'>Open</Link>
            <h1 className='mt-20'>StoopsEffect Game</h1>
            <Link to='/stoopsEffect' >Open</Link>
        </div>
    )
}
