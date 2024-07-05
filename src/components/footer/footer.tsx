import React from "react"
import styles from './footer.module.css'

interface Props {

}

const Footer: StorefrontFunctionComponent<Props> = ({
}) => {
    return (
        <>
            <div className={styles.footerContainer}>
                <h2>My footer</h2>
            </div>

        </>
    )
}

export default Footer