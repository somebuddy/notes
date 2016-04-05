import { Injectable } from 'angular2/core';

import { BOXES } from '../models/boxes.mock';
import { Box } from '../models/box';

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

  addBox(box: Box) {
    BOXES.push(box);
  }

  deleteBox(id: number) {
    this.getBox(id).then(box => box.states['deleted'] = true);
  }

  restoreBox(id: number) {
    this.getBox(id).then(box => box.states['deleted'] = false);
  }
}
