import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-local-police-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m14.5 12.59.63 2.73c.1.43-.37.77-.75.54L12 14.42l-2.39 1.44a.502.502 0 0 1-.75-.54l.64-2.72-2.1-1.81a.5.5 0 0 1 .28-.88l2.78-.24 1.08-2.56c.17-.41.75-.41.92 0l1.08 2.55 2.78.24a.5.5 0 0 1 .28.88l-2.1 1.81zM4.19 4.47C3.47 4.79 3 5.51 3 6.3V11c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6.3c0-.79-.47-1.51-1.19-1.83l-7-3.11c-.52-.23-1.11-.23-1.62 0l-7 3.11z"
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
export class SiLocalPoliceIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
