import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-play-forward-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M32 145.52v221c0 13.28 13 21.72 23.63 15.35l188.87-113c9.24-5.53 9.24-20.07 0-25.6l-188.87-113C45 123.8 32 132.24 32 145.52zM260.57 145.52v221c0 13.28 13 21.72 23.63 15.35l188.87-113c9.24-5.53 9.24-20.07 0-25.6l-188.87-113c-10.64-6.47-23.63 1.97-23.63 15.25z"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPlayForwardOutlineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
