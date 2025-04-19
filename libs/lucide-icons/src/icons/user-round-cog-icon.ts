import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-user-round-cog-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m14.305 19.53.923-.382" />
    <svg:path d="m15.228 16.852-.923-.383" />
    <svg:path d="m16.852 15.228-.383-.923" />
    <svg:path d="m16.852 20.772-.383.924" />
    <svg:path d="m19.148 15.228.383-.923" />
    <svg:path d="m19.53 21.696-.382-.924" />
    <svg:path d="M2 21a8 8 0 0 1 10.434-7.62" />
    <svg:path d="m20.772 16.852.924-.383" />
    <svg:path d="m20.772 19.148.924.383" />
    <svg:circle cx="10" cy="8" r="5" />
    <svg:circle cx="18" cy="18" r="3" />
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
    'data-slot': 'icon',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiUserRoundCogIcon {
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
