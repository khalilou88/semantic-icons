import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-volume-mute-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.78082 2.21967C3.48792 1.92678 3.01305 1.92678 2.72016 2.21967C2.42726 2.51256 2.42726 2.98744 2.72016 3.28033L6.87798 7.43815L6.80858 7.49984H4.75C3.50736 7.49984 2.5 8.5072 2.5 9.74984V14.2498C2.5 15.4925 3.50736 16.4998 4.75 16.4998H6.80862L10.0052 19.3412C11.4562 20.631 13.75 19.601 13.75 17.6596V14.3102L21.2192 21.7794C21.5121 22.0722 21.9869 22.0722 22.2798 21.7794C22.5727 21.4865 22.5727 21.0116 22.2798 20.7187L3.78082 2.21967ZM12.25 12.8102V17.6596C12.25 18.3067 11.4854 18.6501 11.0017 18.2201L7.59204 15.1893C7.45475 15.0673 7.27745 14.9998 7.09377 14.9998H4.75C4.33579 14.9998 4 14.6641 4 14.2498V9.74984C4 9.33563 4.33579 8.99984 4.75 8.99984H7.09373C7.27742 8.99984 7.45472 8.93243 7.592 8.8104L7.94048 8.50065L12.25 12.8102Z"
        fill="#323544"
      />
      <path
        d="M12.25 6.34009V8.66135L13.75 10.1613V6.34009C13.75 4.39868 11.4562 3.36862 10.0052 4.65842L9.07442 5.48577L10.1369 6.54826L11.0017 5.77954C11.4854 5.3496 12.25 5.69296 12.25 6.34009Z"
        fill="#323544"
      />
      <path
        d="M15.499 11.9104L16.7902 13.2015C17.2211 12.0135 16.9913 10.6401 16.1007 9.64975C15.8237 9.34175 15.3495 9.3166 15.0415 9.59357C14.7335 9.87054 14.7084 10.3448 14.9853 10.6527C15.3078 11.0114 15.479 11.4581 15.499 11.9104Z"
        fill="#323544"
      />
      <path
        d="M17.7519 14.1633L18.8565 15.2678C20.2358 12.9757 20.0147 9.86257 18.193 7.83376C17.9162 7.52556 17.442 7.50005 17.1338 7.77679C16.8256 8.05353 16.8001 8.52772 17.0769 8.83592C18.3658 10.2714 18.5908 12.4636 17.7519 14.1633Z"
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
export class SvgVolumeMuteIcon {
  readonly class = input('');
}