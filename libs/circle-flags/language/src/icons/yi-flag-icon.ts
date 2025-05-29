import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-yi-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#eee"
        d="M0 0h512v56l-25 32 25 34v268l-26 36 26 30v56H0v-56l25-34-25-32V122l27-33L0 56z"
      />
      <svg:path fill="#333" d="M0 390v66h512v-66z" />
      <svg:circle cx="256" cy="186" r="104" fill="#333" />
      <svg:circle cx="256" cy="186" r="84" fill="#eee" />
      <svg:circle cx="256" cy="186" r="64" fill="#333" />
      <svg:circle cx="256" cy="186" r="44" fill="#eee" />
      <svg:path fill="#333" d="m246 319-49 11v14h118v-14l-49-11z" />
      <svg:path fill="#eee" d="M148 78h216v108H148z" />
      <svg:path
        fill="#333"
        d="M246 180h20v150h-20zm87-8h34l-7 15h-20zm-40 0h34l-7 15h-20zm-108 0h34l-7 15h-20zm-40 0h34l-7 15h-20z"
      />
      <svg:path fill="#333" d="M239 172h34l-7 15h-20zM0 56v66h512V56z" />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiYiFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
