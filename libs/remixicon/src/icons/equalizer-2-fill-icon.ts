import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-equalizer-2-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 7C3 5.067 4.567 3.5 6.5 3.5C8.433 3.5 10 5.067 10 7C10 8.933 8.433 10.5 6.5 10.5C4.567 10.5 3 8.933 3 7ZM20 8H12V6H20V8ZM14 17C14 15.067 15.567 13.5 17.5 13.5C19.433 13.5 21 15.067 21 17C21 18.933 19.433 20.5 17.5 20.5C15.567 20.5 14 18.933 14 17ZM12 16V18H4V16H12Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEqualizer2FillIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
