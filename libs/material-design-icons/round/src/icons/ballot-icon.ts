import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ballot-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14 9.5h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1zm0 7h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1zm5 4.5H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2zM7 11h3c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm0-4h3v3H7V7zm0 11h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm0-4h3v3H7v-3z"
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
export class SiBallotIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
