import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-google-data-studio-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Google Data Studio</svg:title>
    <svg:path
      d="M19.197 23.002c-1.016-.613-1.697-1.728-1.697-3 0-1.273.681-2.388 1.697-3h-6.909a3.034 3.034 0 0 0-.252-.011c-1.656 0-3.022 1.355-3.036 3.011v.014c0 1.645 1.354 3 3 3 .096 0 .192-.005.288-.014h6.909Zm1.803-6c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3Zm-10.803-2.004c-1.016-.613-1.697-1.728-1.697-3 0-1.273.681-2.388 1.697-3H3.288a3.034 3.034 0 0 0-.252-.011C1.38 8.987.014 10.342 0 11.998v.014c0 1.645 1.354 3 3 3 .096 0 .192-.005.288-.014h6.909Zm1.803-6c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3Zm7.197-2.004c-1.016-.613-1.697-1.728-1.697-3 0-1.273.681-2.388 1.697-3h-6.909c-.08-.006-.16-.01-.24-.01C10.39.984 9.021 2.336 9 3.994v.014c0 1.645 1.354 3 3 3 .096 0 .192-.005.288-.014h6.909Zm1.803-6c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGoogleDataStudioIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#669DF6');
}
