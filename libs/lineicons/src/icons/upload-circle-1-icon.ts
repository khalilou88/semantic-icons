import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-upload-circle-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.673 10.3699L10.3001 11.7419C10.0071 12.0347 9.53227 12.0345 9.23947 11.7415C8.94667 11.4485 8.94682 10.9737 9.2398 10.6809L11.8796 8.04272C12.0162 7.89916 12.2092 7.80968 12.423 7.80968C12.6495 7.80968 12.8525 7.91008 12.99 8.06879L15.6039 10.6808C15.8969 10.9736 15.8971 11.4485 15.6043 11.7415C15.3115 12.0345 14.8366 12.0347 14.5436 11.7419L13.173 10.3722V15.4403C13.173 15.8545 12.8372 16.1903 12.423 16.1903C12.0088 16.1903 11.673 15.8545 11.673 15.4403V10.3699Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.42188 12C2.42188 6.4776 6.89916 2.00092 12.4214 2.00092C17.9437 2.00092 22.421 6.4776 22.421 12C22.421 17.5224 17.9437 21.999 12.4214 21.999C6.89916 21.999 2.42188 17.5224 2.42188 12ZM12.4214 3.50092C7.72748 3.50092 3.92188 7.30613 3.92188 12C3.92188 16.6938 7.72748 20.499 12.4214 20.499C17.1154 20.499 20.921 16.6938 20.921 12C20.921 7.30613 17.1154 3.50092 12.4214 3.50092Z"
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
export class SiUploadCircle1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
