import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cloudsmith-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Cloudsmith</title>
      <path
        d="M24 10.667v2.667L13.333 24h-2.666L0 13.334v-2.667L10.667 0h2.666L24 10.667Zm-12 6.869a5.535 5.535 0 1 0 0-11.07 5.535 5.535 0 0 0 0 11.07Z"
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
export class SvgCloudsmithIcon {
  readonly class = input<string>('');
}
