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
      d="M14.5 10.81C14.55 9.8 15.64 9 16.99 9c1.38 0 2.5.84 2.5 1.88H14.5v1.22c.69.55 1.55.9 2.5.9 2.21 0 4-1.79 4-4V4h-8v3.5h1.5v3.31zM19 5.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-5 1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z"
      opacity=".3"
    />
    <svg:path
      d="M11 2v5.5h2V4h8v5c0 2.21-1.79 4-4 4-.95 0-1.81-.35-2.5-.9v2.35c.76.35 1.61.55 2.5.55 3.31 0 6-2.69 6-6V2H11z"
    />
    <svg:circle cx="19" cy="6.5" r="1" />
    <svg:circle cx="15" cy="6.5" r="1" />
    <svg:path
      d="M16.99 9c-1.35 0-2.44.8-2.49 1.81v.07h4.99c0-1.04-1.12-1.88-2.5-1.88zM1 16c0 3.31 2.69 6 6 6s6-2.69 6-6V9H1v7zm2-5h8v5c0 2.21-1.79 4-4 4s-4-1.79-4-4v-5z"
    />
    <svg:path
      d="M7 20c2.21 0 4-1.79 4-4v-5H3v5c0 2.21 1.79 4 4 4zm0-2.12c-1.38 0-2.5-.84-2.5-1.88h5c0 1.04-1.12 1.88-2.5 1.88zm2-5.38c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
      opacity=".3"
    />
    <svg:circle cx="5" cy="13.5" r="1" />
    <svg:circle cx="9" cy="13.5" r="1" />
    <svg:path
      d="M7 17.88c1.38 0 2.5-.84 2.5-1.88h-5c0 1.04 1.12 1.88 2.5 1.88z"
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
