import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-keynote-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.9992 2C19.552 2 20.086 2.42969 20.1955 2.97705L21.8047 11.023C21.9126 11.5626 21.5448 12 21.0083 12H12.9998V20H17.0001V22H7.00006V20H10.9998V12H2.99187C2.44411 12 2.086 11.5703 2.19547 11.023L3.80465 2.97705C3.91258 2.43744 4.4447 2 5.00094 2H18.9992Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKeynoteFillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
