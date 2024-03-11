import { atom } from "recoil";

export const author = atom({
    key: 'author',
    default: '' as string
})