import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bentoml-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>BentoML</title>
      <path
        d="M16.3 11a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2zm-4.4 0a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2zM5.67 0a1.2 1.2 0 0 0-.815.318L.386 4.444A1.2 1.2 0 0 0 0 5.325V22.4A1.6 1.6 0 0 0 1.6 24h17.048a1.2 1.2 0 0 0 .911-.42l4.152-4.843a1.2 1.2 0 0 0 .289-.781V1.6A1.6 1.6 0 0 0 22.4 0ZM6 .6h16.2a1.2 1.2 0 0 1 1.2 1.2v15.8a1.6 1.6 0 0 1-1.6 1.6H6A1.2 1.2 0 0 1 4.8 18V1.8A1.2 1.2 0 0 1 6 .6Z"
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
export class SvgBentomlIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
