import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-projector-2-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 19V21H20V19H4V21H2V19C1.44772 19 1 18.5523 1 18V6C1 5.44772 1.44772 5 2 5H11.8096C12.9925 3.76733 14.6566 3 16.5 3C18.3434 3 20.0075 3.76733 21.1904 5H22C22.5523 5 23 5.44772 23 6V18C23 18.5523 22.5523 19 22 19ZM16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14ZM16.5 12C15.1193 12 14 10.8807 14 9.5C14 8.11929 15.1193 7 16.5 7C17.8807 7 19 8.11929 19 9.5C19 10.8807 17.8807 12 16.5 12ZM4 13V15H6V13H4ZM8 13V15H10V13H8Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiProjector2FillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
