import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-indiehackers-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Indie Hackers</title>
      <path
        d="M0 0h24v24H0V0Zm5.4 17.2h2.4V6.8H5.4v10.4Zm4.8 0h2.4v-4h3.6v4h2.4V6.8h-2.4v4h-3.6v-4h-2.4v10.4Z"
      />
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
export class SvgIndiehackersIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
