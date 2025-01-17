import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-corner-left-down-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.0002 5.00011L19.0001 4.99997L19.0001 6.99997L12.0002 7.00008L12.0001 17.1719L15.9498 13.2222L17.3641 14.6364L11.0001 21.0004L4.63614 14.6364L6.05035 13.2222L10.0001 17.172L10.0002 5.00011Z"
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
export class SiCornerLeftDownLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
