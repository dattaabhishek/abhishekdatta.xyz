import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
  welcomeMessage = "Hey, I'm Abhishek";
  aboutMe = `I'm a software engineer. I like creating minimalistic, responsive, pixel-perfect and robust web-applications.`

  // hashmap to display project and embed their corresponding links
  projects= new Map([
    ["Honeybee Tetranine","https://dattaabhishek.github.io/HT/"],
    ["Goodman Agency","not hosted"],
    ["LFF101","not hosted"]
  ]);
  
  // array of project description
  aboutProjects = [
    `A guitar enthusiast who likes to share his knowledge with others`,
    `Goodman Agency is a gym-marketing agency.
    I've helped them transform their unfinished website into a fully working markatable web-application ready to attract potential customers.`,
    `E-learning platform`
  ]

}
