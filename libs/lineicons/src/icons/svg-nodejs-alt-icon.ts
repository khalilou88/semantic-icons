import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-nodejs-alt-icon',
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.17653 9.76889C6.24831 9.81023 6.29213 9.88664 6.29213 9.96982L6.28844 12.937C6.28844 12.9781 6.26622 13.0166 6.23109 13.0369C6.19556 13.0582 6.15109 13.0582 6.11537 13.0369L4.97769 12.3854C4.90617 12.3429 4.86173 12.267 4.86173 12.1847V10.7984C4.86173 10.7157 4.81769 10.6393 4.74597 10.5981L4.26154 10.3191C4.22655 10.2983 4.18613 10.288 4.14653 10.288C4.10629 10.288 4.06677 10.2983 4.03079 10.3191L3.54613 10.5983C3.47447 10.6394 3.43061 10.7158 3.43061 10.7985V12.1849C3.43061 12.2673 3.38676 12.3429 3.31487 12.3857L2.17646 13.0376C2.14119 13.0593 2.09689 13.0593 2.06162 13.0376C2.02546 13.0173 2.0042 12.9788 2.0042 12.9377L2 9.97004C2 9.88689 2.04449 9.81045 2.11583 9.76889L4.0307 8.66707C4.06357 8.64807 4.09978 8.63814 4.13649 8.63676H4.15629C4.19301 8.63814 4.22922 8.64807 4.26154 8.66707L6.17653 9.76889ZM15.2994 11.565C15.3174 11.5547 15.3284 11.5356 15.3284 11.5149L15.3282 10.7556C15.3282 10.7349 15.3173 10.7158 15.2992 10.7054L14.6414 10.3256C14.6233 10.3153 14.6012 10.3153 14.5831 10.3256L13.9257 10.7054C13.9081 10.7158 13.8973 10.7349 13.8973 10.7556V11.5149C13.8973 11.5356 13.9081 11.5547 13.9262 11.565L14.584 11.9441C14.6018 11.9544 14.6239 11.9544 14.6417 11.9441L15.2994 11.565ZM15.3911 5.89182C15.4265 5.87117 15.4702 5.87064 15.5061 5.89064L16.6456 6.5267C16.7189 6.5677 16.7645 6.64489 16.7645 6.72876V12.2409C16.7645 12.3236 16.7202 12.3996 16.6488 12.4412L14.7332 13.548C14.6614 13.5891 14.5734 13.5891 14.5018 13.548L12.5862 12.4416C12.5147 12.4 12.4705 12.3241 12.4705 12.2414V10.0296C12.4705 9.94735 12.5147 9.87095 12.5862 9.82979L14.5018 8.72426C14.5736 8.68295 14.6615 8.68295 14.733 8.72426L15.2127 9.00057C15.2377 9.01501 15.2687 9.01501 15.2936 9.00057C15.3186 8.98607 15.334 8.95939 15.334 8.93045V5.99173C15.334 5.9506 15.3558 5.91264 15.3911 5.89182ZM22 10.5357C22 10.618 21.9562 10.6943 21.885 10.7356L20.736 11.403C20.7003 11.4238 20.656 11.4238 20.6203 11.4034C20.5846 11.3826 20.5624 11.3442 20.5624 11.303V10.7578C20.5624 10.7167 20.5403 10.6783 20.5046 10.6579L19.9046 10.312C19.8689 10.2912 19.825 10.2912 19.7893 10.312L19.1898 10.6579C19.1537 10.6785 19.132 10.7167 19.132 10.7581V11.4516C19.132 11.4928 19.1541 11.5312 19.1903 11.5515L21.1172 12.6574C21.1533 12.6777 21.1755 12.7166 21.1755 12.7582C21.1755 12.7998 21.1524 12.8383 21.1163 12.8586L19.9652 13.4983C19.8942 13.5377 19.8083 13.5372 19.7383 13.497L17.8353 12.4124C17.7634 12.3712 17.7187 12.2944 17.7187 12.2111V10.0004C17.7187 9.9176 17.7625 9.84167 17.8344 9.80004L19.7495 8.69464C19.8214 8.65304 19.9096 8.65304 19.9814 8.69464L21.8849 9.7996C21.9561 9.8411 22 9.91717 22 9.99967V10.5357ZM11.8853 18.1249C11.8193 18.1249 11.7537 18.1076 11.6958 18.0743L11.0929 17.7173C11.0028 17.6669 11.0467 17.6491 11.0764 17.6389C11.1965 17.5968 11.2209 17.5873 11.3491 17.5145C11.3626 17.5068 11.3802 17.5096 11.394 17.5177L11.8572 17.7926C11.8739 17.8016 11.8977 17.8016 11.9132 17.7926L13.7193 16.75C13.7361 16.7405 13.7469 16.7211 13.7469 16.7012V14.617C13.7469 14.5961 13.7361 14.5776 13.719 14.5672L11.9135 13.5256C11.8968 13.5156 11.8747 13.5156 11.8579 13.5256L10.0528 14.5672C10.0353 14.5772 10.0242 14.5966 10.0242 14.6165V16.7007C10.0242 16.7206 10.0351 16.7396 10.0523 16.7491L10.5468 17.0348C10.8154 17.1691 10.9795 17.0109 10.9795 16.8517V14.7946C10.9795 14.7653 11.0026 14.7426 11.032 14.7426H11.2607C11.2892 14.7426 11.3127 14.7653 11.3127 14.7946V16.8526C11.3127 17.2107 11.1174 17.4164 10.7779 17.4164C10.6734 17.4164 10.5911 17.4164 10.3615 17.3034L9.88766 17.0303C9.77056 16.9625 9.69825 16.8359 9.69825 16.7007V14.6165C9.69825 14.4809 9.77056 14.3543 9.88766 14.2874L11.6957 13.2444C11.81 13.1797 11.9619 13.1797 12.0754 13.2444L13.8811 14.2878C13.9978 14.3552 14.0706 14.4813 14.0706 14.617V16.7012C14.0706 16.8364 13.9978 16.9625 13.8811 17.0303L12.0754 18.0734C12.0176 18.1068 11.952 18.124 11.8851 18.124L11.8853 18.1249ZM12.4432 16.6887C11.6529 16.6887 11.4872 16.326 11.4872 16.0217C11.4872 15.9928 11.5105 15.9697 11.5395 15.9697H11.7728C11.7986 15.9697 11.8202 15.9884 11.8243 16.0139C11.8596 16.2516 11.9645 16.3715 12.4423 16.3715C12.823 16.3715 12.9849 16.2855 12.9849 16.0837C12.9849 15.9675 12.9387 15.8811 12.3474 15.8233C11.8528 15.7744 11.5472 15.6654 11.5472 15.2699C11.5472 14.9055 11.8546 14.6884 12.3696 14.6884C12.9478 14.6884 13.2344 14.8892 13.2706 15.3205C13.272 15.3354 13.2666 15.3499 13.2566 15.3608C13.2467 15.3711 13.2327 15.3775 13.2182 15.3775H12.9835C12.9591 15.3775 12.9379 15.3603 12.9329 15.3368C12.8764 15.0868 12.7398 15.0068 12.3687 15.0068C11.9532 15.0068 11.9048 15.1514 11.9048 15.2599C11.9048 15.3915 11.9618 15.4299 12.5224 15.5041C13.0776 15.5778 13.3411 15.6817 13.3411 16.0719C13.3411 16.4653 13.0129 16.6909 12.4406 16.6909L12.4432 16.6887ZM14.6405 14.4805H14.7011C14.7508 14.4805 14.7603 14.4457 14.7603 14.4254C14.7603 14.372 14.7237 14.372 14.7033 14.372H14.641L14.6405 14.4805ZM14.5668 14.3096H14.7011C14.7472 14.3096 14.8376 14.3096 14.8376 14.4127C14.8376 14.4844 14.7918 14.4994 14.7642 14.5084C14.8165 14.5119 14.8211 14.5455 14.828 14.5931L14.8286 14.5971L14.829 14.6007C14.8327 14.6323 14.8385 14.6828 14.8489 14.7002H14.7662L14.7647 14.6879C14.7606 14.6554 14.7513 14.5819 14.7513 14.5773C14.7459 14.5551 14.7382 14.5443 14.7106 14.5443H14.6423V14.7007H14.5668V14.3096ZM14.4054 14.504C14.4054 14.6659 14.5361 14.797 14.6966 14.797C14.8584 14.797 14.9891 14.6631 14.9891 14.504C14.9891 14.3417 14.8566 14.2128 14.6961 14.2128C14.5379 14.2128 14.405 14.3399 14.405 14.5036L14.4054 14.504ZM15.0451 14.5049C15.0451 14.6966 14.8883 14.853 14.697 14.853C14.5071 14.853 14.3489 14.6984 14.3489 14.5049C14.3489 14.3078 14.5108 14.1568 14.697 14.1568C14.8847 14.1568 15.0447 14.3083 15.0447 14.5049H15.0451ZM19.8375 10.6321C19.8511 10.6241 19.8681 10.6241 19.8818 10.6321L20.2494 10.8441C20.2631 10.8521 20.2715 10.8667 20.2715 10.8826V11.3071C20.2715 11.3229 20.2631 11.3376 20.2494 11.3455L19.8818 11.5576C19.8681 11.5656 19.8511 11.5656 19.8375 11.5576L19.4702 11.3455C19.4561 11.3376 19.4476 11.3229 19.4476 11.3071V10.8826C19.4476 10.8667 19.4557 10.8521 19.4697 10.8441L19.8375 10.6321ZM9.54503 8.75632C9.47153 8.71348 9.38056 8.71348 9.308 8.75632L7.34041 9.89139C7.26541 9.93401 7.22187 10.0124 7.22187 10.0971V12.3697C7.22187 12.4544 7.26781 12.5328 7.34281 12.5754L9.308 13.7105C9.38056 13.7533 9.47153 13.7533 9.54503 13.7105L11.5114 12.5754C11.585 12.5328 11.63 12.4544 11.63 12.3697V10.0971C11.63 10.0124 11.585 9.93401 11.5114 9.89139L9.54503 8.75632Z"
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
export class SvgNodejsAltIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
