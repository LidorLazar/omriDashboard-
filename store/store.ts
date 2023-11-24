import {create} from 'zustand';


export type Person = {
    id?: number;
    name: string;
    getMoney?: boolean;
    time: string;
    phone: string;
    cash: number;
}


interface PersonState {
    peoples: Person[]
    balance: number
    addPerson: (newPerson: Person) => void
    changeGetMoney: (id: number, getMoney: boolean) => void;
    resetBalance: () => void
    increaseBalance: (by: number, state: any) => void
    lowerBalance: (by:number, state:any) => void,
    resetPerson: () => void,
    fetchPeoples: () => void

}

const usePersonStore = create<PersonState>((set) => ({
    peoples: [],
    balance: 0,
    addPerson: (newPerson: Person) => {
        set((state) => ({peoples: [...state.peoples, newPerson]}));
    },

    changeGetMoney: async (id: number, getMoney: boolean) => {
        const res = await fetch(`api/data/${id}`)
        const response = res.json()

        console.log(response)

        set((state) => ({
            peoples: state.peoples.map((person) =>
                person.id === id ? {...person, getMoney} : person
            ),
        }));
    },
    resetBalance: () => set({balance: 0}),
    resetPerson: async () => {
        await fetch('api/data', {method:'DELETE'});
    },
    increaseBalance: (by: number, state: number) => set({balance: state + by}),
    lowerBalance: (by: number, state: number) => set({balance: state - by}),
    fetchPeoples: async () => {
        const res = await fetch('api/data', {method:'GET'});
        const response = await res.json()
        set({peoples:[...response]})
    }


}));

export {usePersonStore}