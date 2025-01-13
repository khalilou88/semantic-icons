import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-10k-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M10 10.5h1.5v3H10zm9 4.5V9l-2.25 3z" opacity=".3" />
    <svg:path
      d="M5 9h2.5v6H6v-4.5H5V19h14v-4h-1.75l-1.75-2.25V15H14V9h1.5v2.25L17.25 9H19V5H5v4zm3.5 1c0-.55.45-1 1-1H12c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H9.5c-.55 0-1-.45-1-1v-4z"
      opacity=".3"
    />
    <svg:path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 6v10H5v-8.5h1V15h1.5V9H5V5h14v4z"
    />
    <svg:path
      d="M15.5 11.25V9H14v6h1.5v-2.25L17.25 15H19l-2.25-3L19 9h-1.75zM9.5 15H12c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H9.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-4.5h1.5v3H10v-3z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Si10kIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
