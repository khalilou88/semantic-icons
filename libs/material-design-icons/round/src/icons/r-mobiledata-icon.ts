import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-r-mobiledata-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m7.8 7.2.65 1.52A.915.915 0 0 1 7.61 10c-.37 0-.7-.22-.85-.56l-.89-2.11H4v1.75c0 .51-.41.92-.92.92h-.16C2.41 10 2 9.59 2 9.08V3c0-.55.45-1 1-1h4c1.1 0 2 .9 2 2v1.33c0 .8-.53 1.54-1.2 1.87zM7 4H4v1.33h3V4z"
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
export class SiRMobiledataIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
