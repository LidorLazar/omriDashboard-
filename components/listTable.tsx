import {Person, usePersonStore} from "@/store/store";
import axios from "axios";
import Link from "next/link";

export default function ListTable({id, name, phone, time, getMoney, cash, created}: Person) {

    const chaneMoney = usePersonStore(state => state.changeGetMoney);
    let balance = usePersonStore(state => state.balance);

    function handlerChangeGetMoney(param: boolean) {
        axios.put(`api/data/${id}`, {body: param}).then((res) => res.data)
    }

    function handlerUpdateBalance(param: number) {
        axios.put(`api/balance`, {body: param}).then((res) => console.log(res.data))

    }

    return (
        <section dir={'rtl'} className={`flex w-full m-0 p-0`}>
            <div className={`flex w-full ${getMoney === true && 'bg-green-500'}`}>
                <p className={'w-1/5'}><Link href={`/add/${id}`}>{name}</Link> </p><p className={'w-1/5'}><a
                href={`https://wa.me/+972${phone}`}> {phone}</a></p><p className={'w-1/5'}>{time}</p><p
                className={'w-1/5'}>{cash}</p>
                {getMoney === true ? <div className={'w-1/5 h-full flex items-center justify-center'}>
                        <input type="checkbox" className={'w-full  h-full flex items-center justify-center'} checked={true}
                               onChange={() => chaneMoney(id as number, false)}
                               onClick={() => {
                                   handlerChangeGetMoney(false);
                                   handlerUpdateBalance(balance - cash)
                               }}/>
                    </div>
                    :
                    <div className={'w-1/5 h-full flex items-center justify-center'}>
                        <input type="checkbox" className={'w-full h-full flex items-center justify-center'}
                               checked={false}
                               onChange={() => {
                                   chaneMoney(id as number, true)
                               }} onClick={() => {
                            handlerChangeGetMoney(true);
                            handlerUpdateBalance(balance + cash)
                        }}/>
                    </div>
                }
            </div>

        </section>
    );
}
