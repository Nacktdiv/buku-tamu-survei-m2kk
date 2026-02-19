import {HiBars4} from 'react-icons/hi2'
import logoMan from './assets/logo_man2kotakediri.png'
import { useState } from 'react'

function Navbar () {
    const [menu, setMenu] = useState(false)
    return(
        <nav id="navbar" className="z-1 fixed w-full flex items-center justify-between text-white h-18 py-5 px-2 ">
            <div id="background" className='absolute left-0 w-full h-full bg-primary -z-1 opacity-80'></div>
            <div id="logo" className="md:h-full h-[60%]">
                <img src={logoMan} alt="Logo MAN2 Kota Kediri" className="w-full h-full object-contain"/>
            </div>
            <button 
                onClick={() => setMenu(!menu)}
                className='text-3xl'>
                <HiBars4/>
            </button>
            <ul className={`

                absolute right-0 top-full w-48 
                flex flex-col gap-1 p-2
                 shadow-soft-ui 
                transition-all duration-300 transform
                ${menu ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"}
            `}>
                <div className='absolute w-full h-full inset-0 bg-primary opacity-80 -z-1'></div>
                <li className="px-4 hover:bg-primary-light rounded-lg cursor-pointer transition-colors text-2xl">Home</li>
                <li className="px-4 hover:bg-primary-light rounded-lg cursor-pointer transition-colors text-2xl">Statistik</li>
                <li className="px-4 hover:bg-primary-light rounded-lg cursor-pointer transition-colors text-2xl">Buku Tamu</li>
                <div className="h-[1px] bg-gray-100 my-1"></div> 
                <li className="px-4 hover:bg-primary-light rounded-lg cursor-pointer transition-colors text-2xl text-red-500">Bantuan</li>
            </ul>
        </nav>
    )
}

export default Navbar