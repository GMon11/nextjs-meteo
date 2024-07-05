import React from "react"
import styles from './Header.module.css'
import Image from "next/image";


interface Props {

}

const Header: StorefrontFunctionComponent<Props> = ({
}) => {
    return (
        <>
            <div className={styles.header}>

                <div >
                    <Image
                        src="/Logo_Reply.svg"
                        alt="Vercel Logo"
                        className={styles.logo}
                        width={120}
                        height={40}
                        priority
                    />
                </div>

            </div>

        </>
    )
}

export default Header