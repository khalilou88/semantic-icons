import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-film-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></svg:rect>
    <svg:line x1="7" y1="2" x2="7" y2="22"></svg:line>
    <svg:line x1="17" y1="2" x2="17" y2="22"></svg:line>
    <svg:line x1="2" y1="12" x2="22" y2="12"></svg:line>
    <svg:line x1="2" y1="7" x2="7" y2="7"></svg:line>
    <svg:line x1="2" y1="17" x2="7" y2="17"></svg:line>
    <svg:line x1="17" y1="17" x2="22" y2="17"></svg:line>
    <svg:line x1="17" y1="7" x2="22" y2="7"></svg:line>
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
export class SiFilmIcon {
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
