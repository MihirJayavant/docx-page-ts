import { IPage } from "./page";


export function parseLine(text: string) {
    if (text.length === 0) {
        return `<div><br></div>`
    }
    const temp = text.replace(' ', '&nbsp;')
    return `<div>${temp}</div>`
}

export function convertToHtml(page: IPage) {
    let html = ''
    const temp = page.lines.map(p => parseLine(p.text))
    temp.forEach(p => html += p)
    return html
}
