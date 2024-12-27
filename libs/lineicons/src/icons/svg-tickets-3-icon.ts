import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-tickets-3-icon',
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
        d="M9.57041 6.89746C10.0675 6.89746 10.4704 7.3004 10.4704 7.79746C10.4704 8.29452 10.0675 8.69756 9.57041 8.69756C9.07335 8.69756 8.67041 8.29462 8.67041 7.79756C8.67041 7.3005 9.07335 6.89746 9.57041 6.89746Z"
        fill="#323544"
      />
      <path
        d="M10.4704 10.5982C10.4704 10.1012 10.0675 9.69824 9.57041 9.69824C9.07335 9.69824 8.67041 10.1012 8.67041 10.5982C8.67041 11.0953 9.07335 11.4983 9.57041 11.4983C10.0675 11.4983 10.4704 11.0953 10.4704 10.5982Z"
        fill="#323544"
      />
      <path
        d="M9.57041 12.498C10.0675 12.498 10.4704 12.901 10.4704 13.398C10.4704 13.8951 10.0675 14.2981 9.57041 14.2981C9.07335 14.2981 8.67041 13.8952 8.67041 13.3981C8.67041 12.9011 9.07335 12.498 9.57041 12.498Z"
        fill="#323544"
      />
      <path
        d="M10.4704 16.1979C10.4704 15.7008 10.0675 15.2979 9.57041 15.2979C9.07335 15.2979 8.67041 15.7008 8.67041 16.1979C8.67041 16.6949 9.07335 17.098 9.57041 17.098C10.0675 17.098 10.4704 16.6949 10.4704 16.1979Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.91879 5.06641C4.91879 4.65219 5.25457 4.31641 5.66879 4.31641H18.3321C18.7464 4.31641 19.0821 4.65219 19.0821 5.06641C19.0821 6.4019 20.1647 7.48485 21.5001 7.48507C21.9143 7.48514 22.25 7.8209 22.25 8.23507V15.7627C22.25 16.1769 21.9143 16.5126 21.5001 16.5127C20.1646 16.5129 19.082 17.5955 19.082 18.9311C19.082 19.3453 18.7462 19.6813 18.332 19.6813H5.66879C5.25457 19.6813 4.91879 19.3455 4.91879 18.9313C4.91879 17.5956 3.83604 16.5127 2.50041 16.5127C2.0862 16.5127 1.75 16.1769 1.75 15.7627V8.23519C1.75 7.82098 2.08579 7.48519 2.5 7.48519C3.83563 7.48519 4.91879 6.40204 4.91879 5.06641ZM6.34717 5.81641C6.0444 7.37927 4.81287 8.61081 3.25 8.91357V15.0843C4.8128 15.3871 6.04429 16.6185 6.34713 18.1813H17.6537C17.9565 16.6188 19.1876 15.3875 20.75 15.0845V8.91327C19.1876 8.6102 17.9565 7.3789 17.6538 5.81641H6.34717Z"
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
export class SvgTickets3Icon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
