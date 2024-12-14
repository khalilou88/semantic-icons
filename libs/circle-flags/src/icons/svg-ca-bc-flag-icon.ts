import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ca-bc-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path
          fill="#eee"
          d="M0 61.2 80.7 0h16l18.5 6 12.9-6h94.6l33.8 19.2 33-19.2h63.1l11.9 7.3L384 0h47.2L512 61.2v33.4L491.3 128l20.7 33.4v33.4l-22 29.7 22 31.5v13.1l-9.7 19 9.7 15.3v32.3l-12.7 19.8L512 370v32.8l-28.4 57-446.2-1-37.3-56V370l13.4-13.7L0 335.7v-32.3l14.2-14.2L0 269v-13l27.4-30.6L0 194.8v-33.4l25.5-33.5L0 94.6z"
        />
        <path
          fill="#0052b4"
          d="M0 0v61.2h142.1L80.7 0H0zm431.3 0-61.2 61.2H512V0h-80.7zM0 194.8V256h80.9l61.2-61.2H0zm370.1 0 61.2 61.2H512v-61.2H370.1zM189.3 242l-14 14h14v-14zm133.6 0v14h14l-14-14zM0 269.1v34.3h.1c21.3 0 21.3 19.5 42.6 19.5 21.4 0 21.4-19.5 42.7-19.5 21.3 0 21.3 19.5 42.7 19.5 21.4 0 21.3-19.5 42.6-19.5 21.4 0 21.4 19.5 42.7 19.5 21.3 0 21.3-19.5 42.7-19.5 21.4 0 21.4 19.5 42.7 19.5 21.3 0 21.3-19.5 42.7-19.5 21.3 0 21.3 19.5 42.6 19.5 21.4 0 21.4-19.5 42.7-19.5 21.3 0 21.3 19.5 42.7 19.5 21.4 0 21.3-19.4 42.5-19.5v-34.3c-21.2 0-21.2 19.5-42.5 19.5s-21.4-19.5-42.7-19.5c-21.3 0-21.3 19.5-42.7 19.5-21.3 0-21.3-19.5-42.6-19.5-21.4 0-21.4 19.5-42.7 19.5-21.3 0-21.3-19.5-42.7-19.5-21.4 0-21.4 19.5-42.7 19.5-21.3 0-21.3-19.5-42.7-19.5-21.3 0-21.3 19.5-42.6 19.5s-21.4-19.5-42.7-19.5c-21.3 0-21.3 19.5-42.7 19.5-21.3 0-21.3-19.5-42.6-19.5H0zm0 66.6V370h.1c21.4 0 21.4 19.5 42.7 19.5 21.3 0 21.3-19.5 42.7-19.5 21.3 0 21.3 19.5 42.6 19.5 21.4 0 21.4-19.5 42.7-19.5 21.3 0 21.3 19.5 42.7 19.5 21.4 0 21.3-19.5 42.6-19.5 21.4 0 21.4 19.5 42.7 19.5 21.3 0 21.3-19.5 42.7-19.5 21.4 0 21.4 19.5 42.7 19.5 21.3 0 21.3-19.5 42.7-19.5 21.3 0 21.3 19.5 42.6 19.5s21.4-19.4 42.5-19.5v-34.3c-21.1.1-21.2 19.5-42.5 19.5s-21.3-19.5-42.6-19.5c-21.4 0-21.4 19.5-42.7 19.5-21.3 0-21.3-19.5-42.7-19.5-21.4 0-21.4 19.5-42.7 19.5-21.3 0-21.3-19.5-42.7-19.5-21.3 0-21.3 19.5-42.6 19.5s-21.4-19.5-42.7-19.5c-21.3 0-21.3 19.5-42.7 19.5-21.3 0-21.3-19.5-42.6-19.5-21.4 0-21.4 19.5-42.7 19.5-21.3 0-21.3-19.5-42.7-19.5H0zm0 67.1V512h92.6l168.1-21.3L419.4 512H512V402.8c-21.2 0-21.2 19.5-42.5 19.5s-21.4-19.5-42.7-19.5c-21.3 0-21.3 19.5-42.7 19.5-21.3 0-21.3-19.5-42.6-19.5-21.4 0-21.4 19.5-42.7 19.5-21.3 0-21.3-19.5-42.7-19.5-21.4 0-21.4 19.5-42.7 19.5-21.3 0-21.3-19.5-42.7-19.5-21.3 0-21.3 19.5-42.6 19.5s-21.4-19.5-42.7-19.5c-21.3 0-21.3 19.5-42.7 19.5-21.3 0-21.3-19.5-42.6-19.5H0z"
        />
        <path
          fill="#d80027"
          d="m96.7 0 61.2 61.2h31.4L128.1 0H96.7zm126 0v94.6H0v66.8h222.6V256h66.8v-94.6H512V94.6H289.5V0h-66.8zm129.9 0-29.7 29.7v31.5L384.1 0h-31.5zM189.4 194.8 128.1 256h31.5l29.8-29.7v-31.5zm133.5 0 61.2 61.2h31.5l-61.2-61.2h-31.5z"
        />
        <path
          fill="#ffda44"
          d="m201.9 345-10 78.7-77.8-14.9 37.7 68.7A268.2 268.2 0 0 0 92.6 512h326.8a268.2 268.2 0 0 0-59-34.5l37.7-68.7-77.9 15-9.9-78.8-54.2 58-54.2-58z"
        />
      </g>
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCaBcFlagIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
