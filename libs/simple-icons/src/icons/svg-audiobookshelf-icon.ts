import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-audiobookshelf-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Audiobookshelf</title>
      <path
        d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0Zm-.023.402A11.598 11.598 0 0 1 23.575 12a11.598 11.598 0 0 1-11.598 11.598A11.598 11.598 0 0 1 .378 12 11.598 11.598 0 0 1 11.977.402Zm0 1.776a7.093 7.093 0 0 0-7.092 7.093v1.536a6.395 6.395 0 0 0-.439.33.35.35 0 0 0-.126.27v1.84a.36.36 0 0 0 .126.272c.22.182.722.564 1.504.956v.179c0 .483.31.873.694.873.384 0 .694-.392.694-.873v-4.415c0-.483-.31-.873-.694-.873-.369 0-.67.359-.694.812h-.002v-.91a6.027 6.027 0 1 1 12.054.003v.91c-.025-.454-.326-.813-.695-.813-.384 0-.694.391-.694.873v4.415c0 .483.31.873.694.873.384 0 .695-.392.695-.873v-.179a7.964 7.964 0 0 0 1.503-.956.35.35 0 0 0 .126-.272v-1.843a.342.342 0 0 0-.124-.27 5.932 5.932 0 0 0-.438-.329V9.271a7.093 7.093 0 0 0-7.092-7.093zm-3.34 5.548a.84.84 0 0 0-.84.84v9.405c0 .464.376.84.84.84h.866a.84.84 0 0 0 .84-.84V8.566a.84.84 0 0 0-.84-.84Zm2.905 0a.84.84 0 0 0-.84.84v9.405c0 .464.377.84.84.84h.867a.84.84 0 0 0 .84-.84V8.566a.84.84 0 0 0-.84-.84zm2.908 0a.84.84 0 0 0-.84.84v9.405c0 .464.376.84.84.84h.867a.84.84 0 0 0 .84-.84V8.566a.84.84 0 0 0-.84-.84zM8.112 9.983h1.915v.2H8.112Zm2.906 0h1.915v.2h-1.915Zm2.908 0h1.915v.2h-1.915zm-7.58 9.119a.633.633 0 0 0 0 1.265h11.26a.632.632 0 0 0 0-1.265z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgAudiobookshelfIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}