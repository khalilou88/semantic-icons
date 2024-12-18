import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-asahilinux-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Asahi Linux</title>
      <path
        d="m13.835 0-1.72 1.323v.97h2.178zm-1.95.057L9.81 1.095l2.076 4.153zm.23 3.768V6.22l-1.057-2.113L6.43 5.678 12 8.009l5.57-2.331zM6.21 5.835.533 15.957 11.885 24V8.21L6.222 5.84Zm11.58 0-.012.004-5.6 2.345 7.512 10.449 3.777-2.675zm-3.955 7.926v5.422l1.952-2.711zm2.864 3.981-4.411 6.135 5.846-4.14z"
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
export class SvgAsahilinuxIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
