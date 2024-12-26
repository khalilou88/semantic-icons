import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-grav-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Grav</title>
      <path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.489 13.965c-1.251-.825-1.965-1.523-2.589-2.777-.427.859-1.421 2.135-3.098 3.139-.84 2.61-4.823 7.605-6.113 6.885-.381-.195-.452-.48-.367-.765.093-.704 1.566-2.34 1.566-2.34s.029.345.494 1.065c-.629-1.936 1.021-4.305 1.456-5.131.689-.209.734-1.095.734-1.095.046-1.364-.569-2.34-1.155-2.94.421.525.556 1.306.57 2.025v.255c-.029.601-.21 1.41-.585 1.41v.016c-.39-.016-.885.074-1.319.21l-.961.239s.51-.015.78.226c-.314.51-1.005 1.125-1.771 1.484-1.109.525-1.439-.51-.869-1.17.135-.165.285-.3.404-.404-.09-.09-.135-.21-.149-.36-.075-.345-.045-.78.45-1.485.09-.149.21-.3.345-.449l.015-.016.016-.015v-.015c.029-.046.074-.076.104-.12.57-.585 1.485-1.2 2.911-1.74 1.694-2.49 2.309-2.956 2.309-2.956.181-.179.511-.419.615-.479-.87-1.515-1.049-3.646-.824-4.215-.03.03-.046.06-.061.105.09-.195.135-.255.225-.36.24-.27 1.035-.42 1.336.18.15.315.18.735.18 1.035-.645-.029-1.215.69-1.215.69s.524-.24 1.186-.255c0 0 .179.164.389.449-.284.556-.779 1.725-.42 2.971.061.24.15.45.256.629.015.016.015.016.015.031l.03.029c.585.886 1.649.976 1.649.976-.495-.24-.915-.646-1.169-1.125-.136-.255-.227-.48-.271-.646-.285-1.08.135-1.725.375-2.145.54-.84 1.544-1.351 2.609-1.23 1.5.165 2.581 1.53 2.399 3.03-.104.915-.659 1.681-1.409 2.085.181.494-.015 1.08-.015 1.08.449.57.479.9.465 1.215-.585-.09-1.141.301-1.141.301s1.111-.256 1.756.314c.42.449.704.87.869 1.17.24.435 1.35.465 1.229 1.23-.135.779-.989.779-2.31-.09l.074-.151zm-4.824-4.61c-.22-.219-.574-.219-.795 0l-.465.468c-.222.21-.222.57 0 .796l.51.51c.222.225.577.21.795 0l.47-.466c.221-.225.221-.585 0-.794l-.515-.525v.011zm-2.205-.186c-.14.14-.14.368 0 .511.141.138.368.138.51 0 .14-.143.14-.371 0-.511-.142-.141-.369-.141-.51 0zm1.269-.252c.142-.139.142-.366 0-.51-.141-.138-.367-.138-.51 0-.139.144-.139.371 0 .51.142.142.369.142.51 0zm5.385-1.304c.591-1.131-.247-1.791-.825-2.332-.924-.87-1.846-1.245-2.9-.029-1.052 1.199-.383 2.609.58 3.284.96.69 2.535.226 3.135-.915l.01-.008zm-1.595-.463c-.372-.445.322-1.252.757-.77.8.89-.387 1.216-.757.77z"
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
export class SvgGravIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
