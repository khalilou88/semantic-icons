import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-headset-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-headset-off"
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
        d="M4 14v-3c0 -1.953 .7 -3.742 1.862 -5.13m2.182 -1.825a8 8 0 0 1 11.956 6.955v3"
      />
      <path d="M18 19c0 1.657 -2.686 3 -6 3" />
      <path
        d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z"
      />
      <path
        d="M16.169 12.18c.253 -.115 .534 -.18 .831 -.18h1a2 2 0 0 1 2 2v2m-1.183 2.826c-.25 .112 -.526 .174 -.817 .174h-1a2 2 0 0 1 -2 -2v-2"
      />
      <path d="M3 3l18 18" />
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
export class SvgHeadsetOffIcon {
  readonly class = input<string>('');
}
