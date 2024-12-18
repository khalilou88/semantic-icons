import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-watch-beat-1-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.4533 12.2088L11.0005 11.0495L11.8088 14.3428C12.0565 15.352 13.4245 15.5114 13.8976 14.5862L14.7844 12.852H15.4419C15.8561 12.852 16.1919 12.5162 16.1919 12.102C16.1919 11.6878 15.8561 11.352 15.4419 11.352H14.5532C14.1319 11.352 13.746 11.588 13.5542 11.9632L13.0238 13.0003L12.2033 9.65715C11.9514 8.6308 10.5498 8.48997 10.0988 9.44569L9.19906 11.352H8.55814C8.14393 11.352 7.80814 11.6878 7.80814 12.102C7.80814 12.5162 8.14393 12.852 8.55814 12.852H9.43858C9.87278 12.852 10.268 12.6015 10.4533 12.2088Z"
        fill="#323544"
      />
      <path
        d="M9.42705 2C8.57481 2 7.79572 2.48151 7.41459 3.24377L6.53122 5.0105C5.39124 5.1205 4.5 6.08117 4.5 7.25V16.75C4.5 17.9188 5.39125 18.8795 6.53124 18.9895L7.41459 20.7561C7.79573 21.5183 8.57481 21.9998 9.42703 21.9998H14.573C15.4252 21.9998 16.2043 21.5183 16.5854 20.7561L17.4688 18.9895C18.6087 18.8795 19.5 17.9188 19.5 16.75V7.25C19.5 6.08117 18.6088 5.1205 17.4688 5.0105L16.5854 3.24377C16.2043 2.48151 15.4252 2 14.5729 2H9.42705ZM6.98346 17.5H6.75C6.33579 17.5 6 17.1642 6 16.75V7.25C6 6.83579 6.33579 6.5 6.75 6.5H6.98375C6.99421 6.50022 7.00466 6.50022 7.01509 6.5H16.9849C16.9953 6.50022 17.0058 6.50022 17.0162 6.5H17.25C17.6642 6.5 18 6.83579 18 7.25V16.75C18 17.1642 17.6642 17.5 17.25 17.5H17.0165C17.0059 17.4998 16.9953 17.4998 16.9847 17.5H7.01538C7.00476 17.4998 6.99412 17.4998 6.98346 17.5ZM8.75621 20.0852L8.21356 19H15.7864L15.2438 20.0852C15.1167 20.3393 14.857 20.4998 14.573 20.4998H9.42703C9.14295 20.4998 8.88326 20.3393 8.75621 20.0852ZM15.7865 5H8.21353L8.75623 3.91459C8.88327 3.6605 9.14297 3.5 9.42705 3.5H14.5729C14.857 3.5 15.1167 3.6605 15.2438 3.91459L15.7865 5Z"
        fill="#323544"
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
export class SvgWatchBeat1Icon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
