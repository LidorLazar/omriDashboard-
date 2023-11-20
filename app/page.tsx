"use client"
import Link from "next/link";
import {usePersonStore} from "@/store/store";
import ListTable from "@/components/listTable";


export default function Home() {

    const peoples = usePersonStore(state => state.peoples)
    const balance = usePersonStore(state => state.balance)
    const resetBalance = usePersonStore(state => state.resetBalance)
    const resetPerson = usePersonStore(state => state.resetPerson)

    const sortedPeople = [...peoples].sort((a, b) => {
        const timeA = a.time.split(':').map(Number);
        const timeB = b.time.split(':').map(Number);

        // Compare hours
        if (timeA[0] !== timeB[0]) {
            return timeA[0] - timeB[0];
        }

        // If hours are the same, compare minutes
        return timeA[1] - timeB[1];
    });

    return (

        <section dir={'rtl'} className={'flex w-full mt-24 flex-col gap-10'}>
            <button onClick={()=> {
                resetBalance(0), resetPerson()
            }}>איפוס יום </button>
            <article className={'flex w-full justify-evenly font-bold text-center text-2xl'}>
                <div>
                    <p>הוצאות</p>
                    <p>0</p>
                </div>

                <div>
                    <p>הכנסות</p>
                    <p>{balance}</p>
                </div>
            </article>

            <article className={'w-full flex justify-center'}>
                <Link href={'/add'}
                      className={'w-1/3 border-2 border-black flex justify-center text-2xl font-bold'}>+</Link>
            </article>
            <article className={'flex flex-col text-center gap-2'}>
                <div className={'flex w-full '}>
                    <p className={'w-1/5'}>שם</p>
                    <p className={'w-1/5'}>טלפון</p>
                    <p className={'w-1/5'}>שעה</p>
                    <p className={'w-1/5'}>סכום</p>
                    <p className={'w-1/5'}>נאסף</p>
                </div>
                {sortedPeople.length > 0 ? sortedPeople.map(item => <ListTable key={item.id} cash={item.cash} id={item.id}
                                                                     name={item.name}
                                                                     time={item.time} phone={item.phone}
                                                                     getMoney={item.getMoney}/>) : <p>אין אנשים </p>}
            </article>
        </section>
    )
}
