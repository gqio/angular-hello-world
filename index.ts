import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "hello-world",
  template: `<button>Hello {{name || 'world'}}!</button>`,
  styles: [`button { font-size: 200%; }`],
  encapsulation: ViewEncapsulation.ShadowDom
})
export default class HelloWorld {
  @Input() name: string;
}
