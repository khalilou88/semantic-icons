import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-passport-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
    <svg:path
      d="M2 3.252a1.5 1.5 0 0 1 1.232-1.476l8-1.454A1.5 1.5 0 0 1 13 1.797v.47A2 2 0 0 1 14 4v10a2 2 0 0 1-2 2H4a2 2 0 0 1-1.51-.688 1.5 1.5 0 0 1-.49-1.11V3.253ZM5 8a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 4.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPassportFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('16');

  readonly height = input<string | number>('16');

  readonly viewBox = input<string>('0 0 16 16');

  readonly fill = input<string>('currentColor');
}
