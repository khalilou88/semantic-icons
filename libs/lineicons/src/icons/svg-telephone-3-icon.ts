import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-telephone-3-icon',
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.40566 5.02116L10.0494 7.01934C10.1003 7.17723 10.1516 7.40219 10.1203 7.65893C10.0267 8.4276 9.51359 9.0909 8.77559 9.36766L6.08341 10.3772C4.71309 10.8911 3.25134 9.87809 3.25134 8.41459L3.25134 7.306C3.25134 6.69945 3.53156 6.09966 4.06056 5.73225C6.31381 4.16731 9.05161 3.25 12.0014 3.25C14.9512 3.25 17.689 4.16731 19.9423 5.73224C20.4713 6.09966 20.7515 6.69948 20.7515 7.30605L20.7515 8.41462C20.7515 9.87809 19.2897 10.8911 17.9194 10.3772L15.2272 9.36766C14.4892 9.0909 13.9761 8.4276 13.8825 7.65893C13.8512 7.4022 13.9025 7.17724 13.9534 7.01934L14.5971 5.02115C13.7601 4.84348 12.8918 4.75 12.0014 4.75C11.111 4.75 10.2427 4.84348 9.40566 5.02116ZM7.95875 5.42163C6.86807 5.79632 5.84607 6.31846 4.91623 6.96426C4.82118 7.03027 4.75134 7.15275 4.75134 7.306L4.75134 8.41459C4.75134 8.83078 5.16704 9.11886 5.55673 8.97273L8.2489 7.96316C8.45105 7.88736 8.59414 7.70929 8.62798 7.50094C8.62659 7.49547 8.62456 7.48832 8.62165 7.4793L7.95875 5.42163ZM15.3811 7.4793C15.3782 7.48833 15.3762 7.49547 15.3748 7.50094C15.4087 7.70929 15.5517 7.88736 15.7539 7.96316L18.4461 8.97273C18.8358 9.11886 19.2515 8.83079 19.2515 8.41457L19.2515 7.306C19.2515 7.15275 19.1817 7.03026 19.0866 6.96425C18.1568 6.31845 17.1347 5.79631 16.044 5.42161L15.3811 7.4793Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0013 12.7617C10.4826 12.7617 9.25134 13.9929 9.25134 15.5117C9.25134 17.0305 10.4826 18.2617 12.0013 18.2617C13.5201 18.2617 14.7513 17.0305 14.7513 15.5117C14.7513 13.9929 13.5201 12.7617 12.0013 12.7617ZM10.7513 15.5117C10.7513 14.8214 11.311 14.2617 12.0013 14.2617C12.6917 14.2617 13.2513 14.8214 13.2513 15.5117C13.2513 16.2021 12.6917 16.7617 12.0013 16.7617C11.311 16.7617 10.7513 16.2021 10.7513 15.5117Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.99399 10.5307C11.2794 9.99879 12.7233 9.99879 14.0087 10.5307L18.8242 12.5233C19.4962 12.8013 19.9923 13.387 20.1561 14.0955L21.0572 17.993C21.3832 19.4031 20.3123 20.7498 18.865 20.7498H5.13769C3.69038 20.7498 2.61951 19.4031 2.94552 17.993L3.84659 14.0955C4.01039 13.387 4.50652 12.8013 5.17847 12.5233L9.99399 10.5307ZM13.4352 11.9167C12.517 11.5368 11.4857 11.5368 10.5675 11.9167L5.752 13.9093C5.52802 14.002 5.36264 14.1972 5.30804 14.4334L4.40697 18.3309C4.2983 18.8009 4.65526 19.2498 5.13769 19.2498H18.865C19.3474 19.2498 19.7044 18.8009 19.5957 18.3309L18.6946 14.4334C18.64 14.1972 18.4747 14.002 18.2507 13.9093L13.4352 11.9167Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgTelephone3Icon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
