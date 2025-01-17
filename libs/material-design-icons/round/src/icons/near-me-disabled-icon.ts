import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-near-me-disabled-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m12 6.34 6.95-2.58c.8-.3 1.58.48 1.29 1.29L17.66 12 12 6.34zm9.9 12.73L4.93 2.1a.996.996 0 1 0-1.41 1.41l4.36 4.36-4.2 1.56c-.41.16-.68.54-.68.97 0 .42.26.8.65.96l6.42 2.57 2.57 6.42c.16.39.54.65.96.65.43 0 .82-.27.97-.67l1.56-4.2 4.36 4.36c.39.39 1.02.39 1.41 0 .39-.4.39-1.03 0-1.42z"
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
export class SiNearMeDisabledIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
