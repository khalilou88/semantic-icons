import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-coffee-cup-2-icon',
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
        d="M15.9688 4C15.9688 3.58579 15.633 3.25 15.2188 3.25C14.8045 3.25 14.4688 3.58579 14.4688 4V5.75C14.4688 6.16421 14.8045 6.5 15.2188 6.5C15.633 6.5 15.9688 6.16421 15.9688 5.75V4Z"
        fill="#323544"
      />
      <path
        d="M4 7.25C3.80109 7.25 3.61032 7.32902 3.46967 7.46967C3.32902 7.61032 3.25 7.80109 3.25 8V13.25C3.25 15.7034 4.42801 17.8817 6.24927 19.25H4C3.58579 19.25 3.25 19.5858 3.25 20C3.25 20.4142 3.58579 20.75 4 20.75L17.5 20.75C17.9142 20.75 18.25 20.4142 18.25 20C18.25 19.5858 17.9142 19.25 17.5 19.25H15.2507C15.9006 18.7617 16.4687 18.1703 16.9304 17.5H17C19.4853 17.5 21.5 15.4853 21.5 13V11.75C21.5 10.5074 20.4926 9.5 19.25 9.5H18.25V8C18.25 7.58579 17.9142 7.25 17.5 7.25H4ZM16.75 13.25C16.75 16.5637 14.0637 19.25 10.75 19.25C7.43629 19.25 4.75 16.5637 4.75 13.25V8.75H16.75V13.25ZM18.25 11H19.25C19.6642 11 20 11.3358 20 11.75V13C20 14.3913 19.0528 15.5615 17.7681 15.9008C18.0796 15.0766 18.25 14.1832 18.25 13.25V11Z"
        fill="#323544"
      />
      <path
        d="M10.75 3.25C11.1642 3.25 11.5 3.58579 11.5 4V5.75C11.5 6.16421 11.1642 6.5 10.75 6.5C10.3358 6.5 10 6.16421 10 5.75V4C10 3.58579 10.3358 3.25 10.75 3.25Z"
        fill="#323544"
      />
      <path
        d="M7.03125 4C7.03125 3.58579 6.69546 3.25 6.28125 3.25C5.86704 3.25 5.53125 3.58579 5.53125 4V5.75C5.53125 6.16421 5.86704 6.5 6.28125 6.5C6.69546 6.5 7.03125 6.16421 7.03125 5.75V4Z"
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
export class SvgCoffeeCup2Icon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
