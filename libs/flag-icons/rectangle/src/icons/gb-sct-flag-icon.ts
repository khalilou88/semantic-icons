import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-gb-sct-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#0065bd" d="M0 0h640v480H0z" />
    <svg:path
      stroke="#fff"
      stroke-width=".6"
      d="m0 0 5 3M0 3l5-3"
      transform="scale(128 160)"
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
export class SiGbSctFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}
