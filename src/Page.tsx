import React, { useState } from "react";
import { IPage, addChar, convertToHtml, addLine } from "./core/page";
import { List } from "immutable";

let page: IPage = {
  margin: 0,
  lines: List([{ text: "" }])
};

const onkeyup = (event: any) => {
  const t = event.nativeEvent.key;
  const el = document.querySelector("#page1");
  if (t === "Enter") {
    page = addLine(page);
  } else {
    page = addChar(page, page.lines.count() - 1, t);
  }
  setTimeout(() => {
    el.innerHTML = convertToHtml(page);
    const range = document.createRange();
    const sel = window.getSelection();

    range.setStart(el.childNodes[page.lines.count() - 1], 1);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  }, 0);
};

export const Page = () => {
  return (
    <div className="page">
      <div
        id="page1"
        className="editable"
        contentEditable={true}
        onKeyDown={onkeyup}
        dangerouslySetInnerHTML={{ __html: "<div><br></div>" }}
      />
    </div>
  );
};
