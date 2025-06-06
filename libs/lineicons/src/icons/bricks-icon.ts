import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bricks-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.66699 6.75C8.66699 5.50736 9.67435 4.5 10.917 4.5H14.0837C15.3263 4.5 16.3337 5.50736 16.3337 6.75V9H17.1667C18.4093 9 19.4167 10.0074 19.4167 11.25V13.5H20.2497C21.4923 13.5 22.4997 14.5074 22.4997 15.75V18.75C22.4997 19.1642 22.1639 19.5 21.7497 19.5H3.25C2.83579 19.5 2.5 19.1642 2.5 18.75V15.75C2.5 14.5074 3.50736 13.5 4.75 13.5H5.58398V11.25C5.58398 10.0074 6.59134 9 7.83398 9H8.66699V6.75ZM10.167 9H14.8337V6.75C14.8337 6.33579 14.4979 6 14.0837 6H10.917C10.5028 6 10.167 6.33579 10.167 6.75V9ZM7.83398 10.5C7.41977 10.5 7.08398 10.8358 7.08398 11.25V13.5H11.7507V10.5H7.83398ZM13.2507 10.5V13.5H17.9167V11.25C17.9167 10.8358 17.5809 10.5 17.1667 10.5H13.2507ZM4.75 15C4.33579 15 4 15.3358 4 15.75V18H8.66667V15H4.75ZM10.1667 15V18H14.8337V15H10.1667ZM16.3337 15V18H20.9997V15.75C20.9997 15.3358 20.6639 15 20.2497 15H16.3337Z"
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
export class SiBricksIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
