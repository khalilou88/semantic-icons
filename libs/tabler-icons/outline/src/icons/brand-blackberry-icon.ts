import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-brand-blackberry-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M7 6a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
    <svg:path d="M6 12a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
    <svg:path d="M13 12a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
    <svg:path d="M14 6a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
    <svg:path d="M12 18a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
    <svg:path d="M20 15a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
    <svg:path d="M21 9a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
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
export class SiBrandBlackberryIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

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
