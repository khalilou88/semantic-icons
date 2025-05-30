import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-clean-hands-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m14.99 7 1.37-.63.63-1.37.63 1.37 1.37.63-1.37.63L16.99 9l-.63-1.37L14.99 7zM20 14c1.1 0 2-.9 2-2 0-.78-.99-2.44-1.58-3.36a.496.496 0 0 0-.84 0C18.99 9.56 18 11.22 18 12c0 1.1.9 2 2 2zM9.24 9.5 15 11.65V11a5 5 0 0 0-4-4.9V4h2c.35 0 .68.06 1 .18.37.13.78.05 1.05-.22.51-.51.34-1.39-.33-1.64C14.19 2.11 13.61 2 13 2H8.5c-.55 0-1 .45-1 1s.45 1 1 1H9v2.11c-1.78.37-3.2 1.68-3.75 3.39h3.99zM3 11c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2s2-.9 2-2v-7c0-1.1-.9-2-2-2zm16.99 6h-6.83a.96.96 0 0 1-.33-.06l-1.47-.51a.49.49 0 0 1-.3-.63c.09-.26.38-.4.64-.3l1.12.43c.11.04.24.07.36.07h2.63c.65 0 1.18-.53 1.18-1.18 0-.49-.31-.93-.77-1.11L9.3 11.13c-.22-.09-.46-.13-.7-.13H7v9.02l6.37 1.81c.41.12.85.1 1.25-.05L22 19c0-1.11-.9-2-2.01-2z"
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
export class SiCleanHandsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
