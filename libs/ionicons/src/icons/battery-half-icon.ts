import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-battery-half-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      width="400"
      height="224"
      x="32"
      y="144"
      rx="45.7"
      ry="45.7"
      fill="none"
      stroke="currentColor"
      stroke-linecap="square"
      stroke-miterlimit="10"
      stroke-width="32px"
    />
    <svg:rect
      width="154.31"
      height="114.13"
      x="85.69"
      y="198.93"
      rx="4"
      ry="4"
      stroke="currentColor"
      stroke-linecap="square"
      stroke-miterlimit="10"
      stroke-width="32px"
    />
    <svg:path
      d="M480 218.67v74.66"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="32px"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBatteryHalfIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
