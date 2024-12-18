import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-audi-alt-icon',
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
        d="M18.4981 15.471C17.7043 15.471 16.9458 15.2097 16.3329 14.7224C15.72 15.2047 14.9614 15.471 14.1677 15.471C13.374 15.471 12.6154 15.2097 12.0025 14.7224C11.3896 15.2047 10.6311 15.471 9.83733 15.471C9.0436 15.471 8.28503 15.2097 7.67215 14.7224C7.05927 15.2047 6.3007 15.471 5.50697 15.471C4.58262 15.471 3.71353 15.1193 3.05544 14.4763C2.3873 13.8333 2.01555 12.9742 2.00048 12.0599C1.98541 11.1406 2.32701 10.2715 2.96501 9.60338C3.59799 8.94026 4.45703 8.55846 5.38138 8.52832H5.39645H5.61749C6.37103 8.55344 7.08438 8.81467 7.66713 9.27182C8.24484 8.81467 8.9582 8.55344 9.71174 8.52832H9.94785C10.7014 8.55344 11.4147 8.81467 11.9975 9.27182C12.5802 8.81467 13.2886 8.55344 14.0471 8.52832H14.0622H14.2832C15.0368 8.55344 15.7501 8.81467 16.3329 9.27182C16.9106 8.81467 17.6239 8.55344 18.3825 8.52832H18.6186C19.5379 8.55846 20.397 8.94026 21.035 9.60338C21.673 10.2665 22.0146 11.1406 21.9995 12.0549C21.9845 12.9742 21.6127 13.8333 20.9546 14.4763C20.2865 15.1193 19.4174 15.471 18.4981 15.471ZM16.9056 14.1548C17.3527 14.4813 17.9053 14.6772 18.4981 14.6772C19.9599 14.6772 21.1706 13.4967 21.1907 12.0499C21.2158 10.6031 20.0504 9.38736 18.5935 9.3321H18.4026C17.845 9.35219 17.3326 9.54309 16.9106 9.84953C17.413 10.4775 17.6742 11.2511 17.6641 12.0599C17.644 12.8285 17.3828 13.557 16.9056 14.1548ZM12.5752 14.1548C13.0223 14.4813 13.5749 14.6772 14.1677 14.6772C14.7605 14.6772 15.3081 14.4813 15.7552 14.1548C15.2829 13.562 15.0167 12.8285 15.0016 12.0599C14.9865 11.2511 15.2528 10.4775 15.7552 9.84953C15.3332 9.54309 14.8208 9.35219 14.2631 9.3321H14.0722C13.5146 9.35219 13.0022 9.54309 12.5802 9.84953C13.0826 10.4775 13.3438 11.2511 13.3338 12.0599C13.3137 12.8285 13.0474 13.557 12.5752 14.1548ZM8.23982 14.1548C8.68692 14.4813 9.23952 14.6772 9.83231 14.6772C10.4251 14.6772 10.9727 14.4813 11.4198 14.1548C10.9476 13.562 10.6813 12.8285 10.6662 12.0599C10.6512 11.2511 10.9174 10.4775 11.4198 9.84953C10.9978 9.54309 10.4854 9.35219 9.92776 9.3321H9.73686C9.17924 9.35219 8.66683 9.54309 8.24484 9.84953C8.7472 10.4775 9.00843 11.2511 8.99839 12.0599C8.97829 12.8285 8.71204 13.557 8.23982 14.1548ZM5.40147 9.32708C3.94462 9.37731 2.77914 10.5981 2.80426 12.0449C2.82938 13.4917 4.03505 14.6722 5.49692 14.6722C6.08971 14.6722 6.63728 14.4763 7.08438 14.1498C6.61216 13.557 6.34591 12.8235 6.33084 12.0549C6.31577 11.2461 6.58202 10.4725 7.08438 9.84451C6.6624 9.53807 6.14999 9.34717 5.59237 9.32708H5.40147ZM11.9975 10.4172C11.6559 10.8744 11.46 11.437 11.47 12.0449C11.4801 12.6175 11.676 13.1501 11.9975 13.5821C12.319 13.1501 12.5149 12.6175 12.525 12.0449C12.535 11.437 12.3341 10.8744 11.9975 10.4172ZM7.6621 10.4172C7.32049 10.8744 7.12457 11.437 7.13462 12.0449C7.14467 12.6175 7.34059 13.1501 7.6621 13.5821C7.98361 13.1501 8.17953 12.6175 8.18958 12.0449C8.19963 11.437 8.00371 10.8744 7.6621 10.4172ZM16.3279 10.4172C15.9862 10.8744 15.7903 11.437 15.8004 12.0449C15.8104 12.6175 16.0063 13.1501 16.3279 13.5821C16.6494 13.1501 16.8453 12.6175 16.8553 12.0449C16.8704 11.437 16.6695 10.8744 16.3279 10.4172Z"
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
export class SvgAudiAltIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
