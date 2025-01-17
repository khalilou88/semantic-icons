import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-english-input-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14 10H16L16.0005 10.7574C16.7154 10.279 17.5751 10 18.5 10C20.9853 10 23 12.0147 23 14.5V20H21V14.5C21 13.07 19.8255 12 18.5 12C17.1745 12 16 13.07 16 14.5V20H14V10ZM12 4V6H4V11H12V13H4V18H12V20H2V4H12Z"
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
export class SiEnglishInputIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
