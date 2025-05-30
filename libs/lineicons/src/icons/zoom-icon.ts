import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-zoom-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.6039 7.44172C21.3729 7.30764 21.0759 7.30764 20.8449 7.47524L17.3135 9.78805C17.0165 9.98916 16.8515 10.2908 16.8515 10.6595V13.3411C16.8515 13.6762 17.0165 14.0114 17.3135 14.2126L20.8449 16.5254C20.9769 16.5924 21.1089 16.6595 21.2409 16.6595C21.3729 16.6595 21.4719 16.6259 21.6039 16.5589C21.835 16.4248 22 16.1567 22 15.8885V8.1121C22 7.81043 21.835 7.5758 21.6039 7.44172ZM20.5148 14.5142L18.3366 13.0729V10.8942L20.5148 9.45286V14.5142Z"
      fill="#323544"
    />
    <svg:path
      d="M11.538 6.60352H2.75907C2.36304 6.60352 2 6.93871 2 7.37445V13.676C2 15.7207 3.68317 17.3966 5.76238 17.3966H14.5413C14.9373 17.3966 15.3003 17.0614 15.3003 16.6257V10.3241C15.3003 8.27946 13.6172 6.60352 11.538 6.60352ZM13.8152 15.8883H5.76238C4.50825 15.8883 3.48515 14.8827 3.48515 13.676V8.11187H11.538C12.7921 8.11187 13.8152 9.11744 13.8152 10.3241V15.8883Z"
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
export class SiZoomIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
