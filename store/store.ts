import { create } from 'zustand';


type Person = {
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
}

const usePersonStore = create<PersonState>((set) => ({
    peoples:[],
    addPerson: (newPerson: Person) => {
        set((state) => ({peoples: [...state.peoples, newPerson]}));
    },
}));

export {usePersonStore}