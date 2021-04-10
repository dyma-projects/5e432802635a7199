import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-exercice-1",
  templateUrl: "./exercice-1.component.html",
})
export class Exercice1Component implements OnInit {
  public elColors: object = {
    top: "#feca57",
    right: "#ff6b6b",
    bottom: "#48dbfb",
    left: "#1dd1a1",
  };

  constructor() {}

  ngOnInit() {}
}
