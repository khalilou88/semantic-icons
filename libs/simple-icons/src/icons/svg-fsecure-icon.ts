import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-fsecure-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>F-Secure</title>
      <path
        d="M23.928 2.946a35.921 35.921 0 0 0-22.228-.6A2.219 2.219 0 0 0 .08 5.094c.4 1.6.98 3.439 1.68 5.108.01.04.03.02.03-.02-.1-.78.5-1.77 1.679-2.13a27.546 27.546 0 0 1 17.381.23c.86.3 1.82-.17 2.099-1.059.7-2.248.98-3.778 1.05-4.157.01-.07-.05-.1-.07-.12zM6.658 7.893c-.86.18-2.05.46-2.94.76-1.778.61-1.698 2.778-.749 3.468.07-.4.5-.95.98-1.13 1.779-.7 3.688-1.119 5.617-1.289-.98-.4-1.94-.97-2.899-1.809m14.163 4.338a21.15 21.15 0 0 0-16.441-.65c-.85.32-1.38 1.35-.85 2.329a38.14 38.14 0 0 0 3.148 4.797c-.17-.58.13-1.659 1.27-2.009 3.148-.969 6.456-.56 8.655.33.62.25 1.5.1 1.99-.64a38.6 38.6 0 0 0 2.288-4.017c.03-.06 0-.11-.06-.14m-5.107 7.766a9.915 9.915 0 0 1-2.499-1.8c-.34-.34-.84-.829-1.37-1.409-1.199 0-2.368.12-3.617.52-1.16.36-1.27 1.7-.76 2.399.86 1.07 1.46 1.65 2.419 2.639a2.739 2.739 0 0 0 3.818.02 43.3 43.3 0 0 0 2.059-2.21c.05-.05.03-.14-.05-.16"
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
export class SvgFsecureIcon {
  readonly class = input<string>('');
}
