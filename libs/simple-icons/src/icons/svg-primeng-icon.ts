import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-primeng-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>PrimeNG</title>
      <path
        d="M12 0 .784 3.984l1.711 14.772L12 24l9.506-5.244 1.71-14.772ZM8.354 4.212h1.674L9.19 6.124l-2.51-.24Zm2.032 0h1.315v6.812h-.717L5.843 9.112l-.717-2.988 4.308.35Zm1.794 0h1.314l.953 2.261 4.427-.349-.717 2.988-5.14 1.912h-.837Zm1.673 0h1.674L17.2 5.885l-2.51.239zM5.963 9.59l1.315.478 1.315 1.315 1.076-.24-.837 1.196v3.704l-2.87-2.39zm11.955 0v4.063l-2.87 2.39v-3.704l-.837-1.195 1.077.239 1.314-1.315zm-7.786 1.536.596.36h2.384l.597-.36.953 1.437v5.388l-.715 1.078-.835.838h-2.384l-.834-.838-.715-1.078v-5.388zm-2.854 4.08 1.554 1.315v1.793L7.278 16.76Zm9.324 0v1.554l-1.553 1.554V16.52z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPrimengIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
