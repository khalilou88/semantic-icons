import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-face-grin-tongue-wink-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M174.5 498.8C73.1 464.7 0 368.9 0 256C0 114.6 114.6 0 256 0S512 114.6 512 256c0 112.9-73.1 208.7-174.5 242.8C346.7 484 352 466.6 352 448l0-46.9c24.3-17.5 43.6-41.6 55.4-69.6c5-11.8-7-22.5-19.3-18.7c-39.7 12.2-84.5 19-131.8 19s-92.1-6.8-131.8-19c-12.3-3.8-24.3 6.9-19.3 18.7c11.7 27.8 30.8 51.7 54.8 69.2l0 47.3c0 18.6 5.3 36 14.5 50.8zm20.7-265.2c5.3 7.1 15.3 8.5 22.4 3.2s8.5-15.3 3.2-22.4c-30.4-40.5-91.2-40.5-121.6 0c-5.3 7.1-3.9 17.1 3.2 22.4s17.1 3.9 22.4-3.2c17.6-23.5 52.8-23.5 70.4 0zM336 272a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM320 402.6l0 45.4c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-45.4c0-14.7 11.9-26.6 26.6-26.6l2 0c11.3 0 21.1 7.9 23.6 18.9c2.8 12.6 20.8 12.6 23.6 0c2.5-11.1 12.3-18.9 23.6-18.9l2 0c14.7 0 26.6 11.9 26.6 26.6zM336 184a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
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
export class SiFaceGrinTongueWinkIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
