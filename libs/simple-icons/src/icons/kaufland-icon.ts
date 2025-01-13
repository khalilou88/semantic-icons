import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-kaufland-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Kaufland</svg:title>
    <svg:path
      d="M0 24h24V0H0zm23.008-.989H.989V.989h22.022zM3.773 3.776h7.651v7.65H3.773zm8.801 0v7.652l7.653-7.652zm-8.801 8.8h7.651v7.651H3.773zm8.801-.004v7.652h7.653z"
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
export class SiKauflandIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#E10915');
}
