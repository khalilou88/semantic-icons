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
      d="M11 14H5v5H3v-6.97l5-3.57 5 3.57v1.08c.57-.59 1.25-1.07 2-1.42V11L8 6l-7 5v10h6v-5h2v5h2.68c-.43-.91-.68-1.92-.68-3v-4zm6-7h2v2h-2z"
    />
    <svg:path
      d="M23 13.11V3H10v1.97l2 1.43V5h9v6.68c.75.36 1.43.84 2 1.43zM23 18c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5zm-5.5 3v-2.5H15v-1h2.5V15h1v2.5H21v1h-2.5V21h-1z"
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
