import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bear-smile-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 17C14.2091 17 16 15.2091 16 13H14C14 14.1046 13.1046 15 12 15 10.8954 15 10 14.1046 10 13H8C8 15.2091 9.79086 17 12 17ZM6.5 2C4.01472 2 2 4.01472 2 6.5 2 7.85729 2.60121 9.07332 3.54934 9.89751 3.19384 10.8656 3 11.911 3 13 3 17.9706 7.02944 22 12 22 16.9706 22 21 17.9706 21 13 21 11.911 20.8062 10.8656 20.4507 9.89751 21.3988 9.07332 22 7.85729 22 6.5 22 4.01472 19.9853 2 17.5 2 15.8737 2 14.4505 2.8624 13.6601 4.15297 13.1215 4.05246 12.5665 4 12 4 11.4335 4 10.8785 4.05246 10.3399 4.15297 9.5495 2.8624 8.12635 2 6.5 2ZM4 6.5C4 5.11929 5.11929 4 6.5 4 7.58033 4 8.50304 4.68577 8.8517 5.64896L9.1696 6.52718 10.0675 6.26991C10.6801 6.09435 11.3282 6 12 6 12.6718 6 13.3199 6.09435 13.9325 6.26991L14.8304 6.52718 15.1483 5.64896C15.497 4.68577 16.4197 4 17.5 4 18.8807 4 20 5.11929 20 6.5 20 7.43301 19.4894 8.24804 18.7275 8.67859L17.9141 9.13832 18.3176 9.98107C18.7547 10.8939 19 11.9169 19 13 19 16.866 15.866 20 12 20 8.13401 20 5 16.866 5 13 5 11.9169 5.24529 10.8939 5.6824 9.98107L6.08595 9.13832 5.27248 8.6786C4.51064 8.24805 4 7.43301 4 6.5Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBearSmileLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
