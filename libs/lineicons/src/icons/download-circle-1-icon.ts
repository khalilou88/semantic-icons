import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-download-circle-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.6715 13.6301L10.2987 12.2581C10.0057 11.9653 9.53079 11.9654 9.23799 12.2584C8.94519 12.5514 8.94534 13.0263 9.23833 13.3191L11.8781 15.9572C12.0148 16.1008 12.2077 16.1903 12.4215 16.1903C12.648 16.1903 12.851 16.0899 12.9886 15.9311L15.6025 13.3191C15.8955 13.0263 15.8956 12.5514 15.6028 12.2584C15.31 11.9654 14.8352 11.9653 14.5422 12.2581L13.1715 13.6277V8.55962C13.1715 8.14541 12.8357 7.80962 12.4215 7.80962C12.0073 7.80962 11.6715 8.14541 11.6715 8.55962V13.6301Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.42188 12C2.42188 6.47766 6.89916 2.00098 12.4214 2.00098C17.9437 2.00098 22.421 6.47766 22.421 12C22.421 17.5224 17.9437 21.9991 12.4214 21.9991C6.89916 21.9991 2.42188 17.5224 2.42188 12ZM12.4214 3.50098C7.72748 3.50098 3.92188 7.30619 3.92188 12C3.92188 16.6939 7.72748 20.4991 12.4214 20.4991C17.1154 20.4991 20.921 16.6939 20.921 12C20.921 7.30619 17.1154 3.50098 12.4214 3.50098Z"
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
export class SiDownloadCircle1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
