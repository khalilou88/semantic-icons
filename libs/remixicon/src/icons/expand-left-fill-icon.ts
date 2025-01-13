import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-expand-left-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.99994 4.99988V10.9999L16.0002 11.0002L16.0002 13.0002L9.99994 12.9999V18.9999L2.99994 12.0001L9.99994 4.99988ZM18.0001 19.0001V5.00006H20.0001V19.0001H18.0001Z"
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
export class SiExpandLeftFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
