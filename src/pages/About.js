import React, { lazy, useContext, Suspense, useState, useEffect } from 'react'
import blueimage from '../images/pool.jpg'
import redpool from '../images/redpool.jpg'
import purplepool from '../images/purplepool.jpg'
import pinkpool from '../images/pinkpool.jpg'
import greenpool from '../images/greenpool.jpg'

// import Reveal from '../components/Reveal'
import FadeUp from '../components/FadeUp'
import { MyContext } from '../context/ContextProvider';
import { useProgressiveImage } from '../components/Lazyload'


const Reveal = lazy(() => import('../components/Reveal'));
export default function About() {
  const { theme } = useContext(MyContext)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(c => c + 1)
  }, [theme])


  const sendPic = (theme) => {
    switch (theme) {
      case 'red':
        return redpool
        break;
      case 'pink':
        return pinkpool
        break;
      case 'blue':
        return blueimage
        break;
      case 'purple':
        return purplepool
        break;
      case 'green':
        return greenpool
        break;
      default:
        break;
    }
  }

  const loaded = useProgressiveImage(sendPic(theme))

  const bgimage = {
    background: `url(${loaded}) no-repeat center center / cover`
  }

  const i = 0.2;

  return (
    <div className={`about-page relative z-40 md:h-[750px]  text-${theme}-700 flex flex-col-reverse md:flex-row  space-y-5 mt-52 mb-11`}>

      <div className="text pl-3 md:pl-10 pt-6 space-y-6  md:w-1/2  ">


        <div className={`uppercase text-xl text-${theme}-700 font-mono font-light`}>
          <FadeUp delay={i} text='about me' />
        </div>
        <div className="text-4xl sm:text-4xl w-full md:text-6xl font-bold capitalize">
          <FadeUp delay={i} text="Let me introduce myself" />
        </div>
        <p className='text-xl 2xl:text-3xl  w-11/12 md:w-11/12 leading-relaxed font-sans '>
          <FadeUp delay={i + 0.1} text="I am Shahbaz Mehtab" />
          <br />
          <FadeUp delay={i + 0.2} text="A full-stack web designer with over 2yrs of experience in making intuitive interfaces on the web" />

          <br />
          <FadeUp delay={i + 0.2} text="I've made projects on the web, displaying my skills up to the mark.
          I've connected with other developers to make websites for organizations. I worked with over 3 companies in the past to amplify their brand presence and present web-solutions to them.
          " />


        </p>
      </div>

      <div className="image rounded-xl overflow-hidden my-auto mx-4 h-[45vh] sm:h-[70vh] md:h-[80vh] md:w-1/2">
        <Suspense fallback={<div>Loading...</div>}>
          <Reveal count={count} image={
            <img src={sendPic(theme)} />
          } theme={theme} styles={bgimage} />
        </Suspense>
      </div>

    </div>
  )
}
