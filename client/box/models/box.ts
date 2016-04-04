export class Box {
  id: number;
  boxType: string;
  title: string;
  content: string | string[] | Object;
  states: Object;

  parent: string;
  children: string[];

  createdAt: Date;
  updatedAt: Date;
}
