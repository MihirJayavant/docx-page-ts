import { IPage } from "./page";
import { BehaviorSubject } from 'rxjs';
import { List } from "immutable";

export interface IStore {
    pages: IPage[],
    cursorPosition: { page: number, top: number, left: number }
}

export function getDefaultStore(): IStore {
    return {
        pages: [{ isDirty: false, lines: List([{ text: '' }]), margin: 0 }],
        cursorPosition: { left: 0, page: 0, top: 0 }
    }
}


export const storeSubject = new BehaviorSubject<IStore>(getDefaultStore())