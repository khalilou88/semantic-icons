import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-thermometer-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M320 291.24V80a64 64 0 10-128 0v211.24A113.39 113.39 0 00144 384a112 112 0 00224 0 113.39 113.39 0 00-48-92.76zM256 432a48 48 0 01-16-93.26V96h32v242.74A48 48 0 01256 432z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiThermometerSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
