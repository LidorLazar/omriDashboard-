"use client"
import Link from "next/link";
import {usePersonStore} from "@/store/store";
import ListTable from "@/components/listTable";


export default function Home() {

  const peoples = usePersonStore(state => state.peoples)



  return (

    <section dir={'rtl'} className={'flex w-full mt-24 flex-col gap-10'}>

      <article className={'flex w-full justify-evenly font-bold text-center text-2xl'}>
          <div>
              <p>הוצאות</p>
              <p>0</p>
          </div>

          <div>
              <p>הכנסות</p>
              <p>0</p>
          </div>
      </article>

        <article className={'w-full flex justify-center'}>
            <Link href={'/add'} className={'w-1/3 border-2 border-black flex justify-center text-2xl font-bold'}>+</Link>
        </article>
        <article className={'flex flex-col text-center'}>
            <div className={'flex justify-evenly'}>
                <p>שם</p>
                <p>טלפון</p>
                <p>שעה</p>
                <p>סכום</p>
                <p>נאסף</p>
            </div>
            {peoples.length > 0 ? peoples.map(item => <ListTable key={item.id} cash={item.cash} id={item.id}
                                                                 name={item.name}
                                                                 time={item.time} phone={item.phone}
                                                                 getMoney={item.getMoney}/>) : <p>אין אנשים </p>}
        </article>
    </section>
  )
}
