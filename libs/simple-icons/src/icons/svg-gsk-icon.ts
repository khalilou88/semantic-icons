import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gsk-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GSK</title>
      <path
        d="M16.769 13.5v2.114h1.49V12.3c0-.15.115-.174.2-.093l3.512 3.408H24L20.279 12 24 8.384h-2.034l-3.512 3.408c-.081.081-.2.058-.2-.093V8.384h-1.485v2.125c0 .763.5 1.225 1.386 1.468.035.011.035.046 0 .057-.89.243-1.386.705-1.386 1.466ZM8.323 11.191c0 .924.774 1.5 1.825 1.5h3.535a.388.388 0 0 1 .416.416v.6a.388.388 0 0 1-.416.416H8.7v1.49h5.014a1.793 1.793 0 0 0 1.837-1.838v-.657a1.791 1.791 0 0 0-1.836-1.837H10.2a.388.388 0 0 1-.416-.416v-.717a.255.255 0 0 1 .277-.277h4.9V8.384H10.76a1.011 1.011 0 0 0-1.016 1V9.8a.067.067 0 0 1-.065.069h-.005a1.269 1.269 0 0 0-1.351 1.322ZM6.666 11.284H4.274v.448a.957.957 0 0 0 .951.962h.585v1.155a.278.278 0 0 1-.278.277H1.907a.416.416 0 0 1-.416-.416v-3.42a.415.415 0 0 1 .415-.416H5.8v-1.49h-4a1.8 1.8 0 0 0-1.8 1.8v3.635a1.8 1.8 0 0 0 1.8 1.8h3.017A1.018 1.018 0 0 0 5.834 14.6v-.4a.067.067 0 0 1 .065-.07c.808-.023 1.328-.416 1.328-1.1v-1.746Z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
      color: currentColor;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgGskIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
