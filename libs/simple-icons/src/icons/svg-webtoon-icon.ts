import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-webtoon-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>WEBTOON</title>
      <path
        d="M15.023 15.26c.695 0 1.014-.404 1.014-1.051 0-.551-.308-1.01-.984-1.01-.58 0-.912.404-.912 1.016 0 .543.32 1.045.882 1.045zM10.135 15.447c.764 0 1.113-.443 1.113-1.154 0-.604-.338-1.109-1.082-1.109-.637 0-1.002.445-1.002 1.115 0 .597.352 1.148.971 1.148zM24 10.201l-3.15.029.83-9.686L1.958 3.605l1.686 6.248H0l3.734 11.488 8.713-1.283v3.396l10.113-4.641L24 10.201zm-9.104-3.594c0-.049.039-.092.088-.094l1.879-.125.446-.029c.524-.035 1.634.063 1.634 1.236 0 .83-.619 1.184-.619 1.184s.75.189.707 1.092c0 1.602-1.943 1.389-1.943 1.389l-.225-.006-1.908-.053a.089.089 0 0 1-.086-.09l.027-4.504zm-3.675.243c0-.047.039-.09.088-.092l3.064-.203a.08.08 0 0 1 .087.08v.943c0 .049-.039.09-.087.092l-1.9.08a.094.094 0 0 0-.088.09l-.005.394a.083.083 0 0 0 .086.084l1.646-.066a.082.082 0 0 1 .086.084l-.02 1.012a.089.089 0 0 1-.089.086h-1.63a.089.089 0 0 0-.088.088v.416c0 .047.039.088.088.088l1.87.033a.09.09 0 0 1 .087.09v.951a.084.084 0 0 1-.087.084l-3.063-.123a.09.09 0 0 1-.087-.09l.042-4.121zm-6.01.312l.975-.064a.101.101 0 0 1 .105.08l.458 2.205c.01.047.027.047.039 0l.576-2.281a.132.132 0 0 1 .108-.09l.921-.061a.108.108 0 0 1 .109.078l.564 2.342c.012.047.029.047.041 0l.6-2.424a.131.131 0 0 1 .108-.092l.996-.064c.048-.004.077.031.065.078l-1.09 4.104a.113.113 0 0 1-.109.082l-1.121-.031a.12.12 0 0 1-.109-.086l-.535-1.965c-.012-.047-.033-.047-.045 0l-.522 1.934a.12.12 0 0 1-.11.082l-1.109-.031a.123.123 0 0 1-.108-.088l-.873-3.618c-.011-.047.019-.088.066-.09zm-.288 9.623v-3.561a.089.089 0 0 0-.087-.088l-1.252-.029a.095.095 0 0 1-.091-.09l-.046-1.125a.082.082 0 0 1 .083-.086l4.047.096c.048 0 .087.041.085.088l-.022 1.088a.093.093 0 0 1-.089.088l-1.139.004a.09.09 0 0 0-.087.088v3.447c0 .049-.039.09-.087.092l-1.227.07a.08.08 0 0 1-.088-.082zm2.834-2.379c0-1.918 1.321-2.482 2.416-2.482s2.339.73 2.339 2.316c0 1.9-1.383 2.482-2.416 2.482-1.033.001-2.339-.724-2.339-2.316zm5.139-.115c0-1.746 1.166-2.238 2.162-2.238s2.129.664 2.129 2.107c0 1.729-1.259 2.26-2.198 2.26s-2.093-.68-2.093-2.129zm7.259 1.711a.175.175 0 0 1-.139-.064l-1.187-1.631c-.029-.039-.053-.031-.053.018v1.67c0 .047-.039.09-.086.092l-1.052.061a.082.082 0 0 1-.087-.082l.039-3.842c0-.047.039-.086.088-.084l.881.02a.2.2 0 0 1 .137.074l1.293 1.902c.027.041.051.033.051-.014l.032-1.846a.087.087 0 0 1 .089-.086l.963.029c.047 0 .085.041.083.09l-.138 3.555a.097.097 0 0 1-.091.092l-.823.046zM16.258 8.23l.724-.014s.47.018.47-.434c0-.357-.411-.33-.411-.33l-.782.008a.09.09 0 0 0-.088.088v.598a.083.083 0 0 0 .087.084zM16.229 10.191h.99c.024 0 .35-.051.35-.404 0-.293-.229-.402-.441-.398l-.898.029a.089.089 0 0 0-.087.09v.596a.086.086 0 0 0 .086.087z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgWebtoonIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
