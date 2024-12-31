import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bulb-4-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.0625 18.0453C9.01679 16.914 8.26885 15.8509 7.26013 14.8658C5.86655 13.5048 5 11.6029 5 9.49987C5 5.35781 8.35781 2 12.4999 2C16.6419 2 19.9997 5.35781 19.9997 9.49987C19.9997 11.6027 19.1333 13.5046 17.7399 14.8655C16.6988 15.8824 15.9355 16.9822 15.9355 18.1544V19.75C15.9355 20.9926 14.9282 22 13.6855 22H11.3125C10.0699 22 9.0625 20.9926 9.0625 19.75V18.0453ZM6.5 9.49987C6.5 11.1825 7.19168 12.7023 8.30817 13.7927C9.04933 14.5165 9.81983 15.4258 10.2412 16.5H14.7589C15.1802 15.4257 15.9506 14.5164 16.6918 13.7925C17.8082 12.7021 18.4997 11.1824 18.4997 9.49987C18.4997 6.18624 15.8135 3.5 12.4999 3.5C9.18624 3.5 6.5 6.18624 6.5 9.49987ZM10.5625 18.2129V19.75C10.5625 20.1642 10.8983 20.5 11.3125 20.5H13.6855C14.0998 20.5 14.4355 20.1642 14.4355 19.75V18H10.5625V18.0175C10.564 18.063 10.5647 18.1088 10.5647 18.1549C10.5647 18.1744 10.564 18.1938 10.5625 18.2129Z"
        fill="#323544"
      />
      <path
        d="M1.75 9.5C1.75 9.08579 2.08579 8.75 2.5 8.75H3.5C3.91421 8.75 4.25 9.08579 4.25 9.5C4.25 9.91421 3.91421 10.25 3.5 10.25H2.5C2.08579 10.25 1.75 9.91421 1.75 9.5Z"
        fill="#323544"
      />
      <path
        d="M4.21484 3.85048C3.85612 3.64337 3.39743 3.76628 3.19032 4.125C2.98322 4.48372 3.10612 4.94241 3.46484 5.14952L4.33087 5.64952C4.68959 5.85663 5.14828 5.73372 5.35539 5.375C5.56249 5.01628 5.43959 4.55759 5.08087 4.35048L4.21484 3.85048Z"
        fill="#323544"
      />
      <path
        d="M3.19032 14.875C2.98322 14.5163 3.10612 14.0576 3.46484 13.8505L4.33087 13.3505C4.68959 13.1434 5.14828 13.2663 5.35539 13.625C5.56249 13.9837 5.43959 14.4424 5.08087 14.6495L4.21484 15.1495C3.85612 15.3566 3.39743 15.2337 3.19032 14.875Z"
        fill="#323544"
      />
      <path
        d="M21.5 8.75C21.0858 8.75 20.75 9.08579 20.75 9.5C20.75 9.91421 21.0858 10.25 21.5 10.25H22.5C22.9142 10.25 23.25 9.91421 23.25 9.5C23.25 9.08579 22.9142 8.75 22.5 8.75H21.5Z"
        fill="#323544"
      />
      <path
        d="M19.6454 13.625C19.8525 13.2663 20.3112 13.1434 20.6699 13.3505L21.5359 13.8505C21.8947 14.0576 22.0176 14.5163 21.8105 14.875C21.6034 15.2337 21.1447 15.3566 20.7859 15.1495L19.9199 14.6495C19.5612 14.4424 19.4383 13.9837 19.6454 13.625Z"
        fill="#323544"
      />
      <path
        d="M19.9199 4.35048C19.5612 4.55759 19.4383 5.01628 19.6454 5.375C19.8525 5.73372 20.3112 5.85663 20.6699 5.64952L21.5359 5.14952C21.8947 4.94241 22.0176 4.48372 21.8105 4.125C21.6034 3.76628 21.1447 3.64337 20.7859 3.85048L19.9199 4.35048Z"
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
export class SvgBulb4Icon {
  readonly class = input<string>('');
}
