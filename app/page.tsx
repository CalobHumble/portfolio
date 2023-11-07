'use client';

import { SiAuth0, SiBun, SiExpo, SiFirebase, SiGraphql, SiNestjs, SiNextdotjs, SiPrisma, SiPython, SiSentry, SiUpwork } from '@icons-pack/react-simple-icons';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { ArrowRight } from '@phosphor-icons/react';

export default function Home() {
  
  return (
    <main>
      <section className='bg-background font-monospace'>
        <div className="grid max-w-screen-xl px-10 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="place-self-center col-span-5 mb-10 lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Hi, I&apos;m Calob</h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">A software engineer from the Midwest, with the power to leverge enterprise-ready tools and elevate your product</p>
            <div className='flex items-center text-center'>
            <Button className='bg-upwork text-slate-800' size='lg' color='primary' onPress={() => window.location.assign('https://www.upwork.com/freelancers/~0164488c5a59ce614e')} startContent={<SiUpwork size={20}/>}>Hire me</Button>
            <Button className='bg-transparent border-1 mx-2 border-white' size='lg' href='#' endContent={<ArrowRight />}><Link href='/projects' color='foreground'>Explore my projects</Link></Button>
            </div>
          </div>
          <div className="grid-cols-5 col-span-5 gap-3 grid lg:mt-0 lg:col-span-5">
            <Button className='bg-transparent border-1 p-10 col-span-2' startContent={<SiNextdotjs />}>
              NextJS
            </Button>
            <Button className='bg-expo border-1 p-10 col-span-3' startContent={<SiExpo />}>
              Expo
            </Button>
            <Button className='bg-transparent border-1 p-10 col-span-3 border-nest text-nest' startContent={<SiNestjs />}>
              NestJS
            </Button>
            <Button className='bg-transparent border-1 p-10 col-span-2' startContent={<SiBun />}>
              Bun
            </Button>
            <Button className='bg-transparent border-1 p-10 col-span-2' startContent={<SiPrisma />}>
              Prisma
            </Button>
            <Button className='bg-transparent border-1 p-10 col-span-3 border-graphql text-graphql' startContent={<SiGraphql />}>
              GraphQL
            </Button>
            <Button className='bg-transparent border-1 p-10 col-span-3 border-firebase text-firebase' startContent={<SiFirebase />}>
              Firebase
            </Button>
            <Button className='bg-transparent border-1 p-10 col-span-2' startContent={<SiAuth0 />}>
              Auth0
            </Button>
            <Button className='bg-transparent border-1 p-10 col-span-2' startContent={<SiSentry />}>
              Sentry
            </Button>
            <Button className='bg-transparent border-1 p-10 col-span-3 border-python text-python' startContent={<SiPython />}>
              Python
            </Button>
          </div>                
        </div>
      </section>
    </main>
  )
}
