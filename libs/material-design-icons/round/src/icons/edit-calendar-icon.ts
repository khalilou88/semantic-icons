import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-edit-calendar-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 22H5a2 2 0 0 1-2-2l.01-14c0-1.1.88-2 1.99-2h1V3c0-.55.45-1 1-1s1 .45 1 1v1h8V3c0-.55.45-1 1-1s1 .45 1 1v1h1c1.1 0 2 .9 2 2v6h-2v-2H5v10h7v2zm10.13-5.01.71-.71a.996.996 0 0 0 0-1.41l-.71-.71a.996.996 0 0 0-1.41 0l-.71.71 2.12 2.12zm-.71.71-5.01 5.01c-.18.18-.44.29-.7.29H14.5c-.28 0-.5-.22-.5-.5v-1.21c0-.27.11-.52.29-.71l5.01-5.01 2.12 2.13z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEditCalendarIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
