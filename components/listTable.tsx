import {Person, usePersonStore} from "@/store/store";

export default function ListTable({id, name, phone, time, getMoney, cash}: Person) {

    const chaneMoney = usePersonStore(state => state.changeGetMoney);
    const balance = usePersonStore(state => state.balance);
    const increaseBalance = usePersonStore(state => state.increaseBalance);
    const lowerBalance = usePersonStore(state => state.lowerBalance);


    return (
        <section dir={'rtl'} className={`flex w-full m-0 p-0`}>
            <div className={`flex w-full ${getMoney === true && 'bg-green-500'}`}>
                <p className={'w-1/5'}> {name}</p><p className={'w-1/5'}><a
                href={`https://wa.me/+972${phone}`}> {phone}</a></p><p className={'w-1/5'}>{time}</p><p
                className={'w-1/5'}>{cash}</p>
                {getMoney === true ? <div className={'w-1/5 h-full flex items-center justify-center'}>
                        <input type="checkbox" className={'w-full'} checked={true}
                               onChange={() => chaneMoney(id as number, false)}
                               onClick={() => lowerBalance(cash, balance)}/>
                    </div>
                    :
                    <div className={'w-1/5'}>
                        <input type="checkbox" className={'w-1/5 h-full flex items-center justify-center'} checked={false}
                               onChange={() => {
                                   +chaneMoney(id as number, true)
                               }} onClick={() => increaseBalance(cash, balance)}/>
                    </div>
}

            </div>

        </section>
    );
}
