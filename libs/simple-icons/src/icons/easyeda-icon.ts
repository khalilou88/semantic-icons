import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-easyeda-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>EasyEDA</svg:title>
    <svg:path
      d="M13.31 3.108a7.67 7.67 0 0 0-3.015.545 7.67 7.67 0 0 0-1.73.951 7.865 7.865 0 0 0-1.59 1.567 6.308 6.308 0 0 0-.764-.047C2.78 6.124 0 8.91 0 12.35a6.217 6.217 0 0 0 4.146 5.868 3.759 3.759 0 0 0 7.326-1.574l5.3-2.673-.04-.078.499-.257-1.021-2.027-.499.25-.047-.086-5.291 2.658a3.727 3.727 0 0 0-2.627-1.076 3.77 3.77 0 0 0-3.42 2.198 3.723 3.723 0 0 1-1.7-4.146 3.71 3.71 0 0 1 5.549-2.214 5.211 5.211 0 0 1 6.585-3.32 5.24 5.24 0 0 1 3.538 4.373 2.913 2.913 0 0 1 3.188 2.899 2.909 2.909 0 0 1-2.65 2.899h-2.135v2.517h2.244l.11-.016a5.407 5.407 0 0 0 4.925-5.852 5.459 5.459 0 0 0-1.574-3.375A5.355 5.355 0 0 0 20.3 8.01a7.725 7.725 0 0 0-6.99-4.901ZM7.748 15.367c.965 0 1.753.791 1.753 1.761a1.748 1.748 0 0 1-1.753 1.753 1.748 1.748 0 0 1-1.754-1.753 1.756 1.756 0 0 1 1.754-1.753Z"
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
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#1765F6');
}
