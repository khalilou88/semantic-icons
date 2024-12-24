import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-safari-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.47755 2 2 6.47755 2 12C2 17.5225 6.47755 22 12 22C17.5225 22 22 17.5225 22 12C22 6.47755 17.5225 2 12 2ZM19.351 7.25103L19.2102 7.04081C19.2571 7.11019 19.3041 7.17958 19.351 7.25103ZM18.8082 6.5041L18.7225 6.39797C18.7531 6.43265 18.7816 6.46939 18.8082 6.5041ZM17.598 5.27348L17.4918 5.18774C17.5306 5.21835 17.5633 5.24694 17.598 5.27348ZM16.9612 4.7898L16.751 4.64898C16.8204 4.69592 16.8898 4.74286 16.9612 4.7898ZM12.9735 3.30408L12.7633 3.28367C12.8326 3.2898 12.902 3.29592 12.9735 3.30408ZM11.2347 3.28163L11.0245 3.30204C11.0939 3.29592 11.1633 3.2898 11.2347 3.28163ZM7.25103 4.64898L7.04081 4.7898C7.11019 4.74286 7.17958 4.69592 7.25103 4.64898ZM6.5041 5.19184L6.40203 5.27348C6.43674 5.24694 6.46939 5.21835 6.5041 5.19184ZM5.27348 6.40203L5.18774 6.50816C5.21835 6.47348 5.24694 6.43877 5.27348 6.40203ZM4.7898 7.03877L4.64898 7.24897C4.69592 7.17958 4.74286 7.11019 4.7898 7.03877ZM3.30408 11.0265L3.28367 11.2367C3.2898 11.1674 3.29592 11.098 3.30408 11.0265ZM3.28163 12.7653L3.30204 12.9755C3.29592 12.9061 3.2898 12.8367 3.28163 12.7653ZM4.64898 16.7469L4.7898 16.9571C4.74286 16.8918 4.69592 16.8204 4.64898 16.7469ZM4.81225 16.9918L6.37142 15.949L6.2 15.6877L4.64082 16.7306C3.93265 15.6326 3.46939 14.3714 3.31225 13.0123L4.2449 12.9184L4.21429 12.6061L3.28163 12.7C3.26531 12.5204 3.25918 12.3367 3.2551 12.1531H5.13061V11.8408H3.25306C3.25714 11.6571 3.26531 11.4775 3.27959 11.2939L4.21225 11.3837L4.24286 11.0714L3.3102 10.9816C3.46735 9.62245 3.93469 8.36123 4.64286 7.26326L6.20203 8.30613L6.37348 8.0449L4.8102 7.01019C4.91632 6.86123 5.02042 6.71429 5.13471 6.57348L5.85713 7.16736L6.05713 6.92448L5.33471 6.33061C5.45103 6.18981 5.57755 6.05713 5.70203 5.92448L7.02652 7.24897L7.24897 7.02652L5.92448 5.70203C6.05713 5.57755 6.18981 5.45103 6.32652 5.33471L6.92042 6.06123L7.16326 5.86123L6.56939 5.13877C6.71429 5.02448 6.85919 4.91632 7.00613 4.8102L8.04897 6.36939L8.31019 6.19797L7.26735 4.63877C8.36532 3.93061 9.62652 3.46735 10.9857 3.3102L11.0796 4.24286L11.3918 4.21225L11.298 3.27959C11.4775 3.26326 11.6612 3.25714 11.8449 3.25306V5.12858H12.1571V3.25102C12.3408 3.2551 12.5204 3.26326 12.7041 3.27755L12.6143 4.2102L12.9265 4.24082L13.0163 3.30816C14.3755 3.46531 15.6367 3.93265 16.7347 4.64082L15.6939 6.2L15.9551 6.37142L16.998 4.81225C17.1469 4.91835 17.2939 5.02245 17.4347 5.13674L16.8408 5.85919L17.0837 6.05919L17.6775 5.33674C17.8184 5.45306 17.951 5.57958 18.0837 5.7041L17.5837 6.19184L10.7469 10.751L6.18774 17.5877L5.7 18.0755C5.57552 17.9429 5.45103 17.8102 5.33265 17.6735L6.0551 17.0796L5.85713 16.8367L5.13471 17.4306C5.02245 17.2898 4.91632 17.1408 4.81225 16.9918ZM5.27348 17.598C5.24694 17.5633 5.21835 17.5326 5.19184 17.4959L5.27348 17.598ZM6.40203 18.7265L6.5041 18.8082C6.46939 18.7816 6.43674 18.7531 6.40203 18.7265ZM7.03877 19.2082L7.24897 19.349C7.17958 19.3041 7.11019 19.2571 7.03877 19.2082ZM11.0265 20.6959L11.2367 20.7163C11.1674 20.7102 11.098 20.7041 11.0265 20.6959ZM12.7653 20.7184L12.9735 20.698C12.902 20.7041 12.8367 20.7102 12.7653 20.7184ZM16.751 19.351L16.9612 19.2102C16.8898 19.2571 16.8204 19.3041 16.751 19.351ZM17.4959 18.8082L17.602 18.7225C17.5653 18.7531 17.5306 18.7816 17.4959 18.8082ZM18.1796 18.1959L18.1959 18.1796C18.1918 18.1837 18.1837 18.1918 18.1796 18.1959ZM18.7265 17.598L18.8123 17.4918C18.7816 17.5265 18.7531 17.5633 18.7265 17.598ZM18.8633 17.4306L18.1408 16.8367L17.9408 17.0796L18.6633 17.6735C18.5469 17.8143 18.4204 17.9469 18.2959 18.0796L16.9714 16.7551L16.749 16.9775L18.0735 18.302C17.9408 18.4265 17.8082 18.5531 17.6714 18.6694L17.0775 17.9429L16.8347 18.1429L17.4286 18.8653C17.2837 18.9775 17.1388 19.0877 16.9918 19.1939L15.949 17.6326L15.6877 17.8041L16.7306 19.3633C15.6326 20.0714 14.3714 20.5347 13.0123 20.6918L12.9184 19.7592L12.6061 19.7898L12.7 20.7225C12.5204 20.7388 12.3367 20.7449 12.1531 20.749V18.8735H11.8408V20.749C11.6571 20.7449 11.4775 20.7367 11.2939 20.7225L11.3837 19.7898L11.0714 19.7592L10.9816 20.6918C9.62245 20.5347 8.36123 20.0674 7.26326 19.3592L8.30613 17.8L8.0449 17.6286L7.01019 19.1877C6.86123 19.0816 6.71429 18.9775 6.57348 18.8633L7.16736 18.1408L6.92448 17.9408L6.33061 18.6633C6.18981 18.5469 6.05713 18.4204 5.92448 18.2959L6.41632 17.8082L13.2531 13.249L17.8123 6.41226L18.3 5.92448C18.4245 6.05713 18.551 6.18981 18.6674 6.32652L17.9449 6.92042L18.1449 7.16326L18.8674 6.56939C18.9796 6.71429 19.0898 6.85919 19.1959 7.00613L17.6326 8.04897L17.8041 8.31019L19.3633 7.26735C20.0714 8.36532 20.5347 9.62652 20.6918 10.9857L19.7592 11.0796L19.7898 11.3918L20.7225 11.298C20.7388 11.4775 20.7449 11.6612 20.749 11.8449H18.8735V12.1571H20.749C20.7449 12.3408 20.7367 12.5204 20.7225 12.7041L19.7898 12.6143L19.7592 12.9265L20.6918 13.0163C20.5347 14.3755 20.0674 15.6367 19.3592 16.7347L17.8 15.6939L17.6286 15.9551L19.1877 16.998C19.0857 17.1388 18.9755 17.2837 18.8633 17.4306ZM20.7184 12.7612C20.7102 12.8306 20.7061 12.902 20.698 12.9714L20.7184 12.7612ZM19.351 16.751C19.3041 16.8204 19.2571 16.8918 19.2102 16.9612L19.351 16.751Z"
        fill="#323544"
      />
      <path
        d="M10.4463 3.38861L10.8115 5.22739L10.5054 5.28861L10.1401 3.44983L10.4463 3.38861Z"
        fill="#323544"
      />
      <path
        d="M13.5548 20.6125L13.1895 18.7737L13.4956 18.7125L13.8609 20.5512L13.5548 20.6125Z"
        fill="#323544"
      />
      <path
        d="M9.60974 3.57951L9.88116 4.47747L9.58116 4.56727L9.30974 3.66931L9.60974 3.57951Z"
        fill="#323544"
      />
      <path
        d="M14.3909 20.4159L14.1195 19.518L14.4195 19.4282L14.6909 20.3261L14.3909 20.4159Z"
        fill="#323544"
      />
      <path
        d="M8.79732 3.85736L9.51571 5.59L9.22794 5.71042L8.50958 3.97777L8.79732 3.85736Z"
        fill="#323544"
      />
      <path
        d="M15.2058 20.1427L14.4874 18.4101L14.7752 18.2897L15.4935 20.0224L15.2058 20.1427Z"
        fill="#323544"
      />
      <path
        d="M7.73461 4.35775L8.01013 4.21081L8.453 5.03735L8.17748 5.18429L7.73461 4.35775Z"
        fill="#323544"
      />
      <path
        d="M16.2592 19.6423L15.9837 19.7893L15.5408 18.9627L15.8163 18.8158L16.2592 19.6423Z"
        fill="#323544"
      />
      <path
        d="M4.3546 7.73842L5.18113 8.18126L5.03419 8.45677L4.20766 8.0139L4.3546 7.73842Z"
        fill="#323544"
      />
      <path
        d="M19.641 16.2611L18.8145 15.8182L18.9615 15.5427L19.788 15.9856L19.641 16.2611Z"
        fill="#323544"
      />
      <path
        d="M5.59 9.51255L3.85736 8.79419L3.97777 8.50642L5.71042 9.22481L5.59 9.51255Z"
        fill="#323544"
      />
      <path
        d="M18.4133 14.4861L20.1459 15.2045L20.0255 15.4923L18.2928 14.7759L18.4133 14.4861Z"
        fill="#323544"
      />
      <path
        d="M3.6712 9.31226L4.56916 9.58368L4.47936 9.88368L3.5814 9.61226L3.6712 9.31226Z"
        fill="#323544"
      />
      <path
        d="M20.3274 14.6871L19.4294 14.4157L19.5193 14.1157L20.4172 14.3871L20.3274 14.6871Z"
        fill="#323544"
      />
      <path
        d="M3.44731 10.1407L5.2861 10.5061L5.22487 10.8122L3.38609 10.4469L3.44731 10.1407Z"
        fill="#323544"
      />
      <path
        d="M20.5487 13.8609L18.7099 13.4956L18.7712 13.1895L20.6099 13.5548L20.5487 13.8609Z"
        fill="#323544"
      />
      <path
        d="M3.38609 13.5529L5.22487 13.1876L5.2861 13.4937L3.44731 13.8591L3.38609 13.5529Z"
        fill="#323544"
      />
      <path
        d="M20.6099 10.4469L18.7712 10.8122L18.7099 10.5061L20.5487 10.1407L20.6099 10.4469Z"
        fill="#323544"
      />
      <path
        d="M3.5814 14.3915L4.47936 14.1201L4.56916 14.4201L3.6712 14.6915L3.5814 14.3915Z"
        fill="#323544"
      />
      <path
        d="M20.4185 9.61226L19.5205 9.88368L19.4307 9.58368L20.3286 9.31226L20.4185 9.61226Z"
        fill="#323544"
      />
      <path
        d="M3.97651 15.4942L3.8561 15.2064L5.58874 14.488L5.70916 14.7758L3.97651 15.4942Z"
        fill="#323544"
      />
      <path
        d="M20.023 8.50832L20.1434 8.79606L18.4107 9.51445L18.2903 9.22668L20.023 8.50832Z"
        fill="#323544"
      />
      <path
        d="M4.35964 16.263L4.2127 15.9875L5.03923 15.5446L5.18616 15.8201L4.35964 16.263Z"
        fill="#323544"
      />
      <path
        d="M19.6448 7.73842L19.7918 8.0139L18.9652 8.45677L18.8183 8.18126L19.6448 7.73842Z"
        fill="#323544"
      />
      <path
        d="M8.01265 19.7893L7.73716 19.6423L8.18 18.8158L8.45552 18.9627L8.01265 19.7893Z"
        fill="#323544"
      />
      <path
        d="M15.9862 4.20892L16.2617 4.35586L15.8189 5.18239L15.5434 5.03545L15.9862 4.20892Z"
        fill="#323544"
      />
      <path
        d="M8.50832 20.0224L9.22668 18.2897L9.51445 18.4101L8.79813 20.1427L8.50832 20.0224Z"
        fill="#323544"
      />
      <path
        d="M15.4935 3.97477L14.7752 5.70539L14.4874 5.58497L15.2058 3.85232L15.4935 3.97477Z"
        fill="#323544"
      />
      <path
        d="M9.60974 20.4185L9.30974 20.3286L9.58116 19.4307L9.88116 19.5205L9.60974 20.4185Z"
        fill="#323544"
      />
      <path
        d="M14.3896 3.57951L14.6896 3.66931L14.4182 4.56727L14.1182 4.47747L14.3896 3.57951Z"
        fill="#323544"
      />
      <path
        d="M10.4463 20.6105L10.1401 20.5493L10.5054 18.7105L10.8115 18.7718L10.4463 20.6105Z"
        fill="#323544"
      />
      <path
        d="M13.5523 3.38546L13.8584 3.44668L13.4931 5.28545L13.187 5.22423L13.5523 3.38546Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSafariIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
