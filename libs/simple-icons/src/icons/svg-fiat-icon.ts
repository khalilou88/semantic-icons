import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-fiat-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Fiat</title>
      <path
        d="M21.175 6.25c.489 1.148.726 2.442.726 3.956 0 .818-.068 1.69-.206 2.666-.286 2.01-1.048 4.11-1.75 5.494-.114.223-.205.371-.388.533-.32.282-.602.352-.706.291-.084-.05-.131-.302-.114-.673.014-.316.089-.55.204-.924a36.261 36.261 0 0 0 1.2-5.416c.385-2.664.37-5.06-.201-6.52a2.224 2.224 0 0 0-.22-.427c-.062-.09-.106-.136-.106-.136-1.181-1.183-4.37-1.776-7.56-1.776-3.19 0-6.378.593-7.558 1.776 0 0-.045.045-.106.136a2.122 2.122 0 0 0-.221.426c-.572 1.46-.586 3.857-.201 6.521.26 1.807.672 3.72 1.227 5.504.096.307.158.516.173.84.016.369-.03.62-.114.67-.104.06-.389-.01-.71-.295-.23-.205-.345-.405-.49-.701-.68-1.385-1.393-3.397-1.667-5.323a18.884 18.884 0 0 1-.206-2.666c0-1.514.238-2.807.726-3.954.367-.86.983-1.58 1.782-2.083a13.892 13.892 0 0 1 6.526-2.122 13.9 13.9 0 0 1 .815-.026h.02c.274 0 .548.01.818.026 2.282.138 4.539.873 6.525 2.122a4.583 4.583 0 0 1 1.782 2.082zm-4.763 14.526c-.088.019-.361.083-.632.157-.243.067-.483.12-.597.143a16.51 16.51 0 0 1-3.115.285h-.028c-1.117 0-2.177-.103-3.114-.285a9.23 9.23 0 0 1-.56-.133 14.987 14.987 0 0 0-.604-.148c-.418-.095-.796-.163-.817-.083-.025.093.162.288.401.472.056.042.195.14.357.22.15.073.32.128.386.15 1.098.355 2.346.502 3.941.502h.022c1.563 0 2.794-.142 3.877-.483.371-.117.59-.211.853-.42.22-.174.385-.353.361-.44-.02-.075-.348-.021-.731.063zm-2.508-10.313c-.145-.81-.32-1.432-.518-1.85l-.002-.004h-.021l-.682-.006h-.01l-.027 2.998h1.426l-.001-.01c0-.005-.056-.522-.165-1.128zm5.76 1.687c-.322 2.228-.88 4.623-1.66 6.701-.13.35-.248.48-.53.7a6.23 6.23 0 0 1-2.431 1.028c-.897.175-1.908.272-2.974.272h-.029a15.66 15.66 0 0 1-2.973-.272 6.23 6.23 0 0 1-2.433-1.028c-.282-.22-.399-.35-.527-.7-.782-2.078-1.34-4.473-1.661-6.701-.373-2.577-.35-4.847.18-6.202.067-.17.138-.292.19-.369.046-.065.078-.1.078-.1 1.068-1.07 4.06-1.652 7.16-1.652 3.101 0 6.093.582 7.16 1.653 0 0 .032.033.078.1.052.076.124.197.19.368.531 1.355.554 3.625.182 6.202zM8.904 7.565L6.222 7.55l.267 9.337 1.122.012-.016-4.25h1.014v-1.097H7.595V8.66h1.31V7.564zm1.876-.02l-1.365.003.181 9.35h1.157l.027-9.352zm3.448.014h-2.732l.108 9.334h1.092l.009-4.222h1.418l.002.007c.128.797.138 4.171.138 4.205v.015h1.063l.009-.479c.048-2.42.13-6.469-1.107-8.86zm4.32-.013l-3.344.013v1.077h.998v.01l-.042 8.252h1.132l.275-8.262h.981v-1.09zM23.975 12c0 6.617-5.372 12-11.976 12C5.397 24 .025 18.617.025 12S5.397 0 12 0c6.604 0 11.976 5.383 11.976 12zm-.33-.008C23.64 5.561 18.418.33 11.998.33 5.642.33.46 5.463.358 11.811a1.71 1.71 0 0 1 .684-.78c.655-.388.834-1.385.893-1.981l.012-.062c-.039.395-.07.79-.07 1.218 0 .832.07 1.718.21 2.708.412 2.9 1.813 6.007 2.637 6.958l.046.05.192.202.007.006c2.01 1.647 3.857 2.23 7.061 2.23h.022c3.203 0 5.05-.583 7.06-2.23l.009-.006.185-.197.052-.056c.826-.954 2.226-4.057 2.638-6.957.14-.99.209-1.876.209-2.708 0-.454-.021-.89-.064-1.309l.006.006c.06.597.379 2.141.995 2.586.21.152.375.317.503.503z"
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
export class SvgFiatIcon {
  readonly class = input<string>('');
}
