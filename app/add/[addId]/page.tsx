'use client'
import Link from "next/link";
import {useEffect, useState} from "react";
import axios from "axios";
import { redirect } from 'next/navigation'


interface Props {
    params: { addId: string }
}

export default function AddId({params}:Props){

    const [editPerson, setEditPerson] = useState([])
    const [newCash, setNewCash] = useState(0)

    useEffect(() => {
        try{
            // @ts-ignore
            axios.get(`/api/data/${params.addId}`).then((res) => setEditPerson([res.data]))

        }catch{
            redirect('/')
        }

    },[newCash])

    function updateCash (){

        axios.put(`/api/edit/${params.addId}`,{body:newCash}).then((res) => console.log(res.data))
    }


    function deleteFormList (){
        axios.delete(`/api/edit/${params.addId}`).then((res) => console.log(res.data))
        redirect('/')
    }

    return(
        <section dir={'rtl'} className={'w-full h-full flex justify-center mt-24 gap-5 flex-col items-center' }>
            <Link href={'/'} className={'border-black border-2 w-1/3 text-center rounded-full'}>חזרה</Link>

            <article className={'flex-col flex text-center gap-5'}>
                {editPerson.map((item:any) =>
                <div key={item.id}>
                    <p>אתה משנה את הנתנוים ל{item.name}</p>
                </div>
                )}
                <label htmlFor="">שנה סכום</label>
                <input type="number" className={'border-black border-2'} onChange={(e) => setNewCash(Number(e.target.value))}/>
            </article>
            <article className={'flex flex-col w-full items-center gap-5'}>
                <button className={'bg-green-500 w-1/3 h-16'} onClick={updateCash}>עדכן</button>
                <button className={'bg-red-500 w-1/3 h-16'} onClick={deleteFormList}>מחק</button>
            </article>
        </section>
    )
}