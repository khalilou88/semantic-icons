import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-escalator-down-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M7.233 6a3 3 0 0 1 2.006 .77l9.145 8.23h1.116a3.5 3.5 0 0 1 3.495 3.308l.005 .192a3.5 3.5 0 0 1 -3.5 3.5h-2.733a3 3 0 0 1 -2.006 -.77l-9.144 -8.23h-1.117a3.5 3.5 0 0 1 -3.495 -3.308l-.005 -.192a3.5 3.5 0 0 1 3.5 -3.5z"
    />
    <svg:path
      d="M18 2a1 1 0 0 1 1 1v4.584l1.293 -1.291a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1 -.112 .097l-.11 .071l-.114 .054l-.105 .035l-.149 .03l-.117 .006l-.075 -.003l-.126 -.017l-.111 -.03l-.111 -.044l-.098 -.052l-.096 -.067l-.09 -.08l-3 -3a1 1 0 1 1 1.414 -1.414l1.293 1.293v-4.586a1 1 0 0 1 1 -1"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEscalatorDownIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
