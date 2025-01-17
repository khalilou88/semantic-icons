import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-circle-dashed-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M10.1 2.182a10 10 0 0 1 3.8 0" />
    <svg:path d="M13.9 21.818a10 10 0 0 1-3.8 0" />
    <svg:path d="M17.609 3.721a10 10 0 0 1 2.69 2.7" />
    <svg:path d="M2.182 13.9a10 10 0 0 1 0-3.8" />
    <svg:path d="M20.279 17.609a10 10 0 0 1-2.7 2.69" />
    <svg:path d="M21.818 10.1a10 10 0 0 1 0 3.8" />
    <svg:path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />
    <svg:path d="M6.391 20.279a10 10 0 0 1-2.69-2.7" />
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
export class SiCircleDashedIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

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
