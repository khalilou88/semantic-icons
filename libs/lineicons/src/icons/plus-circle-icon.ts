import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-plus-circle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.9997 7.80941C11.5855 7.80941 11.2497 8.1452 11.2497 8.55941V11.2499H8.55922C8.14501 11.2499 7.80922 11.5857 7.80922 11.9999C7.80922 12.4141 8.14501 12.7499 8.55922 12.7499H11.2497V15.4409C11.2497 15.8551 11.5855 16.1909 11.9997 16.1909C12.4139 16.1909 12.7497 15.8551 12.7497 15.4409V12.7499H15.4407C15.8549 12.7499 16.1907 12.4141 16.1907 11.9999C16.1907 11.5857 15.8549 11.2499 15.4407 11.2499H12.7497V8.55941C12.7497 8.1452 12.4139 7.80941 11.9997 7.80941Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z"
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
export class SiPlusCircleIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
