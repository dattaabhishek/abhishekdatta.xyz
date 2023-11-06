import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
  aboutMe = {
    welcomeMessage: "Hey, I'm Abhishek",
    introduction: "I'm a software engineer. I like creating minimalistic, responsive, pixel-perfect and robust web-applications."
  }

  // array of json (projects)
  projects = [
    {
      projectName: "Honeybee Tetranine",
      projectUrl: "https://dattaabhishek.github.io/HT/",
      projectDescription: "Honeybee Tetranine is a guitar enthusiast who likes to share his knowledge with others.\nHelping Honeybee to create his own Masterclass website.", 
      descriptionVisible: false
    },
    {
      projectName: "Goodman Agency",
      projectUrl: "not hosted",
      projectDescription: "Goodman Agency is a gym-marketing agency.\nHelped them transform their unfinished website into a fully working markatable web-application.", 
      descriptionVisible: false
    },
    {
      projectName: "LFF101",
      projectUrl: "not hosted",
      projectDescription: "LFF101 is an E-learning platform that is helping students who are new to technology, understand technology with hands on practice and live IDE on browser.",
      descriptionVisible: false
    }
  ];


// Testing hide show code start

  // function toggle(params:type) {
    
  // }

// Testing hide show code end


}
