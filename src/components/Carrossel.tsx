"use client"
import Image from 'next/image'
import produto1 from  '../image/produto1.jpg'
import produto2 from  '../image/produto2.webp'
import produto3 from  '../image/produto3.jpg'
import produto4 from  '../image/produto4.webp'
import produto5 from  '../image/produto5.jpg'
import produto6 from  '../image/produto6.jpg'
import { useState } from 'react'

const slides = [produto1, produto2, produto3, produto4, produto5, produto6]

export default function Carrossel(){
    
    const [atual, setAtual] = useState(0)

    const prev = ()=> setAtual(atual === 0 ? slides.length -1 : atual -1)
    const next = ()=> setAtual(atual === slides.length -1 ? 0 : atual +1)
    
    return(
        <div className='max-w-lg'>
            <div className='overflow-hidden relative'>
                <div className='flex transition-transform ease-out duration-500' style={{transform: `translatex(-${atual * 100}%)`}}>
                    {slides.map((s, i)=>(
                        <Image key={i} src={s} alt=''/>
                    ))}
                </div>
                <div className='absolute inset-0 flex items-center justify-between p-4'>
                    <button className='text-3xl font-black p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' onClick={prev}>{'<'}</button>
                    <button className='text-3xl font-black p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' onClick={next}>{'>'}</button>
                </div>
            </div>
        </div>
    )
}