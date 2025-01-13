import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hierarchy-3-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <svg:path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <svg:path d="M12 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <svg:path d="M20 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <svg:path d="M4 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <svg:path d="M16 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <svg:path d="M5 17l2 -3" />
    <svg:path d="M9 10l2 -3" />
    <svg:path d="M13 7l2 3" />
    <svg:path d="M17 14l2 3" />
    <svg:path d="M15 14l-2 3" />
    <svg:path d="M9 14l2 3" />
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
export class SiHierarchy3Icon {
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
