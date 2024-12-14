import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-refresh-user-1-icon',
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
        d="M3.3777 10.4603C2.9776 10.3531 2.74017 9.94185 2.84737 9.54175C3.3886 7.52186 4.58121 5.737 6.24022 4.464C7.89924 3.19099 9.93195 2.50098 12.0231 2.50098C14.1142 2.50098 16.1469 3.19099 17.806 4.464C19.2116 5.54258 20.2824 6.98861 20.9059 8.63372L21.6667 7.28239C21.8699 6.92145 22.3273 6.79358 22.6882 6.99679C23.0491 7.2 23.177 7.65734 22.9738 8.01828L21.2392 11.0993C21.1416 11.2727 20.9791 11.4001 20.7875 11.4537C20.596 11.5072 20.391 11.4825 20.2176 11.3849L17.1369 9.65017C16.776 9.44694 16.6482 8.98959 16.8514 8.62867C17.0546 8.26774 17.512 8.1399 17.8729 8.34314L19.548 9.28639C19.0303 7.85095 18.1109 6.58866 16.8928 5.65403C15.4958 4.58203 13.784 4.00098 12.0231 4.00098C10.2621 4.00098 8.55041 4.58203 7.15336 5.65403C5.75631 6.72602 4.75203 8.22904 4.29626 9.92998C4.18906 10.3301 3.7778 10.5675 3.3777 10.4603Z"
        fill="#323544"
      />
      <path
        d="M20.6712 13.5397C21.0713 13.6469 21.3087 14.0581 21.2015 14.4582C20.6603 16.4781 19.4677 18.263 17.8087 19.536C16.1497 20.809 14.117 21.499 12.0258 21.499C9.93466 21.499 7.90195 20.809 6.24294 19.536C4.83441 18.4552 3.76209 17.0054 3.13916 15.3562L2.37242 16.718C2.16921 17.079 1.71188 17.2068 1.35094 17.0036C0.989997 16.8004 0.862131 16.3431 1.06534 15.9821L2.79997 12.9011C2.89756 12.7278 3.06001 12.6003 3.25158 12.5467C3.44316 12.4932 3.64817 12.5179 3.8215 12.6155L6.9022 14.3502C7.26313 14.5535 7.39097 15.0108 7.18773 15.3718C6.9845 15.7327 6.52715 15.8605 6.16623 15.6573L4.50355 14.721C5.02173 16.1534 5.94014 17.4129 7.15608 18.346C8.55313 19.418 10.2649 19.999 12.0258 19.999C13.7868 19.999 15.4985 19.418 16.8955 18.346C18.2926 17.274 19.2969 15.7709 19.7526 14.07C19.8598 13.6699 20.2711 13.4325 20.6712 13.5397Z"
        fill="#323544"
      />
      <path
        d="M10.4082 9.86042C10.4082 8.96777 11.1318 8.24414 12.0245 8.24414C12.9171 8.24414 13.6408 8.96777 13.6408 9.86042C13.6408 10.7531 12.9171 11.4767 12.0245 11.4767C11.1318 11.4767 10.4082 10.7531 10.4082 9.86042Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.8106 12.0869C9.57442 12.0869 8.57227 13.0891 8.57227 14.3253V15.2555C8.57227 15.6697 8.90805 16.0055 9.32227 16.0055H14.7273C15.1415 16.0055 15.4773 15.6697 15.4773 15.2555V14.3253C15.4773 13.0891 14.4752 12.0869 13.2389 12.0869H10.8106ZM10.0723 14.3253C10.0723 13.9175 10.4028 13.5869 10.8106 13.5869H13.2389C13.6467 13.5869 13.9773 13.9175 13.9773 14.3253V14.5055H10.0723V14.3253Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgRefreshUser1Icon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
