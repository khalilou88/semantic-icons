import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-stremio-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Stremio</title>
      <path
        d="M12 0a1.2 1.2 0 0 0-.85.354L.353 11.15c-.47.47-.47 1.227 0 1.697L11.15 23.647a1.2 1.2 0 0 0 1.7 0l10.797-10.8c.47-.47.47-1.226 0-1.696L12.85.354A1.2 1.2 0 0 0 12 0zm-1.674 7.586a.2.2 0 0 1 .002 0 .2.2 0 0 1 .129.04l5.729 4.214a.2.2 0 0 1 0 .323l-5.73 4.213a.2.2 0 0 1-.317-.16v-8.43a.2.2 0 0 1 .187-.2z"
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
export class SvgStremioIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
