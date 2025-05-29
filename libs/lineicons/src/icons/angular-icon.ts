import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-angular-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.3062 12.5484H13.7256L11.9837 8.45161L10.3062 12.5484ZM11.9837 2L2.72559 5.32258L4.1772 17.6452L11.9837 22L19.8546 17.6452L21.274 5.32258L11.9837 2ZM17.7901 17.2258H15.5966L14.4675 14.3226H9.53204L8.3385 17.2258H6.17721L11.9837 4.22581L17.7901 17.2258Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAngularIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
