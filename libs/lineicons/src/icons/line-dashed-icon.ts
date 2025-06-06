import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-line-dashed-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.5 12C2.5 11.5858 2.83579 11.25 3.25 11.25H7.41667C7.83088 11.25 8.16667 11.5858 8.16667 12C8.16667 12.4142 7.83088 12.75 7.41667 12.75L3.25 12.75C2.83579 12.75 2.5 12.4142 2.5 12Z"
      fill="#323544"
    />
    <svg:path
      d="M9.66699 12C9.66699 11.5858 10.0028 11.25 10.417 11.25H14.5837C14.9979 11.25 15.3337 11.5858 15.3337 12C15.3337 12.4142 14.9979 12.75 14.5837 12.75L10.417 12.75C10.0028 12.75 9.66699 12.4142 9.66699 12Z"
      fill="#323544"
    />
    <svg:path
      d="M17.5835 11.25C17.1693 11.25 16.8335 11.5858 16.8335 12C16.8335 12.4142 17.1693 12.75 17.5835 12.75L21.7502 12.75C22.1644 12.75 22.5002 12.4142 22.5002 12C22.5002 11.5858 22.1644 11.25 21.7502 11.25H17.5835Z"
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
export class SiLineDashedIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
