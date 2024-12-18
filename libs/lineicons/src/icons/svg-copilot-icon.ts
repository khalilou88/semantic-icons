import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-copilot-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6121 4.41986C16.3498 3.52176 15.5273 2.9082 14.5936 2.9082H13.9801C12.9619 2.9082 12.0949 3.63291 11.9082 4.63328L10.8545 10.3687L11.1168 9.47504C11.3791 8.57693 12.2016 7.95893 13.1353 7.95893H16.7055L18.2038 8.54137L19.6488 7.95893H19.2264C18.2928 7.95893 17.4702 7.34537 17.2079 6.44727L16.6121 4.41986Z"
        fill="#323544"
      />
      <path
        d="M7.60481 19.5756C7.86713 20.4782 8.68965 21.0962 9.62777 21.0962H10.9349C12.0776 21.0962 13.0112 20.1847 13.0379 19.0465L13.1802 13.5156L12.8823 14.5293C12.62 15.4274 11.7975 16.041 10.8638 16.041H7.26247L5.97756 15.343L4.58594 16.041H4.99942C5.93754 16.041 6.76006 16.659 7.02238 17.5615L7.60481 19.5756Z"
        fill="#323544"
      />
      <path
        d="M14.5051 2.90332H7.21352C5.12832 2.90332 3.87897 5.65543 3.04756 8.41199C2.05609 11.6754 0.762282 16.0414 4.50142 16.0414H7.64923C8.5918 16.0414 9.41432 15.419 9.67664 14.5164C10.2235 12.6002 11.1839 9.26119 11.9397 6.7136C12.322 5.41979 12.6422 4.31272 13.1312 3.61914C13.4024 3.22788 13.8604 2.90332 14.5051 2.90332Z"
        fill="#323544"
      />
      <path
        d="M14.5051 2.90332H7.21352C5.12832 2.90332 3.87897 5.65543 3.04756 8.41199C2.05609 11.6754 0.762282 16.0414 4.50142 16.0414H7.64923C8.5918 16.0414 9.41432 15.419 9.67664 14.5164C10.2235 12.6002 11.1839 9.26119 11.9397 6.7136C12.322 5.41979 12.6422 4.31272 13.1312 3.61914C13.4024 3.22788 13.8604 2.90332 14.5051 2.90332Z"
        fill="#323544"
      />
      <path
        d="M9.49902 21.0971H16.7906C18.8758 21.0971 20.1251 18.3405 20.9565 15.5884C21.9436 12.325 23.2374 7.95898 19.4982 7.95898H16.3504C15.4078 7.95898 14.5809 8.58143 14.323 9.48843C13.7761 11.4047 12.8158 14.7481 12.06 17.2913C11.6776 18.5851 11.3575 19.6966 10.8684 20.3857C10.6016 20.7725 10.1437 21.0971 9.49902 21.0971Z"
        fill="#323544"
      />
      <path
        d="M9.49902 21.0971H16.7906C18.8758 21.0971 20.1251 18.3405 20.9565 15.5884C21.9436 12.325 23.2374 7.95898 19.4982 7.95898H16.3504C15.4078 7.95898 14.5809 8.58143 14.323 9.48843C13.7761 11.4047 12.8158 14.7481 12.06 17.2913C11.6776 18.5851 11.3575 19.6966 10.8684 20.3857C10.6016 20.7725 10.1437 21.0971 9.49902 21.0971Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCopilotIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
