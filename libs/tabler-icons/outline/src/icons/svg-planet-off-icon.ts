import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-planet-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-planet-off"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M18.816 13.58c1.956 1.825 3.157 3.449 3.184 4.445m-3.428 .593c-2.098 -.634 -4.944 -2.03 -7.919 -3.976c-5.47 -3.579 -9.304 -7.664 -8.56 -9.123c.32 -.628 1.591 -.6 3.294 -.113"
      />
      <path
        d="M7.042 7.059a7 7 0 0 0 9.908 9.89m1.581 -2.425a7 7 0 0 0 -9.057 -9.054"
      />
      <path d="M3 3l18 18" />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPlanetOffIcon {
  readonly class = input<string>('');
}
