'use client';

import Link from "next/link";
import logoImg from '../assets/logo.png'
import Image from "next/image";
import MainHeaderBackgroud from './main-haeder-background';
import NavLink from './nav-link'


// import { usePathname } from "next/navigation";

const MainHeader = () => {

    // const path = usePathname();  `

return <>
        <MainHeaderBackgroud />
        <header>
                <Link href='/'>
                        NextLevel Food
                        {/* <Image src={logoImg} alt="this is logo!!!"></Image> */}
                </Link>
                <nav>
                    <ul>
                        <li>
                            <NavLink href='/meals' >Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href='/community' >Foodies Community</NavLink>
                        </li>
                    
                    </ul>
                </nav>
        </header>
</>
}

export default MainHeader;