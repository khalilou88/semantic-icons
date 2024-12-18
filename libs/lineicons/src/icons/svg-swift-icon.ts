import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-swift-icon',
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
        d="M22 7.56278C22 7.36985 22 7.14477 22 6.984C22 6.53384 21.9678 6.11583 21.8714 5.66567C21.8392 5.21551 21.6463 4.7975 21.4534 4.4438C21.0354 3.6721 20.4244 2.99686 19.5884 2.57885C19.1704 2.38592 18.7846 2.22515 18.3344 2.16084C17.8842 2.12869 17.4662 2.03223 17.0161 2.03223C16.8231 2.03223 16.5981 2.03223 16.4373 2.03223H7.627C7.43407 2.03223 7.20899 2.03223 7.04822 2.03223C6.95176 2.03223 6.82314 2.03223 6.69452 2.03223C6.34083 2.03223 6.05144 2.06438 5.69774 2.12869C5.3762 2.16084 5.05465 2.25731 4.73312 2.38592C4.63666 2.41808 4.50804 2.48239 4.41158 2.51454C4.12219 2.70747 3.86495 2.90039 3.60772 3.12547C3.51126 3.15763 3.44695 3.25409 3.31833 3.35056C2.99679 3.6721 2.77171 3.99364 2.54662 4.37949C2.3537 4.7975 2.19293 5.18335 2.12862 5.63351C2.06431 6.08368 2.03215 6.50168 2 6.95184C2 7.14477 2 7.36985 2 7.53062V16.4052C2 16.5982 2 16.8232 2 16.984C2 17.4342 2.03215 17.8522 2.12862 18.3023C2.16077 18.7525 2.3537 19.1705 2.54662 19.5564C2.96463 20.3602 3.57556 21.0033 4.41158 21.4213C4.82958 21.6142 5.21542 21.775 5.66558 21.8393C6.11575 21.8715 6.53375 21.9679 6.98391 21.9679C7.17684 21.9679 7.40192 21.9679 7.56269 21.9679H16.4373C16.6302 21.9679 16.8553 21.9679 17.0161 21.9679C17.4662 21.9679 17.8842 21.9358 18.3344 21.8393C18.7846 21.8072 19.2026 21.6142 19.5884 21.4213C20.3601 21.0033 21.0354 20.3924 21.4534 19.5564C21.6463 19.1383 21.8071 18.7525 21.8714 18.3023C21.9357 17.8522 22 17.4342 22 16.984C22 16.7911 22 16.566 22 16.4052V8.27017C22 8.04509 22 7.78786 22 7.56278ZM18.881 18.2702C17.9807 16.566 16.3408 16.9518 15.5048 17.402C15.4727 17.4342 15.3762 17.4985 15.2797 17.5306H15.2154C13.5112 18.4953 11.0997 18.5274 8.7524 17.4985C6.82314 16.6303 5.21542 15.2477 4.09003 13.4792C4.63666 13.8972 5.21542 14.2509 5.85851 14.5081C8.39871 15.6978 10.8746 15.6014 12.6752 14.5081C10.135 12.5789 8.07716 10.0387 6.40514 8.01294C6.08359 7.65924 5.82636 7.30554 5.53697 6.88754C7.46623 8.65602 10.553 10.9068 11.6463 11.4856C9.29903 9.04188 7.2733 5.95506 7.33761 6.11583C11.0032 9.81358 14.3794 11.9358 14.3794 11.9358C14.508 11.9679 14.6045 12.0644 14.701 12.1287C14.7331 11.9358 14.8296 11.775 14.8939 11.5821C15.4727 9.45988 14.8617 6.984 13.3505 4.99043C16.791 7.01615 18.7846 10.9068 17.9486 14.2187C17.9164 14.2509 17.9164 14.3473 17.9164 14.4438C19.5563 16.4052 19.1061 18.656 18.881 18.2702Z"
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
export class SvgSwiftIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
