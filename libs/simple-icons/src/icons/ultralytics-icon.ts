import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-ultralytics-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Ultralytics</svg:title>
    <svg:path
      d="m12.736 7.341-.002 2.897c.012 3.953-3.188 7.177-7.098 7.171-1.553-.003-2.967-.48-4.112-1.313 2.056 3.725 5.999 6.24 10.48 6.245 6.511-.003 11.891-5.343 11.992-11.91l-.002-.027c.006-.151 0-2.951.006-3.075-.01-3.116-2.538-5.677-5.63-5.67-3.105-.006-5.645 2.54-5.634 5.683zM5.629 4.573C2.525 4.573 0 7.118 0 10.246s2.525 5.673 5.63 5.673c3.103 0 5.629-2.545 5.629-5.673s-2.526-5.673-5.63-5.673"
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
export class SiUltralyticsIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#111F68');
}
