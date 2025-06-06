import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sliders-horizontal-square-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.3125 7C14.3125 6.58579 13.9767 6.25 13.5625 6.25C13.1483 6.25 12.8125 6.58579 12.8125 7L12.8125 8.25049H7.3125C6.89829 8.25049 6.5625 8.58627 6.5625 9.00049C6.5625 9.4147 6.89829 9.75049 7.3125 9.75049H12.8125L12.8125 11C12.8125 11.4142 13.1483 11.75 13.5625 11.75C13.9767 11.75 14.3125 11.4142 14.3125 11L14.3125 7Z"
      fill="#323544"
    />
    <svg:path
      d="M17.3125 8.25049H15.8125L15.8125 9.75049H17.3125C17.7267 9.75049 18.0625 9.4147 18.0625 9.00049C18.0625 8.58627 17.7267 8.25049 17.3125 8.25049Z"
      fill="#323544"
    />
    <svg:path
      d="M9.56055 12.25C9.14633 12.25 8.81055 12.5858 8.81055 13L8.81055 14.25H7.3125C6.89829 14.25 6.5625 14.5858 6.5625 15C6.5625 15.4142 6.89829 15.75 7.3125 15.75H8.81054L8.81054 17C8.81054 17.4142 9.14633 17.75 9.56054 17.75C9.97476 17.75 10.3105 17.4142 10.3105 17L10.3105 13C10.3105 12.5858 9.97476 12.25 9.56055 12.25Z"
      fill="#323544"
    />
    <svg:path
      d="M11.8086 14.25H17.3125C17.7267 14.25 18.0625 14.5858 18.0625 15C18.0625 15.4142 17.7267 15.75 17.3125 15.75H11.8086L11.8086 14.25Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.5625 5.5C3.5625 4.25736 4.56986 3.25 5.8125 3.25H18.8125C20.0551 3.25 21.0625 4.25736 21.0625 5.5L21.0625 18.4995C21.0625 19.7422 20.0551 20.7495 18.8125 20.7495H5.8125C4.56986 20.7495 3.5625 19.7422 3.5625 18.4995V5.5ZM5.8125 4.75C5.39829 4.75 5.0625 5.08579 5.0625 5.5V18.4995C5.0625 18.9137 5.39829 19.2495 5.8125 19.2495H18.8125C19.2267 19.2495 19.5625 18.9137 19.5625 18.4995L19.5625 5.5C19.5625 5.08579 19.2267 4.75 18.8125 4.75H5.8125Z"
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
export class SiSlidersHorizontalSquare2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
