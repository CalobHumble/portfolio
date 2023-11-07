import { Link } from "@nextui-org/link";
import { Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/navbar";
import { useState } from "react";
import { SiForgejo, SiGithub, SiLinkedin, SiMastodon, SiPenpot, SiUpwork } from '@icons-pack/react-simple-icons'

export default function CalobNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className='bg-background text-foreground'>
      <NavbarContent className='flex sm:hidden'>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}/>
      </NavbarContent>
      <NavbarContent className='hidden sm:flex font-monospace' justify='start'>
        <NavbarItem>
          <Link color='foreground' href='/'>
            Calob
            <pre className="text-zinc-400">{'//'}</pre>
            Dev
            </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='/projects'>Projects<pre className="text-zinc-400">{'//'}</pre>Tech</Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link color='foreground' href='/projects'>Contact</Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent className='hidden sm:flex gap-4' justify='end'>
        <NavbarItem>
          <Link className='px-1 text-zinc-400' color='foreground' href='https://github.com/CalobHumble'>
            <SiGithub size={20} />
          </Link>
          <Link className='px-1 text-zinc-400' color='foreground' href='https://infosec.exchange/@humbleproblems'>
            <SiMastodon size={20} />
          </Link>
          <Link className='px-1 text-zinc-400' color='foreground' href='https://www.linkedin.com/in/calob-humble-a95822243/'>
            <SiLinkedin size={20} />
          </Link>
          <Link className='px-1 text-zinc-400' color='foreground' href='https://www.upwork.com/freelancers/~0164488c5a59ce614e'>
            <SiUpwork size={20} />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className='font-monospace'>
        <NavbarMenuItem>
          <Link color='foreground' className='w-full' href='/' size='lg'>Calob<pre>{'//'}</pre>Dev</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color='foreground' className='w-full' href='/projects' size='lg'>Projects<pre>{'//'}</pre>Tech</Link>
        </NavbarMenuItem>
        {/* <NavbarMenuItem>
          <Link color='foreground' className='w-full' href='/contact' size='lg'>Contact</Link>
        </NavbarMenuItem> */}
      </NavbarMenu>
    </Navbar>
  );
}