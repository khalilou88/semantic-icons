import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-youhodler-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>YouHodler</svg:title>
    <svg:path
      d="M4.727,15.273L1.091,13.091L1.091,4.364L8.364,0L12,2.182L15.636,0L22.909,4.364L22.909,13.091L19.273,15.273L19.273,19.636L12,24L4.727,19.636L4.727,15.273ZM12,19.636L14.422,18.182L14.422,12.364L19.273,9.455L19.273,6.545L16.85,5.092L12,8L7.15,5.092L4.727,6.545L4.727,9.455L9.578,12.364L9.578,18.182L12,19.636Z"
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
export class SiYouhodlerIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#546DF9');
}
