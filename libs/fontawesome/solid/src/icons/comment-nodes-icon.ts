import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-comment-nodes-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M256 448c10.8 0 21.5-.5 32-1.6c.3-15.8 4.4-31.7 12.9-46.4c16-27.7 43.7-44.4 73.2-47.5l16.7-29.2c-4.3-11-6.7-22.9-6.7-35.4c0-53 43-96 96-96c9.1 0 17.8 1.3 26.2 3.6C481.1 102.1 378.6 32 256 32C114.6 32 0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.2 .3-.4 .5-.6 .7c-.3 .3-.5 .5-.6 .7l-.3 .3c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zm72.6-32c-17.7 30.6-7.2 69.7 23.4 87.4s69.7 7.2 87.4-23.4c1.5-2.6 2.8-5.3 3.9-8l73.3 0c1.1 2.7 2.4 5.4 3.9 8c17.7 30.6 56.8 41.1 87.4 23.4s41.1-56.8 23.4-87.4c-13.4-23.2-39.1-34.8-64-31.4l-17.6-30.7c-11 11.7-25 20.6-40.6 25.6l16.5 28.9c-3.8 4.8-6.8 10-9 15.6l-73.4 0c-2.2-5.6-5.3-10.8-9-15.6l33-57.7c4.1 .8 8.4 1.3 12.8 1.3c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64c0 13.4 4.1 25.8 11.2 36.1l-34.6 60.5c-25-3.4-50.6 8.3-64 31.4z"
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
export class SiCommentNodesIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 512');
}
