import { Component } from '@angular/core';
@Component({
    selector: 'app-test',
    template: `<p>this is a waring!</p>`,
    styles:[
       
       `
       p{
        padding:20px;
        background-color:yellow;
        border:1px solid red
       }
    `
    ]
})
export class testComponent{

}