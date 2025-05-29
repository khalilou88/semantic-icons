import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mv-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#d21034" d="M0 0h512v512H0z" />
    <svg:path fill="#007e3a" d="M128 128h256v256H128z" />
    <svg:circle cx="288" cy="256" r="85.3" fill="#fff" />
    <svg:ellipse cx="308.6" cy="256" fill="#007e3a" rx="73.9" ry="85.3" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMvFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
