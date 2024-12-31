import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-fitbit-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0678 3.49235C13.0678 4.30938 12.4016 4.9847 11.5984 4.9847C10.7977 4.9847 10.129 4.30938 10.129 3.49235C10.129 2.67971 10.7977 2 11.5984 2C12.4016 2 13.0678 2.67971 13.0678 3.49235ZM11.5984 6.20304C10.7335 6.20304 10.0642 6.88275 10.0642 7.76499C10.0642 8.64598 10.7335 9.32569 11.6021 9.32569C12.4665 9.32569 13.1357 8.64598 13.1357 7.76499C13.1357 6.88275 12.4572 6.20304 11.5923 6.20304H11.5984ZM11.5984 10.4098C10.7335 10.4098 9.99629 11.1541 9.99629 12.0357C9.99629 12.9174 10.7328 13.6617 11.6015 13.6617C12.4658 13.6617 13.2024 12.9174 13.2024 12.0357C13.2024 11.1541 12.4658 10.4098 11.6015 10.4098H11.5984ZM11.5984 14.6781C10.7335 14.6781 10.0642 15.3578 10.0642 16.2356C10.0642 17.1179 10.7335 17.7976 11.6021 17.7976C12.4665 17.7976 13.1357 17.1179 13.1357 16.2356C13.1357 15.4261 12.4572 14.6781 11.5923 14.6781H11.5984ZM11.5984 19.0184C10.7977 19.0184 10.129 19.6938 10.129 20.5108C10.129 21.3203 10.7977 22 11.5984 22C12.4016 22 13.0678 21.3234 13.0678 20.5077C13.0678 19.6944 12.4016 19.0184 11.5984 19.0184ZM15.6726 6.0005C14.7366 6.0005 13.9365 6.81753 13.9365 7.76436C13.9365 8.71056 14.7366 9.52446 15.6726 9.52446C16.6055 9.52446 17.4056 8.71119 17.4056 7.76436C17.4056 6.81691 16.6055 6.0005 15.6726 6.0005ZM15.6726 10.2042C14.6693 10.2042 13.8692 11.0168 13.8692 12.0357C13.8692 13.0515 14.6724 13.8642 15.6726 13.8642C16.6728 13.8642 17.4729 13.0515 17.4729 12.0326C17.4729 11.0168 16.6728 10.2042 15.6726 10.2042ZM15.6726 14.4755C14.7366 14.4755 13.9365 15.2926 13.9365 16.2356C13.9365 17.1862 14.7366 17.9995 15.6726 17.9995C16.6055 17.9995 17.4056 17.1825 17.4056 16.2356C17.4056 15.2894 16.6055 14.4755 15.6726 14.4755ZM19.8752 10.001C18.8083 10.001 17.8754 10.8832 17.8754 12.0357C17.8754 13.1199 18.7404 14.0705 19.8752 14.0705C21.0106 14.0705 21.8786 13.1782 21.8786 12.0257C21.8113 10.8695 20.9426 9.99473 19.8752 9.99473V10.001ZM7.45942 6.40871C6.7266 6.40871 6.12834 7.02007 6.12834 7.76499C6.12834 8.50928 6.7266 9.12002 7.45942 9.12002C8.19597 9.12002 8.7936 8.50866 8.7936 7.76499C8.7936 7.02007 8.19597 6.41247 7.45942 6.41247V6.40871ZM7.45942 10.6124C6.65929 10.6124 6.05733 11.2193 6.05733 12.0364C6.05733 12.8496 6.65248 13.4604 7.45324 13.4604C8.25648 13.4604 8.84856 12.8503 8.84856 12.0364C8.84856 11.2193 8.24413 10.6124 7.44337 10.6124H7.45942ZM7.45942 14.88C6.7266 14.88 6.12834 15.4913 6.12834 16.235C6.12834 16.9831 6.7266 17.5913 7.45942 17.5913C8.19597 17.5913 8.7936 16.9768 8.7936 16.2262C8.7936 15.4713 8.19597 14.8712 7.45942 14.8712V14.88ZM3.32475 10.8143C2.6555 10.8143 2.12207 11.356 2.12207 12.0357C2.12207 12.7123 2.6555 13.2541 3.32475 13.2541C3.99091 13.2541 4.52434 12.7123 4.52434 12.0357C4.52434 11.356 3.99091 10.8143 3.32475 10.8143Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgFitbitIcon {
  readonly class = input<string>('');
}
