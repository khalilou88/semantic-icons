import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-bus-wifi-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 3V5H5V14H19V12H21V20H20V21C20 21.5523 19.5523 22 19 22H18C17.4477 22 17 21.5523 17 21V20H7V21C7 21.5523 6.55228 22 6 22H5C4.44772 22 4 21.5523 4 21V20H3V12H2V8H3V5C3 3.89543 3.89543 3 5 3H12ZM9 16H5V18H9V16ZM19 16H15V18H19V16ZM18.5 1C20.9853 1 23 3.01472 23 5.5C23 7.98528 20.9853 10 18.5 10C16.0147 10 14 7.98528 14 5.5C14 3.01472 16.0147 1 18.5 1ZM18.4998 6.16667C18.0089 6.16667 17.5593 6.34354 17.2113 6.63704L17.0856 6.75245L18.4998 8.16667L19.9131 6.7515C19.5512 6.39013 19.0516 6.16667 18.4998 6.16667ZM18.4998 3.5C17.2966 3.5 16.1998 3.95536 15.3722 4.70316L15.199 4.86781L16.1428 5.80964C16.746 5.20643 17.5794 4.83333 18.4998 4.83333C19.3436 4.83333 20.1141 5.14684 20.7013 5.66372L20.8569 5.80964L21.7997 4.86684C20.9552 4.02233 19.7885 3.5 18.4998 3.5Z"
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
export class SiBusWifiFillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
