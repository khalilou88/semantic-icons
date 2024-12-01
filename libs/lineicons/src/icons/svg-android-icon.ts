import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-android-icon',
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
        d="M16.6035 14.7843C16.4388 14.7843 16.2778 14.7355 16.1408 14.644C16.0038 14.5525 15.897 14.4225 15.834 14.2703C15.7709 14.1181 15.7544 13.9507 15.7865 13.7891C15.8186 13.6275 15.8979 13.4791 16.0143 13.3626C16.1308 13.2461 16.2792 13.1668 16.4407 13.1346C16.6023 13.1024 16.7698 13.1189 16.922 13.1819C17.0742 13.2449 17.2043 13.3516 17.2958 13.4886C17.3873 13.6255 17.4362 13.7865 17.4362 13.9513C17.436 14.1721 17.3482 14.3838 17.1921 14.5399C17.036 14.6961 16.8243 14.784 16.6035 14.7843ZM7.39843 14.7843C7.2337 14.7843 7.07266 14.7355 6.93568 14.644C6.79869 14.5525 6.69192 14.4225 6.62885 14.2703C6.56578 14.1181 6.54926 13.9507 6.58137 13.7891C6.61347 13.6275 6.69277 13.4791 6.80923 13.3626C6.92568 13.2461 7.07407 13.1668 7.23563 13.1346C7.39718 13.1024 7.56465 13.1189 7.71685 13.1819C7.86905 13.2449 7.99915 13.3516 8.09069 13.4886C8.18224 13.6255 8.23111 13.7865 8.23114 13.9513C8.23094 14.1721 8.14315 14.3838 7.98704 14.54C7.83092 14.6961 7.61924 14.784 7.39843 14.7843ZM16.9022 9.76775L18.5665 6.88509C18.5893 6.84572 18.6041 6.80224 18.61 6.75716C18.616 6.71207 18.613 6.66625 18.6013 6.62231C18.5895 6.57837 18.5692 6.53718 18.5416 6.50108C18.5139 6.46498 18.4794 6.43468 18.44 6.41192C18.4007 6.38916 18.3572 6.37437 18.3121 6.36841C18.267 6.36245 18.2212 6.36542 18.1772 6.37717C18.1333 6.38892 18.0921 6.4092 18.056 6.43687C18.0199 6.46453 17.9896 6.49904 17.9669 6.53841L16.2815 9.45748C14.9927 8.86927 13.5453 8.54174 12.0008 8.54174C10.4564 8.54174 9.00909 8.86974 7.72031 9.45748L6.0351 6.53841C6.01236 6.49903 5.9821 6.46451 5.94602 6.43682C5.90995 6.40913 5.86877 6.38882 5.82485 6.37704C5.78093 6.36527 5.73511 6.36226 5.69003 6.36819C5.64494 6.37412 5.60147 6.38887 5.56208 6.41161C5.5227 6.43434 5.48817 6.46461 5.46049 6.50068C5.4328 6.53675 5.41249 6.57793 5.40071 6.62185C5.38894 6.66577 5.38593 6.71159 5.39186 6.75667C5.39779 6.80176 5.41254 6.84524 5.43527 6.88462L7.09977 9.76775C4.24175 11.3222 2.28692 14.2156 2.00098 17.634H22.001C21.7147 14.2156 19.76 11.3222 16.9022 9.76775Z"
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
export class SvgAndroidIcon {
  readonly class = input('');
}
