import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-infrared-thermometer-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 2V11H17.999L18 12C18 14.2091 16.2091 16 14 16H12.621L12.0084 19.1113L12.9192 20.4324C13.2327 20.8871 13.1182 21.5098 12.6635 21.8233C12.4966 21.9384 12.2987 22 12.0959 22H3L5.31286 11.9762L3 11L7 2H21ZM15.999 11H13.6051L13.014 14H14C15.1046 14 16 13.1046 16 12L15.999 11Z"
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
export class SiInfraredThermometerFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
