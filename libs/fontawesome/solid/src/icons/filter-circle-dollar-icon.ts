import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-filter-circle-dollar-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M3.9 22.9C10.5 8.9 24.5 0 40 0L472 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L396.4 195.6C316.2 212.1 256 283 256 368c0 27.4 6.3 53.4 17.5 76.5c-1.6-.8-3.2-1.8-4.7-2.9l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 65.3C-.7 53.4-2.8 36.8 3.9 22.9zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm120.8-32.6c.6-.9 1.8-2.1 4.2-3.4c5.1-2.7 12.5-4.1 18.7-4c8.2 .1 17.1 1.8 26.4 4.1c8.6 2.1 17.3-3.1 19.4-11.7s-3.1-17.3-11.7-19.4c-5.6-1.4-11.6-2.7-17.9-3.7l0-9.4c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 9.5c-6.1 1.2-12.3 3.2-18 6.3c-11.8 6.3-23 18.4-21.8 37.2c1 16 11.7 25.3 21.6 30.7c8.8 4.7 19.7 7.8 28.6 10.3l1.8 .5c10.3 2.9 17.9 5.2 23.2 8.3c4.5 2.7 4.7 4.2 4.7 5.6c.1 2.4-.5 3.7-1 4.5c-.6 1-1.8 2.2-4 3.3c-4.7 2.5-11.8 3.8-18.5 3.6c-9.5-.3-18.5-3.1-29.9-6.8c-1.9-.6-3.8-1.2-5.8-1.8c-8.4-2.6-17.4 2.1-20 10.5s2.1 17.4 10.5 20c1.6 .5 3.3 1 5 1.6c0 0 0 0 0 0s0 0 0 0c7 2.3 15.1 4.8 23.7 6.6l0 11.4c0 8.8 7.2 16 16 16s16-7.2 16-16l0-10.8c6.2-1.1 12.5-3.1 18.3-6.2c12.1-6.5 22.3-18.7 21.7-36.9c-.5-16.2-10.3-26.3-20.5-32.3c-9.4-5.6-21.2-8.9-30.5-11.5l-.2 0c-10.4-2.9-18.3-5.2-23.9-8.2c-4.8-2.6-4.8-4-4.8-4.5c0 0 0 0 0-.1c-.1-1.9 .3-2.9 .8-3.6z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFilterCircleDollarIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 576 512');
}
