import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-123-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.75 10.5c-.41 0-.75-.34-.75-.75S4.34 9 4.75 9H6c.55 0 1 .45 1 1v4.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V10.5h-.75zm5-1.5c-.41 0-.75.34-.75.75s.34.75.75.75H12v1h-2c-.55 0-1 .45-1 1V14c0 .55.45 1 1 1h2.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H10.5v-1h2c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1H9.75zm8.75 6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-2.75c-.41 0-.75.34-.75.75s.34.75.75.75H18v1h-1.5c-.28 0-.5.22-.5.5s.22.5.5.5H18v1h-2.25c-.41 0-.75.34-.75.75s.34.75.75.75h2.75z"
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
export class Si123Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
