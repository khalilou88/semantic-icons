import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-libreofficeimpress-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>LibreOffice Impress</title>
      <path
        d="M22 0v7l-7-7h7zm-9 0 9 9v12c0 1.662-1.338 3-3 3H5c-1.662 0-3-1.338-3-3V3c0-1.662 1.338-3 3-3h8zM7 17H6v1h1v-1zm0-2H6v1h1v-1zm0-2H6v1h1v-1zm3 4H8v1h2v-1zm0-2H8v1h2v-1zm0-2H8v1h2v-1zm6-1v-1H8v1h8zm2 1h-7v5h7v-5zm0-4H6v1h12V9zm-4 6.707 1 1 2.207-2.207-.707-.707-1.5 1.5-1-1-2.207 2.207.707.707 1.5-1.5z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgLibreofficeimpressIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
