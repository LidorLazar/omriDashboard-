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
    filterPeople: Person[]
    balance: number
    addPerson: (newPerson: Person) => void
    changeGetMoney: (id: number, getMoney: boolean) => void;
    resetBalance: () => void
    fetchPeoples: () => void
    fetchAllPeoples: () => void
    fetchBalance: () => void

}

const usePersonStore = create<PersonState>((set) => ({
    peoples: [],
    balance: 0,
    filterPeople:[],
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
    fetchAllPeoples: async () => {

        const res = await fetch('api/data/filter',{cache:'no-store'})
        const response = await res.json()
        set({filterPeople:[...response]})
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