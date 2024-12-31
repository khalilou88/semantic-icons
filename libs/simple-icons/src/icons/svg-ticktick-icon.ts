import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ticktick-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>TickTick</title>
      <path
        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12h-2.7c0 5.128-4.172 9.3-9.3 9.3-5.128 0-9.3-4.172-9.3-9.3 0-5.128 4.172-9.3 9.3-9.3V0Zm7.4 2.583-7.505 9.371L8.388 9.08l-2.002 2.436 4.741 3.888a1.573 1.573 0 0 0 2.231-.233l8.504-10.617L19.4 2.583Z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgTicktickIcon {
  readonly class = input<string>('');
}
