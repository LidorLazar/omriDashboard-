'use client'

import {useEffect, useState} from "react";
import {Person, usePersonStore} from "@/store/store";
import Link from "next/link";


export default function History() {

    const [nameData, setNameData] = useState('');
    const fetchAllPeoples = usePersonStore(state => state.fetchAllPeoples)
    const peoples = usePersonStore(state => state.peoples)
    const filterList: Person[] = [...peoples].filter((item) => item.name === nameData)

    useEffect(() => {
        fetchAllPeoples()
    }, [!peoples])

    return (
        <section dir={'rtl'} className={'flex items-center flex-col justify-center w-full mt-24 gap-10'}>
            <Link href={'/'} className={'border-black border-2 w-1/3 text-center rounded-full'}>חזרה</Link>

            <article className={'w-full flex flex-col justify-center items-center gap-5'}>
                <input type="text" className={'border-2 border-black w-1/2'} placeholder={'הכנס שם לקוח'}
                       onChange={(e) => setNameData(e.target.value)}/>
            </article>
            {filterList.length > 0 && filterList.map((item) => <div key={item.id} className={'flex w-full' +
                ' justify-around item-center'}>
                <p>
                    {item.name}

                </p>
                <p>
                    {item.cash}

                </p>
                <p>
                    {item.created}

                </p>

            </div>)}
        </section>
    )
}