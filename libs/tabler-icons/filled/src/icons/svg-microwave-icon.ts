import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-microwave-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-microwave"
      [class]="classInput()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M20 5a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2zm-6 2h-10v10h10zm4.01 7h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m0 -3h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m0 -3h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2"
      />
      <path
        d="M5.945 9.668c1.336 -.891 2.274 -.891 3.61 0l-.089 -.056l.04 .017l.146 .064l.095 .044c.378 .171 .533 .23 .674 .255c.133 .023 .186 .005 .336 -.16a1 1 0 1 1 1.486 1.337c-.613 .681 -1.358 .934 -2.164 .794c-.368 -.064 -.621 -.161 -1.158 -.405a10 10 0 0 0 -.306 -.135l-.17 -.091c-.664 -.443 -.726 -.443 -1.39 0a1 1 0 1 1 -1.11 -1.664"
      />
      <path
        d="M5.945 12.668c1.336 -.891 2.274 -.891 3.61 0l-.089 -.056l.04 .017l.146 .064l.095 .044c.378 .171 .533 .23 .674 .255c.133 .023 .186 .005 .336 -.16a1 1 0 0 1 1.486 1.337c-.613 .681 -1.358 .934 -2.164 .794c-.368 -.064 -.621 -.161 -1.158 -.405a10 10 0 0 0 -.306 -.135l-.17 -.091c-.664 -.443 -.726 -.443 -1.39 0a1 1 0 1 1 -1.11 -1.664"
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
export class SvgMicrowaveIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
