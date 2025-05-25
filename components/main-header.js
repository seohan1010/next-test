import Link from "next/link";
import logoImg from '../assets/logo.png'
import Image from "next/image";
import MainHeaderBackgroud from './main-haeder-background';

const MainHeader = () => {


return <>
        <MainHeaderBackgroud />
        <header>
                <Link href='/'>
                        NextLevel Food
                        <Image src={logoImg} alt="this is logo!!!"></Image>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link href='/meals'>Browse Meals</Link>
                        </li>
                        <li>
                            <Link href='/community'>Foodies Community</Link>
                        </li>
                    </ul>
                </nav>
        </header>
</>
}

export default MainHeader;