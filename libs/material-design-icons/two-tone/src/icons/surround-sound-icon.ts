import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-surround-sound-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 18h16V6H4v12zM16.94 7.06C18.32 8.41 19 10.21 19 12s-.68 3.59-2.05 4.95l-1.23-1.23A5.262 5.262 0 0 0 17.25 12c0-1.35-.52-2.69-1.54-3.71l1.23-1.23zM12 8.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5zM7.05 7.05l1.23 1.23A5.305 5.305 0 0 0 6.75 12c0 1.35.52 2.69 1.54 3.71l-1.23 1.23C5.68 15.59 5 13.79 5 12s.68-3.59 2.05-4.95z"
      opacity=".3"
    />
    <svg:path
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"
    />
    <svg:path
      d="M8.29 15.71A5.233 5.233 0 0 1 6.75 12c0-1.35.52-2.69 1.53-3.72L7.05 7.05C5.68 8.41 5 10.21 5 12s.68 3.59 2.06 4.94l1.23-1.23zM12 15.5c1.93 0 3.5-1.57 3.5-3.5S13.93 8.5 12 8.5 8.5 10.07 8.5 12s1.57 3.5 3.5 3.5zm0-5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm3.72 5.22 1.23 1.23C18.32 15.59 19 13.79 19 12s-.68-3.59-2.06-4.94l-1.23 1.23A5.233 5.233 0 0 1 17.25 12c0 1.35-.52 2.69-1.53 3.72z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSurroundSoundIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
