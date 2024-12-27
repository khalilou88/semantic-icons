import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-informatica-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Informatica</title>
      <path
        d="M12 0l3.547 10.788-4.5-1.255-.25 4.43 7.121 4.035V18h.001l5.919-6zm-.64.65L.162 12l6.32 6.407L12 24l5.184-5.255-9.736-3.856z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgInformaticaIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
