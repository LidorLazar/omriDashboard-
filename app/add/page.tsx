'use client'

import {usePersonStore} from "@/store/store";
import {useState} from "react";
import Link from "next/link";

export default function AddPage(){

    const { peoples, addPerson } = usePersonStore()

    const [name,setName] = useState('')
    const [tel,setTel] = useState('')
    const [cash,setCash] = useState(0)
    const [time,setTime] = useState('')

    function handlerPerson (e:any){
        e.preventDefault()
        addPerson({name:name, phone:tel, cash:cash, time:time, getMoney:false, id:1})
        console.log(peoples)
    }



    return(
        <section dir={'rtl'} className={'flex items-center flex-col justify-center w-full mt-24 gap-10'}>

            <Link href={'/'} className={'border-black border-2 w-1/3 text-center rounded-full'}>חזרה</Link>

            <form dir={'rtl'} action="" className={'flex flex-col justify-center items-center'}>
                <label htmlFor="">שם מלא</label>
                <input type="text" className={'border-2 border-black'} onChange={(e)=>setName(e.target.value)}/>

                <label htmlFor="">טלפון</label>
                <input type="tel" pattern="[0-9]{3}-?[0-9]{3}-?[0-9]{4}" maxLength={10} className={'border-2 border-black'}
                       onChange={(e)=>setTel(e.target.value)}/>

                <label htmlFor="">שעה</label>
                <input type="time" className={'border-2 border-black'} onChange={(e)=>setTime(e.target.value)}/>

                <label htmlFor="">סכום</label>
                <input type="number" min={0} className={'border-2 border-black'} onChange={(e)=>setCash(Number(e.target.value))}/>

            </form>

            <button className={'bg-green-500 w-1/3 h-16'} onClick={handlerPerson}>הוסף</button>

        </section>
    )

}