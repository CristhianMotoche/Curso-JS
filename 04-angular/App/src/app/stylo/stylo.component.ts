import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylo',
  templateUrl: './stylo.component.html',
  styleUrls: ['./stylo.component.css']
})
export class StyloComponent implements OnInit {

  constructor() { }

  userArray = [
    { nombre: "Hello",
      apellido: "World!",
      image: "https://www.adherecreative.com/hs-fs/hub/105208/file-16346453-jpeg/images/twitter-small-business-marketing.jpeg"
    },
    { nombre: "Hello2",
      apellido: "World2!",
      image: "https://www.adherecreative.com/hs-fs/hub/105208/file-16346453-jpeg/images/twitter-small-business-marketing.jpeg"
    },
    { nombre: "Hello3",
      apellido: "World3!",
      image: "https://www.adherecreative.com/hs-fs/hub/105208/file-16346453-jpeg/images/twitter-small-business-marketing.jpeg"
    }
  ]

  value:string = "Hello!";

  ngOnInit() {
  }

  changeInput(labelName){
    console.log(labelName);
    console.log(labelName.value);
  }
}
