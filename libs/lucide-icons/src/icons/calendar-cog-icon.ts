import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-calendar-cog-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m15.228 16.852-.923-.383" />
    <svg:path d="m15.228 19.148-.923.383" />
    <svg:path d="M16 2v4" />
    <svg:path d="m16.47 14.305.382.923" />
    <svg:path d="m16.852 20.772-.383.924" />
    <svg:path d="m19.148 15.228.383-.923" />
    <svg:path d="m19.53 21.696-.382-.924" />
    <svg:path d="m20.772 16.852.924-.383" />
    <svg:path d="m20.772 19.148.924.383" />
    <svg:path d="M21 11V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
    <svg:path d="M3 10h18" />
    <svg:path d="M8 2v4" />
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
export class SiCalendarCogIcon {
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
