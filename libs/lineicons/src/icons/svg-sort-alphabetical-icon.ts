import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sort-alphabetical-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.1323 3.51516C18.0562 3.42525 17.9578 3.35199 17.841 3.30481C17.457 3.14964 17.0199 3.33519 16.8647 3.71924L14.0835 10.603C13.9283 10.987 14.1139 11.4241 14.4979 11.5793C14.882 11.7345 15.3191 11.5489 15.4743 11.1649L15.9415 10.0083L19.1787 10.0084L19.646 11.165C19.8011 11.5491 20.2382 11.7346 20.6223 11.5795C21.0063 11.4243 21.1919 10.9872 21.0367 10.6031L18.2563 3.72141C18.2529 3.71285 18.2493 3.70437 18.2456 3.69595C18.2159 3.62903 18.1775 3.5685 18.1323 3.51516ZM18.5726 8.50843L16.5476 8.50837L17.5601 6.0023L18.5726 8.50843Z"
        fill="#323544"
      />
      <path
        d="M6.97206 3.4703C7.26492 3.17765 7.73952 3.17766 8.03237 3.47032L11.0343 6.47032C11.3273 6.76312 11.3274 7.23799 11.0346 7.53098C10.7418 7.82396 10.2669 7.82411 9.97395 7.53131L8.25206 5.81052L8.25206 18.1909L9.97387 16.4703C10.2669 16.1775 10.7417 16.1777 11.0345 16.4707C11.3273 16.7637 11.3271 17.2385 11.0342 17.5313L8.03205 20.5313C7.73919 20.824 7.26459 20.824 6.97174 20.5313L3.96984 17.5313C3.67685 17.2385 3.6767 16.7636 3.9695 16.4707C4.2623 16.1777 4.73718 16.1775 5.03016 16.4703L6.75206 18.1911L6.75206 5.81073L5.03025 7.53133C4.73725 7.82412 4.26238 7.82396 3.96959 7.53096C3.6768 7.23797 3.67696 6.76309 3.96996 6.4703L6.97206 3.4703Z"
        fill="#323544"
      />
      <path
        d="M14.6206 14.8718C14.2064 14.8718 13.8706 14.536 13.8706 14.1218C13.8706 13.7076 14.2064 13.3718 14.6206 13.3718H20.4997C20.803 13.3718 21.0765 13.5546 21.1926 13.8348C21.3087 14.1151 21.2445 14.4377 21.03 14.6522L16.4313 19.2509H20.4997C20.9139 19.2509 21.2497 19.5867 21.2497 20.0009C21.2497 20.4151 20.9139 20.7509 20.4997 20.7509H14.6206C14.3173 20.7509 14.0438 20.5682 13.9277 20.2879C13.8116 20.0077 13.8758 19.6851 14.0903 19.4706L18.689 14.8718H14.6206Z"
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
export class SvgSortAlphabeticalIcon {
  readonly class = input<string>('');
}
