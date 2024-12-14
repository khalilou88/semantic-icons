import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-instagram-logotype-icon',
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
        d="M3.02938 9.18281C2.62002 9.35429 2.16998 9.83816 2.02785 10.446C1.84785 11.2159 2.59692 11.5414 2.65836 11.4348C2.73067 11.3094 2.52414 11.267 2.48162 10.8675C2.42668 10.3515 2.66654 9.77504 2.96845 9.52208C3.02457 9.47508 3.02187 9.54049 3.02187 9.66149C3.02187 9.87788 3.00992 11.8201 3.00992 12.2255C3.00992 12.774 2.98727 12.9472 2.94656 13.1184C2.90533 13.2918 2.83907 13.409 2.88927 13.4542C2.94539 13.5047 3.18495 13.3845 3.32364 13.191C3.48995 12.9588 3.54816 12.68 3.55863 12.3772C3.57125 12.0122 3.57071 11.4331 3.57125 11.1027C3.57175 10.7997 3.57633 9.91252 3.56593 9.37917C3.56341 9.24835 3.2006 9.1111 3.02938 9.18281ZM21.9102 12.0643C21.8508 12.0643 21.8238 12.1255 21.8013 12.2286C21.7235 12.5869 21.6418 12.6677 21.5364 12.6677C21.4187 12.6677 21.3128 12.4903 21.2857 12.1352C21.2643 11.856 21.2677 11.3419 21.295 10.8306C21.3006 10.7255 21.2717 10.6215 20.9898 10.5192C20.8686 10.4751 20.6923 10.4103 20.6045 10.6221C20.3566 11.2207 20.2596 11.6959 20.2367 11.8889C20.2355 11.8989 20.2233 11.9009 20.2211 11.8775C20.2066 11.723 20.1741 11.442 20.17 10.8517C20.1693 10.7366 20.1449 10.6385 20.0177 10.5583C19.9353 10.5062 19.6848 10.4141 19.5946 10.5237C19.5165 10.6133 19.426 10.8545 19.332 11.1403C19.2555 11.3727 19.2023 11.5299 19.2023 11.5299C19.2023 11.5299 19.2033 10.9029 19.2042 10.6651C19.2046 10.5754 19.1431 10.5455 19.1245 10.5401C19.0411 10.5158 18.8765 10.4753 18.8066 10.4753C18.7204 10.4753 18.6993 10.5235 18.6993 10.5937C18.6993 10.6029 18.6857 11.4191 18.6857 11.9899C18.6857 12.0147 18.6858 12.0417 18.6859 12.0705C18.6382 12.3328 18.4836 12.6889 18.3155 12.6889C18.1471 12.6889 18.0678 12.54 18.0678 11.8596C18.0678 11.4627 18.0797 11.2901 18.0855 11.003C18.0889 10.8376 18.0955 10.7106 18.0951 10.6818C18.0939 10.5935 17.9411 10.5489 17.87 10.5324C17.7985 10.5159 17.7364 10.5094 17.688 10.5122C17.6194 10.516 17.5708 10.561 17.5708 10.623C17.5708 10.6561 17.5712 10.7192 17.5712 10.7192C17.4828 10.5804 17.3407 10.4837 17.2461 10.4557C16.9914 10.3801 16.7257 10.4471 16.5252 10.7276C16.3658 10.9505 16.2698 11.203 16.232 11.5657C16.2044 11.8308 16.2134 12.0998 16.2625 12.3272C16.2031 12.5838 16.093 12.6889 15.9723 12.6889C15.7971 12.6889 15.6702 12.403 15.6849 11.9085C15.6946 11.5833 15.7597 11.3551 15.8308 11.0249C15.8612 10.8841 15.8365 10.8105 15.7747 10.7398C15.718 10.675 15.5973 10.642 15.4236 10.6827C15.2999 10.7117 15.123 10.7429 14.9613 10.7669C14.9613 10.7669 14.971 10.7279 14.9791 10.6592C15.0211 10.2991 14.6298 10.3283 14.5049 10.4434C14.4304 10.512 14.3796 10.593 14.3604 10.7387C14.3299 10.9697 14.5183 11.0788 14.5183 11.0788C14.4565 11.3619 14.3049 11.7317 14.1484 11.999C14.0646 12.1423 14.0004 12.2484 13.9177 12.3613C13.9174 12.3193 13.9171 12.2774 13.917 12.2354C13.9151 11.6403 13.923 11.1719 13.9265 11.003C13.9299 10.8377 13.9366 10.7141 13.9361 10.6853C13.9352 10.6206 13.8975 10.5962 13.819 10.5653C13.7496 10.538 13.6675 10.5191 13.5824 10.5125C13.4749 10.5041 13.4102 10.5611 13.4119 10.6285C13.4122 10.6412 13.4122 10.7193 13.4122 10.7193C13.3239 10.5805 13.1817 10.4838 13.0872 10.4558C12.8324 10.3802 12.5667 10.4472 12.3662 10.7277C12.2069 10.9506 12.1026 11.2634 12.073 11.563C12.0455 11.8423 12.0505 12.0796 12.0881 12.2795C12.0476 12.4796 11.9311 12.689 11.7995 12.689C11.6312 12.689 11.5354 12.5401 11.5354 11.8597C11.5354 11.4628 11.5473 11.2902 11.5531 11.0031C11.5565 10.8377 11.5631 10.7107 11.5627 10.6819C11.5615 10.5935 11.4087 10.549 11.3376 10.5325C11.2632 10.5153 11.1989 10.509 11.1496 10.5126C11.0845 10.5174 11.0388 10.5757 11.0388 10.6191V10.7193C10.9504 10.5805 10.8082 10.4838 10.7137 10.4558C10.459 10.3802 10.1947 10.4483 9.99275 10.7277C9.86105 10.9099 9.75444 11.1119 9.69956 11.559C9.68371 11.6882 9.6767 11.8093 9.67761 11.9223C9.6251 12.2435 9.39318 12.6137 9.20341 12.6137C9.09238 12.6137 8.98664 12.3983 8.98664 11.9394C8.98664 11.328 9.02452 10.4576 9.03088 10.3737C9.03088 10.3737 9.27061 10.3697 9.31703 10.3691C9.43664 10.3678 9.54494 10.3706 9.70418 10.3625C9.78406 10.3584 9.86102 10.0717 9.77858 10.0362C9.74124 10.0202 9.47711 10.0061 9.37244 10.0039C9.28441 10.0019 9.03929 9.98376 9.03929 9.98376C9.03929 9.98376 9.06128 9.406 9.06643 9.34497C9.07077 9.29407 9.00496 9.26791 8.96722 9.25199C8.87541 9.21321 8.79334 9.19459 8.69601 9.17452C8.56156 9.14678 8.50052 9.17392 8.48864 9.28744C8.4707 9.45963 8.4614 9.96413 8.4614 9.96413C8.3627 9.96413 8.02568 9.94484 7.92697 9.94484C7.83524 9.94484 7.7363 10.3392 7.86308 10.3441C8.00895 10.3497 8.26315 10.3546 8.43168 10.3597C8.43168 10.3597 8.42417 11.2445 8.42417 11.5176C8.42417 11.5467 8.42427 11.5747 8.42447 11.6018C8.33173 12.0853 8.00501 12.3464 8.00501 12.3464C8.07517 12.0266 7.93186 11.7864 7.67375 11.5831C7.57861 11.5082 7.3909 11.3664 7.18083 11.2109C7.18083 11.2109 7.30249 11.091 7.41039 10.8498C7.48684 10.6789 7.49014 10.4833 7.30246 10.4402C6.99244 10.3689 6.73675 10.5966 6.6605 10.8397C6.60142 11.028 6.63293 11.1678 6.74867 11.3129C6.75712 11.3236 6.76628 11.3344 6.77574 11.3453C6.70575 11.4802 6.6096 11.6618 6.52817 11.8026C6.30211 12.1937 6.13139 12.503 6.00232 12.503C5.89917 12.503 5.90059 12.189 5.90059 11.8949C5.90059 11.6415 5.9193 11.2604 5.93425 10.8658C5.9392 10.7354 5.87392 10.661 5.76455 10.5937C5.69809 10.5528 5.55626 10.4724 5.47415 10.4724C5.35121 10.4724 4.99648 10.4891 4.66132 11.4586C4.61907 11.5808 4.53608 11.8035 4.53608 11.8035L4.54322 10.6376C4.54322 10.6103 4.52864 10.5838 4.49532 10.5657C4.43883 10.5351 4.28797 10.4724 4.15385 10.4724C4.08996 10.4724 4.05804 10.5021 4.05804 10.5613L4.04633 12.3854C4.04633 12.524 4.04993 12.6857 4.06367 12.7564C4.0773 12.8272 4.09942 12.8848 4.12682 12.9191C4.15416 12.9533 4.1858 12.9794 4.23798 12.9901C4.28653 13.0001 4.55238 13.0343 4.56621 12.9327C4.58278 12.8109 4.58338 12.6792 4.72299 12.188C4.94033 11.4233 5.22369 11.0502 5.35693 10.9177C5.3802 10.8946 5.40679 10.8932 5.40551 10.9311C5.39986 11.0987 5.37986 11.5177 5.36636 11.8736C5.33027 12.826 5.50354 13.0026 5.75115 13.0026C5.94058 13.0026 6.20761 12.8143 6.49386 12.3379C6.67229 12.041 6.84556 11.7498 6.97009 11.54C7.05684 11.6203 7.15416 11.7067 7.25149 11.7991C7.47758 12.0136 7.55181 12.2176 7.50256 12.411C7.46489 12.5589 7.32303 12.7113 7.07054 12.5632C6.99695 12.52 6.96551 12.4866 6.89155 12.4378C6.85179 12.4117 6.79112 12.4038 6.75473 12.4313C6.66017 12.5025 6.6061 12.5932 6.57523 12.7055C6.5452 12.8147 6.65458 12.8724 6.76796 12.9229C6.86559 12.9664 7.07542 13.0058 7.20924 13.0102C7.73061 13.0277 8.14832 12.7585 8.43905 12.0641C8.49113 12.6638 8.71261 13.0031 9.0975 13.0031C9.3548 13.0031 9.61278 12.6706 9.72559 12.3434C9.75797 12.4767 9.80591 12.5927 9.86782 12.6908C10.1644 13.1606 10.7397 13.0595 11.0287 12.6606C11.118 12.5373 11.1316 12.4929 11.1316 12.4929C11.1737 12.8697 11.4771 13.0013 11.6508 13.0013C11.8454 13.0013 12.0463 12.9094 12.1871 12.5924C12.2032 12.6262 12.2213 12.6591 12.2412 12.6908C12.5378 13.1607 13.1131 13.0595 13.4021 12.6606C13.4157 12.6418 13.4275 12.6249 13.4378 12.6096L13.4463 12.8571L13.1803 13.1011C12.7343 13.5098 12.3955 13.8199 12.3706 14.1809C12.3389 14.6412 12.712 14.8123 12.9947 14.8347C13.2944 14.8585 13.5515 14.6928 13.7093 14.4609C13.8482 14.2568 13.939 13.8175 13.9324 13.3836C13.9298 13.2099 13.9254 12.989 13.9219 12.7522C14.0785 12.5704 14.2549 12.3406 14.4172 12.0717C14.5942 11.7786 14.7839 11.385 14.881 11.0787C14.881 11.0787 15.0458 11.0801 15.2216 11.0686C15.2779 11.0649 15.294 11.0764 15.2837 11.1176C15.2711 11.1674 15.0615 11.976 15.2528 12.5146C15.3837 12.8834 15.6789 13.002 15.854 13.002C16.0589 13.002 16.2548 12.8473 16.3598 12.6175C16.3725 12.6431 16.3858 12.6679 16.4002 12.6908C16.6967 13.1607 17.27 13.059 17.561 12.6606C17.6267 12.5707 17.664 12.493 17.664 12.493C17.7264 12.8829 18.0296 13.0033 18.2033 13.0033C18.3842 13.0033 18.5559 12.9292 18.6952 12.5996C18.701 12.7447 18.7102 12.8633 18.7246 12.9008C18.7335 12.9236 18.7849 12.9524 18.8223 12.9662C18.9878 13.0276 19.1566 12.9986 19.219 12.986C19.2623 12.9772 19.296 12.9425 19.3006 12.8529C19.3127 12.6176 19.3053 12.2222 19.3766 11.9283C19.4964 11.4352 19.6081 11.2439 19.6611 11.1492C19.6907 11.0962 19.7242 11.0874 19.7254 11.1436C19.7278 11.2572 19.7335 11.5909 19.7799 12.0391C19.814 12.3688 19.8595 12.5637 19.8945 12.6254C19.9943 12.8017 20.1176 12.8101 20.2179 12.8101C20.2818 12.8101 20.4154 12.7925 20.4034 12.6802C20.3976 12.6255 20.4078 12.2874 20.5258 11.8016C20.6029 11.4843 20.7315 11.1977 20.7778 11.0929C20.7949 11.0542 20.8029 11.0847 20.8026 11.0906C20.7928 11.3091 20.7709 12.0237 20.8599 12.4146C20.9806 12.9441 21.3296 13.0033 21.4512 13.0033C21.7109 13.0033 21.9232 12.8058 21.9948 12.2861C22.0122 12.1609 21.9867 12.0643 21.9102 12.0643ZM11.0335 11.743C11.0186 12.0181 10.9649 12.248 10.8788 12.415C10.723 12.7173 10.4147 12.8131 10.2788 12.3764C10.1808 12.0614 10.2142 11.632 10.255 11.4C10.3155 11.0557 10.467 10.8116 10.7034 10.8348C10.9464 10.8585 11.0645 11.1707 11.0335 11.743ZM13.4069 11.747C13.393 12.0067 13.3257 12.2676 13.2522 12.415C13.1006 12.7194 12.7836 12.8145 12.6522 12.3764C12.5624 12.077 12.5839 11.6896 12.6284 11.4455C12.686 11.1287 12.8258 10.8348 13.0769 10.8348C13.3209 10.8348 13.4413 11.1025 13.4069 11.747ZM13.4688 13.5189C13.4655 13.9927 13.391 14.4082 13.2311 14.5288C13.0043 14.6999 12.6994 14.5716 12.7626 14.2258C12.8184 13.9199 13.0825 13.6074 13.4695 13.2257C13.4695 13.2257 13.4703 13.3127 13.4688 13.5189ZM17.5659 11.7497C17.5527 12.0349 17.4896 12.2578 17.4112 12.415C17.2596 12.7194 16.9448 12.8139 16.8113 12.3764C16.7384 12.1379 16.735 11.7395 16.7874 11.4067C16.8407 11.0677 16.9895 10.8116 17.2359 10.8348C17.4789 10.8576 17.5927 11.1707 17.5659 11.7497Z"
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
export class SvgInstagramLogotypeIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
