import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pa-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="pa-a">
        <svg:path fill-opacity=".7" d="M0 0h512v512H0z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g fill-rule="evenodd" clip-path="url(#pa-a)">
      <svg:path fill="#fff" d="M-26-25h592.5v596H-26z" />
      <svg:path fill="#db0000" d="M255.3-20.4h312.1v275.2h-312z" />
      <svg:path
        fill="#0000ab"
        d="M-54.5 254.8h309.9V571H-54.5zM179 181.6l-46.5-29.2-46.2 29.5 17.2-48-46.2-29.6 57.1-.4 17.7-47.8 18.1 47.7h57.1l-45.9 30z"
      />
      <svg:path
        fill="#d80000"
        d="m435.2 449-46.4-29.2-46.3 29.5 17.2-48-46.2-29.5 57.2-.4 17.7-47.8 18 47.7h57.2l-46 30z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPaFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
