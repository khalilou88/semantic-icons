import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-mq-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#231f1e" d="M0 0h640v480H0z" />
    <svg:path fill="#00a650" d="M0 0h640v240H0z" />
    <svg:path fill="#ef1923" d="m0 0 320 240L0 480z" />
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
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}
