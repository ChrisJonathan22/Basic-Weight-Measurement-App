import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-weight',
  templateUrl: './my-weight.component.html',
  styleUrls: ['./my-weight.component.css']
})
export class MyWeightComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // This is the ul element
    let list = document.getElementById("list");

    // Create an instance of the date object and extract the day, month and year
    // The date and time will have to be injected within the POST request otherwise every weight recorded will be displayed with the same date and time every day
    

    // GET request URL
    let user = "http://localhost:3000/userWeight";
  
    fetch(user)
    .then((response)=> {
      // The returned promise
        return response.json();
    })
    .then((result) => {
      // Once the the data is received which is an array,loop through it
      for(let i = 0; i < result.userWeight.length; i++){
        // Create li elements for every item in the array
        let listItem = document.createElement("li");
        // Add this message to every li element with weight, date and time
        listItem.innerHTML = `You weigh ${result.userWeight[i]}`;
        // Append the listItem to the ul element
        list.appendChild(listItem);
      }
  });
  
  }
}




