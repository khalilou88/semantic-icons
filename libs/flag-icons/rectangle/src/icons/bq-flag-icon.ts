import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bq-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#21468b" d="M0 0h640v480H0z" />
    <svg:path fill="#fff" d="M0 0h640v320H0z" />
    <svg:path fill="#ae1c28" d="M0 0h640v160H0z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBqFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}
