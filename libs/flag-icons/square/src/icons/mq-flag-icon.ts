import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mq-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#231f1e" d="M0 0h512v512H0z" />
    <svg:path fill="#00a650" d="M0 0h512v256H0z" />
    <svg:path fill="#ef1923" d="M256 256 0 512V0z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMqFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
