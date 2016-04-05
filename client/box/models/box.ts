export class Box {
  id: number;
  boxType: string;
  title: string;
  content: string | string[] | Object;
  states: Object;

  parent: string | number;
  children: number[] | string[];

  createdAt: Date;
  updatedAt: Date;
}
