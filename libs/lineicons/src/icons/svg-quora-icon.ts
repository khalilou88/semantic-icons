import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-quora-icon',
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
        d="M18.3139 22C16.9916 22 15.9337 21.5372 15.1073 20.6116C14.1156 20.9421 13.0577 21.1405 11.9668 21.1405C6.71061 21.1405 2.41309 16.843 2.41309 11.5537C2.44614 6.26446 6.71061 2 11.9999 2C17.2891 2 21.5866 6.29752 21.5866 11.5537C21.5866 14.3967 20.7271 16.5455 18.8759 18.1983C19.2065 18.3967 19.6362 18.6281 19.9999 18.7603C20.2643 18.8595 20.4627 19.157 20.4627 19.4545V21.1405C20.4627 21.5372 20.1652 21.8678 19.7685 21.8678C19.5701 21.9008 18.6114 22 18.3139 22ZM15.3387 18.9587C15.5701 18.9587 15.8015 19.0579 15.9337 19.2562C16.3635 19.8512 16.9916 20.4793 18.3139 20.4793C18.4131 20.4793 18.6445 20.4793 18.942 20.4463V19.9174C18.347 19.6529 17.5205 19.157 17.1569 18.595C17.0908 18.4959 17.0577 18.3967 17.0247 18.2975C16.9585 17.8678 17.2561 17.6033 17.6528 17.2397C19.3056 15.8182 20.066 14.0661 20.066 11.5207C20.066 7.05785 16.4296 3.45455 11.9668 3.45455C7.53705 3.4876 3.93375 7.09091 3.93375 11.5537C3.93375 16.0165 7.53705 19.6529 11.9999 19.6529C13.0908 19.6529 14.1156 19.4545 15.0742 19.0579C15.1734 18.9917 15.2726 18.9587 15.3387 18.9587Z"
        fill="#323544"
      />
      <path
        d="M12.0989 18.6282C9.61954 18.6282 7.60301 16.6116 7.60301 14.1323V8.94223C7.60301 6.46289 9.61954 4.44636 12.0989 4.44636C13.289 4.44636 14.446 4.94223 15.2724 5.76867C16.0989 6.59512 16.5617 7.71909 16.5617 8.94223C16.5286 14.8596 16.4625 15.124 16.4295 15.2232C16.3633 15.4877 16.1981 15.686 15.9666 15.7521C15.7352 15.8513 15.4708 15.7852 15.2394 15.653C14.9419 15.4216 13.884 15.124 12.8262 14.8926V15.4216C13.3881 15.7191 14.3468 16.248 14.8096 16.6447C14.9749 16.81 15.0741 17.0083 15.041 17.2397C15.041 17.4712 14.9088 17.6695 14.7435 17.8017C13.9832 18.3307 13.0245 18.6282 12.0989 18.6282ZM12.0989 5.93396C10.446 5.93396 9.09061 7.28934 9.09061 8.94223V14.1323C9.09061 15.7852 10.446 17.1406 12.0989 17.1406C12.3633 17.1406 12.5947 17.1075 12.8262 17.0414C12.4625 16.8431 12.0658 16.6117 11.7683 16.4794C11.5038 16.3472 11.3385 16.0827 11.3385 15.8183V13.967C11.3385 13.7356 11.4377 13.5373 11.603 13.405C11.7683 13.2728 11.9997 13.2067 12.1981 13.2397C12.6939 13.3389 13.9501 13.5703 14.9749 13.9009C15.008 12.6117 15.008 10.4298 15.041 8.90917C15.041 8.11578 14.7435 7.35545 14.1485 6.79347C13.6526 6.23148 12.8923 5.93396 12.0989 5.93396Z"
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
export class SvgQuoraIcon {
  readonly class = input<string>('');
}
