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
    resetBalance: (by: number) => void
    increaseBalance: (by: number, state: any) => void
    lowerBalance: (by:number, state:any) => void,
    resetPerson: () => void

}

const usePersonStore = create<PersonState>((set) => ({
    peoples: [],
    balance: 0,
    addPerson: (newPerson: Person) => {
        set((state) => ({peoples: [...state.peoples, newPerson]}));
    },
    changeGetMoney: (id: number, getMoney: boolean) => {
        set((state) => ({
            peoples: state.peoples.map((person) =>
                person.id === id ? {...person, getMoney} : person
            ),
        }));
    },
    resetBalance: (by: number) => set({balance: 0}),
    resetPerson: () => set({peoples:[]}),
    increaseBalance: (by: number, state: number) => set({balance: state + by}),
    lowerBalance: (by: number, state: number) => set({balance: state - by})


}));

export {usePersonStore}