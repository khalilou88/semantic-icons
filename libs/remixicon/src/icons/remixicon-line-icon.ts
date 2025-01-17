import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-remixicon-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.36461 6L15.1491 15.6629L15.8699 15.38C17.5538 14.719 18.7326 13.2237 18.9607 11.4839C18.8083 11.4946 18.655 11.5 18.501 11.5C15.2512 11.5 12.5584 9.11509 12.0774 6H6.36461ZM14.001 5C14.001 7.48528 16.0157 9.5 18.501 9.5C19.306 9.5 20.0617 9.28861 20.7155 8.91831C20.9013 9.53558 21.001 10.1891 21.001 10.8654C21.001 13.7561 19.1794 16.2295 16.6006 17.2417L20.001 21H3.00098V4H14.001C14.0381 4 14.0753 4.00028 14.1123 4.00085C14.0394 4.3222 14.001 4.65661 14.001 5ZM18.501 7.5C17.1203 7.5 16.001 6.38071 16.001 5C16.001 3.61929 17.1203 2.5 18.501 2.5C19.8817 2.5 21.001 3.61929 21.001 5C21.001 6.38071 19.8817 7.5 18.501 7.5ZM5.00098 7.47V19H15.481L5.00098 7.47Z"
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
export class SiRemixiconLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
