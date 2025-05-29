import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-toggle-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M368 112H144a144 144 0 0 0 0 288h224a144 144 0 0 0 0-288m0 230a86 86 0 1 1 86-86 85.88 85.88 0 0 1-86 86"
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
export class SiToggleSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
