import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bookmark-slash-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 4.517v9.301L5.433 2.252a41.44 41.44 0 0 1 9.637.058C16.194 2.45 17 3.414 17 4.517ZM3 17.25V6.182l10.654 10.654L10 15.082l-5.925 2.844A.75.75 0 0 1 3 17.25ZM3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06L3.28 2.22Z"
    />
  `,
  host: {
    'aria-hidden': 'true',
    'data-slot': 'icon',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBookmarkSlashIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 20 20');

  readonly fill = input<string>('currentColor');
}
