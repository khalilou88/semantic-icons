import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-qr-code-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect width="5" height="5" x="3" y="3" rx="1" />
    <svg:rect width="5" height="5" x="16" y="3" rx="1" />
    <svg:rect width="5" height="5" x="3" y="16" rx="1" />
    <svg:path d="M21 16h-3a2 2 0 0 0-2 2v3" />
    <svg:path d="M21 21v.01" />
    <svg:path d="M12 7v3a2 2 0 0 1-2 2H7" />
    <svg:path d="M3 12h.01" />
    <svg:path d="M12 3h.01" />
    <svg:path d="M12 16v.01" />
    <svg:path d="M16 12h1" />
    <svg:path d="M21 12v.01" />
    <svg:path d="M12 21v-1" />
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
export class SiQrCodeIcon {
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
