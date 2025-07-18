import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-3-m-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>3M</svg:title>
    <svg:path
      d="M18.903 5.954L17.17 13.03l-1.739-7.076h-5.099v2.613C9.72 6.28 7.56 5.706 5.558 5.674 3.12 5.641.563 6.701.469 9.936h3.373c0-.977.747-1.536 1.588-1.523 1.032-.008 1.508.434 1.533 1.124-.036.597-.387 1.014-1.525 1.014H4.303V12.9h1.03c.584 0 1.399.319 1.431 1.155.04.995-.652 1.435-1.501 1.443-1.517-.053-1.763-1.225-1.763-2.23H0c.015.677-.151 5.091 5.337 5.059 2.629.025 4.464-1.085 5.003-2.613v2.342h3.455v-7.632l1.867 7.634h3.018l1.875-7.626v7.634H24V5.954h-5.097zm-8.561 7.06c-.429-.893-1.034-1.284-1.376-1.407.714-.319 1.09-.751 1.376-1.614v3.021z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Si3MIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FF0000');
}
