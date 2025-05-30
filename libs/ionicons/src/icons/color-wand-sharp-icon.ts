import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-color-wand-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m133.441 200.647 67.197-67.196 78.142 78.142-67.196 67.196zM301.41 234.21l-67.19 67.2L412 480l68-68zM32 176h80v32H32zM67.624 90.25l22.627-22.628 56.569 56.569-22.627 22.627zM176 32h32v80h-32zM237.32 124.195l56.569-56.569 22.627 22.627-56.569 56.569zM67.62 293.887l56.569-56.569 22.627 22.627-56.569 56.569z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiColorWandSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
