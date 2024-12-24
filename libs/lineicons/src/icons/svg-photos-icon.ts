import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-photos-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.24997 10.5C7.55962 10.5 6.99997 11.0596 6.99997 11.75C6.99997 12.4404 7.55962 13 8.24997 13H8.25997C8.95033 13 9.50997 12.4404 9.50997 11.75C9.50997 11.0596 8.95033 10.5 8.25997 10.5H8.24997Z"
        fill="#323544"
      />
      <path
        d="M7.74997 5.5C7.74997 4.25736 8.75733 3.25 9.99997 3.25H19C20.2426 3.25 21.25 4.25736 21.25 5.5V14.5C21.25 15.7426 20.2426 16.75 19 16.75H17.25V18.5C17.25 19.7426 16.2426 20.75 15 20.75H5.99997C4.75733 20.75 3.74997 19.7426 3.74997 18.5V17.6916C3.74976 17.6814 3.74977 17.6712 3.74997 17.6611V9.5C3.74997 8.25736 4.75733 7.25 5.99997 7.25H7.74997V5.5ZM15.75 9.5C15.75 9.08579 15.4142 8.75 15 8.75H5.99997C5.58576 8.75 5.24997 9.08579 5.24997 9.5L5.24997 16.4421L10.9184 13.5037C11.7617 13.0665 12.7888 13.206 13.4849 13.8525L15.75 15.9558V9.5ZM5.24997 18.5C5.24997 18.9142 5.58576 19.25 5.99997 19.25H15C15.4142 19.25 15.75 18.9142 15.75 18.5V18.0028L12.4642 14.9516C12.2322 14.7362 11.8898 14.6896 11.6087 14.8354L5.24997 18.1317V18.5ZM9.24997 7.25H15C16.2426 7.25 17.25 8.25736 17.25 9.5V15.25H19C19.4142 15.25 19.75 14.9142 19.75 14.5V5.5C19.75 5.08579 19.4142 4.75 19 4.75H9.99997C9.58576 4.75 9.24997 5.08579 9.24997 5.5V7.25Z"
        fill="#323544"
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
export class SvgPhotosIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
