import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-alibaba-cloud-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5 5C2.79086 5 1 6.79086 1 9V15C1 17.2091 2.79086 19 5 19H9L8 17H5C3.89543 17 3 16.1046 3 15V9C3 7.89543 3.89543 7 5 7H8L9 5H5ZM16 7H19C20.1046 7 21 7.89543 21 9V15C21 16.1046 20.1046 17 19 17H16L15 19H19C21.2091 19 23 17.2091 23 15V9C23 6.79086 21.2091 5 19 5H15L16 7ZM8 13H16V11H8V13Z"
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
export class SiAlibabaCloudLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
