import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bluetooth-logo-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8082 6.93809L14.4617 8.59171L12.8091 10.2439L12.8082 6.93809ZM12.8082 17.0605L14.4617 15.4073L12.8091 13.7547L12.8082 17.0605ZM11.0426 11.9993L7.46798 8.41554L8.5041 7.37971L11.3517 10.2287V3.40137L16.5306 8.57984L13.1111 11.9993L16.5312 15.4198L11.3521 20.5983V13.7706L8.50375 16.6199L7.46758 15.5834L11.0426 11.9993ZM12.0003 22C16.3672 22 19.3762 19.9253 19.3762 11.9996C19.3762 4.07426 16.3672 2 12.0003 2C7.63361 2 4.62305 4.0746 4.62305 11.9996C4.62305 19.9254 7.63332 22 12.0003 22Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBluetoothLogoIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
