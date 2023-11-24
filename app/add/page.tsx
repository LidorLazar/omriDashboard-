'use client'

import { Person } from "@/store/store";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";


export default function AddPage() {


    const [formData, setFormData] = useState<Person>({
        id:5,
        name: '',
        phone: '',
        time: '',
        cash: 0,
        getMoney: false
    });
    const [message, setMessage] = useState(false)

    async function  handlerPerson() {
        axios.post('/api/data/', formData).then((res) => console.log(res.data))
        setMessage(true)

    }


    return (
        <section dir={'rtl'} className={'flex items-center flex-col justify-center w-full mt-24 gap-10'}>

            <Link href={'/'} className={'border-black border-2 w-1/3 text-center rounded-full'}>חזרה</Link>

            <form dir={'rtl'} action="" className={'flex flex-col justify-center items-center'}>
                <label htmlFor="">שם מלא</label>
                <input type="text" className={'border-2 border-black'}
                       onChange={(e) => setFormData({...formData, name: e.target.value})}/>

                <label htmlFor="">טלפון</label>
                <input type="tel" pattern="[0-9]{3}-?[0-9]{3}-?[0-9]{4}" maxLength={10}
                       className={'border-2 border-black'}
                       onChange={(e) => setFormData({...formData, phone: e.target.value})}/>

                <label htmlFor="">שעה</label>
                <input type="time" className={'border-2 border-black'}
                       onChange={(e) => setFormData({...formData, time: e.target.value})}/>

                <label htmlFor="">סכום</label>
                <input type="number" min={0} className={'border-2 border-black'}
                       onChange={(e) => setFormData({...formData, cash: Number(e.target.value)})}/>

            </form>
            {message && <p>התווסף בהצלחה !</p>}
            <button className={'bg-green-500 w-1/3 h-16'} onClick={handlerPerson}>הוסף</button>

        </section>
    )

}