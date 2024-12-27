import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-platformio-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>PlatformIO</title>
      <path
        d="M12 23.992c1.25.211 7.051-3.743 9.113-8.217.253-.686.61-1.198.746-2.5.21-2.016-.41-3.912-1.59-5.419-.987-1.163-2.305-2.004-3.88-2.532l.683-2.583a1.371 1.371 0 1 0-.76-.189L15.64 5.1c-1.109-.288-2.328-.437-3.64-.444m5.978 11.667c-1.548 1.346-2.525 1.488-3.045 1.467-.274-.034-.75-.558-.919-1.104-.188-.612-.28-1.282-.273-2.2-.199-2.476 1.465-5.624 3.937-6.041 1.003-.186 2.39.493 2.889 2.088.506 1.422-.645 4.147-2.589 5.79zM12 4.656c-1.315.007-2.538.156-3.65.447l-.675-2.56A1.37 1.37 0 0 0 6.962 0a1.372 1.372 0 0 0-.044 2.742L7.6 5.328c-1.57.528-2.885 1.367-3.871 2.528-1.179 1.507-1.8 3.403-1.588 5.419.136 1.302.492 1.814.745 2.5 2.062 4.474 7.862 8.428 9.113 8.217m-1.507-9.507c.007.92-.086 1.589-.274 2.201-.167.546-.644 1.07-.918 1.104-.52.021-1.498-.121-3.045-1.467-1.944-1.643-3.095-4.368-2.589-5.79.5-1.595 1.886-2.274 2.889-2.088 2.471.417 4.136 3.565 3.937 6.04zm6.45-2.19a1.24 1.24 0 1 0 0 2.48 1.24 1.24 0 0 0 0-2.48zm.416 1.149a.325.325 0 1 1 0-.65.325.325 0 0 1 0 .65zM7.25 12.294a1.24 1.24 0 1 0 0 2.48 1.24 1.24 0 0 0 0-2.48zm-.418 1.15a.325.325 0 1 1 0-.65.325.325 0 0 1 0 .65z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPlatformioIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
