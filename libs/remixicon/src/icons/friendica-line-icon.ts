import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-friendica-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16 4V9H10V11H16V17H10V20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H16ZM14 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H8V15H14V13H8V7H14V4ZM2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z"
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
export class SiFriendicaLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
