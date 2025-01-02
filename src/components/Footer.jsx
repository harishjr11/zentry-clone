import React from 'react'
import { FaDiscord, FaGithub } from 'react-icons/fa'

const links = [
    {href : "https://discord.gg/uw8YpEv8ZX", icon : <FaDiscord />},
    {href : "https://github.com/harishjr11", icon : <FaGithub />},

]

const Footer = () => {
  return (
    <footer className='w-screen bg-voilet-300 py-4 text-black'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
            <p className='text-center text-sm md:text-left ml-8'> &copy;No One 2024. No rights reserved</p>

            <div className='flex justify-center gap-4 md:justify-start'>
                {links.map((link) => (
                    <a key={link} href={link.href} target='_blank' rel='noopener noreferrer' 
                    className='text-black transition-colors duratio-500 ease-in-out hover:text-white'>
                        {link.icon}
                    </a>
                ))}
            </div>
            <a href='#privacy-policy' className='text-center text-sm hover:underline md:text-right mr-8'>Privacy Policy</a>
        </div>
    </footer>
  )
}

export default Footer