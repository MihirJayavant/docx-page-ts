import { IPage } from "./page";

export function convertToHtml(page: IPage) {
    let html = ''
    const temp = page.lines.map(p => `<div>${p.text === '' ? '<br>' : p.text}</div>`)
    temp.forEach(p => html += p)
    return html
}