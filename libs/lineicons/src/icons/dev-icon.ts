import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-dev-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.84839 10.0841C7.67419 9.968 7.52903 9.90994 7.35484 9.90994H6.65806V14.0616H7.35484C7.52903 14.0616 7.67419 14.0325 7.84839 13.8874C8.02258 13.7712 8.05161 13.597 8.05161 13.3648V10.5486C8.05161 10.3745 7.99355 10.2003 7.84839 10.0841ZM19.2 3.0293H4.8C3.8129 3.0293 3 3.8422 3 4.8293V19.2583C3 20.1583 3.8129 20.9712 4.8 20.9712H19.2581C20.2452 20.9712 21 20.1874 21 19.2293V4.8293C20.971 3.8422 20.1871 3.0293 19.2 3.0293ZM9.2129 13.3938C9.2129 14.1777 8.71935 15.3099 7.29677 15.3099H5.43871V8.66155H7.35484C8.77742 8.66155 9.27097 9.79381 9.27097 10.5777L9.2129 13.3938ZM13.1903 9.88091H11.071V11.4196H12.3774V12.6099H11.071V14.1486H13.1903V15.339H10.6935C10.2581 15.339 9.88064 15.0196 9.82258 14.5551V9.50349C9.82258 9.068 10.1419 8.69058 10.6065 8.63252H13.1903V9.88091ZM17.371 14.439C16.8484 15.6583 15.8903 15.4261 15.4548 14.439L13.9161 8.63252H15.2516L16.4419 13.1906L17.6323 8.66155H18.9387L17.371 14.439Z"
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
export class SiDevIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
