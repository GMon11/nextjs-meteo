import styles from "@/styles/Home.module.css";


import SearchBar from "@/components/searchBar/searchBar";
import { getCoordFromCity } from "@/lib/meteo";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Suspense, useEffect, useState } from "react";

import 'react-loading-skeleton/dist/skeleton.css'



export default function About({ }: any) {


    const [isLoading, setIsLoading] = useState<any>(false)
    const [coord, setCoord] = useState<any>(undefined)

    if (!isLoading && !coord) {

        setIsLoading(true);

        getCoordFromCity("roma").then((res: any) => {
            setCoord(res);
            setIsLoading(false);
        })
    }

    console.log("Coord -> ", coord);


    if (isLoading) {
        return (
            <section>
                <article className='item'>
                    <div className='item-img'>
                        <Skeleton width={140} height={140} />
                    </div>
                    <h3 className='item-title'><Skeleton count={4} /></h3>
                    <div className='item-info'>
                        <Skeleton width={160} height={20} />
                        <Skeleton width={30} height={20} />
                        <Skeleton width={22} height={22} circle={true} />
                    </div>
                    <Skeleton height={48} count={2} className='skeleton' />
                </article>
            </section>
        );

    }


    return (
        <>

            <div>
                test rendered page
            </div>



        </>
    )
}