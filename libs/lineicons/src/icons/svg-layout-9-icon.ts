import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-layout-9-icon',
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
        d="M5.52344 3.25C4.2808 3.25 3.27344 4.25736 3.27344 5.5V18.5C3.27344 19.7426 4.2808 20.75 5.52344 20.75H18.5234C19.7661 20.75 20.7734 19.7426 20.7734 18.5V5.5C20.7734 4.25736 19.7661 3.25 18.5234 3.25H5.52344ZM4.77344 5.5C4.77344 5.08579 5.10922 4.75 5.52344 4.75H18.5234C18.9377 4.75 19.2734 5.08579 19.2734 5.5V8.58301L4.77344 8.58301V5.5ZM4.77344 10.083H8.60645L8.60645 19.25H5.52344C5.10922 19.25 4.77344 18.9142 4.77344 18.5V10.083ZM10.1064 10.083L19.2734 10.083V13.916H10.1064V10.083ZM10.1064 15.416H19.2734V18.5C19.2734 18.9142 18.9377 19.25 18.5234 19.25H10.1064V15.416Z"
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
export class SvgLayout9Icon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
