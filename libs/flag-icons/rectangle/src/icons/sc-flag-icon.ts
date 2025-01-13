import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sc-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#fff" d="M0 0h640v480H0Z" />
    <svg:path fill="#d92223" d="M0 480V0h640v160z" />
    <svg:path fill="#fcd955" d="M0 480V0h426.7z" />
    <svg:path fill="#003d88" d="M0 480V0h213.3z" />
    <svg:path fill="#007a39" d="m0 480 640-160v160z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiScFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}
