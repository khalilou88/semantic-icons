import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-id-card-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.83691 9.8614C6.83691 8.96875 7.56055 8.24512 8.45319 8.24512C9.34584 8.24512 10.0695 8.96875 10.0695 9.8614C10.0695 10.754 9.34584 11.4777 8.45319 11.4777C7.56055 11.4777 6.83691 10.754 6.83691 9.8614Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.23935 12.0869C6.00313 12.0869 5.00098 13.0891 5.00098 14.3253V15.2555C5.00098 15.6697 5.33676 16.0055 5.75098 16.0055H11.156C11.5702 16.0055 11.906 15.6697 11.906 15.2555V14.3253C11.906 13.0891 10.9039 12.0869 9.66766 12.0869H7.23935ZM6.50098 14.3253C6.50098 13.9175 6.83156 13.5869 7.23935 13.5869H9.66766C10.0754 13.5869 10.406 13.9175 10.406 14.3253V14.5055H6.50098V14.3253Z"
      fill="#323544"
    />
    <svg:path
      d="M19.0004 10.501C19.0004 10.9152 18.6646 11.251 18.2504 11.251H14.1504C13.7362 11.251 13.4004 10.9152 13.4004 10.501C13.4004 10.0868 13.7362 9.75098 14.1504 9.75098H18.2504C18.6646 9.75098 19.0004 10.0868 19.0004 10.501Z"
      fill="#323544"
    />
    <svg:path
      d="M16.1508 14.251C16.565 14.251 16.9008 13.9152 16.9008 13.501C16.9008 13.0868 16.565 12.751 16.1508 12.751H14.1508C13.7366 12.751 13.4008 13.0868 13.4008 13.501C13.4008 13.9152 13.7366 14.251 14.1508 14.251H16.1508Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.25 4.50098C3.00736 4.50098 2 5.50834 2 6.75098V17.251C2 18.4936 3.00736 19.501 4.25 19.501H19.75C20.9926 19.501 22 18.4936 22 17.251V6.75098C22 5.50834 20.9926 4.50098 19.75 4.50098H4.25ZM3.5 6.75098C3.5 6.33676 3.83579 6.00098 4.25 6.00098H19.75C20.1642 6.00098 20.5 6.33676 20.5 6.75098V17.251C20.5 17.6652 20.1642 18.001 19.75 18.001H4.25C3.83579 18.001 3.5 17.6652 3.5 17.251V6.75098Z"
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
export class SiIdCardIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
