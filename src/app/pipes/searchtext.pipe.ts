import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchtext'
})
export class SearchtextPipe implements PipeTransform {

  transform(arrayOfObject: any, inputSearchBoxValue: any): any {
  
    console.log('value',arrayOfObject);
    console.log('args',inputSearchBoxValue);
    // if(!arrayOfObject){
    //   return null;
    // }
    if(!inputSearchBoxValue){
        return arrayOfObject;
    }
    inputSearchBoxValue = inputSearchBoxValue.toLowerCase();
    return arrayOfObject.filter((item:any)=>{
    return  JSON.stringify(item).toLowerCase().includes(inputSearchBoxValue)
    })
  }

}
