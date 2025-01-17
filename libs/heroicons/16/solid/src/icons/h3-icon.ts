import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-h3-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M1.75 3a.75.75 0 0 1 .75.75v3.5h4v-3.5a.75.75 0 0 1 1.5 0v8.5a.75.75 0 0 1-1.5 0v-3.5h-4v3.5a.75.75 0 0 1-1.5 0v-8.5A.75.75 0 0 1 1.75 3ZM12.5 7.5c-.558 0-1.107.04-1.642.119a.75.75 0 0 1-.217-1.484 12.851 12.851 0 0 1 2.856-.097c.696.054 1.363.561 1.464 1.353a4.805 4.805 0 0 1-.203 2.109 4.745 4.745 0 0 1 .203 2.109c-.101.792-.768 1.299-1.464 1.353a12.955 12.955 0 0 1-2.856-.097.75.75 0 0 1 .217-1.484 11.351 11.351 0 0 0 2.523.085.14.14 0 0 0 .08-.03c.007-.006.01-.012.01-.012l.002-.003v-.003a3.29 3.29 0 0 0-.06-1.168H11.75a.75.75 0 0 1 0-1.5h1.663a3.262 3.262 0 0 0 .06-1.168l-.001-.006-.01-.012a.14.14 0 0 0-.08-.03c-.291-.023-.585-.034-.882-.034Z"
      clip-rule="evenodd"
    />
  `,
  host: {
    'aria-hidden': 'true',
    'data-slot': 'icon',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiH3Icon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 16 16');

  readonly fill = input<string>('currentColor');
}
