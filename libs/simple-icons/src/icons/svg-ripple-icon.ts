import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ripple-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Ripple</title>
      <path
        d="M20.55 14.65c-.846-.486-1.805-.632-2.752-.666-.79-.023-1.974-.541-1.974-1.985 0-1.072.868-1.94 1.985-1.985.947-.034 1.906-.18 2.752-.666A5.018 5.018 0 0022.4 2.502 5.04 5.04 0 0015.53.674a4.993 4.993 0 00-2.504 4.343c0 .97.35 1.861.79 2.696.372.699.553 1.996-.71 2.73-.948.54-2.132.202-2.719-.745-.496-.801-1.094-1.545-1.94-2.03C6.045 6.28 2.977 7.104 1.6 9.495A5.018 5.018 0 003.44 16.34a5.025 5.025 0 005.008 0c.846-.485 1.444-1.23 1.94-2.03.406-.654 1.433-1.489 2.718-.744.948.541 1.241 1.737.711 2.73-.44.823-.79 1.725-.79 2.695A5.011 5.011 0 0018.034 24a5.011 5.011 0 005.008-5.008 4.982 4.982 0 00-2.492-4.343z"
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
export class SvgRippleIcon {
  readonly class = input<string>('');
}
