import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-youtube-kids-icon',
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
        d="M11.4366 4.52688C13.7653 4.20493 16.546 3.85938 16.9714 3.85938H16.9965C17.9954 3.87936 18.8051 4.03772 19.7575 4.76508C20.342 5.21065 20.8119 5.90546 21.1534 6.83115C21.4482 7.63321 21.9736 12.1108 21.9862 13.0457C21.988 13.1184 21.9898 13.1984 21.9915 13.2857L21.9916 13.29C22.0113 14.0743 22.0441 15.3828 21.4678 16.4612C20.3884 18.4817 18.0169 18.6999 17.0482 18.6999H16.932C12.977 18.6999 11.0612 19.2219 9.52074 19.6421L9.51832 19.6428C8.53994 19.9098 7.69511 20.1404 6.62911 20.1404C6.34491 20.1404 6.05901 20.124 5.75875 20.0913C4.54175 19.9585 3.60883 19.0982 3.12982 17.6669C2.77413 16.6067 2.15403 11.9708 2.04497 10.7941C1.90559 9.2755 2.04146 8.10971 3.15664 6.98941C3.76248 6.38015 4.52558 5.90908 5.48711 5.54897C6.18404 5.28887 9.1061 4.84873 11.4366 4.52688ZM9.46698 8.8589C9.34541 8.94796 9.39436 9.31379 9.41518 9.46933C9.41731 9.48529 9.41915 9.49903 9.42048 9.51003C9.43542 9.63444 9.48529 10.0606 9.54932 10.6077C9.69964 11.892 9.92796 13.8429 9.96557 14.1223L9.97451 14.195C9.97948 14.232 9.9847 14.2734 9.99029 14.3178C10.035 14.6728 10.1043 15.2228 10.2711 15.3117C10.2963 15.3244 10.3266 15.3318 10.3605 15.3318C10.584 15.3318 10.9824 15.0717 11.2077 14.8969L14.7891 12.4181C15.0161 12.2599 15.243 12.1035 15.4718 11.9489L15.4844 11.9409C15.5089 11.9254 15.5335 11.9098 15.5593 11.8943C15.7149 11.7997 15.9061 11.6815 15.9026 11.4288C15.8972 11.1633 15.6827 11.0705 15.5254 11.0032C15.4908 10.9889 15.4568 10.9731 15.4236 10.9559C14.3263 10.3939 10.7948 9.14269 10.0907 8.91534L10.0808 8.91211C9.98684 8.88142 9.79001 8.81713 9.63317 8.81713C9.567 8.81713 9.50805 8.82807 9.46698 8.8589Z"
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
export class SvgYoutubeKidsIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
