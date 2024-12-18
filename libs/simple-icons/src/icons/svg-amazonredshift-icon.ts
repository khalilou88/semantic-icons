import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-amazonredshift-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Amazon Redshift</title>
      <path
        d="M16.639 9.932a.822.822 0 0 1-.822-.82.823.823 0 0 1 1.645 0c0 .452-.37.82-.823.82m-2.086 4.994a.823.823 0 0 1-.822-.822.822.822 0 0 1 1.645 0 .822.822 0 0 1-.823.822m-5.004-.833a.822.822 0 1 1 .002-1.644.822.822 0 0 1-.002 1.644m-2.083 4.578a.823.823 0 0 1-.823-.82.823.823 0 0 1 1.645 0c0 .452-.37.82-.822.82m9.173-11.236a1.68 1.68 0 0 0-1.68 1.676c0 .566.285 1.066.718 1.37l-.782 1.982a1.674 1.674 0 0 0-1.923 1.104l-1.753-.398a1.675 1.675 0 0 0-3.348.103c0 .432.169.823.438 1.12l-.764 1.79c-.028-.001-.053-.008-.08-.008a1.68 1.68 0 0 0-1.68 1.676 1.68 1.68 0 0 0 3.36 0c0-.593-.312-1.112-.778-1.41l.674-1.579c.161.052.33.088.508.088.661 0 1.228-.386 1.502-.94l1.856.42a1.68 1.68 0 0 0 3.327-.325c0-.5-.224-.943-.574-1.25l.822-2.083c.053.005.104.016.157.016a1.68 1.68 0 0 0 1.68-1.676 1.68 1.68 0 0 0-1.68-1.676M12 23.145c-4.17 0-7.286-1.252-7.286-2.37V4.79C6.14 5.938 9.131 6.547 12 6.547c2.869 0 5.86-.609 7.286-1.756v15.983c0 1.12-3.116 2.37-7.286 2.37M12 .856c4.293 0 7.286 1.274 7.286 2.419 0 1.143-2.993 2.418-7.286 2.418-4.293 0-7.286-1.275-7.286-2.418C4.714 2.129 7.707.855 12 .855m8.143 2.419C20.143 1.147 15.947 0 12 0 8.052 0 3.857 1.147 3.857 3.274l.002.01h-.002v17.49C3.857 22.87 8.052 24 12 24c3.947 0 8.143-1.13 8.143-3.226V3.284h-.002l.002-.01"
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
export class SvgAmazonredshiftIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
