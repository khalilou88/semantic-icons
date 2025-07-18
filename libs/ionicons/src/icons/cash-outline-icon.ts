import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cash-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      width="448"
      height="256"
      x="32"
      y="80"
      rx="16"
      ry="16"
      transform="matrix(-1 0 0 -1 512 416)"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:path
      d="M64 384h384M96 432h320"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:circle
      cx="256"
      cy="208"
      r="80"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:path
      d="M480 160a80 80 0 0 1-80-80M32 160a80 80 0 0 0 80-80M480 256a80 80 0 0 0-80 80M32 256a80 80 0 0 1 80 80"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
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
export class SiCashOutlineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
