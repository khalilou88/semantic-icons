import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-spinner-2-sacle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.7507 3.74805C13.7507 2.78155 12.9672 1.99805 12.0007 1.99805C11.0342 1.99805 10.2507 2.78155 10.2507 3.74805C10.2507 4.71455 11.0342 5.49815 12.0007 5.49815C12.9672 5.49815 13.7507 4.71455 13.7507 3.74805Z"
      fill="#323544"
    />
    <svg:path
      d="M18.366 6.69439C18.6589 6.4015 18.6589 5.92663 18.366 5.63373C18.0731 5.34084 17.5983 5.34084 17.3054 5.63373C17.0125 5.92663 17.0124 6.40157 17.3053 6.69446C17.5982 6.98736 18.0731 6.98729 18.366 6.69439Z"
      fill="#323544"
    />
    <svg:path
      d="M21.1477 12C21.1477 12.4943 20.747 12.895 20.2527 12.895C19.7584 12.895 19.3576 12.4943 19.3576 12C19.3576 11.5057 19.7583 11.105 20.2526 11.105C20.7469 11.105 21.1477 11.5057 21.1477 12Z"
      fill="#323544"
    />
    <svg:path
      d="M17.1003 18.5713C17.5064 18.9775 18.1649 18.9775 18.5711 18.5713C18.9772 18.1652 18.9772 17.5067 18.5711 17.1005C18.1649 16.6944 17.5064 16.6943 17.1002 17.1005C16.6941 17.5066 16.6942 18.1652 17.1003 18.5713Z"
      fill="#323544"
    />
    <svg:path
      d="M12.0007 19.067C12.6552 19.067 13.1857 19.5975 13.1857 20.252C13.1857 20.9064 12.6552 21.4371 12.0007 21.4371C11.3463 21.4371 10.8157 20.9065 10.8157 20.2521C10.8157 19.5976 11.3463 19.067 12.0007 19.067Z"
      fill="#323544"
    />
    <svg:path
      d="M7.10623 18.7764C7.62562 18.257 7.62562 17.4149 7.10623 16.8955C6.58683 16.3761 5.74472 16.3761 5.22532 16.8955C4.70592 17.4149 4.70585 18.2571 5.22525 18.7765C5.74465 19.2959 6.58683 19.2958 7.10623 18.7764Z"
      fill="#323544"
    />
    <svg:path
      d="M5.22354 12C5.22354 12.8146 4.56316 13.475 3.74854 13.475C2.93392 13.475 2.27344 12.8146 2.27344 12C2.27344 11.1854 2.93382 10.525 3.74844 10.525C4.56306 10.525 5.22354 11.1854 5.22354 12Z"
      fill="#323544"
    />
    <svg:path
      d="M5.02026 7.30958C5.65291 7.94222 6.67864 7.94222 7.31129 7.30958C7.94394 6.67693 7.94394 5.6512 7.31129 5.01855C6.67864 4.3859 5.65284 4.38583 5.02019 5.01848C4.38754 5.65113 4.38761 6.67693 5.02026 7.30958Z"
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
export class SiSpinner2SacleIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
