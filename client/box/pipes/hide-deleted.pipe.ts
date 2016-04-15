import { Box } from '../models/box';
import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
  name: 'hideDeleted',
  pure: false
})
export class HideDeletedBoxesPipe implements PipeTransform {
  transform(allBoxes:Box[], hide: any) {
    hide = hide ? hide[0] : false;
    return allBoxes && hide ? allBoxes.filter(box => !(box.states && box.states['deleted'])) : allBoxes;
  }
}