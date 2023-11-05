import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
  // hashmap
  projects= new Map([
    ["Honeybee Tetranine","https://dattaabhishek.github.io/HT/"],
    ["Goodman Agency","https://goodmanagency.co/"],
    ["LFF101","not hosted"]
  ]);
  // array
  aboutProjects = [
    `A guitar enthusiast who likes to share his knowledge with others lorem ipsum aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`,
    `Goodman Agency is a gym-marketing agency.
    I've helped them transform their unfinished website into a fully working markatable web-application ready to attract potential customers.`,
    `E-learning platform`
  ]

}
