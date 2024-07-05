import { getCoordFromCity, getWeather } from "@/lib/meteo";
import styles from "@/styles/Home.module.css";
import Router from "next/router";

export default function Home({ data }: any) {

  const handleSubmit = (e: any) => {

    e.preventDefault()
    const formData = new FormData(e.currentTarget);

    const city = formData.get("city")

    Router.push(`/?city=${city}`)

  }

  return (

    <>

      <div className={styles.description}>
        <div className={styles.searchForm}>

          <div style={{ width: "15px" }}></div>
          <div >

            <form onSubmit={handleSubmit}>

              <input type="text" name="city" placeholder="Insert your city" />
              <button type="submit">Search</button>

            </form>
          </div>
        </div>
        
      </div>

      <div className={styles.center}>
       

      </div>

      <div className={styles.grid}>



      </div>
    </>
  );
}



// This gets called on every request
export async function getServerSideProps({ query }: any) {

  let data
  let error
  try {

    if (!query?.city) {
      query = {
        city: "roma"
      }
    }

    let coordinates = await getCoordFromCity(query.city);


    data = await getWeather(coordinates.results[0]?.latitude?.toString(), coordinates.results[0]?.longitude?.toString())

  } catch (error) {

    error = error
    return {
      redirect: {
        destination: '/500',
        permanent: false,
      }

    };

  }

  // Pass data to the page via props
  return {
    props: { data }
  }
}


