import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-notepad-text-dashed-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M8 2v4" />
    <svg:path d="M12 2v4" />
    <svg:path d="M16 2v4" />
    <svg:path d="M16 4h2a2 2 0 0 1 2 2v2" />
    <svg:path d="M20 12v2" />
    <svg:path d="M20 18v2a2 2 0 0 1-2 2h-1" />
    <svg:path d="M13 22h-2" />
    <svg:path d="M7 22H6a2 2 0 0 1-2-2v-2" />
    <svg:path d="M4 14v-2" />
    <svg:path d="M4 8V6a2 2 0 0 1 2-2h2" />
    <svg:path d="M8 10h6" />
    <svg:path d="M8 14h8" />
    <svg:path d="M8 18h5" />
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
export class SiNotepadTextDashedIcon {
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
