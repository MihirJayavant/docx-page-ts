import React, { useState } from "react";
import { convertToHtml } from "./core/renderer";
import {
  onKeyPress,
  page,
  setCursorPosition,
  cursorPosition
} from "./core/keypress";

const onkeyDown = (event: any) => {
  const t = event.nativeEvent.key;
  const el = document.querySelector("#page1");
  console.log(event.altKey);
  onKeyPress(t, event.altKey);
  setTimeout(() => {
    el.innerHTML = convertToHtml(page);
    const range = document.createRange();
    const sel = window.getSelection();
    if(el.childNodes[cursorPosition[0]]) {
      range.setStart(
        el.childNodes[cursorPosition[0]].firstChild,
        cursorPosition[1]
      );
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }, 0);
};

const onClick = () => {
  const selection = window.getSelection();
  const el = document.querySelector("#page1");
  const child = el.childNodes;
  let c = 0;
  for (let i = 0; i < child.length; i++) {
    if (selection.anchorNode.parentNode.isSameNode(child[i])) {
      c = i;
    }
  }
  setCursorPosition(c, selection.anchorOffset);
};

export const Page = () => {
  return (
    <div className="page">
      <div
        id="page1"
        className="editable"
        contentEditable={true}
        onKeyDown={onkeyDown}
        onClick={onClick}
        dangerouslySetInnerHTML={{ __html: "<div><br></div>" }}
      />
    </div>
  );
};
