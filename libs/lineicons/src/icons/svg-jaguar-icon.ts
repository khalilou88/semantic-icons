import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-jaguar-icon',
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
        d="M4.26227 7.49208C4.25779 7.50018 4.24741 7.53731 4.24741 7.53731C4.27236 7.53801 4.33438 7.52873 4.33781 7.52823C4.50278 7.51076 4.54325 7.40515 4.54325 7.40515C4.47321 7.38314 4.41241 7.38863 4.41241 7.38863C4.30189 7.39717 4.27163 7.46982 4.26388 7.4884C4.26317 7.49011 4.26265 7.49135 4.26227 7.49208ZM19.9794 12.6009C20.1856 12.5309 20.3613 12.3998 20.4023 12.297C20.4347 12.2282 20.4315 12.1555 20.3761 12.0996C20.2866 12.0097 20.0818 12.0981 19.9308 12.1633C19.8985 12.1772 19.8686 12.1901 19.8429 12.1999C19.8429 12.1999 19.3863 12.335 18.7584 12.0402C18.7584 12.0402 18.1207 11.724 17.4277 11.2871C17.4277 11.2871 16.5006 10.8219 16.278 10.6969C15.1261 10.0494 13.3534 9.30603 12.4692 8.93521C12.3965 8.90475 12.3299 8.87679 12.27 8.85161C11.746 8.63086 10.7849 8.28875 10.7849 8.28875C9.50289 7.81237 8.95057 7.72017 8.95057 7.72017C8.79926 7.68929 8.78788 7.72785 8.78788 7.72785C8.77261 7.74723 8.79926 7.77378 8.79926 7.77378C8.93174 7.99669 8.96188 8.15039 8.96188 8.15039C8.09206 7.22845 6.54476 7.14774 6.54476 7.14774C6.07684 7.12237 5.81168 7.3637 5.81168 7.3637C5.77395 7.40226 5.81546 7.42906 5.81546 7.42906C6.37578 7.61462 6.69989 8.22341 6.69989 8.22341C6.03135 7.67802 5.62193 7.58946 5.62193 7.58946C5.16792 7.50498 5.17545 7.33594 5.17545 7.33594C5.59176 7.44199 5.85126 7.22274 5.93425 7.12383C5.96535 7.08651 5.94181 7.06494 5.91751 7.0623C5.25775 6.9888 4.88622 7.06351 4.88622 7.06351C4.22115 7.1649 4.08947 7.33149 4.05145 7.37958C4.04943 7.38215 4.04768 7.38434 4.04612 7.38622C4.00698 7.42379 3.9978 7.5665 4.18073 7.53918C4.18073 7.53918 4.18088 7.53874 4.18112 7.53788C4.18643 7.51936 4.24621 7.31088 4.44804 7.29715C4.44804 7.29715 4.66488 7.26555 4.78626 7.32514C4.78626 7.32514 4.59812 7.60477 4.31012 7.62605C4.31012 7.62605 4.19248 7.63495 4.15762 7.63708C4.12296 7.63927 3.86795 7.66534 3.72011 7.93059C3.72011 7.93059 3.64282 8.04884 3.7326 8.1468C3.73407 8.14839 3.73548 8.15007 3.73691 8.15179C3.73936 8.15471 3.74187 8.15773 3.74485 8.16043C3.74485 8.16043 3.83254 8.26959 3.9537 8.26168C3.9537 8.26168 4.05197 8.28878 4.16183 8.1044C4.16183 8.1044 4.28654 7.88873 4.34359 7.81977C4.34359 7.81977 4.41664 7.70533 4.56446 7.70533C4.56446 7.70533 4.87888 7.67611 4.93571 8.07213C4.96401 8.27035 4.915 8.41567 4.56658 8.69985C4.56658 8.69985 4.50951 8.74987 4.44918 8.78818C4.44918 8.78818 4.41146 8.81905 4.43412 8.85354C4.43412 8.85354 4.48571 8.92704 4.5555 8.92202C4.5579 8.92183 4.5603 8.92168 4.5627 8.92152C4.62991 8.91682 4.69959 8.91199 5.04465 8.56365C5.04465 8.56365 5.52242 8.43844 5.52242 8.0611C5.52242 8.0611 5.53373 7.8564 5.42628 7.70679C5.42628 7.70679 5.64455 7.72379 5.83738 8.08432C5.83738 8.08432 5.89703 8.24256 6.04742 8.26867C6.04742 8.26867 6.56795 8.36297 6.92645 8.65484C7.06671 8.76906 7.22393 8.92009 7.33428 9.09894C7.25954 8.93638 7.14898 8.6199 7.23832 8.30675C7.23832 8.30675 7.44783 8.94547 7.67201 9.13556C7.83847 9.27656 8.03645 9.37997 8.61872 9.521C8.61872 9.521 7.80474 9.33166 7.02825 9.4104C7.02825 9.4104 6.29847 9.47888 6.09081 9.95075C6.08989 9.95287 6.08894 9.955 6.08802 9.95713C6.05943 10.0224 6.03005 10.0893 6.02433 10.1839C6.02433 10.1839 5.99984 10.4595 6.3303 10.476C6.4293 10.4258 6.52907 10.3367 6.60091 10.2215C6.64456 10.1519 6.55216 10.1251 6.55216 10.1251C6.46891 10.0868 6.48971 10.0061 6.48971 10.0061C6.52786 9.83729 6.84676 9.82389 6.84676 9.82389C7.27037 9.82389 7.81516 10.0391 7.81516 10.0391C8.99968 10.4217 9.23068 9.84831 9.23068 9.84831C9.40207 9.53253 9.1852 8.78055 9.1852 8.78055C10.0642 9.49203 11.4733 9.56194 11.4733 9.56194C10.6002 9.67349 9.50292 9.27992 9.50292 9.27992C9.63896 9.55645 9.60075 9.88919 9.60075 9.88919C9.94321 10.0494 10.2956 10.1556 10.5059 10.1985C10.5169 10.2007 10.5281 10.2031 10.5395 10.2054C10.7477 10.2486 11.0618 10.3138 12.3216 10.2763C12.353 10.2754 12.3828 10.2743 12.4111 10.2733C12.4723 10.271 12.5268 10.269 12.5768 10.2696C12.6109 10.1059 12.2703 9.80661 12.2703 9.80661C12.6251 9.96342 12.9562 10.4025 13.0178 10.4867C13.0579 10.5387 13.1 10.6022 13.1456 10.6809C13.1552 10.6975 13.1667 10.7187 13.1804 10.7437C13.3526 11.0594 13.8568 11.984 15.0797 11.9658L15.7572 11.9701C15.7572 11.9701 16.6816 11.9472 17.0751 12.2243C17.2686 12.3609 17.3439 12.4267 17.4258 12.4982C17.4533 12.5222 17.4815 12.5469 17.5152 12.5751C17.5455 12.6005 17.5766 12.6271 17.6084 12.6544C17.8316 12.8457 18.0892 13.0666 18.3827 13.0929C18.6045 13.1248 18.7945 13.0701 18.8473 12.9173C18.8473 12.9173 18.9234 12.7255 18.7393 12.6156C18.657 12.5856 18.5676 12.5433 18.4663 12.4787L18.4568 12.4726C18.2655 12.3507 18.2584 12.3462 18.0885 12.1945C18.0236 12.1364 17.945 12.0361 17.8681 11.9382C17.7918 11.8409 17.7172 11.7459 17.6597 11.6966C17.534 11.5895 17.3621 11.4631 16.9603 11.4473C16.5515 11.4311 16.0751 11.4097 15.9356 11.381C15.7897 11.3511 15.7062 11.3278 15.5771 11.2225C15.4729 11.1375 15.4061 11.0444 15.3484 10.9397C15.3232 10.8939 15.2992 10.841 15.2715 10.7794C15.2362 10.7013 15.1947 10.6092 15.136 10.4999C15.0634 10.3654 14.9252 10.2546 14.9252 10.2546C14.9344 10.2605 14.9433 10.2663 14.9521 10.2719C15.116 10.3779 15.2076 10.4371 15.3267 10.6182C15.5883 11.0156 15.7967 11.1361 15.9726 11.1995C16.1466 11.262 16.5196 11.3073 16.8347 11.3456C16.9928 11.3648 17.1364 11.3822 17.233 11.3992C17.5102 11.448 17.6679 11.6084 17.7327 11.6764C17.7611 11.7061 17.7896 11.7362 17.8182 11.7663C17.9363 11.8907 18.0551 12.0159 18.165 12.1198C18.3581 12.3025 18.4811 12.3817 18.8616 12.4954C19.0252 12.5442 19.0742 12.5983 19.0742 12.5983C19.3068 12.6768 19.7616 12.6749 19.9794 12.6009ZM20.2122 11.9031C20.2122 11.9031 20.4764 11.8555 20.5585 12.0496C20.5877 12.1193 20.5708 12.2306 20.4742 12.352C20.1285 12.813 19.389 12.7647 19.2146 12.7533C19.183 12.7512 19.1699 12.7504 19.1811 12.754C19.2404 12.8973 19.2594 13.1533 19.0164 13.2972C19.0164 13.2972 18.6039 13.5243 17.8899 13.0357C17.7556 12.9614 17.5746 12.806 17.415 12.669C17.288 12.56 17.1746 12.4626 17.1089 12.4269C16.7695 12.2426 16.4237 12.239 15.9992 12.239L15.3007 12.2584C13.9285 12.2944 13.4784 11.4903 13.1734 10.9454C13.1354 10.8775 13.0996 10.8136 13.0646 10.7559C12.9873 10.6283 12.7912 10.4652 12.4826 10.4277C12.4826 10.4277 12.2598 10.4116 12.0701 10.4262C11.1062 10.4999 10.512 10.4375 10.512 10.4375C9.90217 10.3666 9.48542 10.1935 9.48542 10.1935C9.31028 10.5924 8.58492 10.5177 8.58492 10.5177C7.9471 10.46 7.45539 10.1689 7.45539 10.1689C7.00274 9.9658 6.77863 10.0235 6.77863 10.0235C6.7105 10.0391 6.72555 10.1159 6.72555 10.1159C6.75029 10.2115 6.71285 10.3118 6.67559 10.3527C6.61969 10.4343 6.50398 10.5112 6.43915 10.55C6.4111 10.5696 6.35599 10.5885 6.30575 10.594C6.23622 10.6019 6.1624 10.6003 6.07264 10.5605C6.01039 10.5328 5.91281 10.4607 5.87813 10.3618C5.87813 10.3618 5.69267 9.90745 6.16904 9.53085C6.16904 9.53085 6.51039 9.20118 7.35616 9.21052C7.13389 9.0391 6.31775 8.44511 5.74663 8.48466C5.74663 8.48466 5.23135 8.53853 4.8657 8.93905C4.8657 8.93905 4.72384 9.10329 4.55338 9.09751C4.36057 9.09751 4.2915 8.83369 4.2915 8.83369C4.26013 8.75016 4.33109 8.69219 4.33109 8.69219L4.35444 8.67304C4.3457 8.64506 4.33532 8.60862 4.32803 8.57588C4.31555 8.51817 4.32026 8.50451 4.32026 8.50451C4.32026 8.50451 4.43267 8.56743 4.48314 8.56841L4.50762 8.56721C4.59578 8.54856 4.69124 8.38098 4.69124 8.38098C4.77607 8.16887 4.70093 8.00774 4.63017 7.95746C4.542 7.89473 4.42393 7.93399 4.37633 7.97182C4.3228 8.01445 4.27021 8.09992 4.24215 8.16887C4.24215 8.16887 4.21812 8.22706 4.22308 8.28976C4.22588 8.32476 4.24701 8.37549 4.26574 8.4205C4.27698 8.44749 4.28735 8.4724 4.29239 8.49063C4.29239 8.49063 4.15779 8.48583 4.08071 8.40684C4.08071 8.40684 4.07859 8.42574 4.00434 8.43339C3.83653 8.45038 3.7267 8.33594 3.67178 8.27058C3.6173 8.20496 3.53103 8.05224 3.53103 8.05224C3.46131 7.91792 3.54801 7.8279 3.54801 7.8279C3.70975 7.63758 3.90846 7.50498 3.90846 7.50498C3.9252 7.49037 3.91976 7.46762 3.91976 7.46762C3.8809 7.38501 3.96057 7.31799 3.96057 7.31799C4.41243 6.79655 5.74663 6.81354 5.74663 6.81354C8.32231 6.81354 11.9035 8.46379 11.9035 8.46379C13.7596 9.24308 15.0141 9.89618 15.0141 9.89618C16.1093 10.4552 17.2042 11.0393 17.5 11.2112C17.5788 11.257 17.6689 11.3142 17.7714 11.3793C18.0535 11.5585 18.4296 11.7973 18.9223 12.0214C18.9223 12.0214 19.271 12.1789 19.7269 12.0833C19.8364 12.0605 19.93 12.0151 20.0116 11.9756C20.088 11.9386 20.1538 11.9067 20.2122 11.9031ZM5.41541 7.23687C5.58728 7.24214 5.73482 7.177 5.73533 7.16769C5.7358 7.15835 5.5451 7.1399 5.5451 7.1399C5.37044 7.14733 5.29923 7.21314 5.29827 7.22083C5.2971 7.22823 5.34379 7.23442 5.41541 7.23687ZM9.8013 16.6199C8.97484 16.6199 8.18938 16.3311 8.18938 15.3551C8.18938 15.0379 8.32803 14.7128 8.53737 14.48C8.86548 14.1183 9.36374 13.974 9.8343 13.974C10.1188 13.974 10.4484 14.0396 10.7048 14.172V14.4738C10.4724 14.2978 10.1664 14.1764 9.86806 14.1764C9.18822 14.1764 8.71934 14.6084 8.71934 15.323C8.71934 15.9698 9.13308 16.4126 9.7695 16.4126C9.93146 16.4126 10.1556 16.3833 10.3098 16.3233V15.3953H10.7881V16.4315C10.753 16.4475 10.7161 16.4625 10.6777 16.4764C10.4094 16.5739 10.0708 16.6199 9.8013 16.6199ZM5.70515 14.504L5.15163 15.6772H6.23247L5.70515 14.504ZM6.62658 16.5638L6.31169 15.85H5.07006L4.73184 16.5638H4.42845L5.67685 14.0221H5.97412L7.19611 16.5638H6.62658ZM17.0983 14.504L16.5444 15.6772H17.625L17.0983 14.504ZM18.0193 16.5638L17.7039 15.85H16.4626L16.1248 16.5638H15.8213L17.0697 14.0221H17.3672L18.5887 16.5638H18.0193ZM13.5495 16.6202C14.1789 16.6202 14.5549 16.4069 14.675 15.9007C14.706 15.771 14.7203 15.6283 14.7203 15.3755V14.0221H14.426V15.4772C14.426 15.6529 14.4113 15.7667 14.3924 15.8596C14.3108 16.2628 14.0103 16.4112 13.5591 16.4112C13.3458 16.4112 13.0929 16.3607 12.9465 16.1881C12.8176 16.0408 12.7904 15.841 12.7904 15.5058V14.0222H12.3122V15.5316C12.3122 15.5508 12.3123 15.57 12.3126 15.5891C12.3168 15.8751 12.3568 16.1405 12.5533 16.3362C12.7466 16.533 13.1224 16.6202 13.5495 16.6202ZM21.3273 14.7907C21.3272 14.3611 21.0199 14.1986 20.6363 14.1986H20.2846V15.4145H20.5922C20.8501 15.4145 21.0044 15.3656 21.1246 15.2673C21.2514 15.1638 21.3273 15.0052 21.3273 14.7907ZM21.4491 16.5638L20.786 15.5878H20.2846V16.5638H19.8061V14.0221H20.7113C21.0785 14.0221 21.446 14.0762 21.6507 14.3058C21.7577 14.4258 21.8159 14.5927 21.8159 14.8074C21.8159 15.2002 21.5243 15.4382 21.2645 15.5318L22 16.5639L21.4491 16.5638ZM2.40709 17.0863C2.28078 17.1466 2.14239 17.1866 2 17.1866C2.32789 16.9458 2.4665 16.7009 2.51388 16.2953C2.54169 16.0703 2.54169 15.8452 2.54169 15.6204V14.0222H3.02021V15.9458C3.02026 16.4155 2.84226 16.8696 2.40709 17.0863Z"
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
export class SvgJaguarIcon {
  readonly class = input<string>('');
}
