import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-stethoscope-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.77344 3.5L7.02344 3.5C7.43765 3.5 7.77344 3.16421 7.77344 2.75C7.77344 2.33579 7.43765 2 7.02344 2H6.77344C5.5308 2 4.52344 3.00736 4.52344 4.25V6.75C4.52344 9.67145 6.70217 12.084 9.52344 12.4515L9.52344 16.5C9.52344 19.2614 11.762 21.5 14.5234 21.5C17.2849 21.5 19.5234 19.2614 19.5234 16.5V14.9852C20.5377 14.6666 21.2734 13.719 21.2734 12.5996C21.2734 11.2189 20.1541 10.0996 18.7734 10.0996C17.3927 10.0996 16.2734 11.2189 16.2734 12.5996C16.2734 13.719 17.0092 14.6666 18.0234 14.9852L18.0234 16.5C18.0234 18.433 16.4564 20 14.5234 20C12.5904 20 11.0234 18.433 11.0234 16.5L11.0234 12.4515C13.8447 12.084 16.0234 9.67145 16.0234 6.75L16.0234 4.25C16.0234 3.00736 15.0161 2 13.7734 2H13.5234C13.1092 2 12.7734 2.33579 12.7734 2.75C12.7734 3.16421 13.1092 3.5 13.5234 3.5H13.7734C14.1876 3.5 14.5234 3.83579 14.5234 4.25L14.5234 6.75C14.5234 9.09721 12.6206 11 10.2734 11C7.92623 11 6.02344 9.09721 6.02344 6.75L6.02344 4.25C6.02344 3.83579 6.35922 3.5 6.77344 3.5ZM17.7734 12.5996C17.7734 12.0473 18.2212 11.5996 18.7734 11.5996C19.3257 11.5996 19.7734 12.0473 19.7734 12.5996C19.7734 13.1519 19.3257 13.5996 18.7734 13.5996C18.2212 13.5996 17.7734 13.1519 17.7734 12.5996Z"
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
export class SiStethoscope1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
