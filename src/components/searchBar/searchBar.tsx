import Router from "next/router";
import styles from './searchBar.module.css';


interface Props {

}

const SearchBar: StorefrontFunctionComponent<Props> = ({
}) => {


    const handleSubmit = (e: any) => {

        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const city = formData.get("city")
        Router.push(`/?city=${city}`)
    
      }

    return (
        <>

        
            <div className={styles.searchForm}>

                <div className={styles.searchBar}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="city" placeholder="Insert your city" />
                        <button type="submit" className={styles.searchBtn}>Search</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default SearchBar