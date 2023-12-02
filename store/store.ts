import {create} from 'zustand';
import axios from "axios";



export type Person = {
    id?: number;
    name: string;
    getMoney?: boolean;
    time: string;
    phone: string;
    cash: number;
    created: string
}


interface PersonState {
    peoples: Person[]
    balance: number
    addPerson: (newPerson: Person) => void
    changeGetMoney: (id: number, getMoney: boolean) => void;
    resetBalance: () => void
    fetchPeoples: () => void
    fetchBalance: () => void

}

const usePersonStore = create<PersonState>((set) => ({
    peoples: [],
    balance: 0,
    addPerson: (newPerson: Person) => {
        set((state) => ({peoples: [...state.peoples, newPerson]}));
    },

    changeGetMoney: async (id: number, getMoney: boolean) => {
        await axios.get(`api/data/${id}`)

        set((state) => ({
            peoples: state.peoples.map((person) =>
                person.id === id ? {...person, getMoney} : person
            ),
        }));
    },
    resetBalance: async () => {await axios.put('api/data')},
    resetPerson: async () => {
        await axios.delete('api/data');
    },
    fetchPeoples: async () => {
        const res = await axios.get('api/data');
        const response = await res.data
        set({peoples:[...response]})
    },
    fetchBalance: async () =>{
        const res = await  axios.get('api/balance')
        const response = res.data
        response.map((item:any) => {
            set({balance:item.balance})
        })

    }
}));

export {usePersonStore}