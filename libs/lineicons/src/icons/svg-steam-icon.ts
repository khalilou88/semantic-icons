import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-steam-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9676 2C6.76695 2 2.40098 6.04495 2.04785 11.1814L7.3769 13.3965C7.82634 13.0754 8.37209 12.947 8.94994 12.947C8.98204 12.947 9.07835 12.947 9.07835 12.947L11.4218 9.44783C11.4218 9.41573 11.4218 9.41573 11.4218 9.41573C11.4218 7.32906 13.0912 5.65971 15.1779 5.65971C17.2645 5.65971 18.966 7.32906 18.966 9.41573C18.966 11.5024 17.2966 13.1718 15.21 13.1718C15.1779 13.1718 15.1779 13.1718 15.1137 13.1718L11.7108 15.6116C11.7108 15.6437 11.7108 15.7079 11.7108 15.74C11.7108 17.2809 10.4588 18.5971 8.85363 18.5971C7.50531 18.5971 6.31751 17.6019 6.09279 16.3499L2.36888 14.7127C3.55668 18.886 7.44111 22 11.9676 22C17.4572 21.9679 21.9515 17.5056 21.9515 11.984C21.9515 6.46228 17.4572 2 11.9676 2Z"
        fill="#323544"
      />
      <path
        d="M8.27629 17.1524L7.05639 16.6708C7.28111 17.1203 7.63424 17.5376 8.14788 17.6981C9.17517 18.1475 10.4593 17.666 10.9087 16.5745C11.1334 16.0288 11.1334 15.483 10.9087 14.9373C10.684 14.3915 10.2667 13.9742 9.78512 13.7495C9.27148 13.5248 8.75783 13.5569 8.24419 13.7174L9.4962 14.2631C10.2667 14.6162 10.684 15.5151 10.363 16.2856C10.0098 17.0882 9.11096 17.4413 8.27629 17.1524Z"
        fill="#323544"
      />
      <path
        d="M17.7779 9.4158C17.7779 8.06748 16.6543 6.87968 15.2418 6.87968C13.8935 6.87968 12.7057 8.00328 12.7057 9.4158C12.7057 10.8283 13.8935 11.9519 15.2418 11.9519C16.5901 11.9519 17.7779 10.7962 17.7779 9.4158ZM13.412 9.4158C13.412 8.38851 14.2787 7.55384 15.2739 7.55384C16.3012 7.55384 17.1359 8.42061 17.1359 9.4158C17.1359 10.4431 16.2691 11.2778 15.2739 11.2778C14.2466 11.3099 13.412 10.4431 13.412 9.4158Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSteamIcon {
  readonly class = input<string>('');
}
