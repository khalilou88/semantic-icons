import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-speaker-notes-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 11V9L4 7v10.17L5.17 16H13l-5-5H6zm2 3H6v-2h2v2zM20 4H6.66L10 7.34V6h8v2h-7.34l1 1H18v2h-4.34l5 5H20z"
      opacity=".3"
    />
    <svg:path
      d="M20 4v12h-1.34l1.91 1.91A2.01 2.01 0 0 0 22 16V4c0-1.1-.9-2-2-2H4.66l2 2H20zM6 12h2v2H6zm12-1V9h-6.34l2 2zm0-3V6h-8v1.34l.66.66zM1.41 1.59 0 3l2 2.01V22l4-4h9l5.73 5.73 1.41-1.41L1.41 1.59zM5.17 16 4 17.17V7l2 2v2h2l5 5H5.17z"
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
export class SiSpeakerNotesOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
