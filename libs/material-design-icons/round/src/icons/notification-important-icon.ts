import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-notification-important-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 23c1.1 0 1.99-.89 1.99-1.99h-3.98c0 1.1.89 1.99 1.99 1.99zm8.29-4.71L19 17v-6c0-3.35-2.36-6.15-5.5-6.83V3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1.17C7.36 4.85 5 7.65 5 11v6l-1.29 1.29c-.63.63-.19 1.71.7 1.71h15.17c.9 0 1.34-1.08.71-1.71zM13 16h-2v-2h2v2zm0-5c0 .55-.45 1-1 1s-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v2z"
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
export class SiNotificationImportantIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
