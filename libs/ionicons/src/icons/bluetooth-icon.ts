import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-bluetooth-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M388 160.77a20 20 0 00-5.85-14.91l-112-112A20 20 0 00236 48v164.52l-79-67.71a20 20 0 00-26 30.38L225.27 256 131 336.81a20 20 0 1026 30.38l79-67.71V464a20 20 0 0034.14 14.14l112-112a20 20 0 00-1.14-29.33L286.73 256 381 175.19a20 20 0 007-14.42zm-49.42 192.36L276 415.72V299.49zM276 212.52V96.28l62.59 62.59z"
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
export class SiBluetoothIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
