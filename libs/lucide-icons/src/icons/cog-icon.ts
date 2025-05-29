import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cog-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
    <svg:path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <svg:path d="M12 2v2" />
    <svg:path d="M12 22v-2" />
    <svg:path d="m17 20.66-1-1.73" />
    <svg:path d="M11 10.27 7 3.34" />
    <svg:path d="m20.66 17-1.73-1" />
    <svg:path d="m3.34 7 1.73 1" />
    <svg:path d="M14 12h8" />
    <svg:path d="M2 12h2" />
    <svg:path d="m20.66 7-1.73 1" />
    <svg:path d="m3.34 17 1.73-1" />
    <svg:path d="m17 3.34-1 1.73" />
    <svg:path d="m11 13.73-4 6.93" />
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
export class SiCogIcon {
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
