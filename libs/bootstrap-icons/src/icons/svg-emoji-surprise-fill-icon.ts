import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-emoji-surprise-fill-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="bi bi-emoji-surprise-fill"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M7 5.5C7 4.672 6.552 4 6 4s-1 .672-1 1.5S5.448 7 6 7s1-.672 1-1.5m4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5S9.448 7 10 7s1-.672 1-1.5M8 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
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
export class SvgEmojiSurpriseFillIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
