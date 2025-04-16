import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-brand-deezer-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M3 16.5h2v.5h-2z" />
    <svg:path d="M8 16.5h2.5v.5h-2.5z" />
    <svg:path d="M16 17h-2.5v-.5h2.5z" />
    <svg:path d="M21.5 17h-2.5v-.5h2.5z" />
    <svg:path d="M21.5 13h-2.5v.5h2.5z" />
    <svg:path d="M21.5 9.5h-2.5v.5h2.5z" />
    <svg:path d="M21.5 6h-2.5v.5h2.5z" />
    <svg:path d="M16 13h-2.5v.5h2.5z" />
    <svg:path d="M8 13.5h2.5v-.5h-2.5z" />
    <svg:path d="M8 9.5h2.5v.5h-2.5z" />
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
export class SiBrandDeezerIcon {
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
