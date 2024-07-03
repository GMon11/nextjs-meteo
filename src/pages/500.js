import Image from "next/image";
import styles from "@/styles/Home.module.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function page() {

    return (

        <>
           <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          
          <div style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>

            
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
         
         <div>
            <h1>Error page</h1>
         </div>

        </div>

        <div className={styles.grid}>



        </div>
      </main></>
    )
}
