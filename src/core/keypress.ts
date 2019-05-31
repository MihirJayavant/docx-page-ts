import { IPage, addString, addLine, removeChar } from "./page";
import { List } from "immutable";

export let page: IPage = {
    isDirty: false,
    margin: 0,
    lines: List([{ text: "" }])
};

export let cursorPosition: number[] = [0, 0]


export const onKeyPress = (char: string) => {
    console.log(char)

    if (char.length === 1) {
        page = addString(page, char, cursorPosition);
        cursorPosition = [cursorPosition[0], cursorPosition[1] + 1]
        return
    }

    switch (char) {
        case "Enter":
            cursorPosition = [cursorPosition[0] + 1, 0]
            page = addLine(page, cursorPosition[0])
            break;
        case "Backspace":
            page = removeChar(page, page.lines.count() - 1)
            cursorPosition = [cursorPosition[0], cursorPosition[1] - 1]
            break;
    }
}

export const setCursorPosition = (top: number, left: number) => {
    cursorPosition = [top, left]
}