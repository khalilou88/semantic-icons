import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-aws-icon',
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
        d="M7.64102 10.3573C7.64102 11.0661 7.99542 11.3883 7.99542 11.5816C7.99542 11.6782 7.9632 11.7105 7.86655 11.7749L7.44772 12.0326C7.4155 12.0649 7.31885 12.0649 7.25441 12.0649C7.25441 12.0649 6.99667 12.0971 6.61005 11.2594C6.159 11.8393 5.41799 12.2259 4.67697 12.1615C4.19371 12.1937 2.80834 11.9038 2.87278 10.3895C2.84056 9.19746 3.90375 8.45645 5.09582 8.52089C5.32134 8.52089 5.77239 8.52089 6.54562 8.7142V8.23093C6.64227 7.42548 6.09457 6.78113 5.12803 6.87778C5.09582 6.87778 4.5481 6.87778 3.67822 7.19996C3.4527 7.32883 3.4527 7.32883 3.35604 7.32883C3.13052 7.32883 3.22717 6.68447 3.25939 6.5556C3.38826 6.36229 4.38701 6.0079 5.28912 6.0079C5.93348 5.97568 6.54562 6.13677 7.0611 6.5556C7.47994 7.00665 7.64102 7.58657 7.60881 8.19871L7.64102 10.3573ZM4.90251 11.3561C5.90126 11.3561 6.35231 10.7117 6.44897 10.3895C6.48118 10.0673 6.48118 9.90626 6.48118 9.51964C6.159 9.48742 5.70795 9.39077 5.22469 9.39077C4.77363 9.35855 3.87153 9.58408 3.90375 10.3895C3.96818 10.9694 4.32258 11.3883 4.90251 11.3561ZM10.2507 12.0649C9.99293 12.0971 9.89627 11.936 9.83184 11.7427L8.28538 6.62004C8.25316 6.52338 8.25316 6.42673 8.25316 6.36229C8.25316 6.26564 8.28538 6.23342 8.38204 6.23342C8.38204 6.23342 8.34982 6.23342 9.05861 6.23342C9.31635 6.2012 9.41301 6.42673 9.47744 6.5556L10.6051 10.9372L11.6683 6.5556C11.7005 6.45895 11.7649 6.2012 12.0871 6.23342H12.6348C12.667 6.23342 12.9892 6.23342 13.0536 6.5556L14.0846 11.0017L15.2122 6.5556C15.2122 6.52338 15.3089 6.2012 15.631 6.23342H16.2754C16.3076 6.23342 16.4687 6.2012 16.4043 6.49116C16.4043 6.52338 16.5009 6.13677 14.7612 11.7749C14.729 11.9682 14.6323 12.1293 14.3423 12.0971H13.7624C13.408 12.1293 13.3436 11.7749 13.3436 11.7427L12.216 7.48992L11.185 11.7427C11.185 11.7749 11.1528 12.0971 10.7662 12.0971H10.2829V12.0649H10.2507ZM18.7562 12.2582C18.5629 12.2582 17.7252 12.2582 16.9842 11.9038C16.8553 11.8715 16.7265 11.6782 16.7265 11.5494V11.195C16.7265 10.9372 16.9198 10.9694 16.9842 11.0017C17.3064 11.1305 17.4675 11.2272 17.8863 11.3238C19.0139 11.5816 19.5294 11.2916 19.6583 11.195C20.0771 10.9372 20.1093 10.3895 19.7872 10.0996C19.465 9.84182 19.3361 9.84182 18.144 9.45521C18.0474 9.39077 16.8231 9.00416 16.8231 7.8121C16.7909 6.94221 17.5963 6.04011 18.9817 6.04011C19.4005 6.04011 20.4315 6.16899 20.7537 6.52338C20.7859 6.5556 20.7859 6.65225 20.7859 6.74891V7.07109C20.7859 7.19996 20.7537 7.29661 20.657 7.29661C20.3993 7.26439 20.0127 6.94221 19.1106 6.94221C18.8851 6.94221 17.8541 6.97443 17.9185 7.71544C17.9185 8.29536 18.7884 8.52089 18.8851 8.58532C20.0127 8.93972 20.4315 9.00416 20.8181 9.55186C21.3658 10.2284 21.0759 11.0339 20.947 11.2594C20.3349 12.387 18.8206 12.2582 18.7562 12.2582ZM20.0449 15.5444C17.8863 17.1231 14.6967 17.9929 12.0227 17.9929C8.34982 18.0574 4.80585 16.7042 2.09955 14.2557C1.87402 14.0624 2.06733 13.8046 2.32507 13.9979C5.32134 15.6732 8.70421 16.5753 12.1837 16.5753C14.7612 16.5753 17.3064 16.0276 19.6905 15.0289C20.0771 14.8678 20.3993 15.2544 20.0449 15.5444ZM20.947 14.5134C20.6893 14.159 19.0784 14.3845 18.4018 14.4168C18.1763 14.449 18.144 14.2879 18.3696 14.159C19.6261 13.2891 21.688 13.5147 21.9135 13.8046C22.1713 14.0624 21.8813 16.1565 20.657 17.1553C20.4637 17.2841 20.3026 17.1875 20.3993 17.0264C20.6248 16.3176 21.2047 14.8678 20.947 14.5134Z"
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
export class SvgAwsIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
