import { IElement } from "./core/Element";
import { createElement, updateElement } from "./core/Renderer";

// Write TypeScript code!
const page1 = document.getElementById("firstpage")!;
const btn = document.getElementById("changeBtn")!;

const data: IElement = {
  type: "div",
  props: { class: "list" },
  children: [
    { type: "p", props: {}, children: ["item 1"] },
    { type: "p", props: {}, children: ["item 2"] }
  ]
};

const data2: IElement = {
  type: "div",
  props: { class: "list" },
  children: [
    { type: "p", props: {}, children: ["item 1"] },
    { type: "p", props: {}, children: ["Hello"] }
  ]
};

page1.removeChild(page1!.childNodes[0]);
page1.appendChild(createElement(data));

btn!.addEventListener("click", () => {
  const root = document.getElementById("firstpage")!;
  updateElement(root, data2, data);
});
