import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tablet-landscape-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M0 82v348a18 18 0 0018 18h476a18 18 0 0018-18V82a18 18 0 00-18-18H18A18 18 0 000 82zm448 330H64V100h384z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTabletLandscapeSharpIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
