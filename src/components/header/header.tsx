import React from "react"
import styles from './Header.module.css'
import Image from "next/image";
import Link from "next/link";


interface Props {

}

const Header: StorefrontFunctionComponent<Props> = ({
}) => {
    return (
        <>
            <div className={styles.headerContainer}>



                <div className={styles.logoWrapper}>
                    <Link href="/">
                        <div className={styles.logo}
                        >
                            <Image
                                src="/logo.png"
                                alt="Vercel Logo"
                                width={40}
                                height={40}
                                priority
                            />
                            <p>My Meteo</p>
                        </div>
                    </Link>
                </div>

                <div className={styles.navBar}>
                    <nav>

                        <ul >
                            <li><Link href={"/about"}>About Us</Link></li>
                            <li><Link href={"/info"}>Info</Link></li>
                        </ul>

                    </nav>
                </div>



            </div>

        </>
    )
}

export default Header