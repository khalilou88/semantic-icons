import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-meizu-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Meizu</title>
      <path
        d="M20.045 18.818h3.546A.41.41 0 0 0 24 18.41v-3.545a.41.41 0 0 0-.41-.41h-3.545a.41.41 0 0 0-.409.41v3.545c0 .226.184.41.41.41zM13.8 12.11a.095.095 0 0 1-.163-.068V5.591a.41.41 0 0 0-.409-.41H10.59a.545.545 0 0 0-.385.16L.16 15.387a.545.545 0 0 0-.16.385v2.638c0 .226.183.41.41.41h2.637a.547.547 0 0 0 .385-.16l6.769-6.769a.096.096 0 0 1 .163.068v6.451c0 .226.183.41.409.41h2.638a.547.547 0 0 0 .385-.16L23.84 8.613A.545.545 0 0 0 24 8.23V5.59a.41.41 0 0 0-.41-.41h-2.637a.546.546 0 0 0-.386.16z"
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
export class SvgMeizuIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}