import { List } from 'immutable'

export interface Line {
    text: string
}

export interface IPage {
    margin: number
    lines: List<Line>
}

export function addLine(page: IPage): IPage {
    return { ...page, lines: page.lines.push({ text: '' }) }
}

export function addChar(page: IPage, lineNumber: number, char: string): IPage {
    const text = page.lines.get(lineNumber).text
    return { ...page, lines: page.lines.set(lineNumber, { text: text + char }) }
}

export function convertToHtml(page: IPage) {
    let html = ''
    const temp = page.lines.map(p => `<div>${p.text === '' ? '<br>' : p.text}</div>`)
    temp.forEach(p => html += p)
    return html
}