import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-uv-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>uv</title>
      <path
        d="m0 .1058.0504 11.9496.0403 9.5597c.0055 1.3199 1.08 2.3854 2.4 2.3798l9.5596-.0403 5.9749-.0252.6075-.0026c1.316-.0056 2.3799-1.0963 2.3799-2.4123h1.0946v2.3894L24 23.9042 23.8992.005 12.9056.0513l.0463 9.5245v5.9637h-1.9583L11.04 9.584 10.9936.0594Z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgUvIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
