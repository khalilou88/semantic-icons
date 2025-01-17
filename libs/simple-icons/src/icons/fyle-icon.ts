import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-fyle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Fyle</svg:title>
    <svg:path
      d="M10.024 0H1.241C.56 0 0 .56 0 1.243v21.514C0 23.44.56 24 1.241 24h21.518A1.24 1.24 0 0 0 24 22.757V1.243C24 .56 23.44 0 22.759 0H11.675v15.592c-.04.775-.29 1.397-.761 1.865-.92.927-2.521 1.049-3.921 1.049-1.891 0-4.432-.244-4.862-2.273l-.06-.508c-.02-.101-.02-.387-.02-1.131V3.965c0-.488.16-.907.51-1.254A1.7 1.7 0 0 1 3.812 2.2l4.611.02.161.041v1.562H3.962c-.12 0-.18.061-.18.142v3.484h3.491v1.599H3.782v6.566c.04 1.15 1.74 1.375 3.181 1.375.64-.021 1.991-.021 2.601-.632.16-.165.32-.471.46-.928V0Z"
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
export class SiFyleIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FF2E63');
}
