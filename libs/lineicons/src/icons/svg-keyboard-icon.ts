import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-keyboard-icon',
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
        d="M6.44141 8.19219C5.99958 8.19219 5.64141 8.55036 5.64141 8.99219C5.64141 9.43402 5.99958 9.79219 6.44141 9.79219H6.45141C6.89323 9.79219 7.25141 9.43402 7.25141 8.99219C7.25141 8.55036 6.89323 8.19219 6.45141 8.19219H6.44141Z"
        fill="#323544"
      />
      <path
        d="M5.63945 12.3672C5.63945 11.9254 5.99763 11.5672 6.43945 11.5672H6.44945C6.89128 11.5672 7.24945 11.9254 7.24945 12.3672C7.24945 12.809 6.89128 13.1672 6.44945 13.1672H6.43945C5.99763 13.1672 5.63945 12.809 5.63945 12.3672Z"
        fill="#323544"
      />
      <path
        d="M10.1445 8.19219C9.7027 8.19219 9.34453 8.55036 9.34453 8.99219C9.34453 9.43402 9.7027 9.79219 10.1445 9.79219H10.1545C10.5964 9.79219 10.9545 9.43402 10.9545 8.99219C10.9545 8.55036 10.5964 8.19219 10.1545 8.19219H10.1445Z"
        fill="#323544"
      />
      <path
        d="M9.3582 12.3672C9.3582 11.9254 9.71638 11.5672 10.1582 11.5672H10.1682C10.61 11.5672 10.9682 11.9254 10.9682 12.3672C10.9682 12.809 10.61 13.1672 10.1682 13.1672H10.1582C9.71638 13.1672 9.3582 12.809 9.3582 12.3672Z"
        fill="#323544"
      />
      <path
        d="M8 14.9922C7.58579 14.9922 7.25 15.328 7.25 15.7422C7.25 16.1564 7.58579 16.4922 8 16.4922H16C16.4142 16.4922 16.75 16.1564 16.75 15.7422C16.75 15.328 16.4142 14.9922 16 14.9922H8Z"
        fill="#323544"
      />
      <path
        d="M13.0457 8.99219C13.0457 8.55036 13.4039 8.19219 13.8457 8.19219H13.8557C14.2975 8.19219 14.6557 8.55036 14.6557 8.99219C14.6557 9.43402 14.2975 9.79219 13.8557 9.79219H13.8457C13.4039 9.79219 13.0457 9.43402 13.0457 8.99219Z"
        fill="#323544"
      />
      <path
        d="M17.5479 8.19219C17.106 8.19219 16.7479 8.55036 16.7479 8.99219C16.7479 9.43402 17.106 9.79219 17.5479 9.79219H17.5579C17.9997 9.79219 18.3579 9.43402 18.3579 8.99219C18.3579 8.55036 17.9997 8.19219 17.5579 8.19219H17.5479Z"
        fill="#323544"
      />
      <path
        d="M13.0369 12.3672C13.0369 11.9254 13.3951 11.5672 13.8369 11.5672H13.8469C14.2887 11.5672 14.6469 11.9254 14.6469 12.3672C14.6469 12.809 14.2887 13.1672 13.8469 13.1672H13.8369C13.3951 13.1672 13.0369 12.809 13.0369 12.3672Z"
        fill="#323544"
      />
      <path
        d="M17.5557 11.5672C17.1138 11.5672 16.7557 11.9254 16.7557 12.3672C16.7557 12.809 17.1138 13.1672 17.5557 13.1672H17.5657C18.0075 13.1672 18.3657 12.809 18.3657 12.3672C18.3657 11.9254 18.0075 11.5672 17.5657 11.5672H17.5557Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.25 4.86719C3.00736 4.86719 2 5.87455 2 7.11719V17.6172C2 18.8598 3.00736 19.8672 4.25 19.8672H19.7501C20.9927 19.8672 22.0001 18.8598 22.0001 17.6172V7.11719C22.0001 5.87455 20.9927 4.86719 19.7501 4.86719H4.25ZM3.5 7.11719C3.5 6.70297 3.83579 6.36719 4.25 6.36719H19.7501C20.1643 6.36719 20.5001 6.70297 20.5001 7.11719V17.6172C20.5001 18.0314 20.1643 18.3672 19.7501 18.3672H4.25C3.83579 18.3672 3.5 18.0314 3.5 17.6172V7.11719Z"
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
export class SvgKeyboardIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
