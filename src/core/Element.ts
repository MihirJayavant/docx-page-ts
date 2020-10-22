export type INode = IElement | string;

export interface IElement {
  type: string;
  props: any;
  children: INode[];
}
