import React from "react"
import styles from './footer.module.css'
import Image from "next/image"

interface Props {

}

const Footer: StorefrontFunctionComponent<Props> = ({
}) => {
    return (
        <>
            <div className={styles.footerContainer}>
                <Image alt="reply" src="/Logo_Reply.svg" width={100} height={30} />
            </div>

        </>
    )
}

export default Footer