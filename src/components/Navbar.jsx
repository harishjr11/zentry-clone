import React, { useEffect, useRef, useState } from 'react'
import Button from './button';
import { TiLocationArrow } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

export const Navbar = () => {
    const navContainerRef = useRef(null);
    const navItems = ['Home', 'Vault', 'Prologue', 'About', 'Contact'];

    const [lastScollY, setlastScollY] = useState(0);
    const [isNavVisible, setisNavVisible] = useState(true);

    const {y : currentScrollY}  = useWindowScroll();

    useEffect(() => {
        if(currentScrollY === 0){
            setisNavVisible(true);
            navContainerRef.current.classList.remove('floating-nav');
        }
        else if(currentScrollY > lastScollY){
            setisNavVisible(false);
            navContainerRef.current.classList.add('floating-nav');
        }
        else if(currentScrollY < lastScollY){
            setisNavVisible(true);
            navContainerRef.current.classList.add('floating-nav');
        }
        setlastScollY(currentScrollY, lastScollY);
    }, [currentScrollY])

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity : isNavVisible ? 1 : 0,
            duration : 0.1,
        })
    }, [isNavVisible])

  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16
    border-none transition-all duration-700 sm:inset-x-6'>
        <header className='absolute top-1/2 w-full -translate-y-1/2'>
            <nav className='flex size-full items-center justify-between p-4'>
                <div className='flex items-center gap-7'>
                    <img src="/img/TNxEbg.png" alt="logo" 
                    className='w-10 scale-150' />

                    <Button 
                    id = 'product-button'
                    title= 'Products'
                    rightIcon={<TiLocationArrow />}
                    containerClass= "bg-blue-50 md:flex hidden items-center justify-center gap-1" />
                </div>
                <div className='flex h-full items-center'>
                    <div className='hidden md:block'>
                        {navItems.map((item) => 
                            (
                                <a key = {item} href={`#${item.toLowerCase()}`}
                                className='nav-hover-btn'>{item}</a>
                            ))}
                    </div>
                </div>
            </nav>
        </header>

    </div>
  )
}