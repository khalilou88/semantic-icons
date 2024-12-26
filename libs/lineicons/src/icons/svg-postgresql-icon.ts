import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-postgresql-icon',
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
        d="M16.2385 2C15.4614 2.00578 14.6888 2.11879 13.9426 2.33584L13.8901 2.3525C13.4195 2.26933 12.943 2.22335 12.4651 2.215C11.4835 2.19834 10.6401 2.43667 9.96011 2.83334C9.29011 2.60084 7.90009 2.2 6.43508 2.28C5.41507 2.33584 4.30174 2.64584 3.47673 3.51668C2.65422 4.38752 2.21922 5.73503 2.31089 7.56839C2.33589 8.07421 2.48006 8.89922 2.71922 9.96757C2.95839 11.0359 3.29423 12.2867 3.7134 13.4276C4.13257 14.5693 4.59174 15.5943 5.30926 16.291C5.66757 16.6401 6.16092 16.9335 6.74258 16.9093C7.15093 16.8926 7.52009 16.7135 7.83844 16.4493C7.99344 16.6535 8.15928 16.7426 8.3101 16.8251C8.5001 16.9293 8.6851 17.0001 8.87679 17.0468C9.22095 17.1326 9.81011 17.2476 10.5001 17.1301C10.7351 17.091 10.9826 17.0143 11.2293 16.9051C11.2385 17.1801 11.2493 17.4493 11.2601 17.7218C11.2943 18.5851 11.316 19.3827 11.5751 20.0818C11.6168 20.196 11.731 20.7843 12.181 21.3035C12.631 21.8235 13.5126 22.1477 14.5168 21.9327C15.2252 21.781 16.126 21.5077 16.7244 20.656C17.316 19.8143 17.5827 18.6068 17.6352 16.6485C17.6485 16.5426 17.6644 16.4526 17.681 16.3685L17.8219 16.381H17.8385C18.5944 16.4151 19.4144 16.3076 20.0994 15.9893C20.7061 15.7085 21.1652 15.4243 21.4994 14.9201C21.5827 14.7951 21.6744 14.6443 21.6994 14.3843C21.7244 14.1243 21.5752 13.7176 21.3277 13.5301C20.8319 13.1534 20.5202 13.2968 20.186 13.3659C19.8569 13.4387 19.5214 13.4794 19.1844 13.4876C20.1477 11.8651 20.8386 10.1417 21.2327 8.61672C21.4661 7.71671 21.5969 6.8867 21.6077 6.16088C21.6186 5.43503 21.5594 4.79253 21.1244 4.23669C19.7652 2.5 17.8544 2.02 16.376 2.00333C16.3302 2.0025 16.2844 2.00167 16.2385 2.0025V2ZM16.1994 2.53334C17.5977 2.52 19.3844 2.91251 20.6669 4.55169C20.9552 4.92003 21.0411 5.45837 21.0311 6.12169C21.0202 6.7842 20.8977 7.57755 20.6736 8.44671C20.2385 10.1301 19.4169 12.0926 18.2594 13.8534C18.3003 13.8825 18.3444 13.9065 18.391 13.9251C18.6327 14.0251 19.1835 14.111 20.2827 13.8851C20.5594 13.8268 20.7619 13.7876 20.9719 13.9476C21.0229 13.9909 21.0632 14.0454 21.0897 14.1068C21.1162 14.1682 21.128 14.235 21.1244 14.3018C21.1132 14.4029 21.0758 14.4994 21.0161 14.5818C20.8036 14.901 20.3844 15.2035 19.8469 15.4526C19.371 15.6743 18.6885 15.7901 18.0835 15.7968C17.7802 15.8001 17.5002 15.7768 17.2627 15.7026L17.2477 15.6968C17.156 16.5801 16.9452 18.3243 16.8077 19.1202C16.6977 19.7618 16.5052 20.2718 16.1377 20.6535C15.771 21.0352 15.2518 21.2652 14.5535 21.4152C13.6885 21.601 13.0576 21.401 12.651 21.0585C12.2451 20.7168 12.0593 20.2635 11.9476 19.986C11.871 19.7943 11.831 19.546 11.7926 19.2143C11.7543 18.8827 11.726 18.4768 11.7068 18.0193C11.6813 17.3188 11.6729 16.6177 11.6818 15.9168C11.3205 16.2478 10.8715 16.4676 10.3885 16.5501C9.8143 16.6476 9.30179 16.5518 8.99595 16.4751C8.8452 16.4373 8.69963 16.381 8.5626 16.3076C8.42094 16.2318 8.28594 16.146 8.19594 15.9768C8.14307 15.8799 8.12622 15.7674 8.14844 15.6593C8.1766 15.5497 8.24054 15.4526 8.3301 15.3835C8.4951 15.2493 8.71345 15.1743 9.0426 15.106C9.6418 14.9826 9.85096 14.8985 9.97846 14.7976C10.0868 14.711 10.2093 14.536 10.426 14.2793C10.4249 14.2679 10.4241 14.2565 10.4235 14.2451C10.0357 14.2342 9.65595 14.132 9.31511 13.9468C9.19011 14.0785 8.55179 14.7535 7.77344 15.6901C7.44593 16.0818 7.08427 16.3068 6.70258 16.3226C6.32092 16.3393 5.97592 16.1468 5.68257 15.8626C5.09676 15.2935 4.62924 14.3143 4.22174 13.2076C3.81507 12.1009 3.48423 10.8684 3.24923 9.81841C3.01339 8.7684 2.87422 7.92171 2.85422 7.51339C2.76672 5.77838 3.17256 4.60919 3.8684 3.87168C4.56507 3.13418 5.52007 2.85501 6.45093 2.80167C8.12178 2.70584 9.70845 3.28835 10.0293 3.41335C10.6476 2.99334 11.4443 2.73167 12.4393 2.74834C12.9117 2.75497 13.3817 2.81592 13.8401 2.93001L13.8568 2.92251C14.0586 2.85158 14.2642 2.79204 14.4727 2.74417C15.0387 2.61213 15.6174 2.542 16.1985 2.535L16.1994 2.53334ZM16.326 3.09168H16.2044C15.7269 3.09833 15.2513 3.15193 14.7843 3.25168C15.8227 3.71168 16.6069 4.42002 17.1594 5.12668C17.5431 5.61597 17.8604 6.15401 18.1027 6.7267C18.1944 6.9467 18.256 7.13255 18.291 7.2767C18.3085 7.3492 18.3202 7.41005 18.3244 7.47339C18.326 7.50505 18.3277 7.53755 18.3144 7.59339C18.3144 7.59589 18.3102 7.60171 18.3094 7.60421C18.3344 8.33421 18.1535 8.82922 18.1319 9.52591C18.1152 10.0309 18.2444 10.6242 18.276 11.2717C18.306 11.8801 18.2327 12.5484 17.8377 13.2043C17.871 13.2443 17.901 13.2843 17.9327 13.3243C18.9777 11.6784 19.731 9.85757 20.1327 8.30506C20.3477 7.46921 20.4619 6.7117 20.4719 6.11169C20.4802 5.51169 20.3685 5.07669 20.226 4.89503C19.1077 3.46501 17.5944 3.10084 16.326 3.09084V3.09168ZM12.3343 3.30501C11.3493 3.30751 10.6426 3.60501 10.1068 4.05085C9.5543 4.51169 9.18345 5.14253 8.9401 5.78838C8.65095 6.55504 8.55179 7.2967 8.5126 7.80005L8.52344 7.7934C8.82095 7.62671 9.21179 7.46005 9.63011 7.36339C10.0485 7.26755 10.4993 7.23755 10.9076 7.39589C11.316 7.55421 11.6535 7.92671 11.776 8.49171C12.3626 11.2059 11.5935 12.2151 11.3101 12.9768C11.2027 13.2529 11.1106 13.5347 11.0343 13.8209C11.0701 13.8126 11.106 13.8026 11.1418 13.7993C11.3418 13.7826 11.4985 13.8493 11.5918 13.8893C11.8768 14.0076 12.0726 14.256 12.1785 14.5393C12.206 14.6135 12.226 14.6935 12.2376 14.776C12.2499 14.8098 12.2556 14.8458 12.2543 14.8818C12.2227 15.9199 12.2263 16.9589 12.2651 17.9968C12.2843 18.4451 12.3126 18.8402 12.3485 19.1518C12.3843 19.4627 12.4351 19.6993 12.4676 19.7793C12.5743 20.046 12.7301 20.3952 13.0118 20.6327C13.2935 20.8693 13.6976 21.0277 14.436 20.8693C15.076 20.7318 15.471 20.541 15.7352 20.2668C15.9985 19.9927 16.156 19.611 16.2569 19.0268C16.4077 18.1518 16.711 15.6143 16.7477 15.1368C16.731 14.7768 16.7844 14.5001 16.8994 14.2893C17.0177 14.0726 17.201 13.9401 17.3594 13.8684C17.4385 13.8326 17.5127 13.8085 17.5735 13.7909C17.5091 13.6984 17.4416 13.608 17.371 13.5201C17.1427 13.2433 16.9558 12.9348 16.816 12.6043C16.7491 12.4678 16.6776 12.3335 16.6019 12.2017C16.491 12.0017 16.351 11.7517 16.2044 11.4709C15.911 10.9084 15.5919 10.2267 15.426 9.56257C15.261 8.89922 15.2368 8.21256 15.6602 7.7284C16.0352 7.29839 16.6935 7.12005 17.6819 7.22005C17.6527 7.13255 17.6352 7.06005 17.586 6.94339C17.3626 6.41745 17.0709 5.92319 16.7185 5.47337C15.881 4.40252 14.5252 3.34085 12.4301 3.30668H12.3343V3.30501ZM6.79927 3.34835C6.69343 3.34835 6.58758 3.35168 6.48258 3.35751C5.64092 3.40585 4.84508 3.65001 4.27591 4.25335C3.7059 4.85669 3.3309 5.84588 3.41256 7.48339C3.4284 7.7934 3.5634 8.66172 3.79507 9.69341C4.0259 10.7251 4.35341 11.9392 4.74674 13.0118C5.14091 14.0843 5.61842 15.0176 6.07177 15.4593C6.30008 15.6801 6.49843 15.7693 6.67843 15.7618C6.85927 15.7535 7.07677 15.6493 7.34259 15.3301C7.82728 14.7455 8.33032 14.1763 8.85095 13.6234C8.48154 13.3027 8.19882 12.8941 8.02885 12.4353C7.85891 11.9766 7.80716 11.4824 7.87844 10.9984C7.96428 10.3826 7.97594 9.80673 7.96594 9.35172C7.95594 8.90841 7.92428 8.6134 7.92428 8.42921C7.92413 8.42393 7.92413 8.41868 7.92428 8.4134V8.40921L7.92344 8.40421V8.4034C7.92294 7.44405 8.08991 6.49198 8.41679 5.59003C8.6501 4.97003 8.9976 4.34002 9.51845 3.83002C9.00679 3.66168 8.09844 3.40501 7.11509 3.35668C7.00962 3.35126 6.90405 3.34848 6.79843 3.34835H6.79927ZM17.131 7.75005C16.5652 7.75755 16.2477 7.9034 16.081 8.09421C15.8452 8.36506 15.8227 8.84006 15.9694 9.42507C16.1152 10.0109 16.4169 10.6659 16.7002 11.2101C16.8419 11.4826 16.9794 11.7276 17.0902 11.9267C17.2019 12.1267 17.2835 12.2684 17.3335 12.3892C17.3794 12.5009 17.4302 12.5993 17.4819 12.6909C17.701 12.2284 17.7402 11.7742 17.7177 11.3009C17.6885 10.7151 17.5527 10.1159 17.5727 9.50922C17.5952 8.80006 17.7352 8.3384 17.7477 7.79005C17.5432 7.76355 17.3372 7.75021 17.131 7.75005ZM10.2693 7.8459C10.0964 7.84749 9.92427 7.86818 9.75596 7.90755C9.42048 7.98905 9.09736 8.1149 8.7951 8.28171C8.69288 8.33656 8.59557 8.40012 8.50429 8.47171L8.48594 8.4884C8.49094 8.61006 8.5151 8.90506 8.5251 9.33922C8.5351 9.81423 8.52344 10.4201 8.43179 11.0759C8.2326 12.5009 9.26679 13.6809 10.4818 13.6826C10.5526 13.3901 10.6693 13.0934 10.786 12.7809C11.1243 11.8692 11.7901 11.2042 11.2293 8.60922C11.1376 8.18421 10.956 8.01255 10.706 7.9159C10.5658 7.86633 10.4179 7.84261 10.2693 7.8459ZM16.8669 8.0159H16.9085C16.9635 8.01755 17.0144 8.0234 17.0585 8.03421C17.1035 8.04421 17.1419 8.05921 17.1735 8.08005C17.1898 8.09012 17.2037 8.10346 17.2145 8.11927C17.2253 8.13505 17.2326 8.15293 17.236 8.17171L17.2352 8.1784C17.2368 8.21796 17.2267 8.25709 17.206 8.2909C17.1815 8.33662 17.1506 8.37871 17.1144 8.4159C17.0298 8.509 16.9166 8.57115 16.7927 8.59256C16.6721 8.60712 16.5504 8.57656 16.451 8.50671C16.4103 8.47937 16.3739 8.44625 16.3427 8.4084C16.3157 8.37865 16.2975 8.34203 16.2902 8.30256C16.2885 8.28334 16.2906 8.26396 16.2967 8.24562C16.3027 8.22727 16.3124 8.21034 16.3252 8.1959C16.3525 8.16481 16.3856 8.13934 16.4227 8.1209C16.5027 8.0759 16.611 8.04255 16.7335 8.02421C16.7794 8.01755 16.8244 8.01421 16.8669 8.0134V8.0159ZM10.3501 8.1559C10.3943 8.1559 10.441 8.16005 10.4885 8.16671C10.616 8.18421 10.7293 8.2184 10.816 8.2684C10.8582 8.29046 10.8959 8.32043 10.9268 8.35671C10.9437 8.37596 10.9563 8.39849 10.9641 8.42287C10.9718 8.44725 10.9745 8.47296 10.9718 8.4984C10.9638 8.54631 10.9421 8.59087 10.9093 8.62672C10.8752 8.66859 10.835 8.70509 10.7901 8.73506C10.6817 8.81184 10.5486 8.84541 10.4168 8.82922C10.2821 8.80709 10.1588 8.74015 10.0668 8.63922C10.0277 8.59859 9.99455 8.55256 9.96846 8.50256C9.94099 8.45856 9.92896 8.40665 9.9343 8.35506C9.9468 8.26506 10.021 8.2184 10.0935 8.19256C10.1761 8.16618 10.2627 8.15487 10.3493 8.15921L10.3501 8.1559ZM17.9002 14.2751L17.8977 14.276C17.7752 14.3201 17.6744 14.3385 17.5894 14.376C17.5034 14.409 17.4326 14.4725 17.3902 14.5543C17.3377 14.6501 17.2927 14.8201 17.306 15.1093C17.3437 15.1352 17.3854 15.1549 17.4294 15.1676C17.5719 15.211 17.811 15.2393 18.0777 15.2351C18.6094 15.2293 19.2635 15.1051 19.611 14.9435C19.8961 14.811 20.1608 14.6384 20.3969 14.431H20.3961C19.2352 14.671 18.5794 14.6068 18.1769 14.441C18.0769 14.3994 17.9837 14.3432 17.9002 14.2743V14.2751ZM11.2076 14.3535H11.1901C11.146 14.3576 11.0818 14.3726 10.9576 14.5101C10.6676 14.8351 10.566 15.0393 10.3268 15.2301C10.0876 15.4201 9.7768 15.5218 9.15595 15.6493C8.95929 15.6893 8.84679 15.7335 8.77179 15.7693C8.79595 15.7893 8.79345 15.7943 8.8301 15.8135C8.92095 15.8635 9.0376 15.9076 9.13179 15.9318C9.39845 15.9985 9.8368 16.076 10.2943 15.9985C10.7518 15.9201 11.2276 15.701 11.6335 15.1318C11.7035 15.0335 11.711 14.8885 11.6535 14.7326C11.5951 14.5768 11.4676 14.4426 11.3776 14.4051C11.3241 14.3793 11.2667 14.3624 11.2076 14.3551V14.3535Z"
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
export class SvgPostgresqlIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
