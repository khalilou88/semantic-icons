import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-record-voice-over-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="9" cy="9" r="4" />
    <svg:path
      d="M9 15c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4zm6.47-7.23c.32.79.32 1.67 0 2.46-.19.47-.11 1 .25 1.36l.03.03c.58.58 1.57.46 1.95-.27.76-1.45.76-3.15-.02-4.66-.38-.74-1.38-.88-1.97-.29l-.01.01c-.34.35-.42.89-.23 1.36zm3.71-4.88c-.4.4-.46 1.02-.13 1.48 1.97 2.74 1.96 6.41-.03 9.25-.32.45-.25 1.07.14 1.46l.03.03c.49.49 1.32.45 1.74-.1 2.75-3.54 2.76-8.37 0-12.02-.42-.55-1.26-.59-1.75-.1z"
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
export class SiRecordVoiceOverIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
