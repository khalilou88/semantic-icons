import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-sr-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#377e3f" d="M.1 0h640v480H.1z" />
    <svg:path fill="#fff" d="M.1 96h640v288H.1z" />
    <svg:path fill="#b40a2d" d="M.1 144h640v192H.1z" />
    <svg:path
      fill="#ecc81d"
      d="m320 153.2 56.4 173.6-147.7-107.3h182.6L263.6 326.8z"
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
export class SiSrFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}
