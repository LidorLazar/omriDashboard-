
import {Person, usePersonStore} from "@/store/store";

export default function ListTable({id, name, phone, time, getMoney, cash}: Person) {
    const money = usePersonStore((state) => state.peoples);



    return (
        <section dir={'rtl'} className={`flex w-full  ${getMoney === true && 'bg-green-500'}`}>
            <div className={'flex justify-evenly w-full'}>
                <p> {name}</p><p> {phone}</p><p>{time}</p><p>{cash}</p>
                <input type="checkbox" value={`${getMoney}`}/>
            </div>
        </section>
    );
}
