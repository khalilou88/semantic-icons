import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-nederlandse-spoorwegen-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Nederlandse Spoorwegen</svg:title>
    <svg:path
      d="M10.494 11.812a2.602 2.602 0 0 0-1.835-.751H3.576L5.46 9.184h4.753a.757.757 0 0 1 .516.234l2.777 2.77a2.602 2.602 0 0 0 1.835.75h5.084l-1.884 1.878h-4.752a.757.757 0 0 1-.516-.235zm1.459 4.083a2.863 2.863 0 0 0 1.835.798h5.506L24 12l-4.706-4.694H16.66l3.764 3.755h-5.082a.99.99 0 0 1-.516-.188l-2.778-2.769a2.863 2.863 0 0 0-1.835-.798H4.706L0 12l4.706 4.693H7.34L3.577 12.94h5.082a.99.99 0 0 1 .516.187z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNederlandseSpoorwegenIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#003082');
}
