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

     // Due to TypeScript being typesafe value doesn't exist in an HTMLElement but it does exist in HTMLInputElement which is why I have wrapped it around the Input element.
     let textInput = (<HTMLInputElement>document.getElementById('textInput'));

    //  Store the text input element (name)
    let name = (<HTMLInputElement>document.getElementById('name'));

    // This is a h3 element where the success message will be displayed
    let message = document.getElementById("message");
  
    // A function to be triggered once the button has been clicked.
    function saveInfo(){

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
     

      // Value is the data typed into the textInput
      let value = textInput.value;

      // Store the name value
      let nameValue = name.value;
      
      // Create a JSON object to hold the value which will be passed onto the POST request
      const body = {
        name: nameValue,
        weight: value,
        info: `${day}/${month}/${year} - ${hours}:${minutes}`
      };

      // After the value has been captured, the input field is reset
      textInput.value = "";

      // After the name has been captured, the input field is reset
      name.value = "";
      
      // This is just some feedback to let me know that it's working in some capacity
      console.log("It works!!!");
      // Comment!!!

      // Display success message
      message.innerHTML = "Your weight has been successfully recorded.";

      // Delete success message after 3 seconds
      setTimeout(() => {
        message.innerHTML = "";
      }, 3000);
      

      // fetch data from my api by doing a POST request
      let url = "http://localhost:3000/updateWeight";
    fetch(url, {method: "POST",
                //Set content type as JSON
                headers: {'Content-Type':'application/json'},
                // Stringify the JSON object which holds the value
                body: JSON.stringify(body)})
    .then((response)=> {
      // The returned promise
        return response.json();
    })
    .then((result) => {
      return result;
    });

    }

  
    // The button event listener which triggers the function saveInfo
    button.addEventListener('click', saveInfo, false);

  }

}
