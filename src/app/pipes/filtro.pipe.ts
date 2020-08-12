import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(array: any[],
            filter: string,
            campo: string): any[] {

    console.log(filter);
    

    if ( filter === '') {
      return array;
    }

    filter = filter.toLowerCase();

    return array.filter( item => {
      return item[campo].toLowerCase().includes( filter );
    });
    // return array;
  }

}
