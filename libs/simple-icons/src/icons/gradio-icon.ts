import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-gradio-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Gradio</svg:title>
    <svg:path
      d="M 12 1.527 A 1.532 1.532 0 0 0 11.24 1.73 L 0.7695 7.732 A 1.532 1.532 0 0 0 0 9.021 L 0 9.109 A 1.532 1.532 0 0 0 0.7695 10.4 L 3.57 12 L 0.7695 13.61 C 0.256 13.9 0 14.42 0 14.94 C 0 15.45 0.256 15.97 0.7695 16.26 L 11.24 22.27 C 11.71 22.54 12.29 22.54 12.76 22.27 L 23.23 16.26 C 23.73 15.98 23.99 15.48 24 14.97 L 24 14.9 C 23.99 14.4 23.73 13.89 23.23 13.61 L 20.42 12 L 23.23 10.4 A 1.532 1.532 0 0 0 24 9.223 L 24 8.91 A 1.532 1.532 0 0 0 23.23 7.732 L 12.76 1.73 A 1.532 1.532 0 0 0 12 1.527 z M 12 4.826 L 19.39 9.061 L 17.34 10.24 L 12.76 7.602 C 12.53 7.47 12.27 7.398 12 7.398 C 11.73 7.398 11.47 7.469 11.24 7.602 L 6.652 10.24 L 4.613 9.061 L 12 4.826 z M 12 10.7 L 14.27 12 L 12 13.3 L 9.734 12 L 12 10.7 z M 6.652 13.77 L 11.24 16.39 A 1.532 1.532 0 0 0 12.76 16.39 L 17.34 13.77 L 19.39 14.94 L 12 19.17 L 4.613 14.94 L 6.652 13.77 z"
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
export class SiGradioIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#F97316');
}
