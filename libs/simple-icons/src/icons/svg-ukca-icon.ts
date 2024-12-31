import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ukca-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>UKCA</title>
      <path
        d="M7.138 11.001H3.852C1.728 11.001 0 9.296 0 7.201V.011h2.498v7.155c0 .737.622 1.336 1.388 1.336h3.218c.766 0 1.388-.599 1.388-1.336V.011h2.498v7.19c0 2.095-1.728 3.8-3.852 3.8M24 .011h-3.23l-5.285 4.16V.011h-2.498V11h2.498V6.814l5.284 4.187h3.217l-6.952-5.508ZM10.99 23.99H3.8c-2.095 0-3.8-1.761-3.8-3.885v-3.22C0 14.762 1.705 13 3.8 13h7.19v2.498H3.834c-.737 0-1.336.622-1.336 1.388v3.219c0 .765.6 1.387 1.336 1.387h7.156zm4.495-4.995v-2.16c0-.738.622-1.337 1.387-1.337h3.22c.765 0 1.387.6 1.387 1.336v2.16zM20.125 13H16.84c-2.124 0-3.852 1.705-3.852 3.8v7.19h2.498v-2.498h5.994v2.497h2.498V16.8c0-2.094-1.728-3.799-3.852-3.799"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgUkcaIcon {
  readonly class = input<string>('');
}
