import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-calendar-number-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M32 456a24 24 0 0024 24h400a24 24 0 0024-24V176H32zm310.17-244H368v200h-32V256.29l-35.39 26.08-19-25.76zM222 335.3c-8.54-8.74-22.75-12.67-30.11-12.67h-16v-32h16c4.85 0 17.41-2.6 25.28-10.65a22 22 0 006.57-16.08c0-23.23-28.63-23.9-31.89-23.9-17.34 0-23.8 10.61-24.07 11.06l-8.13 13.78-27.56-16.27 8.14-13.77c7.64-13 25.22-26.8 51.62-26.8 16.44 0 31.76 4.77 43.13 13.42 13.39 10.2 20.76 25.28 20.76 42.48A54 54 0 01240 302.35c-1.15 1.18-2.36 2.28-3.59 3.35a66.18 66.18 0 018.42 7.23c10.56 10.8 16.14 25.75 16.14 43.25 0 18.06-7.61 34-21.42 44.92-12.17 9.61-28.75 14.9-46.7 14.9-27.87 0-48.48-18.16-57.66-33.7l-8.13-13.78 27.56-16.27 8.16 13.75c1.08 1.84 11.15 18 30.1 18 16.66 0 36.12-7.29 36.12-27.82 0-6.25-1.22-14.95-7-20.88zM456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 00-24 23.77V144h448V87.77A23.8 23.8 0 00456 64z"
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
export class SiCalendarNumberSharpIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
