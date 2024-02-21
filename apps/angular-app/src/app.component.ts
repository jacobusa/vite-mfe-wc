import { ChangeDetectionStrategy, Component } from "@angular/core";
@Component({
  selector: "angular-root",
  standalone: true,
  imports: [],
  template: ` <p>hello, thisis angular hello and vite</p> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent {
  constructor() {}
  ngOnInit(): void {}
}
