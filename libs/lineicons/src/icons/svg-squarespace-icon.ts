import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-squarespace-icon',
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
        d="M9.28595 15.425C8.93054 15.7804 8.93054 16.4266 9.28595 16.782C9.64136 17.1375 10.2876 17.1375 10.643 16.782L16.7819 10.6431C17.5574 9.86767 18.7528 9.86767 19.496 10.6431C20.2714 11.4186 20.2714 12.614 19.496 13.3572L13.4863 19.3992C14.2617 20.1746 15.4572 20.1746 16.2003 19.3992L20.8853 14.7142C22.3716 13.2279 22.3716 10.7724 20.8853 9.22147C19.399 7.7352 16.9435 7.7352 15.3926 9.22147L9.28595 15.425ZM18.8498 11.3216C18.4943 10.9662 17.8481 10.9662 17.4927 11.3216L11.3538 17.4929C10.5784 18.2683 9.38288 18.2683 8.63975 17.4929C8.28433 17.1375 7.63813 17.1375 7.28272 17.4929C6.92731 17.8483 6.92731 18.4945 7.28272 18.8499C8.76899 20.3362 11.2246 20.3362 12.7754 18.8499L18.8821 12.711C19.2052 12.3232 19.2052 11.677 18.8498 11.3216ZM8.60743 14.7142L14.7464 8.57526C15.1018 8.21985 15.1018 7.57365 14.7464 7.21824C14.391 6.86283 13.7448 6.86283 13.3893 7.21824L7.2181 13.3572C6.44265 14.1326 5.24718 14.1326 4.50404 13.3572C3.72859 12.5817 3.72859 11.3539 4.50404 10.5785L10.5137 4.60111C9.73829 3.82567 8.54281 3.82567 7.79968 4.60111L3.1147 9.28609C1.62843 10.7724 1.62843 13.2279 3.1147 14.7788C4.60097 16.2651 7.12117 16.2651 8.60743 14.7142ZM5.21487 12.6787C5.57028 13.0341 6.21648 13.0341 6.57189 12.6787L12.7431 6.53972C13.5186 5.76428 14.7141 5.76428 15.4572 6.53972C15.8126 6.89514 16.4588 6.89514 16.8142 6.53972C17.1696 6.18431 17.1696 5.53811 16.8142 5.1827C15.3279 3.69643 12.8724 3.69643 11.3215 5.1827L5.18256 11.3216C4.79483 11.677 4.79483 12.3232 5.21487 12.6787Z"
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
export class SvgSquarespaceIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
