import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterkeyword'
})
export class FilterPipe implements PipeTransform {

  
  transform(value: any, searchTerm : String): any {
    if(value.length===0)
    {
      return value;
    }
    return value.filter(function(search:any)
    {
      return search.firstname.toLowerCase().indexOf(searchTerm.toLowerCase())>-1 ||
      search.lastname.toLowerCase().indexOf(searchTerm.toLowerCase())>-1 ||
        search.city.toLowerCase().indexOf(searchTerm.toLowerCase())>-1 ||
        search.country.toLowerCase().indexOf(searchTerm.toLowerCase())>-1 
        // search.contact.indexOf(searchTerm)>-1 
        //  search.email.toLowerCase().indexOf(searchTerm.toLowerCase())>-1 
        // // search.course.toLowerCase().indexOf(searchTerm.toLowerCase())>-1 ||
        // // // search.country.toLowerCase().indexOf(searchTerm.toLowerCase())>-1 
    })
    
  }
 }
