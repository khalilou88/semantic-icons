import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-theater-comedy-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11 2v5.5h3.5v3.31C14.55 9.8 15.64 9 16.99 9c1.38 0 2.5.84 2.5 1.88H14.5v3.56c.76.36 1.61.56 2.5.56 3.31 0 6-2.69 6-6V2H11zm4 5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
    />
    <svg:path
      d="M1 16c0 3.31 2.69 6 6 6s6-2.69 6-6V9H1v7zm6 1.88c-1.38 0-2.5-.84-2.5-1.88h5c0 1.04-1.12 1.88-2.5 1.88zm2-5.38c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTheaterComedyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
