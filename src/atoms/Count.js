import { atom, selector } from "recoil";


export const Counteratom = atom({
    default: 0,
    key: "Counter"
})

export const evenselector = selector({
    key: "iseven",
    get: ({get}) => {
        const evencount = get(Counteratom);
        const isevenvalue = (evencount % 2 == 0);
        return isevenvalue; 
    }
})