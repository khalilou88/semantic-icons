import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-add-home-work-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 5v1.4l5 3.57v1.11c.33-.05.66-.08 1-.08 1.08 0 2.09.25 3 .68V5h-9zm7 4h-2V7h2v2z"
      opacity=".3"
    />
    <svg:path d="M12 5h9v6.68c.75.36 1.43.84 2 1.42V3H10v1.97l2 1.43V5z" />
    <svg:path
      d="M17 7h2v2h-2zM8 6l-7 5v10h6v-5h2v5h2.68c-.43-.91-.68-1.92-.68-3v-4H5v5H3v-6.97l5-3.57 5 3.57v1.08c.57-.59 1.25-1.07 2-1.42V11L8 6z"
    />
    <svg:path
      d="m8 8.46-5 3.57V19h2v-5h6v4c0-1.91.76-3.63 2-4.89v-1.08L8 8.46z"
      opacity=".3"
    />
    <svg:path
      d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21v1z"
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
export class SiAddHomeWorkIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
