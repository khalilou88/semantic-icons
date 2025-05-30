import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bakery-dining-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m18.77 8.55-1.17-.47c-.62-.25-1.31.17-1.37.84L15.49 17H17l2.6-6.5c.31-.77-.06-1.65-.83-1.95zM6.4 8.08l-1.17.47c-.77.3-1.14 1.18-.83 1.95L7 17h1.5l-.74-8.08a.993.993 0 0 0-1.36-.84zM13.36 6h-2.71c-.89 0-1.58.76-1.5 1.64l.85 9.35h4l.85-9.36c.08-.87-.61-1.63-1.49-1.63zM3.18 13.72l-1 1.93c-.19.36-.23.78-.12 1.19.29 1.01 1.43 1.41 2.38.94l1.05-.52-1.4-3.49a.5.5 0 0 0-.91-.05zm18.64 1.93-1-1.93a.503.503 0 0 0-.91.04l-1.4 3.49 1.05.52c.94.47 2.09.07 2.38-.94.11-.4.07-.82-.12-1.18z"
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
export class SiBakeryDiningIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
