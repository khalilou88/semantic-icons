import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-diamond-ring-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.5352 1H9.4648L7.69067 3.66118L9.55573 5.35669C6.0527 6.40665 3.5 9.65522 3.5 13.5C3.5 18.1944 7.30558 22 12 22C16.6944 22 20.5 18.1944 20.5 13.5C20.5 9.65521 17.9473 6.40663 14.4442 5.35668L16.3093 3.66118L14.5352 1ZM12 7C15.5899 7 18.5 9.91015 18.5 13.5C18.5 17.0899 15.5899 20 12 20C8.41015 20 5.5 17.0899 5.5 13.5C5.5 9.91015 8.41015 7 12 7Z"
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
export class SiDiamondRingFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
