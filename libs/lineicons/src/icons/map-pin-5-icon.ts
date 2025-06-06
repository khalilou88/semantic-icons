import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-map-pin-5-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.2539 13.5379C15.8674 13.1731 17.8789 10.9289 17.8789 8.21484C17.8789 5.24631 15.4724 2.83984 12.5039 2.83984C9.53538 2.83984 7.12891 5.24631 7.12891 8.21484C7.12891 10.9289 9.14041 13.1731 11.7539 13.5379L11.7539 22.0898C11.7539 22.5041 12.0897 22.8398 12.5039 22.8398C12.9181 22.8398 13.2539 22.5041 13.2539 22.0898L13.2539 13.5379ZM8.62891 8.21484C8.62891 6.07474 10.3638 4.33984 12.5039 4.33984C14.644 4.33984 16.3789 6.07474 16.3789 8.21484C16.3789 10.3549 14.644 12.0898 12.5039 12.0898C10.3638 12.0898 8.62891 10.3549 8.62891 8.21484Z"
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
export class SiMapPin5Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
