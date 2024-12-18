import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-pretzel-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Pretzel</title>
      <path
        d="M22.439.03 10.757 6.516a.305.305 0 0 0-.142.236v5.426l2.72 1.704v-5.54a.303.303 0 0 1 .143-.235l6.24-3.48a.286.286 0 0 1 .415.237V15.186a2.807 2.807 0 0 1-1.38 2.555 2.827 2.827 0 0 1-2.909-.02l-6.24-3.951-.03-.03a5.569 5.569 0 0 0-6.245.333 5.524 5.524 0 0 0-1.977 5.917 5.462 5.462 0 0 0 2.662 3.331A5.656 5.656 0 0 0 6.676 24a5.961 5.961 0 0 0 1.597-.236 5.544 5.544 0 0 0 3.43-2.919l.09-.236-2.308-1.474-.237.56a2.792 2.792 0 0 1-1.74 1.478 2.836 2.836 0 0 1-2.189-.236 2.738 2.738 0 0 1-1.36-1.704c-.413-1.42.414-2.949 1.805-3.45.294-.105.604-.153.916-.142a2.834 2.834 0 0 1 1.449.413l6.241 3.977h.03a5.558 5.558 0 0 0 2.898.797 5.968 5.968 0 0 0 1.597-.236 5.572 5.572 0 0 0 2.896-2.049 5.544 5.544 0 0 0 1.067-3.377V.266A.29.29 0 0 0 22.576 0a.293.293 0 0 0-.137.03z"
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
export class SvgPretzelIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
