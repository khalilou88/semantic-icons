import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-brand-baidu-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M5 9.5m-1 0a1 1.5 0 1 0 2 0a1 1.5 0 1 0 -2 0" />
    <svg:path
      d="M14.463 11.596c1.282 1.774 3.476 3.416 3.476 3.416s1.921 1.574 .593 3.636c-1.328 2.063 -4.892 1.152 -4.892 1.152s-1.416 -.44 -3.06 -.088c-1.644 .356 -3.06 .22 -3.06 .22s-2.055 -.22 -2.47 -2.304c-.416 -2.084 1.918 -3.638 2.102 -3.858c.182 -.222 1.409 -.966 2.284 -2.394c.875 -1.428 3.337 -2.287 5.027 .221z"
    />
    <svg:path d="M9 4.5m-1 0a1 1.5 0 1 0 2 0a1 1.5 0 1 0 -2 0" />
    <svg:path d="M15 4.5m-1 0a1 1.5 0 1 0 2 0a1 1.5 0 1 0 -2 0" />
    <svg:path d="M19 9.5m-1 0a1 1.5 0 1 0 2 0a1 1.5 0 1 0 -2 0" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBrandBaiduIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');

  readonly stroke = input<string>('currentColor');

  readonly strokeWidth = input<string | number>('2', {
    alias: 'stroke-width',
  });

  readonly strokeLinecap = input<string>('round', {
    alias: 'stroke-linecap',
  });

  readonly strokeLinejoin = input<string>('round', {
    alias: 'stroke-linejoin',
  });
}
