import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-design-services-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m16.24 11.51 1.57-1.57-3.75-3.75-1.57 1.57-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13-4.6 4.61c-.1.1-.15.22-.15.36v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15l4.62-4.62 4.13 4.13c1.32 1.32 2.76.07 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-4.13-4.12zm-7.06-.44L5.04 6.94l1.89-1.9L8.2 6.31l-.47.49a.996.996 0 1 0 1.41 1.41l.48-.48 1.45 1.45-1.89 1.89zm7.88 7.89-4.13-4.13 1.9-1.9 1.45 1.45-.48.48a.996.996 0 1 0 1.41 1.41l.48-.48 1.27 1.27-1.9 1.9zm3.65-11.92a.996.996 0 0 0 0-1.41l-2.34-2.34c-.47-.47-1.12-.29-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
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
export class SiDesignServicesIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
