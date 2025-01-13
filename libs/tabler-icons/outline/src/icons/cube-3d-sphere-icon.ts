import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cube-3d-sphere-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M6 17.6l-2 -1.1v-2.5" />
    <svg:path d="M4 10v-2.5l2 -1.1" />
    <svg:path d="M10 4.1l2 -1.1l2 1.1" />
    <svg:path d="M18 6.4l2 1.1v2.5" />
    <svg:path d="M20 14v2.5l-2 1.12" />
    <svg:path d="M14 19.9l-2 1.1l-2 -1.1" />
    <svg:path d="M12 12l2 -1.1" />
    <svg:path d="M18 8.6l2 -1.1" />
    <svg:path d="M12 12l0 2.5" />
    <svg:path d="M12 18.5l0 2.5" />
    <svg:path d="M12 12l-2 -1.12" />
    <svg:path d="M6 8.6l-2 -1.1" />
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
export class SiCube3dSphereIcon {
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
