import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cloudflare-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.6074 12.7443C18.6656 12.5442 18.6434 12.3601 18.546 12.2235C18.4571 12.0986 18.3068 12.0256 18.1258 12.0171L14.7003 11.9726C14.6781 11.9726 14.659 11.961 14.6474 11.9451C14.6358 11.9282 14.6336 11.9059 14.6389 11.8837C14.6506 11.8498 14.6834 11.8255 14.7194 11.8223L18.1755 11.7779C18.5841 11.7588 19.0297 11.4275 19.1853 11.021L19.3833 10.5066C19.3918 10.4843 19.3949 10.4621 19.3886 10.4399C19.1674 9.4332 18.2687 8.68164 17.1942 8.68164C16.2034 8.68164 15.363 9.32206 15.0623 10.2091C14.8676 10.0641 14.6199 9.98682 14.3531 10.0112C13.8768 10.0588 13.4957 10.4399 13.4491 10.9152C13.4375 11.0379 13.446 11.1576 13.4745 11.2687C12.6986 11.2909 12.0773 11.925 12.0773 12.7073C12.0773 12.7771 12.0826 12.8459 12.091 12.9158C12.0963 12.9497 12.1249 12.974 12.1577 12.974H18.4804C18.5164 12.974 18.5502 12.9486 18.5608 12.9126L18.6074 12.7443ZM21.8306 14.0802C21.7364 14.0802 21.6613 14.005 21.6613 13.9108C21.6613 13.8187 21.7364 13.7414 21.8306 13.7414C21.9227 13.7414 22 13.8166 22 13.9108C22 14.0029 21.9227 14.0802 21.8306 14.0802ZM21.8306 13.7743C21.7555 13.7743 21.6941 13.8357 21.6941 13.9108C21.6941 13.986 21.7555 14.0474 21.8306 14.0474C21.9058 14.0474 21.9672 13.986 21.9672 13.9108C21.9672 13.8357 21.9058 13.7743 21.8306 13.7743ZM21.9164 13.9997H21.8772L21.8433 13.9362H21.7989V13.9997H21.7629V13.8134H21.8518C21.891 13.8134 21.9153 13.8388 21.9153 13.8748C21.9153 13.9023 21.8984 13.9225 21.8761 13.9309L21.9164 13.9997ZM21.8497 13.9023C21.8634 13.9023 21.8772 13.8939 21.8772 13.8748C21.8772 13.8526 21.8656 13.8473 21.8497 13.8473H21.7936V13.9034H21.8497V13.9023ZM4.14565 13.7245H4.57965V14.9069H5.33333V15.2859H4.14565V13.7245ZM5.78215 14.5089V14.5036C5.78215 14.0558 6.14417 13.6906 6.62581 13.6906C7.10744 13.6906 7.46311 14.0495 7.46311 14.4972V14.5025C7.46311 14.9503 7.10109 15.3155 6.61945 15.3155C6.13782 15.3155 5.78215 14.9566 5.78215 14.5089ZM7.02276 14.5089V14.5036C7.02276 14.2781 6.86186 14.0834 6.62157 14.0834C6.38552 14.0834 6.22674 14.275 6.22674 14.5004V14.5057C6.22674 14.7312 6.38764 14.926 6.62475 14.926C6.86398 14.926 7.02276 14.7344 7.02276 14.5089ZM7.99449 14.601V13.7245H8.43379V14.5925C8.43379 14.818 8.54811 14.9238 8.72065 14.9238C8.89319 14.9238 9.00751 14.8212 9.00751 14.6042V13.7245H9.44681V14.5904C9.44681 15.0943 9.15994 15.3144 8.71536 15.3144C8.27289 15.3134 7.99449 15.09 7.99449 14.601ZM10.1095 13.7245H10.7107C11.2675 13.7245 11.5925 14.0442 11.5925 14.4951V14.5004C11.5925 14.9514 11.2643 15.2848 10.7022 15.2848H10.1095V13.7245ZM10.7181 14.9016C10.9764 14.9016 11.1489 14.7598 11.1489 14.5068V14.5015C11.1489 14.2506 10.9764 14.1066 10.7181 14.1066H10.5424V14.8995H10.7181V14.9016ZM12.2212 13.7245H13.4703V14.1035H12.6521V14.3702H13.392V14.7291H12.6521V15.2859H12.2212V13.7245ZM14.0716 13.7245H14.5024V14.9069H15.2592V15.2859H14.0705V13.7245H14.0716ZM16.3898 13.7129H16.8068L17.4716 15.2848H17.0069L16.8926 15.0064H16.2913L16.1802 15.2848H15.726L16.3898 13.7129ZM16.7708 14.6698L16.5983 14.2273L16.4226 14.6698H16.7708ZM18.0294 13.7245H18.7672C19.0065 13.7245 19.1705 13.7859 19.2764 13.8939C19.3685 13.9828 19.415 14.1024 19.415 14.258V14.2633C19.415 14.5025 19.287 14.6613 19.0954 14.7418L19.468 15.2869H18.9673L18.6529 14.8137H18.4634V15.2869H18.0294V13.7245ZM18.7471 14.4729C18.8942 14.4729 18.9779 14.4009 18.9779 14.2887V14.2834C18.9779 14.1606 18.889 14.0992 18.7439 14.0992H18.4602V14.4718L18.7471 14.4729ZM20.0385 13.7245H21.294V14.0918H20.4672V14.3279H21.2156V14.6698H20.4672V14.9175H21.3045V15.2848H20.0385V13.7245ZM3.19932 14.692C3.13793 14.8286 3.00984 14.926 2.8426 14.926C2.60654 14.926 2.44459 14.728 2.44459 14.5057V14.5004C2.44459 14.275 2.60337 14.0834 2.83942 14.0834C3.01725 14.0834 3.15381 14.1924 3.20991 14.3416H3.66614C3.59416 13.969 3.26495 13.6928 2.8426 13.6928C2.36202 13.6938 2 14.058 2 14.5057V14.511C2 14.9598 2.35673 15.3187 2.8373 15.3187C3.24907 15.3187 3.57193 15.0519 3.65555 14.6952L3.19932 14.692ZM19.6047 10.5471C19.6354 10.5439 19.6682 10.5439 19.6989 10.5439C20.731 10.5439 21.5715 11.3844 21.5715 12.4165C21.5715 12.5912 21.5461 12.7616 21.5016 12.9225C21.4931 12.9532 21.4656 12.9722 21.4349 12.9722H18.8267C18.796 12.9722 18.7759 12.9436 18.7875 12.9161L18.8436 12.7743C18.9992 12.3678 19.4417 12.0365 19.8535 12.0174L20.6135 11.973C20.6495 11.9698 20.6823 11.9454 20.694 11.9116C20.6992 11.8915 20.6971 11.8671 20.6855 11.8502C20.6738 11.8343 20.6548 11.8227 20.6326 11.8227L19.9032 11.7782C19.7222 11.7697 19.5719 11.6967 19.483 11.5718C19.3856 11.4352 19.3634 11.251 19.4216 11.051L19.555 10.5863C19.5634 10.5641 19.5825 10.5471 19.6047 10.5471Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCloudflareIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
