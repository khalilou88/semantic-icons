import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-monitor-cog-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 17v4" />
    <svg:path d="m14.305 7.53.923-.382" />
    <svg:path d="m15.228 4.852-.923-.383" />
    <svg:path d="m16.852 3.228-.383-.924" />
    <svg:path d="m16.852 8.772-.383.923" />
    <svg:path d="m19.148 3.228.383-.924" />
    <svg:path d="m19.53 9.696-.382-.924" />
    <svg:path d="m20.772 4.852.924-.383" />
    <svg:path d="m20.772 7.148.924.383" />
    <svg:path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
    <svg:path d="M8 21h8" />
    <svg:circle cx="18" cy="6" r="3" />
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
export class SiMonitorCogIcon {
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
