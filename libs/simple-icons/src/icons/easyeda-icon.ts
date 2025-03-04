import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-easyeda-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>EasyEDA</svg:title>
    <svg:path
      d="M7.754 15.36c.96 0 1.75.788 1.75 1.749 0 .96-.79 1.749-1.75 1.749s-1.75-.79-1.75-1.75.79-1.748 1.75-1.748m12.591-7.34a7.683 7.683 0 0 0-10.018-4.389c-.618.24-1.2.549-1.75.96A6.889 6.889 0 0 0 7 6.17c-.24-.034-.515-.034-.755-.034C2.78 6.1 0 8.912 0 12.342c0 2.675 1.715 5.041 4.151 5.898.48 1.544 1.922 2.675 3.603 2.675a3.762 3.762 0 0 0 3.774-3.772c0-.172 0-.309-.034-.48l5.317-2.675.515-.272-1.03-2.229-.582.272-5.318 2.675a3.708 3.708 0 0 0-2.642-1.098c-1.51 0-2.813.892-3.431 2.195-1.407-.823-2.127-2.503-1.716-4.15a3.718 3.718 0 0 1 4.53-2.674c.377.102.72.24 1.029.445.892-2.743 3.876-4.218 6.587-3.326 1.921.651 3.328 2.366 3.534 4.39h.274a2.913 2.913 0 0 1 2.916 2.915 2.941 2.941 0 0 1-2.676 2.915h-2.127v2.503H19.042c2.984-.24 5.18-2.88 4.94-5.864a4.854 4.854 0 0 0-1.51-3.361C21.89 8.74 21.17 8.26 20.345 8.02Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEasyedaIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#1765F6');
}
