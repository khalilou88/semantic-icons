import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-jamstack-icon',
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
        d="M9.76807 2.2831C10.4234 2.13027 11.0929 2.03973 11.7641 2.0057C14.1882 2.00339 16.6123 2.00455 19.0364 2.00512C19.9052 2.01377 20.7763 1.97802 21.6445 2.02415C21.6451 5.35238 21.6462 8.6812 21.644 12.0094C21.6423 13.8826 21.1272 15.7558 20.1523 17.3469C19.0393 19.1723 17.3301 20.6262 15.3449 21.3736C14.3665 21.7606 13.3211 21.9457 12.2757 21.9982C11.1974 22.0189 10.1127 21.8638 9.08495 21.5316C7.18382 20.9128 5.4911 19.6647 4.30713 18.0338C3.45991 16.889 2.87219 15.5493 2.57975 14.1496C2.13286 12.0515 2.35659 9.80754 3.22596 7.84958C4.41446 5.10844 6.89024 2.96882 9.76807 2.2831ZM12.1996 4.56863C12.1962 6.97353 12.1962 9.37845 12.1996 11.7833C14.5198 11.7857 16.8394 11.7863 19.1597 11.7833C19.1614 9.37845 19.1625 6.97353 19.1591 4.5692C16.8394 4.56805 14.5192 4.56863 12.1996 4.56863ZM4.8375 12.2049C4.81651 12.4691 4.84942 12.7332 4.87953 12.995C5.11234 14.7961 6.01125 16.5044 7.37575 17.682C8.59096 18.7518 10.1747 19.3891 11.7851 19.4214C11.7873 17.0194 11.7851 14.6168 11.7862 12.2147C9.46999 12.2003 7.15371 12.2205 4.8375 12.2049ZM12.2013 12.2245C12.1956 14.6306 12.1939 17.0372 12.2024 19.4433C12.6045 19.4179 13.0071 19.3839 13.4017 19.2991C15.0366 18.9669 16.5294 18.0073 17.5646 16.686C18.5577 15.4288 19.1239 13.8359 19.1574 12.2251C16.8389 12.224 14.5204 12.2245 12.2013 12.2245Z"
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
export class SvgJamstackIcon {
  readonly class = input('');
}