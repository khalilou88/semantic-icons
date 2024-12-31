import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-slideshare-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>SlideShare</title>
      <path
        d="M3.222.21C1.762.21 1.06 1.337 1.06 2.497v7.883c-.53-.502-1.096-.15-1.058.295.038.439.59 1.546 1.436 2.517.843.968 1.924 1.776 2.94 2.268a11.19 11.19 0 00-.491 3.598c.09 1.096.378 1.95.903 2.75.918 1.407 2.32 1.985 3.674 1.985 1.209 0 2.494-.563 2.698-2.373v-4.694c1.308.552 3.47.363 4.47-.39.19-.14.326-.207.416-.113.095.09.106.166-.113.439a5.6 5.6 0 01-3.103 1.965l.008 2.72a2.532 2.532 0 002.543 2.446c1.64.015 2.48-.556 3.148-1.164.632-.567 1.399-1.754 1.558-3.243a10.128 10.128 0 00-.454-3.926 10.358 10.358 0 002.948-2.268C23.213 12.5 24 11.185 24 10.675c0-.51-.556-.782-1.036-.302V2.497c0-.824-.48-2.29-2.135-2.29zm.423 1.35H20.41c.756 0 1.17.28 1.17 1.224v8.904a8.73 8.73 0 01-3.555 1.534c-1.606.352-2.94.087-3.666.148-.718.06-1.428.529-1.296 1.79-.491-.154-1.236-.683-1.682-1.117-.438-.428-.87-.711-1.534-.692-1.013.03-1.663.102-2.57.01a9.656 9.656 0 01-4.838-1.786V2.78c0-.87.378-1.22 1.206-1.22zm4.497 4.988a2.994 2.994 0 100 5.987 2.993 2.993 0 000-5.983zm7.71 0a2.994 2.994 0 100 5.987 2.993 2.993 0 000-5.983z"
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
export class SvgSlideshareIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
