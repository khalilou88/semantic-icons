import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-netlify-icon',
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
        d="M16.4142 8.94053L16.4071 8.93747C16.403 8.93584 16.3989 8.9344 16.3953 8.93065C16.3834 8.91762 16.378 8.89972 16.3809 8.88215L16.7774 6.41703L18.6364 8.30837L16.703 9.14503C16.6977 9.14725 16.6919 9.14834 16.686 9.14809H16.6784C16.6758 9.14647 16.6733 9.14444 16.6681 9.13922C16.5962 9.05775 16.5101 8.9904 16.4142 8.94053ZM19.1108 8.79031L21.0985 10.812C21.5114 11.2325 21.718 11.4422 21.7934 11.6852C21.8047 11.7212 21.8139 11.7572 21.8211 11.7942L17.0707 9.74797C17.0681 9.74687 17.0656 9.74581 17.063 9.7449C17.044 9.73709 17.0219 9.72822 17.0219 9.7084C17.0219 9.68856 17.0445 9.67918 17.0635 9.67137L17.0697 9.66878L19.1108 8.79031ZM21.7401 12.4431C21.6375 12.6392 21.4375 12.8427 21.0991 13.1874L18.8579 15.4663L15.9594 14.8524L15.944 14.8493C15.9183 14.8451 15.8911 14.8405 15.8911 14.817C15.8689 14.5712 15.7472 14.3458 15.5552 14.1947C15.5434 14.1827 15.5465 14.164 15.5501 14.1467C15.5501 14.1442 15.5501 14.1416 15.5511 14.1394L16.0963 10.7354L16.0983 10.7239C16.1013 10.6978 16.106 10.6676 16.1291 10.6676C16.3651 10.6377 16.5794 10.5128 16.724 10.3207C16.7286 10.3156 16.7317 10.3098 16.7378 10.3066C16.7542 10.2988 16.7737 10.3066 16.7906 10.314L21.7396 12.4432L21.7401 12.4431ZM18.3425 15.9905L14.6572 19.7388L15.288 15.7955L15.289 15.7903C15.2896 15.7851 15.2906 15.7799 15.292 15.7752C15.2971 15.7627 15.3105 15.7574 15.3234 15.7522L15.3295 15.7496C15.4676 15.6897 15.5898 15.5972 15.6859 15.4799C15.6982 15.4653 15.7131 15.4512 15.7321 15.4487C15.737 15.4478 15.742 15.4478 15.747 15.4487L18.3419 15.9911L18.3425 15.9905ZM13.8772 20.5321L13.4618 20.9546L8.86927 14.204C8.86761 14.2016 8.86589 14.1992 8.86417 14.1967C8.85705 14.1868 8.84933 14.1769 8.85083 14.1654C8.85083 14.1571 8.85652 14.1498 8.86211 14.1435L8.86723 14.1367C8.88108 14.1158 8.89286 14.095 8.9057 14.0726L8.91592 14.0543L8.91755 14.0527C8.92477 14.0402 8.93139 14.0282 8.9437 14.0214C8.95445 14.0162 8.96933 14.0183 8.98114 14.0208L14.069 15.0881C14.0833 15.0903 14.0967 15.0962 14.108 15.1052C14.1147 15.1121 14.1162 15.1193 14.1178 15.1277C14.1897 15.4045 14.3847 15.6313 14.645 15.7406C14.6593 15.7479 14.6532 15.7641 14.6466 15.7813C14.6433 15.7888 14.6406 15.7967 14.6389 15.8047C14.5748 16.2012 14.0249 19.6115 13.8772 20.5321ZM13.0095 21.4142C12.7033 21.7225 12.5228 21.8857 12.3186 21.9515C12.1174 22.0162 11.9014 22.0162 11.7002 21.9515C11.4612 21.8742 11.2545 21.6646 10.8417 21.2441L6.22967 16.5533L7.43433 14.6532C7.44002 14.6437 7.44564 14.6354 7.45486 14.6286C7.46767 14.6192 7.48611 14.6235 7.50152 14.6286C7.77802 14.7135 8.07489 14.6982 8.34155 14.5853C8.35542 14.5802 8.36927 14.5765 8.37998 14.5864C8.38545 14.5913 8.3902 14.597 8.39436 14.6031L13.0095 21.4147V21.4142ZM5.78502 16.1011L4.72703 15.0251L6.81636 14.1185C6.8217 14.1161 6.82745 14.1149 6.8333 14.1148C6.8507 14.1148 6.86098 14.1326 6.8702 14.1487C6.8912 14.1816 6.91345 14.2136 6.93689 14.2447L6.94358 14.2531C6.94974 14.2619 6.94558 14.2708 6.93942 14.2792L5.78555 16.1011H5.78502ZM4.2588 14.5488L2.92028 13.1874C2.69258 12.9558 2.52745 12.7879 2.41257 12.6434L6.48249 13.502C6.48761 13.5029 6.49274 13.5038 6.49786 13.5046C6.52302 13.5087 6.5507 13.5134 6.5507 13.5374C6.5507 13.5635 6.52042 13.5755 6.4948 13.5854L6.48302 13.5906L4.2588 14.5488ZM2.17871 11.9434C2.18337 11.8557 2.19886 11.769 2.22486 11.6852C2.30076 11.4422 2.50693 11.2325 2.92028 10.812L4.63318 9.06987C5.42183 10.234 6.21264 11.3967 7.00561 12.5578C7.01945 12.5766 7.03483 12.5975 7.01892 12.6132C6.94405 12.6971 6.86917 12.7889 6.81636 12.8886C6.81061 12.9013 6.80183 12.9125 6.7907 12.9209C6.78402 12.9251 6.77686 12.9235 6.76917 12.9219H6.76814L2.17871 11.9429V11.9434ZM5.09166 8.60356L7.39383 6.26103C7.61073 6.35753 8.39898 6.69606 9.10314 6.99859C9.63648 7.22809 10.1227 7.43672 10.2755 7.50453C10.2909 7.51081 10.3047 7.51706 10.3114 7.53272C10.3155 7.54209 10.3134 7.55409 10.3114 7.564C10.2373 7.9075 10.3381 8.26584 10.5796 8.5175C10.595 8.53315 10.5796 8.55556 10.5663 8.57487L10.5591 8.58584L8.22055 12.2699C8.21439 12.2804 8.20877 12.2892 8.19848 12.296C8.18617 12.3038 8.16873 12.3002 8.15439 12.2966C8.06345 12.2723 7.96992 12.2594 7.87589 12.258C7.7918 12.258 7.70052 12.2736 7.6082 12.2908H7.6077C7.59745 12.2924 7.5882 12.2945 7.57998 12.2882C7.57092 12.2807 7.56314 12.2717 7.55692 12.2616L5.09118 8.60359L5.09166 8.60356ZM7.85998 5.78794L10.8417 2.75532C11.2545 2.33543 11.4612 2.12522 11.7002 2.04854C11.9014 1.98382 12.1174 1.98382 12.3186 2.04854C12.5576 2.12522 12.7643 2.33543 13.1772 2.75532L13.8234 3.41254L11.7027 6.7529C11.6975 6.76262 11.6903 6.77115 11.6817 6.77794C11.6689 6.78681 11.6509 6.78312 11.6355 6.77794C11.2961 6.67319 10.9277 6.74537 10.6509 6.97094C10.637 6.98553 10.6165 6.97719 10.5991 6.96931C10.3221 6.84672 8.1682 5.92094 7.85998 5.78794ZM14.2736 3.87051L16.2317 5.862L15.7598 8.83412V8.84193C15.7595 8.84872 15.758 8.85537 15.7557 8.86175C15.7506 8.87218 15.7403 8.87428 15.73 8.8774C15.6292 8.9085 15.5341 8.95662 15.449 9.01981C15.4454 9.02253 15.4419 9.02547 15.4388 9.02868C15.4331 9.03493 15.4275 9.04065 15.4182 9.04172C15.4107 9.04194 15.4032 9.04075 15.3962 9.03803L12.4125 7.74862L12.4068 7.74603C12.3878 7.73822 12.3652 7.72881 12.3652 7.709C12.3477 7.5399 12.2934 7.37687 12.2062 7.23175C12.1919 7.20775 12.176 7.18272 12.1883 7.15819L14.2736 3.87051ZM12.2571 8.35944L15.0542 9.56437C15.0695 9.57168 15.0865 9.57843 15.0931 9.59462C15.0958 9.60434 15.0958 9.61462 15.0931 9.62434C15.0849 9.66606 15.0778 9.71353 15.0778 9.76153V9.84134C15.0778 9.86115 15.0578 9.8695 15.0393 9.87734L15.0336 9.87937C14.5905 10.0718 8.81283 12.5776 8.80408 12.5776C8.79539 12.5776 8.78614 12.5776 8.77745 12.5688C8.76205 12.5531 8.77745 12.5312 8.7913 12.5114C8.7938 12.508 8.79608 12.5044 8.79842 12.501L11.097 8.88103L11.1011 8.87475C11.1145 8.85287 11.1299 8.82834 11.1545 8.82834L11.1776 8.832C11.2299 8.83934 11.276 8.84609 11.3227 8.84609C11.6714 8.84609 11.9945 8.67343 12.1894 8.37819C12.194 8.37031 12.1999 8.36325 12.2068 8.35731C12.2207 8.3469 12.2412 8.35225 12.2571 8.35944ZM9.05389 13.1504L15.3516 10.4187C15.3516 10.4187 15.3608 10.4187 15.3696 10.4276C15.4039 10.4626 15.4332 10.486 15.4614 10.5079L15.4752 10.5168C15.488 10.5242 15.5009 10.5325 15.5019 10.546C15.5019 10.5512 15.5019 10.5544 15.5008 10.5591L14.9613 13.9297L14.9593 13.9432C14.9557 13.9693 14.9521 13.9991 14.928 13.9991C14.636 14.0191 14.3725 14.1844 14.2239 14.4409L14.2213 14.4451C14.2142 14.4571 14.2075 14.4685 14.1957 14.4748C14.1849 14.48 14.171 14.4779 14.1598 14.4753L9.13752 13.4217C9.13239 13.4207 9.05955 13.1509 9.05389 13.1504Z"
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
export class SvgNetlifyIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
