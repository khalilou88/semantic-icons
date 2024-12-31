import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-improvmx-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>ImprovMX</title>
      <path
        d="M12.043 7.203 7.326 9.757 7.309 4.75h1.66l6.13-.026h1.66l.009 4.998zm1.72-5.875.008 2.077-3.482.009V1.337h3.473zm4.341 9.11-.025-7.041h-2.98L15.09 0 8.96.017v3.405H5.98l.018 7.041-2.767 1.499.92 3.32a5.79 5.79 0 0 1 1.387.068l-.75-2.724 6.59-3.559.018 8.548h1.328l-.026-8.548 6.615 3.525-.715 2.656a5.79 5.79 0 0 1 1.345.085l.937-3.414-2.784-1.481zm-2.81 7.654a4.623 4.623 0 0 1-6.58 0 5.951 5.951 0 0 0-8.403 0l.91.91a4.657 4.657 0 0 1 6.582 0A5.9 5.9 0 0 0 12 20.748a5.9 5.9 0 0 0 4.197-1.746 4.657 4.657 0 0 1 6.581 0l.911-.91a5.951 5.951 0 0 0-8.403 0m.009 3.252a4.623 4.623 0 0 1-6.581 0 5.874 5.874 0 0 0-3.346-1.652v1.286c.885.17 1.745.596 2.435 1.277A5.9 5.9 0 0 0 12 24a5.9 5.9 0 0 0 4.197-1.745 4.614 4.614 0 0 1 2.299-1.243v-1.303a5.91 5.91 0 0 0-3.21 1.635"
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
export class SvgImprovmxIcon {
  readonly class = input<string>('');
}
