import Image from "next/image";
import styles from "@/styles/Home.module.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function page() {

    return (

        <>
        <div className={styles.description}>
          
          <div style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>

            
          </div>
          
        </div>

        <div className={styles.center}>
         
         <div>
            <h1>Error page</h1>
         </div>

        </div>

        <div className={styles.grid}>



        </div>
     </>
    )
}
