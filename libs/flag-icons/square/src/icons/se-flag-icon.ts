import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-se-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#005293" d="M0 0h512v512H0z" />
    <svg:path
      fill="#fecb00"
      d="M134 0v204.8H0v102.4h134V512h102.4V307.2H512V204.8H236.4V0z"
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
export class SiSeFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
