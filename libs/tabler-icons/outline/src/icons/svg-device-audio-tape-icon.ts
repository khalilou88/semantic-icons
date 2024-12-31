import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-device-audio-tape-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-device-audio-tape"
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
        d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
      />
      <path d="M3 17l4 -3h10l4 3" />
      <circle cx="7.5" cy="9.5" r=".5" fill="currentColor" />
      <circle cx="16.5" cy="9.5" r=".5" fill="currentColor" />
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
export class SvgDeviceAudioTapeIcon {
  readonly class = input<string>('');
}
