import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-school-bench-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 5.25C22 4.83579 21.6642 4.5 21.25 4.5C20.8358 4.5 20.5 4.83579 20.5 5.25V11.25H16.5C15.2574 11.25 14.25 12.2574 14.25 13.5V18.75C14.25 19.1642 14.5858 19.5 15 19.5C15.4142 19.5 15.75 19.1642 15.75 18.75V13.5C15.75 13.0858 16.0858 12.75 16.5 12.75H20.5V18.75C20.5 19.1642 20.8358 19.5 21.25 19.5C21.6642 19.5 22 19.1642 22 18.75V5.25Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.75 6C2.55109 6 2.36032 6.07902 2.21967 6.21967C2.07902 6.36032 2 6.55109 2 6.75V18.75C2 19.1642 2.33579 19.5 2.75 19.5C3.16421 19.5 3.5 19.1642 3.5 18.75V11.25H11.25V18.75C11.25 19.1642 11.5858 19.5 12 19.5C12.4142 19.5 12.75 19.1642 12.75 18.75V6.75C12.75 6.33579 12.4142 6 12 6H2.75ZM11.25 9.75H3.5V7.5H11.25V9.75Z"
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
export class SiSchoolBench1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
