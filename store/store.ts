import { create } from 'zustand';


export type Person = {
    id?: number;
    name: string;
    getMoney?: boolean;
    time: string;
    phone: string;
    cash: number;
}


interface PersonState {
    peoples:Person[]
    addPerson: (newPerson:Person) => void
    changeGetMoney: (id: number, getMoney: boolean) => void;}

const usePersonStore = create<PersonState>((set) => ({
    peoples:[],
    addPerson: (newPerson: Person) => {
        set((state) => ({peoples: [...state.peoples, newPerson]}));
    },
    changeGetMoney: (id: number, getMoney: boolean) => {
        set((state) => ({
            peoples: state.peoples.map((person) =>
                person.id === id ? { ...person, getMoney} : person
            ),
        }));
    },

}));

export {usePersonStore }