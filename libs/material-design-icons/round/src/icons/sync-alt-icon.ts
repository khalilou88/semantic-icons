import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sync-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m21.65 7.65-2.79-2.79a.501.501 0 0 0-.86.35V7H4c-.55 0-1 .45-1 1s.45 1 1 1h14v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7zM20 15H6v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.19-.2.51-.01.7l2.79 2.79c.32.32.86.1.86-.35V17h14c.55 0 1-.45 1-1s-.45-1-1-1z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSyncAltIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
