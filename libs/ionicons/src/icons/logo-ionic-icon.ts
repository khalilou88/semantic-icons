import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-logo-ionic-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M73.6 256c0-100.737 81.663-182.4 182.4-182.4 40.552 0 77.992 13.212 108.286 35.603 7.946-18.702 23.958-33.15 43.67-38.976C366.589 36.357 313.656 16 256 16 123.451 16 16 123.452 16 256s107.451 240 240 240c132.548 0 239.999-107.452 239.999-240 0-27.741-4.718-54.427-13.407-79.269-11.824 15.985-30.428 26.649-51.564 27.742 4.795 16.319 7.371 33.605 7.371 51.527 0 100.737-81.663 182.4-182.399 182.4-100.737 0-182.4-81.663-182.4-182.4z"
    />
    <svg:path
      d="M491.065 207.374a238.383 238.383 0 00-8.473-30.643c-11.823 15.984-30.428 26.649-51.564 27.742a181.577 181.577 0 016.719 35.964c22.259-2.737 41.5-15.226 53.318-33.063zM256 361.001c57.853 0 105-47.057 105-105 0-57.854-47.057-105-105-105s-105 47.146-105 105c0 57.853 47.147 105 105 105zM413.5 166c28.995 0 52.5-23.505 52.5-52.5S442.495 61 413.5 61 361 84.505 361 113.5s23.505 52.5 52.5 52.5z"
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
export class SiLogoIonicIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
