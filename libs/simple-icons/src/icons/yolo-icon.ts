import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-yolo-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>YOLO</svg:title>
    <svg:path
      d="M18.25 0c-3.05 0-5.52 2.477-5.52 5.523 0 3.842-3.125 6.967-6.972 6.967-1.506 0-2.894-.46-4.03-1.26 1.105 1.98 2.765 3.6 4.759 4.67v2.51c0 3.04 2.428 5.56 5.463 5.59 3.07 0 5.58-2.46 5.58-5.52V15.9c3.64-1.96 6.16-5.8 6.23-10.208v-.165C23.76 2.477 21.28 0 18.25 0ZM5.758.0002C2.715.0002.2399 2.477.2399 5.523c0 3.044 2.4751 5.517 5.5181 5.517 3.044 0 5.512-2.473 5.512-5.517 0-3.046-2.468-5.5228-5.512-5.5228Z"
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
export class SiYoloIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#111F68');
}
