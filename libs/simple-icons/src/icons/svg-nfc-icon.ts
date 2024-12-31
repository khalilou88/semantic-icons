import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-nfc-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>NFC</title>
      <path
        d="M23.958 1.98C23.895 1 23.143.256 22.145.197c-1.102-.066-4.668-.12-5.693-.12 1.832 1.264 2.082 3.644 2.255 8.066.101 2.62.01 11.799.002 12.188l-.049 2.504-9.628-9.63v-3.014l7.656 7.658c.02-1.516.04-3.492.04-5.299 0-1.76-.026-3.354-.076-4.193-.288-4.819-.737-7.077-3.253-7.962-.77-.27-1.487-.335-2.683-.351C9.728.032 2.848.037 1.854.091.8.147.09.914.042 1.9c-.048.977-.064 19.174 0 20.165.062.98.815 1.724 1.812 1.782 1.102.067 4.668.075 5.694.075-1.832-1.264-2.083-3.643-2.255-8.066-.1-2.62-.009-11.8 0-12.188l.047-2.504 9.629 9.63v3.013L7.312 6.152c-.02 1.514-.04 3.49-.04 5.298 0 1.76.026 3.354.077 4.192.288 4.82.736 7.077 3.252 7.962.77.271 1.487.337 2.683.352.987.012 7.868.006 8.861-.047 1.056-.056 1.765-.822 1.813-1.811.048-.976.064-19.127 0-20.118"
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
export class SvgNfcIcon {
  readonly class = input<string>('');
}
