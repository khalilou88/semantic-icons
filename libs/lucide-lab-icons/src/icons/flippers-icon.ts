import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-flippers-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 17c0-4 2-7 2-13.5 0-.3-.2-.5-.5-.5C19 3 17 4 17 4s-2-1-4.5-1h-1C9 3 7 4 7 4S5 3 2.5 3c-.3 0-.5.2-.5.5C2 10 4 13 4 17"
    />
    <svg:path d="M12 3v.5C12 10 10 13 10 17" />
    <svg:rect width="6" height="7" x="4" y="14" rx="3" />
    <svg:path d="M12 3.5C12 10 14 13 14 17" />
    <svg:rect width="6" height="7" x="14" y="14" rx="3" />
    <svg:path d="M7 4v6" />
    <svg:path d="M17 4v6" />
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
export class SiFlippersIcon {
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
