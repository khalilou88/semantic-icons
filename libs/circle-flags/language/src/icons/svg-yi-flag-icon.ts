import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-yi-flag-icon',
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
          d="M0 0h512v56l-25 32 25 34v268l-26 36 26 30v56H0v-56l25-34-25-32V122l27-33L0 56z"
        />
        <path fill="#333" d="M0 390v66h512v-66z" />
        <circle cx="256" cy="186" r="104" fill="#333" />
        <circle cx="256" cy="186" r="84" fill="#eee" />
        <circle cx="256" cy="186" r="64" fill="#333" />
        <circle cx="256" cy="186" r="44" fill="#eee" />
        <path fill="#333" d="m246 319-49 11v14h118v-14l-49-11z" />
        <path fill="#eee" d="M148 78h216v108H148z" />
        <path
          fill="#333"
          d="M246 180h20v150h-20zm87-8h34l-7 15h-20zm-40 0h34l-7 15h-20zm-108 0h34l-7 15h-20zm-40 0h34l-7 15h-20z"
        />
        <path fill="#333" d="M239 172h34l-7 15h-20zM0 56v66h512V56z" />
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
export class SvgYiFlagIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
