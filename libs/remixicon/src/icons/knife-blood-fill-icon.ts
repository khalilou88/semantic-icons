import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-knife-blood-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.34315 1.4082L22.3744 19.4394C22.9602 20.0252 22.9602 20.975 22.3744 21.5607C21.7886 22.1465 20.8388 22.1465 20.253 21.5607L15.6569 16.9646L12.1213 20.5001L8.001 16.3792L8.00129 19.0001C8.00129 19.5524 7.55358 20.0001 7.00129 20.0001C6.44901 20.0001 6.00129 19.5524 6.00129 19.0001V15.0001C6.00129 14.4478 5.55358 14.0001 5.00129 14.0001C4.48846 14.0001 4.06578 14.3861 4.00802 14.8835L4.00129 15.0001V16.0001C4.00129 16.5524 3.55358 17.0001 3.00129 17.0001C2.44901 17.0001 2.00129 16.5524 2.00129 16.0001L2.00138 7.21394C1.96402 5.19447 2.68678 3.16356 4.16964 1.58709L4.34315 1.4082Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKnifeBloodFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
