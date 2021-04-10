import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  public defaultColor: string = "#000";

  constructor() {}

  @Input("appColor") componentColor;

  @HostBinding("style.color") elColor: string;

  @HostListener("window:keydown", ["$event"]) windowKeyDown($event) {
    switch ($event.keyCode) {
      case 37:
        this.elColor = this.componentColor.left || this.defaultColor;
        break;
      case 38:
        this.elColor = this.componentColor.top || this.defaultColor;
        break;
      case 39:
        this.elColor = this.componentColor.right || this.defaultColor;
        break;
      case 40:
        this.elColor = this.componentColor.bottom || this.defaultColor;
        break;
      default:
        this.elColor = this.defaultColor;
    }
  }
}
