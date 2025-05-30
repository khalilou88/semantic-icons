import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-menu-meatballs-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.31857 14.2485C5.07689 14.2485 4.07031 13.2419 4.07031 12.0002C4.07031 10.7585 5.07689 9.75195 6.31857 9.75195C7.56024 9.75195 8.56682 10.7585 8.56682 12.0002C8.56682 13.2419 7.56024 14.2485 6.31857 14.2485ZM5.57031 12.0002C5.57031 12.4135 5.90532 12.7485 6.31857 12.7485C6.73181 12.7485 7.06682 12.4135 7.06682 12.0002C7.06682 11.587 6.73181 11.252 6.31857 11.252C5.90532 11.252 5.57031 11.587 5.57031 12.0002Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.3151 14.2485C11.0735 14.2485 10.0669 13.2419 10.0669 12.0002C10.0669 10.7585 11.0735 9.75195 12.3151 9.75195C13.5568 9.75195 14.5634 10.7585 14.5634 12.0002C14.5634 13.2419 13.5568 14.2485 12.3151 14.2485ZM11.5669 12.0002C11.5669 12.4135 11.9019 12.7485 12.3151 12.7485C12.7284 12.7485 13.0634 12.4135 13.0634 12.0002C13.0634 11.587 12.7284 11.252 12.3151 11.252C11.9019 11.252 11.5669 11.587 11.5669 12.0002Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.0635 12.0002C16.0635 13.2419 17.0701 14.2485 18.3117 14.2485C19.5534 14.2485 20.56 13.2419 20.56 12.0002C20.56 10.7585 19.5534 9.75195 18.3117 9.75195C17.0701 9.75195 16.0635 10.7585 16.0635 12.0002ZM18.3117 12.7485C17.8985 12.7485 17.5635 12.4135 17.5635 12.0002C17.5635 11.587 17.8985 11.252 18.3117 11.252C18.725 11.252 19.06 11.587 19.06 12.0002C19.06 12.4135 18.725 12.7485 18.3117 12.7485Z"
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
export class SiMenuMeatballs2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
