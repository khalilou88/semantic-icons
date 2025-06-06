import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-edit-location-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.9 9.05c.06.36.1.74.1 1.15 0 1.71-1.08 4.64-6 9.14-4.92-4.49-6-7.43-6-9.14C6 6.17 9.09 4 12 4c.32 0 .65.03.97.08l1.65-1.65A8.56 8.56 0 0 0 12 2c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8 0-1.01-.16-1.94-.45-2.8L17.9 9.05zM20.71 2 20 1.29a.996.996 0 0 0-1.41 0l-.72.72 2.12 2.12.72-.72a.996.996 0 0 0 0-1.41zM11 11h2.12l6.16-6.16-2.12-2.12L11 8.88V11z"
    />
    <svg:path
      d="M13.95 13H9V8.05l3.97-3.97C12.65 4.03 12.32 4 12 4c-2.91 0-6 2.17-6 6.2 0 1.71 1.08 4.64 6 9.14 4.92-4.49 6-7.43 6-9.14 0-.4-.04-.78-.1-1.15L13.95 13z"
      opacity=".3"
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
export class SiEditLocationAltIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
