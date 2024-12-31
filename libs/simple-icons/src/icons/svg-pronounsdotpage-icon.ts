import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-pronounsdotpage-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Pronouns.page</title>
      <path
        d="M14.991 5.14c.058-.102.01-.185-.108-.185l-2.051.001a.414.414 0 0 0-.321.184l-5.027 8.503c-.702 1.156-1.681 1.411-2.622 1.297-1.615-.196-2.483-1.381-2.483-2.96a2.88 2.88 0 0 1 2.876-2.876h3.192c.117 0 .26-.083.319-.184l1.15-2.01c.058-.101.01-.184-.107-.184H5.254A5.26 5.26 0 0 0 0 11.98c0 1.4.547 2.91 1.542 3.897.98.972 2.29 1.328 3.688 1.357.789.009 2.956-.009 3.972-1.817a18678.91 18678.91 0 0 1 5.79-10.277Zm7.467 2.984c-.98-.972-2.29-1.329-3.688-1.357-.789-.01-2.956.009-3.972 1.816-1.138 2.024-5.79 10.277-5.79 10.277-.057.102-.008.185.109.185l2.051-.001a.414.414 0 0 0 .321-.184l5.027-8.503c.702-1.156 1.681-1.411 2.622-1.297 1.615.196 2.483 1.381 2.483 2.96a2.88 2.88 0 0 1-2.876 2.876h-3.192a.406.406 0 0 0-.319.184l-1.15 2.01c-.058.101-.01.184.107.184h4.555A5.26 5.26 0 0 0 24 12.02c0-1.4-.547-2.91-1.542-3.896z"
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
export class SvgPronounsdotpageIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
