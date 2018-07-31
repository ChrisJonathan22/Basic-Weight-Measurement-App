import { Component, OnInit } from '@angular/core';
import { updateDoc } from '/home/../Users/macbookpro/Desktop/Book Exercises/MEAN Stack/basicProject/backEnd/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // A copy of the button element
    let button = document.getElementById("button");
    let list = document.getElementById("list");
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    
    
    // Once the application is nearly done, I will displaying newly added weights on the home page but instead display a message saying it's saved and have it disappear after 10 sec or so. Have all the weights displayed within My Weight. 
    
    // A function to be triggered once the button has been clicked.
    function saveInfo(){

      // Due to TypeScript being typesafe value doesn't exist in an HTMLElement but it does exist in HTMLInputElement which is why I have wrapped it around the Input element.
      let textInput = (<HTMLInputElement>document.getElementById('textInput'));

      // Value is a copy of textInput with it's value included.
      let value = textInput.value;

      // After the value has been captured, the input field is reset.
      textInput.value = "";
  
      console.log("It works!!!");
      
     
    
      let listItem = document.createElement("li");
      let listContent = document.createTextNode(`You weigh ${value} on - ${day} / ${month} / ${year} `);
      listItem.appendChild(listContent);
      list.appendChild(listItem);



      // fetch data from my api by doing POST request
      let user = "http://localhost:3000/updateWeight";
    fetch(user, {method: "POST",
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                body: value})
    .then((response)=> {
      // The returned promise
        return response.json();
    })
    .then((result) => {
      return result;
      console.log(result.updateStatus);
    });

    }

    button.addEventListener('click', saveInfo, false);

    
  
  }

}
