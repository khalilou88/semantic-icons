import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-soccer-ball-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path
      d="M11.9 6.7s-3 1.3-5 3.6c0 0 0 3.6 1.9 5.9 0 0 3.1.7 6.2 0 0 0 1.9-2.3 1.9-5.9 0 .1-2-2.3-5-3.6"
    />
    <svg:path d="M11.9 6.7V2" />
    <svg:path d="M16.9 10.4s3-1.4 4.5-1.6" />
    <svg:path d="M15 16.3s1.9 2.7 2.9 3.7" />
    <svg:path d="M8.8 16.3S6.9 19 6 20" />
    <svg:path d="M2.6 8.7C4 9 7 10.4 7 10.4" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
    'data-slot': 'icon',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSoccerBallIcon {
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
