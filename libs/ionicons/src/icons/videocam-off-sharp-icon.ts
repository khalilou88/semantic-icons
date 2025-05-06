import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-videocam-off-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m57.376 79.998 22.627-22.627 358.63 358.63-22.627 22.628zM32 112a16 16 0 0 0-16 16v256a16 16 0 0 0 16 16h288a15.9 15.9 0 0 0 9.34-3l-285-285ZM336 208v-80a16 16 0 0 0-16-16H179.63l245.44 245.44L496 400V112Z"
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
export class SiVideocamOffSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
