'use client'

import { usePersonStore } from "@/store/store";
import Link from "next/link";
import {useEffect} from "react";

export default function Home() {

     const peoples = usePersonStore(state => state.peoples)

    useEffect(() => {
        // Update the document title using the browser API
        console.log(peoples)


    },[peoples]);

    console.log(peoples)

     return (
        <section dir={'rtl'} className={'w-full h-screen flex flex-col items-center justify-center gap-10'}>

            <article className={'flex justify-evenly w-full text-xl text-center font-bold'}>
                <div>
                    <p>הוצאות</p>
                    <p>0</p>
                </div>
                <div>
                    <p>הכנסות</p>
                    <p>0</p>
                </div>
            </article>
            <p className={'text-center text-4xl font-bold w-1/3  border-2 border-black'}><Link href={'/add'}>+</Link></p>
          {/*<article>*/}
          {/*    {peoples.map((item, index) => <div key={index}>{item.name}*/}
          {/*        {item.cash}*/}
          {/*        {item.phone}*/}
          {/*        {item.time}*/}
          {/*        {item.getMoney}*/}
          {/*    </div>)}*/}

          {/*</article>*/}

        </section>
    )
}
