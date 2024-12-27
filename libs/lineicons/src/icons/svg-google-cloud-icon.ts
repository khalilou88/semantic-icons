import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-google-cloud-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6795 12.5316C21.2768 11.3847 20.5204 10.3965 19.5138 9.71933C19.1173 8.24914 18.2938 6.92537 17.153 5.91273L17.1164 5.94932V5.90663C16.1282 5.02818 14.9264 4.41814 13.627 4.13143C12.3277 3.85081 10.9795 3.89962 9.70453 4.27784C8.43566 4.66216 7.28272 5.36368 6.35545 6.31534C5.42822 7.267 4.75718 8.43827 4.40946 9.71933C4.45216 9.70103 4.50096 9.68884 4.54366 9.67661C4.47046 9.71933 4.40336 9.76814 4.33625 9.81692C3.3846 10.5062 2.67086 11.4762 2.29264 12.5926C1.92052 13.7028 1.90222 14.9107 2.24384 16.0332C2.58546 17.1617 3.2687 18.15 4.20204 18.8698H4.20815L4.20204 18.8881C5.18421 19.6323 6.37987 20.0289 7.61212 20.0228H11.9372L11.9617 20.0472H16.3051C17.519 20.0594 18.7025 19.6751 19.6847 18.9613C20.6607 18.2476 21.3866 17.2349 21.7466 16.0758C22.1065 14.9168 22.0821 13.6723 21.6795 12.5316ZM18.3121 15.2279C18.2023 15.4902 18.0437 15.7342 17.8424 15.9355C17.6411 16.1369 17.4031 16.2955 17.1347 16.4053C16.8724 16.5151 16.5918 16.57 16.3051 16.57H11.9556V16.5456H7.61212C7.30101 16.5456 7.00209 16.4785 6.72147 16.3504C6.40426 16.204 6.12974 15.9843 5.91013 15.7098C5.69661 15.4353 5.5502 15.1059 5.48923 14.7643C5.42212 14.4166 5.44651 14.0627 5.5502 13.7272C5.65393 13.3917 5.83692 13.0867 6.08706 12.8366C6.33716 12.5865 6.64217 12.4035 6.9777 12.2998C7.3132 12.196 7.66703 12.1717 8.01476 12.2327C8.35636 12.2998 8.68579 12.4462 8.96029 12.6597C9.23481 12.8793 9.45442 13.1599 9.60083 13.4771L12.1203 10.9577C11.5895 10.2683 10.9124 9.70713 10.1316 9.32282C9.68623 9.1032 9.21042 8.94457 8.72238 8.85307C8.74067 8.83478 8.7529 8.82868 8.77119 8.83478C9.51543 8.01733 10.5464 7.5171 11.6505 7.4317C12.7547 7.3463 13.8467 7.68793 14.7068 8.38336H14.7556C15.2497 8.79206 15.6401 9.30449 15.9147 9.89013C16.1892 10.488 16.3234 11.1346 16.3112 11.7934V12.2266C16.5979 12.2266 16.8785 12.2814 17.1408 12.3913C17.4092 12.5011 17.6472 12.6597 17.8485 12.861C18.0498 13.0623 18.2084 13.3063 18.3182 13.5686C18.428 13.8309 18.4829 14.1116 18.4829 14.3983C18.4829 14.685 18.428 14.9656 18.3182 15.2279H18.3121Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
      color: currentColor;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgGoogleCloudIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
