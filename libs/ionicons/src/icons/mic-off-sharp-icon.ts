import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-mic-off-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M432 400 96 64"
      fill="none"
      stroke="currentColor"
      stroke-linecap="square"
      stroke-miterlimit="10"
      stroke-width="32px"
    />
    <svg:path
      d="M368 192v48a111.7 111.7 0 0 1-2.93 25.45L390.65 291a143.1 143.1 0 0 0 9.35-51v-48ZM272 432v-48.89a143.1 143.1 0 0 0 56.65-18.83L305 340.65A112.13 112.13 0 0 1 144 240v-48h-32v48c0 74 56.1 135.12 128 143.11V432h-64v32h160v-32ZM336 236.37V128c0-44.86-35.14-80-80-80a79.68 79.68 0 0 0-69 39.34"
    />
    <svg:path
      d="M176 211.63V239a80.9 80.9 0 0 0 23.45 56.9 78.55 78.55 0 0 0 81 20.21Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMicOffSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
