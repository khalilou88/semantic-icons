import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-nextjs-icon',
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
        d="M11.3451 2.4048C11.3021 2.40871 11.1652 2.42239 11.042 2.43216C8.20137 2.68823 5.54056 4.22075 3.85533 6.57623C2.91691 7.88591 2.31672 9.37151 2.08993 10.9451C2.00978 11.4944 2 11.6566 2 12.4014C2 13.1461 2.00978 13.3084 2.08993 13.8577C2.63343 17.6127 5.30597 20.7677 8.93059 21.9366C9.57966 22.1458 10.2639 22.2885 11.042 22.3745C11.3451 22.4077 12.6549 22.4077 12.958 22.3745C14.3011 22.2259 15.4389 21.8936 16.5611 21.3209C16.7331 21.2329 16.7664 21.2095 16.7429 21.1899C16.7273 21.1782 15.9941 20.1949 15.1144 19.0065L13.5152 16.8465L11.5113 13.8811C10.4086 12.2509 9.50147 10.9177 9.49366 10.9177C9.48581 10.9158 9.478 12.2333 9.47409 13.842C9.46822 16.6588 9.46628 16.7722 9.43109 16.8386C9.38025 16.9344 9.34116 16.9735 9.25903 17.0165C9.19647 17.0478 9.14175 17.0537 8.84653 17.0537H8.50831L8.41837 16.997C8.35972 16.9599 8.31672 16.911 8.28738 16.8543L8.24634 16.7663L8.25025 12.847L8.25612 8.92582L8.31672 8.8496C8.348 8.80854 8.41447 8.75576 8.46137 8.73035C8.54153 8.69126 8.57281 8.68735 8.91103 8.68735C9.30987 8.68735 9.37634 8.70298 9.47997 8.81635C9.50928 8.84763 10.5943 10.4818 11.8925 12.4502C13.1906 14.4187 14.9658 17.1064 15.8377 18.4259L17.4213 20.8244L17.5015 20.7716C18.2112 20.3103 18.9619 19.6535 19.5562 18.9693C20.8211 17.5169 21.6364 15.7459 21.9101 13.8577C21.9902 13.3084 22 13.1461 22 12.4014C22 11.6566 21.9902 11.4944 21.9101 10.9451C21.3666 7.19001 18.694 4.03505 15.0694 2.86612C14.4301 2.65891 13.7498 2.51622 12.9873 2.43021C12.7996 2.41066 11.5073 2.38916 11.3451 2.4048ZM15.4389 8.45279C15.5328 8.4997 15.609 8.5896 15.6364 8.68345C15.652 8.73426 15.6559 9.8211 15.652 12.2704L15.6461 15.785L15.0264 14.835L14.4047 13.885V11.3302C14.4047 9.67841 14.4125 8.74991 14.4242 8.70495C14.4555 8.59548 14.5239 8.50948 14.6178 8.45863C14.6979 8.4176 14.7273 8.4137 15.0342 8.4137C15.3236 8.4137 15.3744 8.4176 15.4389 8.45279Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgNextjsIcon {
  readonly class = input<string>('');
}
