import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-help-center-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5 5v14h14V5H5zm7.01 13c-.7 0-1.26-.56-1.26-1.26 0-.71.56-1.25 1.26-1.25.71 0 1.25.54 1.25 1.25-.01.69-.54 1.26-1.25 1.26zm3.01-7.4c-.76 1.11-1.48 1.46-1.87 2.17-.16.29-.22.48-.22 1.41h-1.82c0-.49-.08-1.29.31-1.98.49-.87 1.42-1.39 1.96-2.16.57-.81.25-2.33-1.37-2.33-1.06 0-1.58.8-1.8 1.48l-1.65-.7C9.01 7.15 10.22 6 11.99 6c1.48 0 2.49.67 3.01 1.52.44.72.7 2.07.02 3.08z"
      opacity=".3"
    />
    <svg:path
      d="M13.25 16.74c0 .69-.53 1.26-1.25 1.26-.7 0-1.26-.56-1.26-1.26 0-.71.56-1.25 1.26-1.25.71 0 1.25.55 1.25 1.25zM11.99 6c-1.77 0-2.98 1.15-3.43 2.49l1.64.69c.22-.67.74-1.48 1.8-1.48 1.62 0 1.94 1.52 1.37 2.33-.54.77-1.47 1.29-1.96 2.16-.39.69-.31 1.49-.31 1.98h1.82c0-.93.07-1.12.22-1.41.39-.72 1.11-1.06 1.87-2.17.68-1 .42-2.36-.02-3.08-.51-.84-1.52-1.51-3-1.51zM19 5H5v14h14V5m0-2c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14z"
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
export class SiHelpCenterIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
