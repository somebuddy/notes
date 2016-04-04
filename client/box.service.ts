import {BOXES} from './mock-boxes';
import {Injectable} from 'angular2/core';

@Injectable()
export class BoxService {
  getBoxes() {
    return Promise.resolve(BOXES);
  }
  getBox(id: number) {
    return Promise.resolve(BOXES).then(
      boxes => boxes.filter(box => box.id === id)[0]
    );
  }
}