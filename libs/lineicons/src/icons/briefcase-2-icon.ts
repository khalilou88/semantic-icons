import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-briefcase-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.77344 5.25C7.77344 4.00736 8.7808 3 10.0234 3H14.0234C15.2661 3 16.2734 4.00736 16.2734 5.25V6H19.2736C20.5163 6 21.5236 7.00736 21.5236 8.25V17.25C21.5236 18.4926 20.5163 19.5 19.2736 19.5H4.77344C3.5308 19.5 2.52344 18.4926 2.52344 17.25V8.25C2.52344 7.00736 3.5308 6 4.77344 6H7.77344V5.25ZM14.7734 5.25C14.7734 4.83579 14.4377 4.5 14.0234 4.5H10.0234C9.60922 4.5 9.27344 4.83579 9.27344 5.25V6H14.7734V5.25ZM4.77344 7.5C4.35922 7.5 4.02344 7.83579 4.02344 8.25V10.5H9.44185C9.72271 9.90876 10.3253 9.5 11.0234 9.5H13.0234C13.7215 9.5 14.3242 9.90876 14.605 10.5H20.0236V8.25C20.0236 7.83579 19.6879 7.5 19.2736 7.5H4.77344ZM9.44185 12H4.02344V17.25C4.02344 17.6642 4.35922 18 4.77344 18H19.2736C19.6879 18 20.0236 17.6642 20.0236 17.25V12H14.605C14.3242 12.5912 13.7215 13 13.0234 13H11.0234C10.3253 13 9.72271 12.5912 9.44185 12Z"
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
export class SiBriefcase2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
