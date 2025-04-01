import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"tempConverter",
    standalone: false
})
export class TempConverterPipe implements PipeTransform{
    transform(value: number, type: string) {
        if(type==="C"){
            const res = (value*9/5)+32;
            return res.toFixed(2);
        }
        else if(type==="F"){
            const res = (value - 32)*5/9;
            return res.toFixed(2);
        }
        else{
            return null;
        }
        
    }

}