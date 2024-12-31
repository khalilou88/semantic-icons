import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ford-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0031 8.15723C6.47524 8.15723 2 9.88104 2 12.0034C2 14.1257 6.47524 15.8432 12.0031 15.8432C17.531 15.8432 22 14.1257 22 12.0034C22 9.88104 17.5248 8.15723 12.0031 8.15723ZM12.0031 15.4478C6.70259 15.4478 2.39241 13.9138 2.39241 12.0034C2.39241 10.093 6.69946 8.54627 12.0031 8.54627C17.3067 8.54627 21.6201 10.0993 21.6201 12.0034C21.6201 13.9075 17.3192 15.4478 12.0031 15.4478ZM15.9987 11.8231C15.7714 11.7978 15.488 11.9939 15.2576 12.2817C15.1423 12.4272 15.0177 12.7024 14.9991 12.8637C14.9742 13.0282 15.0177 13.1927 15.0769 13.2369C15.1361 13.2844 15.3914 13.4204 15.7932 13.0092C16.0206 12.7815 16.2386 12.4051 16.2386 12.4051L16.1669 12.3861C16.304 12.1299 16.2759 11.8547 15.9987 11.8231ZM12.0031 8.83094C6.85517 8.83094 2.6976 10.2511 2.6976 12.0002C2.6976 13.7493 6.8583 15.179 12.0031 15.179C17.1479 15.179 21.318 13.7557 21.318 12.0002C21.318 10.2448 17.1448 8.83094 12.0031 8.83094ZM7.65556 13.6829C7.09499 13.6829 6.5967 13.3097 6.58423 12.6423C6.578 12.2374 6.89879 11.7377 7.49985 11.589C7.57149 11.589 7.59638 11.6143 7.59638 11.6555C7.59638 11.6808 7.57149 11.7124 7.51231 11.7409C7.3379 11.8073 7.03581 12.1552 7.03581 12.4747C7.03581 12.7182 7.18529 12.9871 7.43757 13.044C7.50608 13.063 7.57149 13.0566 7.63686 13.0566C8.26285 13.0566 8.96667 12.3418 9.72657 11.2538C9.60511 11.2601 9.08189 11.3202 8.9511 11.4688C8.89193 11.5163 8.85457 11.4878 8.84211 11.4372C8.84211 11.4246 8.8608 11.3771 8.88259 11.3518C9.08812 11.1146 9.70787 11.064 9.85735 11.045C10.4117 10.1784 11.1218 9.628 11.3148 9.58688C11.3117 9.58688 11.3055 9.58688 11.2993 9.58372C10.8041 9.46669 10.3525 9.36864 9.9975 9.36864C8.75177 9.36864 8.19744 9.91267 8.22236 10.4093C8.23482 10.6117 8.39676 10.7445 8.63345 10.6971C8.89193 10.6496 9.2532 10.4029 9.3435 10.1847C9.36219 10.1404 9.41514 10.1309 9.43383 10.1467C9.47119 10.1784 9.45873 10.2258 9.45873 10.2258C9.4276 10.482 9.03831 11.1873 8.36874 11.1873C7.99501 11.1873 7.74276 10.8331 7.74899 10.4852C7.75522 9.83676 8.4061 9.18202 10.0131 9.18202C10.3152 9.18202 10.6577 9.20733 11.0314 9.27375C11.4643 9.35282 12.5419 9.53627 13.417 9.54893C13.7409 9.54893 14.152 9.56158 14.4883 9.51097C14.8433 9.45088 14.7655 9.43822 14.9056 9.43822C15.0333 9.43822 15.0333 9.49199 15.0333 9.5426C15.0333 9.75136 14.3108 10.1531 13.6973 10.1531C12.7942 10.1531 11.8568 9.7387 11.3709 9.6027C11.3896 9.62167 11.402 9.65014 11.3865 9.6881C11.3803 9.70075 11.3148 9.7735 11.29 9.79247C11.1623 9.9095 10.7231 10.2005 10.2435 11.0165C10.6297 10.9976 11.0813 10.9185 11.0813 10.9185C11.0813 10.9185 11.0564 10.8331 11.0564 10.7603C11.0751 10.4788 11.237 10.308 11.4425 10.3397C11.5578 10.3586 11.6356 10.4567 11.6356 10.5642C11.6356 10.6749 11.5515 10.8394 11.4675 10.9185C11.4083 10.9628 11.346 11.0102 11.2681 11.0482C11.2681 11.1209 11.3647 11.1778 11.4488 11.1873C11.4301 11.2601 11.4363 11.2917 11.4052 11.2854C11.2121 11.2854 11.1342 11.0956 11.1342 11.0956C10.8757 11.1431 10.6266 11.1747 10.1159 11.2253C8.83275 13.335 8.43102 13.6829 7.64623 13.6829H7.65556ZM16.5002 13.335C16.7773 13.3223 17.2881 12.7846 17.4095 12.6549C17.4344 12.6233 17.4811 12.5632 17.5061 12.5632C17.531 12.5632 17.5839 12.5885 17.5839 12.6296C17.5839 12.6549 17.5248 12.753 17.4811 12.8131C17.2227 13.142 16.796 13.645 16.3133 13.6576C16.0735 13.6576 15.9832 13.5596 15.952 13.3698C15.843 13.4678 15.4693 13.6386 15.0863 13.6386C14.7717 13.6323 14.6409 13.4425 14.5786 13.2907C14.5195 13.1673 14.4946 12.9839 14.5412 12.8004C14.3669 12.8922 14.2049 12.9048 13.9744 12.8985C13.7035 12.8922 13.5353 12.7688 13.4513 12.4462C13.1398 13.0219 13.1274 13.0408 12.8128 13.645H12.2647L12.9685 12.4335C13.0589 12.2691 13.1056 12.1394 13.1367 12.0002C13.1554 11.9211 13.0994 11.8484 13.0152 11.8421C12.9249 11.8421 12.7786 11.9338 12.6353 12.0698C12.6353 12.0698 12.274 12.462 12.0093 12.8605C11.7571 13.2401 11.3242 13.6734 10.8539 13.6734C10.5114 13.6734 10.203 13.4836 10.1377 13.1167C10.1377 13.1167 10.1034 13.2021 9.80131 13.3793C9.77638 13.3919 9.711 13.4299 9.69231 13.4172C9.63313 13.3666 9.60198 13.3002 9.59575 13.2527C9.61444 13.2591 9.65493 13.2274 9.77638 13.1294C10.0162 12.9459 10.066 12.8004 10.066 12.8004C10.1252 12.6771 10.228 12.481 10.2996 12.3418C10.4927 11.9496 10.829 11.5479 11.3772 11.5289C11.4675 11.5289 11.4924 11.5669 11.511 11.6017C11.564 11.6396 11.5453 11.7187 11.5453 11.7187C11.1591 11.7788 10.8944 12.0065 10.7325 12.2311C10.6359 12.3766 10.5332 12.6107 10.5145 12.7815C10.4771 13.0756 10.611 13.2717 10.8104 13.3192C11.1841 13.3793 11.4955 13.1041 11.7384 12.6771C11.8007 12.5664 11.8474 12.2786 11.8474 12.1204C11.8474 11.9623 11.7633 11.801 11.6979 11.7345C11.6979 11.6238 11.7696 11.5511 11.8536 11.5511C11.8785 11.5511 11.9034 11.5511 11.9315 11.5764C12.0592 11.7061 12.1308 11.9559 12.1308 12.1457C12.1308 12.2121 12.1308 12.2754 12.1183 12.3418C12.3893 12.0065 12.7318 11.5764 12.9966 11.491C13.0495 11.4657 13.0994 11.4657 13.1523 11.4657C13.635 11.453 13.5696 11.899 13.5696 11.899C13.8281 11.5985 14.0087 11.4878 14.2454 11.5005C14.5039 11.5131 14.5942 11.6966 14.5942 11.8421C14.588 12.0129 14.4634 12.209 14.2516 12.2153C14.0648 12.2153 13.9558 12.1236 13.8966 11.9528C13.7751 11.9971 13.716 12.0825 13.691 12.2533C13.6537 12.4683 13.8125 12.6391 14.0212 12.6391C14.3762 12.6391 14.5319 12.481 14.6596 12.364C15.0987 11.9433 15.3448 11.5068 15.9769 11.5131C16.3569 11.5194 16.4534 11.8263 16.5188 11.9591L17.3504 10.5326H17.8611L16.4815 13.0155C16.4565 13.0693 16.3912 13.1673 16.3974 13.2433C16.4098 13.3666 16.5655 13.335 16.5064 13.335H16.5002ZM11.4114 10.8015C11.4488 10.7635 11.5142 10.6433 11.5017 10.5642C11.4955 10.5263 11.4768 10.4788 11.4301 10.4852C11.3335 10.5041 11.2744 10.5516 11.2495 10.6496C11.2152 10.754 11.2308 10.8268 11.2495 10.9058C11.2495 10.9058 11.3117 10.9122 11.4114 10.8015Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgFordIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
