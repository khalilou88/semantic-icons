import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-jetpackcompose-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Jetpack Compose</title>
      <path
        d="M12.135.003a2.577 2.577 0 0 0-1.42.344L2.55 5.06a2.577 2.577 0 0 0-.953.967l3.957 2.17a1.765 1.765 0 0 1 .603-.588l4.951-2.86a1.761 1.761 0 0 1 1.76 0l4.951 2.86a1.753 1.753 0 0 1 .526.46l3.921-2.265a2.577 2.577 0 0 0-.816-.744L13.291.347a2.577 2.577 0 0 0-1.152-.34Zm-.145 4.912a1.36 1.36 0 0 0-.68.182L6.36 7.953a1.345 1.345 0 0 0-.454.435l1.92 1.055a1.05 1.05 0 0 1 .31-.275l3.34-1.928a1.054 1.054 0 0 1 1.051 0l3.336 1.928a1.066 1.066 0 0 1 .238.199l.018-.01-.002-.002 1.877-1.08a1.353 1.353 0 0 0-.373-.322l-4.95-2.86a1.357 1.357 0 0 0-.68-.178Zm10.432 1.149-3.92 2.26a1.757 1.757 0 0 1 .2.812v5.715c0 .627-.332 1.21-.88 1.528l-4.95 2.86a1.761 1.761 0 0 1-.64.214v4.524a2.577 2.577 0 0 0 1.059-.313l8.162-4.713a2.577 2.577 0 0 0 1.289-2.23V7.297a2.577 2.577 0 0 0-.318-1.228Zm-20.937.238a2.577 2.577 0 0 0-.227.99v9.43c0 .918.491 1.767 1.293 2.229l8.162 4.713a2.57 2.57 0 0 0 1.225.336v-4.531a1.761 1.761 0 0 1-.833-.235L6.156 16.38a1.765 1.765 0 0 1-.877-1.528V9.136a1.776 1.776 0 0 1 .131-.676Zm16.67 2.223-1.89 1.092a1.058 1.058 0 0 1 .124.46v3.856c0 .378-.2.72-.526.907l-3.336 1.93a1.04 1.04 0 0 1-.295.107v2.17c.152-.027.304-.078.44-.157l4.949-2.859a1.36 1.36 0 0 0 .68-1.18V9.136a1.36 1.36 0 0 0-.147-.607Zm-12.387.13a1.36 1.36 0 0 0-.088.481v5.715a1.36 1.36 0 0 0 .68 1.18l4.95 2.86c.194.112.412.166.627.177v-2.174a1.054 1.054 0 0 1-.46-.123L8.14 14.843a1.054 1.054 0 0 1-.532-.908v-3.853a.99.99 0 0 1 .077-.38l-.034-.013z"
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
export class SvgJetpackcomposeIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
