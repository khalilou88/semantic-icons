import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-freecad-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>FreeCAD</svg:title>
    <svg:path
      d="M6 0h16v7.996a.7.7 0 0 1-.288.566l-2.173 1.58a.7.7 0 0 0-.289.565v.586c0 .224.107.434.289.566l1.895 1.377a.7.7 0 0 1 .254.783l-.649 1.997a.7.7 0 0 1-.665.484H18.03a.7.7 0 0 0-.566.288l-.344.474a.7.7 0 0 0-.1.627l.724 2.229a.7.7 0 0 1-.254.782l-1.699 1.234a.7.7 0 0 1-.823 0l-1.895-1.377a.7.7 0 0 0-.628-.099l-.556.18a.7.7 0 0 0-.45.45l-.724 2.228a.7.7 0 0 1-.665.484H2V4zm12 8V4H6v16h4v-5h4v-4h-4V8z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFreecadIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#418FDE');
}
