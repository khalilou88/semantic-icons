import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-4k-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19 3H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm-7 9.76c0 .41-.34.75-.75.75H11v.74c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.75h-2c-.55 0-1-.45-1-1V9.75c0-.41.34-.75.75-.75s.75.34.75.75V12h1.5V9.75c0-.41.34-.75.75-.75s.75.34.75.75V12h.25c.41 0 .75.34.75.75v.01zm5.47 1.14c.22.33.13.77-.2.98a.702.702 0 0 1-.98-.2L14.5 12v2.24c0 .41-.34.75-.75.75a.74.74 0 0 1-.75-.74v-4.5c0-.41.34-.75.75-.75s.75.34.75.75v2.24l1.79-2.68a.71.71 0 0 1 .98-.2c.33.22.41.66.2.98L16.2 12l1.27 1.9z"
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
export class Si4kIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
