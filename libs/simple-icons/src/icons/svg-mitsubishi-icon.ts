import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mitsubishi-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Mitsubishi</title>
      <path
        d="M8 22.38H0l4-6.92h8zm8 0h8l-4-6.92h-8zm0-13.84l-4-6.92-4 6.92 4 6.92Z"
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
export class SvgMitsubishiIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}