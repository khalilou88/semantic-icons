import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-beer-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M448 208h-80v-5.74A63.93 63.93 0 00321.65 96a111 111 0 00-27.59-47.29A108.62 108.62 0 00216 16c-29.91 0-57.78 12.28-79 34.67a56 56 0 00-67.51 77.51c-1 .86-1.91 1.74-2.83 2.66A63.56 63.56 0 0048 176.26a62.65 62.65 0 0020.77 46.54A65 65 0 0080 231v249a16 16 0 0016 16h256a16 16 0 0016-16v-48h80a16 16 0 0016-16V224a16 16 0 00-16-16zM176 432h-32V240h32zm64 0h-32V240h32zm64 0h-32V240h32zm16-240c-8.33 0-20.55-5.18-26.69-11.31l-4.68-4.69H148.79L145 186.53c-5.81 16-18.83 20.41-28.73 21.29a34.08 34.08 0 01-25.91-8.67 31 31 0 01-10.32-23 31.8 31.8 0 019.33-22.71c.16-.17.33-.32.5-.49A31.78 31.78 0 01112 144c.09 0 9.12.34 16.4 5.8l12.8 9.6 19.2-25.6-12.8-9.6A63.69 63.69 0 00112 112a64.79 64.79 0 00-14 1.55 24 24 0 0141.4-23.68l.23.35.4.46a35.78 35.78 0 015 8.94l5.62 15 30-11.24-5.62-15a68.2 68.2 0 00-10-17.74c-.38-.52-.79-1-1.19-1.51C178.38 55.45 196.64 48 216 48a76.86 76.86 0 0155.23 23.18A80.2 80.2 0 01292.61 142l-3 15.72 31.43 6 3-15.72a111.78 111.78 0 001.96-19.43 32 32 0 01-6 63.43zm112 208h-64V240h64z"
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
export class SiBeerSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
