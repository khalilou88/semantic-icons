import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-headphones-battery-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 7h-1v-.5c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7h-1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zM8 6c-3.31 0-6 2.69-6 6v4c0 1.1.9 2 2 2s2-.9 2-2v-1c0-1.1-.9-2-2-2h-.5v-1c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5v1H12c-1.1 0-2 .9-2 2v1c0 1.1.9 2 2 2s2-.9 2-2v-4c0-3.31-2.69-6-6-6z"
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
export class SiHeadphonesBatteryIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
