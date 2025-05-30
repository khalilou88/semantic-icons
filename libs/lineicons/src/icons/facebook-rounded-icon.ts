import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-facebook-rounded-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2C17.5228 2 22 6.47716 22 12C22 17.5228 17.5228 22 12 22C6.47716 22 2 17.5228 2 12C2 6.47716 6.47716 2 12 2Z"
      fill="#323544"
    />
    <svg:path
      d="M13.2993 21.916V14.1918H15.4769L15.7655 11.4733H13.2993L13.3029 10.1125C13.3029 9.40344 13.3703 9.0237 14.3888 9.0237H15.7502V6.30469H13.5722C10.9559 6.30469 10.0352 7.62341 10.0352 9.84141V11.4735H8.4043V14.1923H10.0352V21.8065C10.6705 21.933 11.3274 21.9999 11.9999 21.9999C12.4344 21.9999 12.8684 21.9719 13.2993 21.916Z"
      fill="white"
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
export class SiFacebookRoundedIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
