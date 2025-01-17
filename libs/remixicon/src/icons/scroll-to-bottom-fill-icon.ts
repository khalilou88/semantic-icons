import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-scroll-to-bottom-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.8589 2H11.1411C9.12721 2 8.04724 2.27848 7.06946 2.8014C6.09169 3.32432 5.32432 4.09169 4.8014 5.06946C4.27848 6.04724 4 7.12721 4 9.14111V14.8589C4 16.8728 4.27848 17.9528 4.8014 18.9305C5.32432 19.9083 6.09169 20.6757 7.06946 21.1986C8.04724 21.7215 9.12721 22 11.1411 22H12.8589C14.8728 22 15.9528 21.7215 16.9305 21.1986C17.9083 20.6757 18.6757 19.9083 19.1986 18.9305C19.7215 17.9528 20 16.8728 20 14.8589V9.14111C20 7.12721 19.7215 6.04724 19.1986 5.06946C18.6757 4.09169 17.9083 3.32432 16.9305 2.8014C15.9528 2.27848 14.8728 2 12.8589 2ZM11 11V6H13V11H11ZM7.75781 13.758L9.17203 12.3438L12.0005 15.1722L14.8289 12.3438L16.2431 13.758L12.0005 18.0006L7.75781 13.758Z"
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
export class SiScrollToBottomFillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
