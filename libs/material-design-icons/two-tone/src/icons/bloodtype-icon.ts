import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bloodtype-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 4.67c-4.05 3.7-6 6.79-6 9.14 0 3.63 2.65 6.2 6 6.2s6-2.57 6-6.2c0-2.35-1.95-5.45-6-9.14zM15 18H9v-2h6v2zm0-5h-2v2h-2v-2H9v-2h2V9h2v2h2v2z"
      opacity=".3"
    />
    <svg:path d="M9 16h6v2H9zm4-7h-2v2H9v2h2v2h2v-2h2v-2h-2z" />
    <svg:path
      d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z"
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
export class SiBloodtypeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
