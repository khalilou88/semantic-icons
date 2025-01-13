import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-deselect-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M12 8h3a1 1 0 0 1 1 1v3" />
    <svg:path d="M16 16h-7a1 1 0 0 1 -1 -1v-7" />
    <svg:path d="M12 20v.01" />
    <svg:path d="M16 20v.01" />
    <svg:path d="M8 20v.01" />
    <svg:path d="M4 20v.01" />
    <svg:path d="M4 16v.01" />
    <svg:path d="M4 12v.01" />
    <svg:path d="M4 8v.01" />
    <svg:path d="M8 4v.01" />
    <svg:path d="M12 4v.01" />
    <svg:path d="M16 4v.01" />
    <svg:path d="M20 4v.01" />
    <svg:path d="M20 8v.01" />
    <svg:path d="M20 12v.01" />
    <svg:path d="M20 16v.01" />
    <svg:path d="M3 3l18 18" />
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
export class SiDeselectIcon {
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
