import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bookmark-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5 4.48242C5 3.23978 6.00736 2.23242 7.25 2.23242H17.75C18.9926 2.23242 20 3.23978 20 4.48242V21.4824C20 21.759 19.8478 22.0132 19.6039 22.1437C19.36 22.2742 19.0641 22.2599 18.834 22.1065L12.916 18.1612C12.6641 17.9932 12.3359 17.9932 12.084 18.1612L6.16603 22.1065C5.93588 22.2599 5.63997 22.2742 5.39611 22.1437C5.15224 22.0132 5 21.759 5 21.4824V4.48242ZM7.25 3.73242C6.83579 3.73242 6.5 4.06821 6.5 4.48242V20.081L11.2519 16.9131C12.0077 16.4092 12.9923 16.4092 13.7481 16.9131L18.5 20.081V4.48242C18.5 4.06821 18.1642 3.73242 17.75 3.73242H7.25Z"
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
export class SiBookmark1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
