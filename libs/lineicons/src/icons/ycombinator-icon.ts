import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ycombinator-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 3V21H21V3H3ZM12.6097 13.2194V16.9355H11.4194V13.2194L8.28387 7.38387H9.70645C9.70645 7.38387 12 12.0581 12.029 12.1161C12.0581 11.9129 14.4097 7.4129 14.4097 7.4129H15.7161L12.6097 13.2194Z"
      fill="#323544"
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
export class SiYcombinatorIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
