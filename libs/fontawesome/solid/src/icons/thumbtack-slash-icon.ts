import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-thumbtack-slash-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L481.4 352c9.8-.4 18.9-5.3 24.6-13.3c6-8.3 7.7-19.1 4.4-28.8l-1-3c-13.8-41.5-42.8-74.8-79.5-94.7L418.5 64 448 64c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l29.5 0-6.1 79.5L38.8 5.1zM324.9 352L177.1 235.6c-20.9 18.9-37.2 43.3-46.5 71.3l-1 3c-3.3 9.8-1.6 20.5 4.4 28.8s15.7 13.3 26 13.3l164.9 0zM288 384l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96-64 0z"
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
export class SiThumbtackSlashIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 512');
}
