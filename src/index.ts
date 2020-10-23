import { ElementType, IElement, INode } from "./core/Element";
import { createElementAsync, updateElementAsync } from "./core/Renderer";

// Write TypeScript code!
const page1 = document.getElementById("firstpage")!;
const btn = document.getElementById("changeBtn")!;

const data: IElement = {
  elementType: ElementType.ElementNode,
  type: "div",
  props: {},
  children: [
    {
      elementType: ElementType.ElementNode, type: "div", props: {},
      children: [{ elementType: ElementType.TextNode, value: "This pic" }]
    },
    {
      elementType: ElementType.ElementNode, type: "br", props: {},
      children: []
    },
    {
      elementType: ElementType.ElementNode, type: "img", props: {
        src: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F765877054%2F960x0.jpg%3Ffit%3Dscale',
        'class': 'rectangle'
      },
      children: []
    }
  ]
};

function CreateDom() {
  createElementAsync(data)
    .then(p => page1.appendChild(p))
}

CreateDom()

btn.addEventListener("click", () => {

});
