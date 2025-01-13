import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-circle-dotted-letter-k-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M10 8v8" />
    <svg:path d="M14 8l-2.5 4l2.5 4" />
    <svg:path d="M10 12h1.5" />
    <svg:path d="M7.5 4.21v.01" />
    <svg:path d="M4.21 7.5v.01" />
    <svg:path d="M3 12v.01" />
    <svg:path d="M4.21 16.5v.01" />
    <svg:path d="M7.5 19.79v.01" />
    <svg:path d="M12 21v.01" />
    <svg:path d="M16.5 19.79v.01" />
    <svg:path d="M19.79 16.5v.01" />
    <svg:path d="M21 12v.01" />
    <svg:path d="M19.79 7.5v.01" />
    <svg:path d="M16.5 4.21v.01" />
    <svg:path d="M12 3v.01" />
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
export class SiCircleDottedLetterKIcon {
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
