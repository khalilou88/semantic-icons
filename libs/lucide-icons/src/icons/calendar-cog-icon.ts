import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-calendar-cog-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m15.2 16.9-.9-.4" />
    <svg:path d="m15.2 19.1-.9.4" />
    <svg:path d="M16 2v4" />
    <svg:path d="m16.9 15.2-.4-.9" />
    <svg:path d="m16.9 20.8-.4.9" />
    <svg:path d="m19.5 14.3-.4.9" />
    <svg:path d="m19.5 21.7-.4-.9" />
    <svg:path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
    <svg:path d="m21.7 16.5-.9.4" />
    <svg:path d="m21.7 19.5-.9-.4" />
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
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCalendarCogIcon {
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
