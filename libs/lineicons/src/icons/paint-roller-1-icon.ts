import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-paint-roller-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.85938 5.25C4.85938 6.49264 5.86673 7.5 7.10938 7.5L16.1094 7.5C17.2675 7.5 18.2213 6.62499 18.3456 5.5H19.0012C19.4154 5.5 19.7512 5.83579 19.7512 6.25V8.25C19.7512 8.66421 19.4154 9 19.0012 9L13.1098 9C11.8672 9.00001 10.8598 10.0074 10.8598 11.25V12.6279C9.9857 12.9366 9.35938 13.7702 9.35938 14.75V19.75C9.35938 20.9926 10.3667 22 11.6094 22C12.852 22 13.8594 20.9926 13.8594 19.75V14.75C13.8594 13.7705 13.2335 12.9372 12.3598 12.6282V11.25C12.3598 10.8358 12.6956 10.5 13.1098 10.5L19.0012 10.5C20.2438 10.5 21.2512 9.49264 21.2512 8.25V6.25C21.2512 5.00736 20.2438 4 19.0012 4H18.3456C18.2213 2.87501 17.2675 2 16.1094 2H7.10937C5.86673 2 4.85938 3.00736 4.85938 4.25V5.25ZM7.10938 6C6.69516 6 6.35938 5.66421 6.35937 5.25V4.25C6.35937 3.83579 6.69516 3.5 7.10937 3.5L16.1094 3.5C16.5236 3.5 16.8594 3.83579 16.8594 4.25V5.25C16.8594 5.66421 16.5236 6 16.1094 6L7.10938 6ZM10.8594 14.75C10.8594 14.3358 11.1952 14 11.6094 14C12.0236 14 12.3594 14.3358 12.3594 14.75V19.75C12.3594 20.1642 12.0236 20.5 11.6094 20.5C11.1952 20.5 10.8594 20.1642 10.8594 19.75V14.75Z"
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
export class SiPaintRoller1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
