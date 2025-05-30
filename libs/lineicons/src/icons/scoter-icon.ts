import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-scoter-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.75 4.25C9.75 3.00736 10.7574 2 12 2C13.2426 2 14.25 3.00736 14.25 4.25C14.25 5.49264 13.2426 6.5 12 6.5C10.7574 6.5 9.75 5.49264 9.75 4.25ZM12 3.5C11.5858 3.5 11.25 3.83579 11.25 4.25C11.25 4.66421 11.5858 5 12 5C12.4142 5 12.75 4.66421 12.75 4.25C12.75 3.83579 12.4142 3.5 12 3.5Z"
      fill="#323544"
    />
    <svg:path
      d="M10.5 17.5C10.5 16.6716 11.1716 16 12 16C12.8284 16 13.5 16.6716 13.5 17.5V20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5V17.5Z"
      fill="#323544"
    />
    <svg:path
      d="M15.675 3.5C15.7242 3.74229 15.75 3.99306 15.75 4.24986C15.75 4.50676 15.7242 4.75762 15.675 5L18.5 5C18.9142 5 19.25 4.66421 19.25 4.25C19.25 3.83579 18.9142 3.5 18.5 3.5H15.675Z"
      fill="#323544"
    />
    <svg:path
      d="M15.2613 6.10215C15.0102 6.54331 14.6722 6.92855 14.2706 7.23457C15.2427 7.93863 15.875 9.08297 15.875 10.375V14.875C15.875 15.8083 15.5451 16.6645 14.9955 17.3334C14.9985 17.3885 15 17.444 15 17.4999V19.3356C16.4327 18.3701 17.375 16.7326 17.375 14.875V10.375C17.375 8.63287 16.5462 7.08432 15.2613 6.10215Z"
      fill="#323544"
    />
    <svg:path
      d="M9.72943 7.23457C9.32778 6.92855 8.98975 6.54331 8.73865 6.10215C7.45382 7.08432 6.625 8.63287 6.625 10.375V14.875C6.625 16.7326 7.56731 18.3701 9 19.3356V17.4999C9 17.444 9.00153 17.3885 9.00454 17.3334C8.45494 16.6645 8.125 15.8083 8.125 14.875V10.375C8.125 9.08297 8.75734 7.93863 9.72943 7.23457Z"
      fill="#323544"
    />
    <svg:path
      d="M8.32504 5L5.5 5C5.08579 5 4.75 4.66421 4.75 4.25C4.75 3.83579 5.08579 3.5 5.5 3.5H8.32498C8.27581 3.74229 8.25 3.99306 8.25 4.24986C8.25 4.50676 8.27583 4.75762 8.32504 5Z"
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
export class SiScoterIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
