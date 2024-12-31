import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bar-chart-dollar-icon',
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
        d="M17.8076 2C18.2218 2 18.5576 2.33579 18.5576 2.75V2.91898C19.3061 3.10815 19.8599 3.78601 19.8599 4.59323C19.8599 5.00744 19.5242 5.34323 19.1099 5.34323C18.6957 5.34323 18.3599 5.00744 18.3599 4.59323C18.3599 4.46796 18.2584 4.36641 18.1331 4.36641H17.7381C17.4714 4.36641 17.2553 4.58257 17.2553 4.84921C17.2553 5.05046 17.3801 5.2306 17.5686 5.30127L18.5734 5.67811C19.3473 5.96833 19.8599 6.70814 19.8599 7.53464C19.8599 8.39065 19.3175 9.11996 18.5576 9.39759V9.63372C18.5576 10.0479 18.2218 10.3837 17.8076 10.3837C17.3934 10.3837 17.0576 10.0479 17.0576 9.63372V9.46488C16.3092 9.2757 15.7553 8.59785 15.7553 7.79062C15.7553 7.37641 16.0911 7.04062 16.5053 7.04062C16.9195 7.04062 17.2553 7.37641 17.2553 7.79062C17.2553 7.91589 17.3568 8.01744 17.4821 8.01744H17.8771C18.1438 8.01744 18.3599 7.80129 18.3599 7.53464C18.3599 7.3334 18.2351 7.15326 18.0467 7.08259L17.0418 6.70575C16.268 6.41552 15.7553 5.67571 15.7553 4.84921C15.7553 3.99321 16.2977 3.2639 17.0576 2.98626V2.75C17.0576 2.33579 17.3934 2 17.8076 2Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.5 3.25045C4.25736 3.25045 3.25 4.25781 3.25 5.50045V18.5005C3.25 19.7431 4.25736 20.7505 5.5 20.7505H5.83333C7.07597 20.7505 8.08333 19.7431 8.08333 18.5005V5.50045C8.08333 4.25781 7.07598 3.25045 5.83333 3.25045H5.5ZM4.75 5.50045C4.75 5.08624 5.08579 4.75045 5.5 4.75045H5.83333C6.24755 4.75045 6.58333 5.08624 6.58333 5.50045V18.5005C6.58333 18.9147 6.24755 19.2505 5.83333 19.2505H5.5C5.08579 19.2505 4.75 18.9147 4.75 18.5005V5.50045Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.833 9.63424C10.5904 9.63424 9.58301 10.6416 9.58301 11.8842V18.5005C9.58301 19.7432 10.5904 20.7505 11.833 20.7505H12.1663C13.409 20.7505 14.4163 19.7432 14.4163 18.5005V11.8842C14.4163 10.6416 13.409 9.63424 12.1663 9.63424H11.833ZM11.083 11.8842C11.083 11.47 11.4188 11.1342 11.833 11.1342H12.1663C12.5806 11.1342 12.9163 11.47 12.9163 11.8842V18.5005C12.9163 18.9147 12.5806 19.2505 12.1663 19.2505H11.833C11.4188 19.2505 11.083 18.9147 11.083 18.5005V11.8842Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.916 14.9223C15.916 13.6797 16.9234 12.6723 18.166 12.6723H18.4993C19.742 12.6723 20.7493 13.6797 20.7493 14.9223V18.5005C20.7493 19.7432 19.742 20.7505 18.4993 20.7505H18.166C16.9234 20.7505 15.916 19.7432 15.916 18.5005V14.9223ZM18.166 14.1723C17.7518 14.1723 17.416 14.5081 17.416 14.9223V18.5005C17.416 18.9147 17.7518 19.2505 18.166 19.2505H18.4993C18.9136 19.2505 19.2493 18.9147 19.2493 18.5005V14.9223C19.2493 14.5081 18.9136 14.1723 18.4993 14.1723H18.166Z"
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
export class SvgBarChartDollarIcon {
  readonly class = input<string>('');
}
