import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-se-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-se"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#005293" d="M0 0h640v480H0z" />
      <path fill="#fecb00" d="M176 0v192H0v96h176v192h96V288h368v-96H272V0z" />
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
export class SvgSeFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
