import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-faucet-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M10.22 4.9 5.4 6H5a2 2 0 0 1 0-4h.4l4.86 1" />
    <svg:circle cx="12" cy="4" r="2" />
    <svg:path d="m13.78 4.9 4.8 1h.4a2 2 0 0 0 0-4h-.4l-4.92 1" />
    <svg:path d="M12 6v3" />
    <svg:rect width="4" height="6" x="18" y="10" />
    <svg:path d="M22 9v8" />
    <svg:path
      d="M18 11h-2.6a3.87 3.87 0 0 0-6.8 0H7c-2.8 0-5 2.2-5 5v1h4v-1c0-.6.4-1 1-1h1.6a3.87 3.87 0 0 0 6.8 0H18"
    />
    <svg:path d="M3.5 17S2 19 2 20a2 2 0 0 0 4 0c0-1-1.5-3-1.5-3" />
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
export class SiFaucetIcon {
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
