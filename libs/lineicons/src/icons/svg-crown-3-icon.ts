import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-crown-3-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 3.75C12.2163 3.75 12.4221 3.84339 12.5645 4.00621L16.7116 8.74719L20.775 5.42099C21.0116 5.22731 21.342 5.19665 21.6102 5.3435C21.8784 5.49035 22.0306 5.78531 21.9949 6.08898L20.6507 17.5129C20.5174 18.646 19.5571 19.5 18.4162 19.5H5.58388C4.44295 19.5 3.48261 18.646 3.34929 17.5129L2.00516 6.08898C1.96943 5.78531 2.12162 5.49035 2.38981 5.3435C2.658 5.19665 2.98849 5.22731 3.22509 5.42099L7.28842 8.74719L11.4355 4.00621C11.5779 3.84339 11.7837 3.75 12 3.75ZM12 5.63914L7.93953 10.2811C7.6731 10.5857 7.21308 10.624 6.89995 10.3677L3.71188 7.75795L4.46183 14.1319H19.5382L20.2882 7.75795L17.1001 10.3677C16.787 10.624 16.3269 10.5857 16.0605 10.2811L12 5.63914ZM19.3617 15.6319H4.63832L4.83902 17.3376C4.88346 17.7153 5.20357 18 5.58388 18H18.4162C18.7965 18 19.1166 17.7153 19.161 17.3376L19.3617 15.6319Z"
        fill="#323544"
      />
    </svg>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCrown3Icon {
  readonly class = input('');
}