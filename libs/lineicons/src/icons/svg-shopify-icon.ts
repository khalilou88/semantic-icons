import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-shopify-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.6253 4.49867C14.9986 4.37333 15.2493 4.37333 15.2493 4.37333L14.5026 22L3.25195 19.8747C3.25195 19.8747 4.75062 8.50134 4.75062 8.12534C4.75062 7.62666 4.75062 7.62666 5.37464 7.376C5.42904 7.376 5.57751 7.32872 5.80998 7.25472C6.11283 7.15828 6.55823 7.01647 7.12395 6.87466C7.49995 5.25066 8.75064 2 11.3746 2C11.7506 2 12.124 2.12267 12.3746 2.624H12.5C13.6253 2.624 14.2493 3.49867 14.6253 4.49867ZM11.0827 5.63556C11.5209 5.50206 11.9741 5.364 12.3746 5.12267C12.3746 4.37334 12.2493 3.87201 12.124 3.37067C11.5 3.62134 10.7506 4.37067 10.3746 5.872C10.5981 5.78316 10.8381 5.71006 11.0827 5.63556ZM11.6253 2.87467C11.5 2.74933 11.3746 2.74933 11.2493 2.74933C9.49729 2.74933 8.37464 5.12267 7.99864 6.62666C8.24929 6.564 8.49929 6.47 8.74929 6.376C8.99929 6.282 9.24929 6.188 9.49998 6.12534C9.87598 4.12533 10.876 3.25067 11.6253 2.87467ZM10.2493 10.9973C10.9986 10.9973 11.748 11.3733 11.748 11.3733L12.2466 9.12534C12.2466 9.12534 11.748 8.87466 10.748 8.87466C7.99864 8.87466 6.74795 10.624 6.74795 12.4987C6.74795 13.7599 7.45642 14.3135 8.07839 14.7996C8.56498 15.1798 8.99864 15.5187 8.99864 16.1227C8.99864 16.3707 8.87329 16.872 8.24929 16.872C7.37464 16.872 6.37464 15.9973 6.37464 15.9973L5.87329 17.7467C5.87329 17.7467 6.87329 18.9973 8.87329 18.9973C10.4973 18.9973 11.748 17.7467 11.748 15.872C11.748 14.3415 10.7165 13.6074 9.91714 13.0385C9.41145 12.6786 8.99864 12.3848 8.99864 11.9973C8.99864 11.7467 8.99864 10.9973 10.2493 10.9973ZM12.748 3.37067C12.8733 3.74667 12.9986 4.248 12.9986 4.872V4.99733C13.1866 4.99733 13.3426 4.966 13.4986 4.93467C13.6546 4.90333 13.8106 4.872 13.9986 4.872C13.748 4.12 13.372 3.37067 12.748 3.37067ZM18.372 5.74666C18.4973 5.74666 18.6226 5.74666 18.6226 5.872C18.6226 5.935 19.1597 9.66244 19.6939 13.3698C20.2224 17.0376 20.748 20.6857 20.748 20.7467L14.748 21.9973L15.4973 4.49867H15.6226C15.748 4.624 16.748 5.62134 16.748 5.62134C16.748 5.62134 18.2466 5.74666 18.372 5.74666Z"
        fill="#323544"
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
export class SvgShopifyIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
