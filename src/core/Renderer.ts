import { INode, IElement, ElementType, ITextElement } from "./Element";

export function createElement(node: INode) {
  if (node.elementType == ElementType.TextNode) {
    return document.createTextNode(node.value);
  }

  const $el = document.createElement(node.type);
  node.children.map(createElement).forEach($el.appendChild.bind($el));
  return $el;
}

function isElement(node: INode): node is IElement {
  return node.elementType == ElementType.ElementNode
}

function isText(node: INode): node is ITextElement {
  return node.elementType == ElementType.TextNode
}


function changed(node1: INode, node2: INode): boolean {
  if (isText(node1) && isText(node2)) {
    return node1.value == node2.value;
  } else if (isElement(node1) && isElement(node2)) {
    return node1.type == node2.type;
  } else {
    return false;
  }

}

export function updateElement(
  $parent: ChildNode,
  newNode: INode,
  oldNode: INode,
  index = 0
) {
  if (!oldNode) {
    $parent.appendChild(createElement(newNode));
  } else if (!newNode) {
    $parent.removeChild($parent.childNodes[index]);
  } else if (changed(newNode, oldNode)) {
    $parent.replaceChild(createElement(newNode), $parent.childNodes[index]);
  } else if (isElement(newNode) && isElement(oldNode)) {
    const newLength = newNode.children.length;
    const oldLength = oldNode.children.length;
    for (let i = 0; i < newLength || i < oldLength; i++) {
      updateElement(
        $parent.childNodes[index],
        newNode.children[i],
        oldNode.children[i],
        i
      );
    }
  }
}
