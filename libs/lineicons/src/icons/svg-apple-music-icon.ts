import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-apple-music-icon',
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.9994 7.98562C20.9984 7.80461 20.9964 7.62361 20.9914 7.4426C20.9809 7.04809 20.9574 6.65059 20.8874 6.26058C20.8164 5.86457 20.6999 5.49606 20.5169 5.13605C20.3369 4.78254 20.1019 4.45953 19.8214 4.17903C19.5409 3.89852 19.2174 3.66352 18.8639 3.48351C18.5044 3.30051 18.1359 3.1845 17.7403 3.113C17.3503 3.043 16.9523 3.0195 16.5578 3.009C16.3768 3.004 16.1958 3.002 16.0148 3.001C15.7998 3 15.5848 3 15.3698 3H8.63063C8.41563 3 8.20062 3 7.98562 3.001C7.80461 3.002 7.62361 3.004 7.4426 3.009C7.04809 3.02 6.65009 3.043 6.26008 3.1135C5.86407 3.1845 5.49606 3.30101 5.13655 3.48401C4.78304 3.66402 4.45953 3.89902 4.17903 4.17953C3.89852 4.46003 3.66352 4.78304 3.48351 5.13655C3.30051 5.49656 3.184 5.86507 3.113 6.26108C3.043 6.65109 3.0195 7.04909 3.009 7.4431C3.004 7.62411 3.002 7.80511 3.001 7.98612C3 8.20062 3 8.41563 3 8.63063V15.3693C3 15.5843 3 15.7993 3.001 16.0143C3.002 16.1953 3.004 16.3763 3.009 16.5573C3.0195 16.9518 3.043 17.3493 3.113 17.7393C3.184 18.1354 3.30051 18.5039 3.48351 18.8639C3.66352 19.2174 3.89852 19.5404 4.17903 19.8209C4.45953 20.1014 4.78304 20.3364 5.13655 20.5164C5.49606 20.6994 5.86457 20.8154 6.26008 20.8869C6.65009 20.9569 7.04809 20.9804 7.4426 20.9909C7.62361 20.9959 7.80461 20.9979 7.98562 20.9989C8.20062 21.0004 8.41563 20.9999 8.63063 20.9999H15.3693C15.5843 20.9999 15.7993 20.9999 16.0143 20.9989C16.1953 20.9979 16.3763 20.9959 16.5573 20.9909C16.9518 20.9804 17.3498 20.9569 17.7398 20.8869C18.1359 20.8159 18.5039 20.6999 18.8634 20.5164C19.2169 20.3364 19.5404 20.1014 19.8209 19.8209C20.1014 19.5404 20.3364 19.2174 20.5164 18.8639C20.6994 18.5039 20.8159 18.1354 20.8869 17.7393C20.9569 17.3493 20.9804 16.9513 20.9909 16.5573C20.9959 16.3763 20.9979 16.1953 20.9989 16.0143C21.0004 15.7993 20.9999 15.5843 20.9999 15.3693V8.63063C21.0004 8.41563 21.0004 8.20062 20.9994 7.98562ZM16.1773 14.7133C16.1773 14.9413 16.1753 15.1483 16.1273 15.3763C16.0808 15.5978 15.9958 15.8063 15.8653 15.9938C15.7348 16.1808 15.5678 16.3343 15.3728 16.4493C15.1753 16.5658 14.9688 16.6323 14.7478 16.6768C14.3328 16.7603 14.0493 16.7793 13.7823 16.7258C13.5252 16.6743 13.3072 16.5558 13.1327 16.3958C12.8742 16.1588 12.7132 15.8388 12.6782 15.5048C12.6372 15.1128 12.7677 14.6943 13.0617 14.3858C13.2102 14.2303 13.3967 14.1073 13.6457 14.0103C13.9063 13.9093 14.1938 13.8488 14.6358 13.7598C14.7523 13.7363 14.8688 13.7127 14.9853 13.6892C15.1383 13.6582 15.2698 13.6192 15.3758 13.4897C15.4823 13.3592 15.4843 13.2007 15.4843 13.0437V9.07914C15.4843 8.77563 15.3483 8.69313 15.0583 8.74863C14.8513 8.78914 10.4037 9.68616 10.4037 9.68616C10.1527 9.74666 10.0647 9.82866 10.0647 10.1402V15.9478C10.0647 16.1758 10.0527 16.3828 10.0052 16.6108C9.95866 16.8323 9.87366 17.0408 9.74316 17.2283C9.61265 17.4153 9.44565 17.5688 9.25065 17.6838C9.05314 17.8003 8.84664 17.8698 8.62563 17.9143C8.21062 17.9978 7.92711 18.0169 7.66011 17.9633C7.4031 17.9118 7.1851 17.7898 7.01059 17.6303C6.75209 17.3933 6.60208 17.0733 6.56658 16.7393C6.52558 16.3473 6.64509 15.9288 6.93959 15.6203C7.0881 15.4648 7.2746 15.3418 7.52361 15.2448C7.78411 15.1438 8.07162 15.0833 8.51363 14.9943C8.63013 14.9708 8.74663 14.9473 8.86314 14.9238C9.01614 14.8928 9.14764 14.8538 9.25365 14.7243C9.35965 14.5948 9.37215 14.4423 9.37215 14.2863C9.37215 13.0562 9.37215 7.59011 9.37215 7.59011C9.37215 7.50011 9.37965 7.4391 9.38415 7.4091C9.40565 7.2681 9.46215 7.1471 9.56415 7.06159C9.64916 6.99059 9.75816 6.94109 9.89766 6.91159L9.89966 6.91109L15.2498 5.83157C15.2963 5.82207 15.6828 5.75356 15.7263 5.74956C16.0153 5.72456 16.1778 5.91457 16.1778 6.22258V14.7133H16.1773Z"
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
export class SvgAppleMusicIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
