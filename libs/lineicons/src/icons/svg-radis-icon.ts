import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-radis-icon',
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
        d="M19.7155 12.1211C19.7155 11.4228 20.2328 11.0176 20.8793 11.0176C21.3621 11.0176 21.7931 11.2504 22 11.828C21.9396 12.1211 21.5776 12.4487 21.4224 12.5004C21.2931 12.2246 21.1465 12.0607 21.0086 12.0607C20.8362 12.0607 20.8276 12.1814 20.8276 12.3366C20.8276 12.4465 20.8591 12.6084 20.8969 12.8031C20.9541 13.0973 21.0259 13.4666 21.0259 13.8452C21.0259 14.5349 20.5431 15.0435 19.8017 15.0435C19.1228 15.0435 18.7477 14.5985 18.5804 13.8875C18.1369 14.6822 17.4884 15.0435 16.9914 15.0435C16.2144 15.0435 16.0315 14.4692 16.0499 13.8866C15.7377 14.4384 15.1367 15.0435 14.5604 15.0435C13.972 15.0435 13.7641 14.5314 13.8118 13.935C13.4593 14.5916 12.8216 15.0435 12.2069 15.0435C11.5398 15.0435 11.2096 14.5136 11.3165 13.8567C10.8677 14.4083 10.0323 15.0435 9.16379 15.0435C8.17348 15.0435 7.74242 14.5095 7.69134 13.8403C7.21336 14.6064 6.56911 15.0694 5.80172 15.0694C4.69395 15.0694 4.29773 14.0843 4.24008 13.2785C3.82952 13.8283 3.36795 14.3987 2.80172 15.0349C2.74138 15.0952 2.68965 15.1297 2.62931 15.1297C2.43104 15.1297 2.02586 14.2504 2 13.9228C2.17014 13.6588 3.24263 12.4805 4.1061 11.5318C4.40962 11.1983 4.68732 10.8932 4.89089 10.6662C4.36209 10.8257 3.81687 11.144 3.12931 11.6383C3.00862 11.7246 2.67241 10.9401 2.68104 10.3366C3.47414 9.7504 4.68104 9.37971 5.65518 9.37971C7.01725 9.37971 7.80172 10.1383 7.80172 11.1901C7.80172 12.0694 7.06896 13.0349 6 13.0694C5.44416 13.0838 5.08793 12.7718 4.90574 12.3865C4.92751 12.9824 5.23734 13.7159 6.06896 13.7159C6.97558 13.7159 7.41094 13.1686 8.06021 12.3525C8.1024 12.2994 8.14548 12.2453 8.18965 12.1901C8.74139 11.509 9.37932 10.9056 10.3104 10.9056C10.8793 10.9056 11.2672 11.259 11.2672 11.7935C11.2672 12.4401 10.5086 13.3366 9.44828 13.3366C9.26718 13.3366 9.10209 13.3127 8.96275 13.2656C8.95925 13.2928 8.95689 13.3195 8.95689 13.3452C8.95689 13.647 9.06896 13.828 9.56035 13.828C10.2845 13.828 10.9655 13.397 11.7931 12.3883C12.6035 11.397 13.2155 10.9659 13.8621 10.9659C14.2985 10.9659 14.6298 11.2025 14.7757 11.6008C15.6423 10.3493 16.3774 9.46259 17 8.87109C17.6121 9.12971 18.0517 9.63834 17.931 9.74178C17.4741 10.1556 15.9483 11.8194 15.3448 12.8107C15.1896 13.0694 15.0431 13.3538 15.0431 13.4918C15.0431 13.6211 15.1207 13.6642 15.2069 13.6642C15.6211 13.6642 16.4512 12.6863 17.1681 11.8418C17.4359 11.5263 17.6879 11.2294 17.8965 11.009C18.3793 11.2073 18.8707 11.6297 18.75 11.7763C18.1121 12.5349 17.6293 13.1556 17.6293 13.509C17.6293 13.6038 17.6638 13.6642 17.7931 13.6642C18.0345 13.6642 18.2586 13.4487 18.6293 12.9918C18.7069 12.897 18.8017 12.897 18.8621 13.0435C19.0259 13.4401 19.2672 13.6556 19.4569 13.6556C19.681 13.6556 19.7931 13.4573 19.7931 13.1556C19.7931 12.9494 19.7679 12.7096 19.7463 12.5032C19.7299 12.3472 19.7155 12.2102 19.7155 12.1211ZM5.81035 12.009C6.26725 12.009 6.76725 11.759 6.76725 11.2504C6.76725 10.9417 6.57567 10.6572 6.06372 10.5705C6.03671 10.6127 6.00988 10.6547 5.98322 10.6964C5.72308 11.103 5.47774 11.4866 5.23014 11.8616C5.37849 11.9449 5.56612 12.009 5.81035 12.009ZM10.431 12.1642C10.431 12.0263 10.3448 11.9314 10.2069 11.9314C9.86104 11.9314 9.33936 12.4168 9.09388 12.8855C9.18449 12.9205 9.29087 12.9401 9.40518 12.9401C10.0172 12.9401 10.431 12.4746 10.431 12.1642ZM12.6983 13.4142C12.6983 13.5694 12.7845 13.6728 12.9655 13.6728C13.5259 13.6728 14.2241 12.6556 14.2241 12.2418C14.2241 12.0694 14.1293 11.9659 13.9741 11.9659C13.4655 11.9659 12.6983 12.9314 12.6983 13.4142ZM19.8964 10.3022C19.6982 10.6298 19.3964 11.0004 19.2844 11.1125C18.7671 10.897 18.2844 10.466 18.3533 10.3453C18.543 10.0091 18.8533 9.64699 18.9654 9.53493C19.4826 9.75044 19.9654 10.1901 19.8964 10.3022Z"
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
export class SvgRadisIcon {
  readonly class = input('');
}