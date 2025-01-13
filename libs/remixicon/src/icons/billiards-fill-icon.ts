import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-billiards-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 7.75C13.3807 7.75 14.5 8.86929 14.5 10.25C14.5 10.8815 14.2658 11.4584 13.8796 11.8984C14.4447 12.354 14.8 13.0149 14.8 13.75C14.8 15.1307 13.5464 16.25 12 16.25C10.4536 16.25 9.2 15.1307 9.2 13.75C9.2 13.0149 9.5553 12.354 10.1209 11.8966C9.73416 11.4584 9.5 10.8815 9.5 10.25C9.5 8.86929 10.6193 7.75 12 7.75ZM12 12.75C11.2465 12.75 10.7 13.238 10.7 13.75C10.7 14.262 11.2465 14.75 12 14.75C12.7535 14.75 13.3 14.262 13.3 13.75C13.3 13.238 12.7535 12.75 12 12.75ZM12 9.25C11.4477 9.25 11 9.69772 11 10.25C11 10.8023 11.4477 11.25 12 11.25C12.5523 11.25 13 10.8023 13 10.25C13 9.69772 12.5523 9.25 12 9.25Z"
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
export class SiBilliardsFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
