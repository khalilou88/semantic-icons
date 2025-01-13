import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-user-cog-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="18" cy="15" r="3" />
    <svg:circle cx="9" cy="7" r="4" />
    <svg:path d="M10 15H6a4 4 0 0 0-4 4v2" />
    <svg:path d="m21.7 16.4-.9-.3" />
    <svg:path d="m15.2 13.9-.9-.3" />
    <svg:path d="m16.6 18.7.3-.9" />
    <svg:path d="m19.1 12.2.3-.9" />
    <svg:path d="m19.6 18.7-.4-1" />
    <svg:path d="m16.8 12.3-.4-1" />
    <svg:path d="m14.3 16.6 1-.4" />
    <svg:path d="m20.7 13.8 1-.4" />
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
export class SiUserCogIcon {
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
