import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-arrow-left-circle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.6978 11.7512L12.0698 10.3783C12.3626 10.0853 12.3625 9.61047 12.0695 9.31767C11.7765 9.02487 11.3016 9.02502 11.0088 9.31801L8.37067 11.9578C8.22711 12.0945 8.13764 12.2874 8.13764 12.5012C8.13764 12.7277 8.23803 12.9307 8.39673 13.0682L11.0088 15.6821C11.3016 15.9751 11.7765 15.9753 12.0695 15.6825C12.3625 15.3897 12.3626 14.9148 12.0698 14.6218L10.7001 13.2512L15.7683 13.2512C16.1825 13.2512 16.5183 12.9154 16.5183 12.5012C16.5183 12.087 16.1825 11.7512 15.7683 11.7512L10.6978 11.7512Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.32812 12.4991C2.32812 6.97668 6.80541 2.5 12.3277 2.5C17.85 2.5 22.3273 6.97668 22.3273 12.4991C22.3273 18.0214 17.85 22.4981 12.3277 22.4981C6.80541 22.4981 2.32812 18.0214 2.32812 12.4991ZM12.3277 4C7.63373 4 3.82812 7.80521 3.82812 12.4991C3.82812 17.1929 7.63373 20.9981 12.3277 20.9981C17.0216 20.9981 20.8273 17.1929 20.8273 12.4991C20.8273 7.80521 17.0216 4 12.3277 4Z"
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
export class SiArrowLeftCircleIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
