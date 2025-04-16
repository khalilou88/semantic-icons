import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-skateboarding-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M16 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <svg:path d="M5.5 15h3.5l.75 -1.5" />
    <svg:path d="M14 19v-5l-2.5 -3l2.5 -4" />
    <svg:path d="M8 8l3 -1h4l1 3h3" />
    <svg:path
      d="M17.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z"
      fill="currentColor"
    />
    <svg:path d="M3 18c0 .552 .895 1 2 1h14c1.105 0 2 -.448 2 -1" />
    <svg:path
      d="M6.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z"
      fill="currentColor"
    />
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
export class SiSkateboardingIcon {
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
