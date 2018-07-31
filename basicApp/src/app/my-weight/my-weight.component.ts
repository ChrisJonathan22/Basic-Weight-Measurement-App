import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-weight',
  templateUrl: './my-weight.component.html',
  styleUrls: ['./my-weight.component.css']
})
export class MyWeightComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let list = document.getElementById("list");
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    
    // fetch data from my api by doing a GET request or POST
    let user = "http://localhost:3000/userWeight";
  
    fetch(user)
    .then((response)=> {
      // The returned promise
        return response.json();
    })
    .then((result) => {
      for(let i = 0; i < result.userWeight.length; i++){
        let listItem = document.createElement("li");
        listItem.innerHTML = `You weigh ${result.userWeight[i]} - ${day}/${month}/${year} `;
        list.appendChild(listItem);
      }
  });
  
  }
}




