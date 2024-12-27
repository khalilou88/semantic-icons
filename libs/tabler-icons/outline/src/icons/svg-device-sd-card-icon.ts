import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-device-sd-card-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-device-sd-card"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M7 21h10a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2h-6.172a2 2 0 0 0 -1.414 .586l-3.828 3.828a2 2 0 0 0 -.586 1.414v10.172a2 2 0 0 0 2 2z"
      />
      <path d="M13 6v2" />
      <path d="M16 6v2" />
      <path d="M10 7v1" />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgDeviceSdCardIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
