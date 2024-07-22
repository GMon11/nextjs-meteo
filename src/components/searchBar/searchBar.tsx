import Image from "next/image";
import Router from "next/router";
import styles from './searchBar.module.css';
import { revalidatePath } from 'next/cache'

interface Props {
    redirectPage: string
}

const SearchBar: StorefrontFunctionComponent<Props> = ({
    redirectPage = ''
}) => {

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const city = formData.get("city")
        //revalidatePath(`/`, "page")
        Router.push(`/${redirectPage}?city=${city}`)
    }

    return (
        <>


            <div className={styles.searchForm}>

                <div className={styles.searchBar}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="city" placeholder="Insert your city" />
                        <button type="submit" className={styles.searchBtn}>
                            <Image alt="search" src="/searchIcon.svg" width={20} height={20} />
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default SearchBar