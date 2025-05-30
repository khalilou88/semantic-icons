import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cpu-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 20v2" />
    <svg:path d="M12 2v2" />
    <svg:path d="M17 20v2" />
    <svg:path d="M17 2v2" />
    <svg:path d="M2 12h2" />
    <svg:path d="M2 17h2" />
    <svg:path d="M2 7h2" />
    <svg:path d="M20 12h2" />
    <svg:path d="M20 17h2" />
    <svg:path d="M20 7h2" />
    <svg:path d="M7 20v2" />
    <svg:path d="M7 2v2" />
    <svg:rect x="4" y="4" width="16" height="16" rx="2" />
    <svg:rect x="8" y="8" width="8" height="8" rx="1" />
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
export class SiCpuIcon {
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
