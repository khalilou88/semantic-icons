import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-affinitypublisher-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Affinity Publisher</title>
      <path
        d="M24 2.344v19.312A2.345 2.345 0 0 1 21.656 24H2.344A2.345 2.345 0 0 1 0 21.656V2.344A2.345 2.345 0 0 1 2.344 0h19.312A2.345 2.345 0 0 1 24 2.344Zm-1.758 16.607-9.93-17.193h-1.639L9.75 3.354l10.91 18.888h.645c.517 0 .937-.42.937-.937v-2.354Zm-6.911 3.291L7.086 7.967l-1.263 2.187a1.657 1.657 0 0 0 0 1.657c1.512 2.615 6.025 10.431 6.025 10.431h3.483Zm5.974-20.484h-8.071l9.008 15.596V2.695a.938.938 0 0 0-.937-.937Zm-10.38 20.484L4.883 11.781l-3.125 5.411v4.113c0 .517.42.937.938.937h8.229Zm8.812 0L9.289 4.153 7.598 7.08l8.656 15.162h3.483Z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgAffinitypublisherIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}