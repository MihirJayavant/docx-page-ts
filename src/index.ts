import { ElementType, IElement, INode } from "./core/Element";
import { createElement, updateElement } from "./core/Renderer";

// Write TypeScript code!
const page1 = document.getElementById("firstpage")!;
const btn = document.getElementById("changeBtn")!;

const data: IElement = {
  elementType: ElementType.ElementNode,
  type: "ul",
  props: { class: "list" },
  children: [
    {
      elementType: ElementType.ElementNode, type: "li", props: {},
      children: [{ elementType: ElementType.TextNode, value: "item 1" }]
    },
    {
      elementType: ElementType.ElementNode, type: "li", props: {},
      children: [{ elementType: ElementType.TextNode, value: "item 2" }]
    }
  ]
};

const data2: INode = {
  elementType: ElementType.ElementNode,
  type: "ul",
  props: { class: "list" },
  children: [
    {
      elementType: ElementType.ElementNode, type: "li", props: {},
      children: [{ elementType: ElementType.TextNode, value: "item 45" }]
    },
    {
      elementType: ElementType.ElementNode, type: "li", props: {},
      children: [{ elementType: ElementType.TextNode, value: "Hello" }]
    }
  ]
};


page1.appendChild(createElement(data));

btn!.addEventListener("click", () => {
  const root = document.getElementById("firstpage")!;
  updateElement(root, data2, data);
});
