import styles from "@/styles/Home.module.css";
import Image from "next/image";

import RootLayout from '../components/rootLayout'

import { getCoordFromCity, getWeather } from "@/lib/meteo";
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
      <RootLayout>
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
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/Logo_Reply.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={120}
                height={40}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.description}>
            Elevation: {data.elevation}
          </div>

        </div>

        <div className={styles.grid}>



        </div>
      </RootLayout>
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


