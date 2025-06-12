import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-soap-bar-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.3 2.7c.9-.9 2.5-.9 3.4 0l5.6 5.6c.9.9.9 2.5 0 3.4l-8.6 8.6c-.9.9-2.5.9-3.4 0l-5.6-5.6c-.9-.9-.9-2.5 0-3.4Z"
    />
    <svg:path d="m13 7-6 6 3 3 6-6Z" />
    <svg:circle cx="20.5" cy="17.5" r=".5" />
    <svg:circle cx="17.5" cy="21.5" r=".5" />
    <svg:path d="M22 22h.01" />
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
export class SiSoapBarIcon {
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
