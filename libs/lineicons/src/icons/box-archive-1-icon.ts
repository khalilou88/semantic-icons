import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-box-archive-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10 11.5645C9.58579 11.5645 9.25 11.9002 9.25 12.3145C9.25 12.7287 9.58579 13.0645 10 13.0645H14C14.4142 13.0645 14.75 12.7287 14.75 12.3145C14.75 11.9002 14.4142 11.5645 14 11.5645H10Z"
      fill="#323544"
    />
    <svg:path
      d="M2 6.06445C2 4.82181 3.00736 3.81445 4.25 3.81445H19.75C20.9926 3.81445 22 4.82181 22 6.06445V7.06445C22 7.94788 21.4909 8.7124 20.75 9.08057V19.0645C20.75 20.3071 19.7426 21.3145 18.5 21.3145H5.5C4.25736 21.3145 3.25 20.3071 3.25 19.0645V9.08057C2.50914 8.7124 2 7.94788 2 7.06445V6.06445ZM4.75 9.31445V19.0645C4.75 19.4787 5.08579 19.8145 5.5 19.8145H18.5C18.9142 19.8145 19.25 19.4787 19.25 19.0645V9.31445H4.75ZM20.5 7.06445V6.06445C20.5 5.65024 20.1642 5.31445 19.75 5.31445H4.25C3.83579 5.31445 3.5 5.65024 3.5 6.06445V7.06445C3.5 7.47867 3.83579 7.81445 4.25 7.81445H19.75C20.1642 7.81445 20.5 7.47867 20.5 7.06445Z"
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
export class SiBoxArchive1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 24 25');

  readonly fill = input<string>('none');
}
