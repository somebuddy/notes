import {Box} from './box';

export var BOXES: Box[] = [
  { "id": 1, "title": "Sample", "states": {}, parent: undefined, content: undefined, children: [], boxType: 'note', createdAt: new Date(), updatedAt: new Date()},
  { "id": 2, "title": "Sample 2", "states": {}, parent: undefined, content: undefined, children: [], boxType: 'note', createdAt: new Date(), updatedAt: new Date()},
  { "id": 3, "title": "Sample 3", "states": {}, parent: 1, content: undefined, children: [4, 5], boxType: 'note', createdAt: new Date(), updatedAt: new Date()},
  { "id": 4, "title": "Sample 4", "states": {}, parent: undefined, content: undefined, children: [], boxType: 'note', createdAt: new Date(), updatedAt: new Date()},
  { "id": 5, "title": "Sample 5", "states": {}, parent: undefined, content: undefined, children: [], boxType: 'note', createdAt: new Date(), updatedAt: new Date()},
]

BOXES[0].states["deleted"] = true;