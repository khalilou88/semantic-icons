import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-spyderide-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Spyder IDE</title>
      <path
        d="M4.053.237a4.05 4.05 0 0 0-1.89.467A4.1 4.1 0 0 0 .524 2.29a7 7 0 0 0-.2.4c-.036.094-.076.186-.107.275a3.6 3.6 0 0 0-.147.567 4 4 0 0 0-.07.76v15.42a4 4 0 0 0 .4 1.756 4.05 4.05 0 0 0 3.654 2.295h8.234a.22.22 0 0 0 .22-.22v-.983a.22.22 0 0 0-.22-.219h-1.07l-3.188-6.46 7.276-9.642a.8.8 0 0 0 .137-.284l6.668 1.02v1.506a.22.22 0 0 0 .218.217h.99a.22.22 0 0 0 .218-.217v-4.19a4.04 4.04 0 0 0-1.506-3.146A4.04 4.04 0 0 0 19.48.237Zm0 1.42h2.97l.213 1.717-3.938-.601-1.242-.193a2.62 2.62 0 0 1 1.997-.923m9.586 0 .345 2.748-5.39-.821-.244-1.915zm1.318 0h4.304a2.855 2.855 0 0 1 2.848 2.848v1.142L15.326 4.61ZM2.13 3.92l4.924.756-2.749 3.653Zm6.394.98 5.508.843-6.65 8.824-2.43-4.927 3.57-4.733Zm-7.1.555 1.76 3.57-1.762.215Zm17.964 4.608c-2.625 0-4.98.368-4.98 3.069v.514c0 1.35.465 2.772 2.355 3.508l3.484 1.333c1.129.464 1.423.93 1.423 1.641v.295c0 1.055-.614 1.276-2.576 1.276h-4.539a.324.324 0 0 0-.368.368v1.08c0 .195.073.343.368.366.417.05 2.354.222 4.489.222 3.314 0 4.956-.536 4.956-3.284v-.273c0-1.35-.196-2.601-2.453-3.46l-3.263-1.3c-1.202-.442-1.52-1.033-1.52-1.717v-.32c0-.883.661-1.274 1.79-1.274h4.563a.326.326 0 0 0 .369-.369v-1.055a.363.363 0 0 0-.344-.393 31 31 0 0 0-3.754-.227m-15.592.203 2.464 4.98-4.838.608v-5.289Zm3.07 6.227 2.888 5.85H4.272a2.857 2.857 0 0 1-2.85-2.85v-2.316z"
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
      fill: currentColor;
      color: currentColor;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSpyderideIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
