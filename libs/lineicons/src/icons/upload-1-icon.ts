import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-upload-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.4239 3.25C12.2079 3.25 12.0132 3.34131 11.8763 3.48744L7.26675 8.0941C6.97376 8.3869 6.97361 8.86177 7.26641 9.15476C7.55921 9.44775 8.03408 9.4479 8.32707 9.1551L11.6739 5.81043L11.6739 16C11.6739 16.4142 12.0096 16.75 12.4239 16.75C12.8381 16.75 13.1739 16.4142 13.1739 16L13.1739 5.81455L16.5168 9.15511C16.8098 9.4479 17.2846 9.44774 17.5774 9.15474C17.8702 8.86175 17.87 8.38687 17.5771 8.09408L13.0021 3.52236C12.8646 3.356 12.6566 3.25 12.4239 3.25Z"
      fill="#323544"
    />
    <svg:path
      d="M5.17188 16C5.17188 15.5858 4.83609 15.25 4.42188 15.25C4.00766 15.25 3.67188 15.5858 3.67188 16V18.5C3.67188 19.7426 4.67923 20.75 5.92188 20.75H18.9227C20.1654 20.75 21.1727 19.7426 21.1727 18.5V16C21.1727 15.5858 20.837 15.25 20.4227 15.25C20.0085 15.25 19.6727 15.5858 19.6727 16V18.5C19.6727 18.9142 19.337 19.25 18.9227 19.25H5.92188C5.50766 19.25 5.17188 18.9142 5.17188 18.5V16Z"
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
export class SiUpload1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
