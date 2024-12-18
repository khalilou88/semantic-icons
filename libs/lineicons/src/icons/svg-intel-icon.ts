import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-intel-icon',
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
      <path d="M2 8.22831H3.44771V9.67601H2V8.22831Z" fill="#323544" />
      <path
        d="M3.41165 15.7708V10.557H2.04122V15.7708H3.41165ZM12.5204 15.8223V14.5446C12.3194 14.5446 12.1494 14.5343 12.0258 14.5137C11.8815 14.4931 11.7733 14.4416 11.7012 14.3695C11.6291 14.2973 11.5827 14.1943 11.5569 14.0604C11.5363 13.9316 11.526 13.7615 11.526 13.5555V11.7317H12.5204V10.557H11.526V8.52197H10.1504V13.5658C10.1504 13.9934 10.1865 14.354 10.2586 14.6425C10.3308 14.9259 10.4544 15.1577 10.6244 15.3329C10.7944 15.5081 11.0211 15.6317 11.2942 15.709C11.5724 15.7863 11.9227 15.8223 12.34 15.8223H12.5204ZM20.3926 15.7708V8.12012H19.017V15.7708H20.3926ZM8.82638 11.0671C8.44514 10.6549 7.90933 10.4488 7.22927 10.4488C6.89954 10.4488 6.60073 10.5158 6.32767 10.6497C6.05977 10.7837 5.82793 10.9692 5.64761 11.2062L5.57033 11.304V10.557H4.21536V15.7708H5.58064V12.9939V13.0918C5.59609 12.6023 5.71459 12.2417 5.94127 12.0099C6.18342 11.7626 6.47708 11.6389 6.81196 11.6389C7.20866 11.6389 7.51263 11.7626 7.71356 11.9996C7.90933 12.2366 8.01237 12.5714 8.01237 12.999V15.7657H9.39825V12.8084C9.40341 12.0665 9.20763 11.4792 8.82638 11.0671ZM18.306 13.1536C18.306 12.7775 18.2391 12.4272 18.1103 12.0974C17.9763 11.7729 17.7908 11.4844 17.559 11.2371C17.322 10.9898 17.0386 10.7991 16.7089 10.66C16.3792 10.5209 16.0134 10.454 15.6167 10.454C15.2406 10.454 14.8851 10.5261 14.5554 10.6652C14.2257 10.8095 13.9371 11.0001 13.695 11.2422C13.4529 11.4844 13.2571 11.7729 13.118 12.1026C12.9737 12.4323 12.9068 12.7878 12.9068 13.1639C12.9068 13.54 12.9737 13.8955 13.1077 14.2252C13.2416 14.5549 13.4323 14.8435 13.6692 15.0856C13.9062 15.3277 14.1999 15.5235 14.5399 15.6626C14.88 15.8069 15.2561 15.879 15.6579 15.879C16.8223 15.879 17.5435 15.3483 17.9763 14.8538L16.9871 14.1016C16.781 14.3489 16.2865 14.6837 15.6682 14.6837C15.2818 14.6837 14.9624 14.5962 14.7203 14.4158C14.4781 14.2407 14.3132 13.9934 14.2257 13.6894L14.2102 13.643H18.306V13.1536ZM14.2205 12.6745C14.2205 12.2932 14.6584 11.6286 15.6012 11.6235C16.5441 11.6235 16.9871 12.2881 16.9871 12.6693L14.2205 12.6745ZM21.9588 15.0907C21.933 15.0289 21.897 14.9774 21.8506 14.931C21.8042 14.8847 21.7527 14.8486 21.6909 14.8228C21.6291 14.7971 21.5621 14.7816 21.4951 14.7816C21.423 14.7816 21.3612 14.7971 21.2993 14.8228C21.2375 14.8486 21.186 14.8847 21.1396 14.931C21.0933 14.9774 21.0572 15.0289 21.0314 15.0907C21.0057 15.1526 20.9902 15.2195 20.9902 15.2865C20.9902 15.3587 21.0057 15.4205 21.0314 15.4823C21.0572 15.5441 21.0933 15.5956 21.1396 15.642C21.186 15.6884 21.2375 15.7244 21.2993 15.7502C21.3612 15.776 21.4281 15.7914 21.4951 15.7914C21.5672 15.7914 21.6291 15.776 21.6909 15.7502C21.7527 15.7244 21.8042 15.6884 21.8506 15.642C21.897 15.5956 21.933 15.5441 21.9588 15.4823C21.9845 15.4205 22 15.3535 22 15.2865C22 15.2195 21.9845 15.1526 21.9588 15.0907ZM21.8764 15.4514C21.8557 15.5029 21.8248 15.5493 21.7888 15.5853C21.7527 15.6214 21.7063 15.6523 21.6548 15.6729C21.6033 15.6935 21.5518 15.7038 21.49 15.7038C21.4333 15.7038 21.3766 15.6935 21.3251 15.6729C21.2736 15.6523 21.2272 15.6214 21.1911 15.5853C21.1551 15.5493 21.1242 15.5029 21.1036 15.4514C21.0829 15.3999 21.0726 15.3483 21.0726 15.2865C21.0726 15.2299 21.0829 15.1732 21.1036 15.1217C21.1242 15.0701 21.1551 15.0238 21.1911 14.9877C21.2272 14.9516 21.2736 14.9207 21.3251 14.9001C21.3766 14.8795 21.4281 14.8692 21.49 14.8692C21.5466 14.8692 21.6033 14.8795 21.6548 14.9001C21.7063 14.9207 21.7527 14.9516 21.7888 14.9877C21.8248 15.0238 21.8557 15.0701 21.8764 15.1217C21.897 15.1732 21.9073 15.2247 21.9073 15.2865C21.9124 15.3483 21.897 15.3999 21.8764 15.4514ZM21.5878 15.3277C21.6291 15.3226 21.66 15.3071 21.6857 15.2814C21.7115 15.2556 21.7269 15.2195 21.7269 15.168C21.7269 15.1114 21.7115 15.0701 21.6754 15.0392C21.6445 15.0083 21.5878 14.9929 21.5209 14.9929H21.2942V15.575H21.4024V15.338H21.4796L21.6239 15.575H21.7372L21.5878 15.3277ZM21.5312 15.2453H21.4024V15.0804H21.5312C21.5466 15.0804 21.5621 15.0856 21.5775 15.0907C21.593 15.0959 21.6033 15.1062 21.6084 15.1165C21.6136 15.1268 21.6188 15.1423 21.6188 15.1629C21.6188 15.1835 21.6136 15.1989 21.6084 15.2092C21.5981 15.2195 21.5878 15.2299 21.5775 15.235C21.5621 15.2402 21.5466 15.2453 21.5312 15.2453Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIntelIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
