import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-badge-8k-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-badge-8k"
      [class]="_class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-1.445 4.168a1 1 0 0 0 -1.387 .277l-1.168 1.751v-1.196a1 1 0 0 0 -.883 -.993l-.117 -.007a1 1 0 0 0 -1 1v6a1 1 0 0 0 2 0v-1.196l1.168 1.75a1 1 0 0 0 1.286 .337l.1 -.059l.094 -.07a1 1 0 0 0 .184 -1.317l-1.63 -2.445l1.63 -2.445a1 1 0 0 0 -.277 -1.387m-8.555 -.168h-1a2 2 0 0 0 -2 2v1l.005 .15c.022 .295 .108 .573 .245 .819l.019 .031l-.02 .031a2 2 0 0 0 -.249 .969v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2 -2v-1l-.005 -.15a2 2 0 0 0 -.245 -.819l-.019 -.031l.02 -.031c.158 -.287 .249 -.618 .249 -.969v-1a2 2 0 0 0 -2 -2m0 5v1h-1v-1zm0 -3v1h-1v-1z"
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
export class SvgBadge8kIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
