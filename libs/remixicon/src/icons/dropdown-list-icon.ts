import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-dropdown-list-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 5V19H13V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V9H20V5H4ZM19.7071 11.2929L19 10.5858L18.2929 11.2929L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L19.7071 11.2929ZM16.7071 17.2929L19 19.5858L21.2929 17.2929L22.7071 18.7071L19.7071 21.7071L19 22.4142L18.2929 21.7071L15.2929 18.7071L16.7071 17.2929Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDropdownListIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
