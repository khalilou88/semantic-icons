import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mouse-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.50006 9.86722C4.50006 5.72506 7.85794 2.36719 12.0001 2.36719C16.1422 2.36719 19.5001 5.72507 19.5001 9.86722V14.8672C19.5001 19.0093 16.1422 22.3672 12.0001 22.3672C7.85794 22.3672 4.50006 19.0093 4.50006 14.8672V10.6269C4.50002 10.6236 4.5 10.6204 4.5 10.6172C4.5 10.614 4.50002 10.6107 4.50006 10.6075V9.86722ZM6.00006 11.3672V14.8672C6.00006 18.1809 8.68637 20.8672 12.0001 20.8672C15.3138 20.8672 18.0001 18.1809 18.0001 14.8672V11.3672H6.00006ZM11.2501 9.86719L11.2501 3.91361C8.29035 4.28268 6.00008 6.80747 6.00006 9.86719H11.2501ZM12.7501 9.86719H18.0001C18.0001 6.80747 15.7098 4.28268 12.7501 3.91361L12.7501 9.86719Z"
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
export class SiMouse2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
