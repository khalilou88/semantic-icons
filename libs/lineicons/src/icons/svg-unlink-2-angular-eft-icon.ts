import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-unlink-2-angular-eft-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9897 10.1811C14.7399 9.29704 14.6978 7.97043 13.8635 7.13607L10.1198 3.39241C9.24112 2.51373 7.8165 2.51373 6.93782 3.39241L3.1551 7.17512C2.27642 8.0538 2.27642 9.47842 3.1551 10.3571L6.89877 14.1008C7.73313 14.9351 9.05973 14.9772 9.94375 14.227L13.9897 10.1811ZM11.441 10.6192L10.1976 9.37584C9.90467 9.08295 9.42979 9.08295 9.1369 9.37584C8.84401 9.66874 8.84401 10.1436 9.1369 10.4365L10.3803 11.6799L9.02009 13.0401C8.7272 13.333 8.25232 13.333 7.95943 13.0401L4.21576 9.29644C3.92287 9.00355 3.92287 8.52868 4.21576 8.23578L7.99848 4.45307C8.29137 4.16018 8.76624 4.16017 9.05914 4.45307L12.8028 8.19673C13.0957 8.48963 13.0957 8.9645 12.8028 9.25739L11.441 10.6192Z"
        fill="#323544"
      />
      <path
        d="M13.5569 12.7352L12.4963 13.7959L12.5018 13.8014L11.1417 15.1615C10.263 16.0401 10.263 17.4648 11.1417 18.3434L14.8812 22.0829C15.7598 22.9616 17.1845 22.9616 18.0631 22.0829L21.8459 18.3001C22.7246 17.4215 22.7246 15.9968 21.8459 15.1182L18.1064 11.3787C17.2278 10.5 15.8031 10.5 14.9245 11.3787L13.5625 12.7407L13.5569 12.7352ZM12.2024 16.2221L13.5625 14.8621L14.7938 16.0934C15.0866 16.3862 15.5615 16.3862 15.8544 16.0934C16.1473 15.8005 16.1473 15.3256 15.8544 15.0327L14.6231 13.8014L15.9851 12.4394C16.278 12.1465 16.7529 12.1465 17.0458 12.4394L20.7852 16.1788C21.0781 16.4717 21.0781 16.9466 20.7852 17.2395L17.0025 21.0222C16.7096 21.3151 16.2347 21.3151 15.9418 21.0222L12.2024 17.2828C11.9095 16.9899 11.9095 16.515 12.2024 16.2221Z"
        fill="#323544"
      />
      <path
        d="M7.01549 22.1671C6.61539 22.0599 6.37795 21.6486 6.48516 21.2485L6.93859 19.5563C7.0458 19.1562 7.45705 18.9187 7.85715 19.0259C8.25725 19.1331 8.49469 19.5444 8.38748 19.9445L7.93404 21.6367C7.82684 22.0368 7.41559 22.2743 7.01549 22.1671Z"
        fill="#323544"
      />
      <path
        d="M3.65513 17.3578C3.25504 17.465 3.0176 17.8763 3.1248 18.2764C3.23201 18.6765 3.64326 18.9139 4.04336 18.8067L5.73562 18.3533C6.13572 18.2461 6.37316 17.8348 6.26595 17.4347C6.15874 17.0346 5.74749 16.7972 5.34739 16.9044L3.65513 17.3578Z"
        fill="#323544"
      />
      <path
        d="M21.9931 7.18894C21.8859 6.78884 21.4747 6.55141 21.0746 6.65861L19.3823 7.11205C18.9822 7.21926 18.7448 7.63051 18.852 8.03061C18.9592 8.43071 19.3704 8.66815 19.7705 8.56094L21.4628 8.1075C21.8629 8.00029 22.1003 7.58904 21.9931 7.18894Z"
        fill="#323544"
      />
      <path
        d="M17.1839 3.82859C17.2911 3.42849 17.7023 3.19105 18.1024 3.29826C18.5025 3.40547 18.74 3.81672 18.6328 4.21682L18.1793 5.90908C18.0721 6.30918 17.6609 6.54661 17.2608 6.43941C16.8607 6.3322 16.6232 5.92095 16.7304 5.52085L17.1839 3.82859Z"
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
export class SvgUnlink2AngularEftIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
