export type INode = IElement | ITextElement;

export enum ElementType {
  TextNode, ElementNode
}

export interface ITextElement {
  elementType: ElementType.TextNode
  value: string
}

export interface IElement {
  elementType: ElementType.ElementNode
  type: string;
  props: any;
  children: INode[];
}
