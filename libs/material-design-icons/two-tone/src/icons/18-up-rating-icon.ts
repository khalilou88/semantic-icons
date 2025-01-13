import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-18-up-rating-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M13 10h1.5v1.5H13zm0 2.5h1.5V14H13z" opacity=".3" />
    <svg:path
      d="M5 19h14V5H5v14zm6.5-9c0-.55.45-1 1-1H15c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4zM7 9h3v6H8.5v-4.5H7V9z"
      opacity=".3"
    />
    <svg:path d="M8.5 15H10V9H7v1.5h1.5z" />
    <svg:path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
    />
    <svg:path
      d="M12.5 15H15c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-2.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-5h1.5v1.5H13V10zm0 2.5h1.5V14H13v-1.5z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Si18UpRatingIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
