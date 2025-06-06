import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-busket-ball-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5ZM6.59787 5.93715C7.88558 4.87596 9.491 4.18641 11.25 4.03263V7.84182C9.49099 7.68799 7.88556 6.99839 6.59787 5.93715ZM5.52391 6.99427C7.09049 8.32706 9.07327 9.18531 11.25 9.34675V11.75H3.53263C3.69056 9.94351 4.41358 8.29901 5.52391 6.99427ZM12.75 9.34679C14.9268 9.18543 16.9096 8.32724 18.4763 6.99448C19.5865 8.29919 20.3094 9.94361 20.4674 11.75H12.75V9.34679ZM17.4023 5.93732C16.1146 6.99855 14.5091 7.68812 12.75 7.84186V4.03263C14.5091 4.18642 16.1146 4.87604 17.4023 5.93732ZM3.53263 13.25H11.25V15.6522C9.07303 15.8137 7.09004 16.6721 5.52338 18.0051C4.41336 16.7005 3.69054 15.0562 3.53263 13.25ZM6.59723 19.0623C7.88503 18.0008 9.4907 17.311 11.25 17.1571V20.9674C9.49071 20.8136 7.88505 20.1238 6.59723 19.0623ZM12.75 17.1571C14.5094 17.3109 16.1151 18.0006 17.403 19.0621C16.1151 20.1237 14.5094 20.8136 12.75 20.9674V17.1571ZM18.4768 18.0049C16.9101 16.6719 14.927 15.8135 12.75 15.6522V13.25H20.4674C20.3095 15.0561 19.5867 16.7003 18.4768 18.0049Z"
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
export class SiBusketBallIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 24 25');

  readonly fill = input<string>('none');
}
