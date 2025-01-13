import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-chart-scatter-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    <svg:circle cx="18.5" cy="5.5" r=".5" fill="currentColor" />
    <svg:circle cx="11.5" cy="11.5" r=".5" fill="currentColor" />
    <svg:circle cx="7.5" cy="16.5" r=".5" fill="currentColor" />
    <svg:circle cx="17.5" cy="14.5" r=".5" fill="currentColor" />
    <svg:path d="M3 3v16a2 2 0 0 0 2 2h16" />
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
export class SiChartScatterIcon {
  readonly xmlns = input('http://www.w3.org/2000/svg');

  readonly width = input('24');

  readonly height = input('24');

  readonly viewBox = input('0 0 24 24');

  readonly fill = input('none');

  readonly stroke = input('currentColor');

  readonly strokeWidth = input<string>('2', {
    alias: 'stroke-width',
  });

  readonly strokeLinecap = input<string>('round', {
    alias: 'stroke-linecap',
  });

  readonly strokeLinejoin = input<string>('round', {
    alias: 'stroke-linejoin',
  });
}
