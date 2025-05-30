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
      d="m15.91 9.28-1.3-1.3L5 17.59V19h1.41l9.61-9.61zm-5.08-.35-1.2-1.2-1.19 1.19L7.02 7.5l1.19-1.18-1.27-1.28-1.9 1.9 3.89 3.89zm5.44 5.45-1.2-1.21-1.9 1.9 3.89 3.89 1.9-1.9-1.27-1.27-1.19 1.19-1.42-1.41zm-.25-7.822 1.415-1.414 1.414 1.414-1.414 1.414z"
      opacity=".3"
    />
    <svg:path
      d="m20.97 5.86-2.83-2.83a.996.996 0 0 0-1.41 0l-4.49 4.49-3.89-3.89c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l3.89 3.89L3 16.76V21h4.24l4.52-4.52 3.89 3.89c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-3.89-3.89 4.49-4.49a.993.993 0 0 0-.01-1.4zM5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.2 1.2-1.9 1.9-3.88-3.88zM6.41 19H5v-1.41l9.61-9.61 1.3 1.3.11.11L6.41 19zm10.09-2.02 1.19-1.19 1.27 1.27-1.9 1.9-3.89-3.89 1.9-1.9 1.2 1.2-1.19 1.19 1.42 1.42zm.94-9-1.41-1.41 1.41-1.41 1.41 1.41-1.41 1.41z"
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
