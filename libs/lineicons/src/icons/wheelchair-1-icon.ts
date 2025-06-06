import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wheelchair-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.625 2.75C2.625 2.33579 2.96079 2 3.375 2H4.875C6.11764 2 7.125 3.00736 7.125 4.25V6.375H16.125C17.3676 6.375 18.375 7.38236 18.375 8.625V17.378C18.8833 17.5577 19.3078 17.9148 19.574 18.375H21.25C21.6642 18.375 22 18.7108 22 19.125C22 19.5392 21.6642 19.875 21.25 19.875H19.8439C19.6654 20.9391 18.7399 21.75 17.625 21.75C16.3824 21.75 15.375 20.7426 15.375 19.5C15.375 18.5203 16.0011 17.6869 16.875 17.378V13.1304H13.7557C14.1481 13.9428 14.3681 14.8541 14.3681 15.8169C14.3681 19.2322 11.5994 22.0009 8.18405 22.0009C4.76869 22.0009 2 19.2322 2 15.8169C2 13.3142 3.48664 11.1588 5.625 10.1855V4.25C5.625 3.83579 5.28921 3.5 4.875 3.5H3.375C2.96079 3.5 2.625 3.16421 2.625 2.75ZM7.125 9.72314C7.46912 9.66376 7.82297 9.63281 8.18405 9.63281C9.98459 9.63281 11.6054 10.4023 12.7356 11.6304H16.875V8.625C16.875 8.21079 16.5392 7.875 16.125 7.875H7.125V9.72314ZM8.18405 11.1328C5.59712 11.1328 3.5 13.2299 3.5 15.8169C3.5 18.4038 5.59712 20.5009 8.18405 20.5009C10.771 20.5009 12.8681 18.4038 12.8681 15.8169C12.8681 13.2299 10.771 11.1328 8.18405 11.1328ZM16.875 19.5C16.875 19.9142 17.2108 20.25 17.625 20.25C18.0392 20.25 18.375 19.9142 18.375 19.5C18.375 19.0858 18.0392 18.75 17.625 18.75C17.2108 18.75 16.875 19.0858 16.875 19.5Z"
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
export class SiWheelchair1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
