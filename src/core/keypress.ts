import { IPage, addString, addLine, removeChar, exchangeLines } from "./page";
import { List } from "immutable";

export let page: IPage = {
    isDirty: false,
    margin: 0,
    lines: List([{ text: "" }])
};

export let cursorPosition: number[] = [0, 0]


export const onKeyPress = (char: string, alt: boolean) => {
    console.log(char)

    if(alt && char === 'ArrowUp') {
        page = exchangeLines(page, 1, 0)
        setCursorPosition(cursorPosition[0] - 1, cursorPosition[1])
    }

    if (char.length === 1) {
        page = addString(page, char, cursorPosition);
        setCursorPosition(cursorPosition[0], cursorPosition[1] + 1)
        return
    }

    switch (char) {
        case "Enter":
            cursorPosition = [cursorPosition[0] + 1, 0]
            page = addLine(page, cursorPosition[0])
            break;
        case "Backspace":
            onBackspace()
            break;
    }
}

export const onBackspace = () => {
    page = removeChar(page, page.lines.count() - 1)
    let x = cursorPosition[1] - 1
    let y = cursorPosition[0]

    if(x < 0) {
        if( y-1 < 0) {
            x = 0
            y = 0
        } else {
            x = page.lines.last({text: ''}).text.length
            y--
        }
    }


    // console.log(y,x)
    setCursorPosition(y >= 0 ? y : 0, x)
}

export const setCursorPosition = (top: number, left: number) => {
    cursorPosition = [top, left]
}