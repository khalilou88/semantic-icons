import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sunset-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M4 16a1 1 0 0 1 0 2h-1a1 1 0 0 1 0 -2z" />
    <svg:path d="M21 16a1 1 0 0 1 0 2h-1a1 1 0 0 1 0 -2z" />
    <svg:path
      d="M6.307 9.893l.7 .7a1 1 0 0 1 -1.414 1.414l-.7 -.7a1 1 0 0 1 1.414 -1.414"
    />
    <svg:path
      d="M19.107 9.893a1 1 0 0 1 0 1.414l-.7 .7a1 1 0 0 1 -1.414 -1.414l.7 -.7a1 1 0 0 1 1.414 0"
    />
    <svg:path
      d="M12 2a1 1 0 0 1 1 1v3.584l1.293 -1.291a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-3 3a.98 .98 0 0 1 -.767 .293l-.124 -.017l-.127 -.032l-.104 -.04l-.115 -.063a1 1 0 0 1 -.151 -.114l-3.026 -3.027a1 1 0 0 1 1.414 -1.414l1.293 1.292v-3.585a1 1 0 0 1 1 -1"
    />
    <svg:path d="M3 20h18a1 1 0 0 1 0 2h-18a1 1 0 0 1 0 -2" />
    <svg:path d="M12 12a5 5 0 0 1 4.583 7.002h-9.166a5 5 0 0 1 4.583 -7.002" />
  `,
  host: {
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
export class SiSunsetIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
