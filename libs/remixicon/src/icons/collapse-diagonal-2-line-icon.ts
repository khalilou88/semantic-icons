import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-collapse-diagonal-2-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.00008 4.00008H11.0001V11.0001H4.00008V9.00008H7.58586L3.29297 4.70718L4.70718 3.29297L9.00008 7.58586V4.00008ZM20 15H16.4142L20.7071 19.2929L19.2929 20.7071L15 16.4142V20H13V13H20V15Z"
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
export class SiCollapseDiagonal2LineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
