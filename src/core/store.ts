import { IPage } from "./page";

export interface IStore {
    pages: IPage[],
    cursorPosition: { top: number, left: number }
}