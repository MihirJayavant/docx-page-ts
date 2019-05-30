import { List } from 'immutable'

export interface ILine {
    text: string
}

export interface IPage {
    isDirty: boolean
    margin: number
    lines: List<ILine>
}

export function addLine(page: IPage, lineNumber: number): IPage {
    return { ...page, lines: page.lines.insert(lineNumber, { text: '' }) }
}

export function addString(page: IPage, char: string, position: number[]): IPage {
    const text = page.lines.get(position[0]).text
    return { ...page, lines: page.lines.set(position[0], { text: text.substring(0, position[1]) + char + text.substring(position[1]) }) }
}

export function removeChar(page: IPage, lineNumber: number): IPage {
    const text = page.lines.get(lineNumber).text
    if (text === "") {
        return { ...page, lines: page.lines.pop() }
    }
    return { ...page, lines: page.lines.set(lineNumber, { text: text.substring(0, text.length - 1) }) }
}
