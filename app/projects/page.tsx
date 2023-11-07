'use client';

import { SiAndroid, SiDocker, SiFacebook, SiGooglecloud, SiGraphql, SiIos, SiNestjs, SiNextdotjs, SiReact, SiTypescript } from '@icons-pack/react-simple-icons';
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import { Laptop, Link } from '@phosphor-icons/react';

export default function Home() {
  
  return (
    <main>
      <section className='bg-background font-monospace'>
        <div className="grid max-w-screen-xl px-10 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="place-self-center col-span-5 mb-10 lg:col-span-7">
            <h1 className="max-w-2xl text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Bella Football</h1>
            <div className='flex flex-row flex-wrap gap-2 my-5'>
              [<SiIos /><SiAndroid /><Laptop size={24} />] [<SiTypescript />]  [<SiDocker /><SiGooglecloud /><SiNestjs /><SiGraphql />] [<SiNextdotjs /><SiReact /><SiFacebook />]
            </div>
            <p className='text-lg'>Title: Lead Engineer</p>
            <br/>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">A multiplatform SaaS communication and organization platform, targeted at professional soccer team managers.</p>
            <div className='flex items-center text-center'>
            <Button size='lg' color='primary' onPress={() => window.location.assign('https://bella.football')} startContent={<Link size={20}/>}>Project Website</Button>
            </div>
          </div>
          <div className="col-span-5 gap-3 grid lg:mt-0">
            <Image src='/screenshots/bella.png' isBlurred={true} alt='Screenshot of the Bella website and mobile app'/>
          </div>                
        </div>
      </section>
    </main>
  )
}
