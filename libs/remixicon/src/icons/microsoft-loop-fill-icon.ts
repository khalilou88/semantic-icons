import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-microsoft-loop-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 12C22 17.5228 17.5228 22 12 22H6.66472C8.68458 20.5479 10 18.1776 10 15.5H12C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12V15.5C8.5 19.0899 5.58985 22 2 22V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMicrosoftLoopFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
