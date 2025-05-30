import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-plug-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.5 2.75C14.5 2.33579 14.8358 2 15.25 2C15.6642 2 16 2.33579 16 2.75V5.73291L19.5 5.73291C19.9142 5.73291 20.25 6.0687 20.25 6.48291C20.25 6.89712 19.9142 7.23291 19.5 7.23291H19L19 12.2329C19 15.5691 16.4866 18.3183 13.25 18.6901V21.25C13.25 21.6642 12.9142 22 12.5 22C12.0858 22 11.75 21.6642 11.75 21.25V18.6901C8.51342 18.3183 6 15.5691 6 12.2329L6 7.23291H5.5C5.08579 7.23291 4.75 6.89712 4.75 6.48291C4.75 6.0687 5.08579 5.73291 5.5 5.73291L9 5.73291L9 2.75C9 2.33579 9.33579 2 9.75 2C10.1642 2 10.5 2.33579 10.5 2.75L10.5 5.73291L14.5 5.73291V2.75ZM7.5 7.23291L7.5 12.2329C7.5 14.9943 9.73858 17.2329 12.5 17.2329C15.2614 17.2329 17.5 14.9943 17.5 12.2329L17.5 7.23291L7.5 7.23291Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPlug1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
