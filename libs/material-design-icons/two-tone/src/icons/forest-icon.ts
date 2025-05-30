import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-forest-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.48 10h1.68L15 5.49l-1.78 2.54L16 12h-1.86l2.57 4h3.63zm-4.32 0L9 5.49 5.84 10h1.68l-3.86 6h10.68l-3.86-6z"
      opacity=".3"
    />
    <svg:path
      d="M20.14 12H22L15 2l-3 4.29L9 2 2 12h1.86L0 18h7v4h4v-4h2v4h4v-4h7l-3.86-6zM3.66 16l3.86-6H5.84L9 5.49 12.16 10h-1.68l3.86 6H3.66zm13.05 0-2.57-4H16l-2.78-3.97L15 5.49 18.16 10h-1.68l3.86 6h-3.63z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiForestIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
