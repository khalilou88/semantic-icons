import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-brain-cog-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5"
    />
    <svg:path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
    <svg:path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
    <svg:path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
    <svg:path d="M19.938 10.5a4 4 0 0 1 .585.396" />
    <svg:path d="M6 18a4 4 0 0 1-1.967-.516" />
    <svg:path d="M19.967 17.484A4 4 0 0 1 18 18" />
    <svg:circle cx="12" cy="12" r="3" />
    <svg:path d="m15.7 10.4-.9.4" />
    <svg:path d="m9.2 13.2-.9.4" />
    <svg:path d="m13.6 15.7-.4-.9" />
    <svg:path d="m10.8 9.2-.4-.9" />
    <svg:path d="m15.7 13.5-.9-.4" />
    <svg:path d="m9.2 10.9-.9-.4" />
    <svg:path d="m10.5 15.7.4-.9" />
    <svg:path d="m13.1 9.2.4-.9" />
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
export class SiBrainCogIcon {
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
