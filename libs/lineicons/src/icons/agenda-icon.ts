import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-agenda-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.52344 4.25C4.52344 3.00736 5.5308 2 6.77344 2H17.2734C18.5161 2 19.5234 3.00736 19.5234 4.25V19.75C19.5234 20.9926 18.5161 22 17.2734 22H9.02344V22.75C9.02344 23.1642 8.68765 23.5 8.27344 23.5C7.85922 23.5 7.52344 23.1642 7.52344 22.75V22H6.77344C5.5308 22 4.52344 20.9926 4.52344 19.75V4.25ZM6.02344 15.833V19.75C6.02344 20.1642 6.35922 20.5 6.77344 20.5H13.5234V15.833H6.02344ZM13.5234 14.333V9.66699H6.02344V14.333H13.5234ZM15.0234 15.833V20.5H17.2734C17.6877 20.5 18.0234 20.1642 18.0234 19.75V15.833H15.0234ZM18.0234 14.333V9.66699H15.0234V14.333H18.0234ZM18.0234 4.25C18.0234 3.83579 17.6877 3.5 17.2734 3.5H15.0234V8.16699H18.0234V4.25ZM13.5234 3.5H6.77344C6.35922 3.5 6.02344 3.83579 6.02344 4.25V8.16699H13.5234V3.5Z"
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
export class SiAgendaIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
