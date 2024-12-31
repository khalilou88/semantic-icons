import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ubuntu-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 21.9997C17.5229 21.9997 22 17.5225 22 12C22 6.47709 17.523 2 12 2C6.47716 2 2 6.47709 2 12C2 17.5225 6.47701 21.9997 12 21.9997ZM3.865 12C3.865 11.2623 4.46265 10.6646 5.20034 10.6646C5.93771 10.6646 6.53535 11.2623 6.53535 12C6.53535 12.7373 5.93771 13.335 5.20034 13.335C4.46265 13.335 3.865 12.7373 3.865 12ZM14.2442 18.5558C13.8753 17.9176 14.0944 17.1015 14.7329 16.7326C15.371 16.3642 16.1876 16.5831 16.5561 17.2212C16.9249 17.8599 16.7059 18.676 16.0674 19.0445C15.4288 19.4133 14.6127 19.1944 14.2442 18.5558ZM9.75848 8.8091C8.75577 9.51491 8.1004 10.6806 8.1004 12C8.1004 13.3194 8.75577 14.485 9.75848 15.1904L8.7824 16.8257C7.61388 16.0449 6.7447 14.8516 6.38396 13.4539C6.80548 13.11 7.07521 12.5864 7.07521 11.9999C7.07521 11.413 6.80548 10.8895 6.38396 10.5457C6.74517 9.14822 7.61435 7.95512 8.7824 7.17428L9.75848 8.8091ZM15.8843 11.654C15.7088 9.66191 14.0373 8.09993 12 8.09993C11.4325 8.0994 10.8718 8.22322 10.3573 8.4627L9.42962 6.80023C10.2286 6.40457 11.1084 6.19916 12 6.20007C12.5236 6.20022 13.0448 6.27109 13.5495 6.41075C13.6365 6.94723 13.9549 7.4415 14.4626 7.73449C14.9693 8.02662 15.5558 8.05599 16.0634 7.86419C17.0506 8.83503 17.6931 10.1553 17.7866 11.626L15.8843 11.654ZM10.3574 15.5369C10.8719 15.7764 11.4326 15.9002 12 15.8997C14.0374 15.8997 15.7088 14.3382 15.8839 12.3455L17.7868 12.3735C17.6931 13.8442 17.0507 15.1645 16.0634 16.1353C15.5559 15.9435 14.9698 15.9724 14.4626 16.265C13.955 16.5585 13.6366 17.0523 13.5496 17.5888C13.045 17.7288 12.5238 17.7999 12.0001 17.8C11.1084 17.8009 10.2286 17.5953 9.4297 17.1992L10.3574 15.5369ZM16.5556 6.7783C16.1872 7.41691 15.371 7.63526 14.7324 7.26654C14.0943 6.89805 13.8754 6.08197 14.2437 5.44367C14.6127 4.80506 15.4288 4.58624 16.0674 4.95465C16.706 5.32353 16.9245 6.13969 16.5556 6.7783Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgUbuntuIcon {
  readonly class = input<string>('');
}
