import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-synagogue-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M309.8 3.7c5.9-4.9 14.6-4.9 20.5 0l121 100.8C469.5 119.7 480 142.2 480 166l0 114.1L480 512l-16 0-112 0 0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96-112 0-16 0 0-231.9L160 166c0-23.7 10.5-46.3 28.8-61.5L309.8 3.7zM512 512l0-267.5 28.1-31.2c3-3.4 7.4-5.3 11.9-5.3s8.9 1.9 11.9 5.3l63.8 70.9c7.9 8.8 12.3 20.3 12.3 32.1L640 448c0 35.3-28.7 64-64 64l-64 0zM128 244.5L128 512l-64 0c-35.3 0-64-28.7-64-64L0 316.3c0-11.9 4.4-23.3 12.3-32.1l63.8-70.9c3-3.4 7.4-5.3 11.9-5.3s8.9 1.9 11.9 5.3L128 244.5zM327 124.3c-3.1-5.4-10.9-5.4-13.9 0l-15.9 28.1-32.3-.3c-6.2-.1-10.1 6.7-7 12.1L274.3 192l-16.4 27.8c-3.2 5.4 .7 12.1 7 12.1l32.3-.3L313 259.7c3.1 5.4 10.9 5.4 13.9 0l15.9-28.1 32.3 .3c6.2 .1 10.1-6.7 7-12.1L365.7 192l16.4-27.8c3.2-5.4-.7-12.1-7-12.1l-32.3 .3L327 124.3z"
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
export class SiSynagogueIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 512');
}
