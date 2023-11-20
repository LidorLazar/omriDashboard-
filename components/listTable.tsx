
import {Person, usePersonStore} from "@/store/store";

export default function ListTable({id, name, phone, time, getMoney, cash}: Person) {


    const chaneMoney   = usePersonStore(state => state.changeGetMoney);


    return (
        <section dir={'rtl'} className={`flex w-full `}>
            <div className={`flex w-full justify-evenly ${getMoney === true && 'bg-green-500'}`}>
            <p> {name}</p><p> {phone}</p><p>{time}</p><p>{cash}</p>
                    <input type="checkbox"  onChange={() => chaneMoney(id as number, true)}/>
            </div>
        </section>
    );
}
