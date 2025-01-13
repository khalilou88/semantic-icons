import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-brand-graphql-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M4 8l8 -5l8 5v8l-8 5l-8 -5z" />
    <svg:path d="M12 4l7.5 12h-15z" />
    <svg:path d="M11 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <svg:path d="M11 21a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <svg:path d="M3 8a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <svg:path d="M3 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <svg:path d="M19 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <svg:path d="M19 8a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
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
export class SiBrandGraphqlIcon {
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
