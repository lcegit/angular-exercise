import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})

export class SuggestionsComponent {
 videos = [
    {name: 'video one', liked: true},
    {name: 'video two', liked: false}
 ]

 isShown: boolean = true

  constructor() { }

  ngOnInit() {
  }

  playVideo(video){
  }

  toggleText(){
    // if (this.isShown) {
    //   this.isShown = false
    // } else {
    //   this.isShown = true
    // }
    this.isShown = !this.isShown;
  }
}
