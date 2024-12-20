import React, { useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti'

const Tilt = ({ children, className = ''}) => {
  const [transformStyle, settransformStyle] = useState('');
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if(!itemRef.current) return;

    const {left, top, height, width} = itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / width;
    const tiltX = (relativeX - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;
    settransformStyle(newTransform);

  }
  const handleMouseLeave = () => {
    settransformStyle('');
  }
  
  return(
    <div className= {className} ref={itemRef} onMouseMove={handleMouseMove} 
    onMouseLeave={handleMouseLeave} style={{transform : transformStyle}}>
      {children}
    </div>
  )
}

const Card = ({src, title, description, isComingSoon}) => {
  return (
    <div className='relative size-full'>
      <video src={src} loop autoPlay muted
      className='absolute left-0 top-0 size-full object-cover object-center'/>
      <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
        <div>
          <h1 className='bento-title special-font'>{title}</h1>
          {description && (
            <p className='mt-3 max-w-64 text-xs md:text-base'>{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export const Features = () => {
  return (
    <section className='bg-black pb-52'>
      <div className='container mx-auto px-3 md:px-10'>
        <div className='px-5 py-32'>
          <p className='text-blue-50 text-lg font-circular-web'>Into the metagame layer</p>
        
        <p className='text-blue-50 font-circular-web max-w-md text-lg opacity-50'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Atque quasi dolore provident libero doloribus, veritatis 
           doloremquo vero inventore Voluptatum atqprehenderit.</p>
      
      </div>
      <Tilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
        <Card 
        src="videos/feature-1.mp4"
        title = {<>radia<b>n</b>t</>}
        description = "Lorem ipsum dolor sit amimilique ipsam fugg elit. Magnam pariatur molesti quos explicabo blanditiis maxime ducim"
        isComingSoon />
      </Tilt>

      <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
        <Tilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
          <Card 
          src = "videos/feature-2.mp4"
          title= {<>sug<b>m</b>a</>}
          description= "Lorem ipsum dolor sit amimilique lor sit amimiliqueLorem ipsum dolor sit amimilique ipsam  moleipsam  molesti quosimeipsam  molesti quosime, ducim"
          />
        </Tilt>
        <Tilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
          <Card 
          src= "videos/feature-3.mp4"
          title={<>n<b>ex</b>us</>}
          description= "Lorem ipsum dolor sit amimiliqueLorem ipsum dolor sit amimilique ipsam  moleipsam  molesti quosime, ducim"
          />
        </Tilt>
        <Tilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
          <Card 
          src= "videos/feature-4.mp4"
          title={<>az<b>u</b>r</>}
          description= "Lorem ipsum dolor sit amimiliqueLorem ipsum dolor sit amimilique ipsam  moleipsam  molesti quosime, ducim"
          />
        </Tilt>

        <Tilt className='bento-tilt_2'>
          <div className='flex size-full flex-col justify-between bg-voilet-300 p-5'>
            <h1 className='bento-title special-font text-black max-w-64'>
              M<b>o</b>re Co<b>m</b>ing So<b>o</b>n !</h1>
            <TiLocationArrow className='self-end scale-[5] m-5'/>
          </div>
        </Tilt>
        <Tilt className='bento-tilt_2'>
          <video src="videos/feature-5.mp4" 
          loop
          muted 
          autoPlay 
          className='object-cover object-center size-full' 
          />
        </Tilt>
      </div>
      </div>
    </section>
  )
}
