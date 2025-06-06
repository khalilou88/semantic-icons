import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-strikethrough-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5 7.05037C5 4.26113 7.26113 2 10.0504 2H18.5C18.9142 2 19.25 2.33579 19.25 2.75C19.25 3.16421 18.9142 3.5 18.5 3.5H10.0504C8.08955 3.5 6.5 5.08955 6.5 7.05037C6.5 8.11727 6.9751 9.0924 7.74421 9.75H5.78197C5.28405 8.96333 5 8.03429 5 7.05037Z"
      fill="#323544"
    />
    <svg:path
      d="M17.2558 14.25H19.218C19.7159 15.0367 20 15.9657 20 16.9496C20 19.7389 17.7389 22 14.9496 22H6.5C6.08579 22 5.75 21.6642 5.75 21.25C5.75 20.8358 6.08579 20.5 6.5 20.5H14.9496C16.9104 20.5 18.5 18.9104 18.5 16.9496C18.5 15.8827 18.0249 14.9076 17.2558 14.25Z"
      fill="#323544"
    />
    <svg:path
      d="M5.75 11.25C5.33579 11.25 5 11.5858 5 12C5 12.4142 5.33579 12.75 5.75 12.75H19.25C19.6642 12.75 20 12.4142 20 12C20 11.5858 19.6642 11.25 19.25 11.25H5.75Z"
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
export class SiStrikethrough1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
