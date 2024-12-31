import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tourbox-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>TourBox</title>
      <path
        d="M5.401 9.664c0-.28.3-.506.898-.668a6.73 6.73 0 0 1 1.716-.202 6.65 6.65 0 0 1 1.715.202c.605.164.904.387.904.668v1.632c0 .283-.299.506-.904.67-.5.138-1.072.204-1.715.204a6.554 6.554 0 0 1-1.716-.203c-.6-.165-.898-.388-.898-.67Zm2.614 3.417c2.368 0 3.55-.595 3.55-1.785V9.664c0-1.19-1.182-1.784-3.55-1.784-2.363 0-3.545.597-3.545 1.784v1.632c0 1.19 1.182 1.787 3.545 1.787m10.542-1.75V7.906h-.931v3.431c0 .24-.127.43-.38.557-.425.218-1.024.327-1.8.327a4.58 4.58 0 0 1-1.43-.207c-.497-.166-.747-.39-.747-.677v-3.43h-.931v3.423c0 .658.369 1.14 1.108 1.449.544.222 1.21.339 1.999.339a5.314 5.314 0 0 0 2.004-.332c.739-.303 1.108-.79 1.108-1.456m2.262-3.264h.008a.028.028 0 0 0 .02-.01zm-.637 1.592c0-.235.126-.415.384-.552.453-.238 1.106-.354 1.959-.354.37 0 .766.04 1.196.127L24 8.01a6.91 6.91 0 0 0-1.475-.13c-.64 0-1.207.063-1.696.185-1.062.296-1.594.825-1.594 1.594v3.424h.947zM5.839 14.19a7.616 7.616 0 0 0-1.46.134l.182.86a7.31 7.31 0 0 1 1.275-.134c.524 0 1.017.07 1.493.213.572.167.86.392.86.665v1.63c0 .278-.27.498-.81.658a5.552 5.552 0 0 1-1.54.192 5.516 5.516 0 0 1-1.54-.195c-.545-.16-.81-.38-.81-.658v-4.498c.21.01.42.025.65.025v-1.063a11.923 11.923 0 0 1-1.709-.25c-.875-.196-1.31-.447-1.31-.75V8.234h3.03V7.192H1.118V4.697H0v6.32c0 1.072.893 1.722 2.65 1.958v4.59c0 1.16 1.062 1.738 3.19 1.738 2.125 0 3.188-.577 3.188-1.738v-1.632c0-1.164-1.063-1.746-3.188-1.746m10.132 3.3c0 .283-.301.505-.903.67a6.762 6.762 0 0 1-1.716.202 6.73 6.73 0 0 1-1.716-.202c-.6-.165-.9-.387-.9-.67v-1.633c0-.28.3-.506.9-.668a6.58 6.58 0 0 1 1.716-.202c.64 0 1.215.065 1.716.202.602.165.903.387.903.668zm-2.62-3.417c-2.366 0-3.547.597-3.547 1.784v1.632c0 1.19 1.181 1.787 3.548 1.787 2.366 0 3.548-.598 3.548-1.787v-1.632c0-1.19-1.182-1.784-3.548-1.784m9.669.514c0 .296-.342.607-1.025.934-.564.235-.995.404-1.28.506a17.597 17.597 0 0 1-1.286-.506c-.683-.33-1.02-.638-1.02-.932v-.49h-.93v.49c0 .446.222.848.67 1.2.258.21.683.453 1.28.728-1.298.668-1.948 1.44-1.948 2.308v.45h.928v-.45c0-.354.3-.73.904-1.123a6.772 6.772 0 0 1 1.41-.704c.523.2.988.43 1.396.704.6.394.9.769.9 1.123v.45h.932v-.45c0-.868-.648-1.64-1.95-2.308.6-.275 1.026-.518 1.284-.728.443-.354.666-.754.666-1.2v-.49h-.931zm0 0"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgTourboxIcon {
  readonly class = input<string>('');
}
