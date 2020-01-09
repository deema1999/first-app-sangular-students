import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(studentss,name): any {
    if(!name)
      return studentss;
    else
      return studentss.filter(student => student.name.includes(name));
  }
}
