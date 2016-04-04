import {BOXES} from './mock-boxes';
import {Injectable} from 'angular2/core';

@Injectable()
export class BoxService {
  getBoxes() {
    return Promise.resolve(BOXES);
  }
}