import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-photon-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Photon</title>
      <path
        d="m7.454 16.915-3.379 4.091a13.47 13.47 0 0 1-1.089-1.079l4.091-3.38c.123.116.252.246.377.368Zm1.045.809-2.517 4.679a11.334 11.334 0 0 1-1.281-.856l3.364-4.138c.357.262.434.262.434.315Zm-1.913-1.772-4.119 3.345a11.75 11.75 0 0 1-.856-1.277l4.682-2.518c.008.053.235.371.293.45ZM9.682 18.3l-1.558 5.063a12.111 12.111 0 0 1-1.419-.588l2.492-4.693c.416.192.478.177.485.217v.001ZM5.72 14.319c.059.163.125.324.198.481l-4.691 2.496a11.458 11.458 0 0 1-.589-1.423l5.082-1.554Zm5.23 4.292-.532 5.287a12.157 12.157 0 0 1-1.51-.315l1.532-5.073c.167.041.337.073.51.101Zm-5.56-5.56c.026.17.06.339.1.509L.402 15.09a11.897 11.897 0 0 1-.299-1.508l5.287-.531Zm-.079-1.306v.522l-5.286.513a11.623 11.623 0 0 1 0-1.539l5.286.504Zm6.948 6.942.51 5.29c-.513.03-1.026.03-1.539 0l.51-5.29c.173.007.346.007.519 0Zm2.832 4.912c-.496.137-1.001.242-1.51.315l-.532-5.287c.17-.026.343-.06.51-.1l1.532 5.072Zm-9.6-13.16c-.041.17-.076.339-.101.513l-5.286-.535c.067-.508.167-1.01.299-1.505l5.088 1.53v-.003Zm9.311 7.644 2.492 4.692c-.462.225-.937.422-1.423.588l-1.551-5.082c.16-.059.32-.125.482-.198ZM5.928 9.177a5.404 5.404 0 0 0-.201.481L.651 8.085c.168-.487.366-.962.595-1.423L5.928 9.18v-.003Zm10.003 8.232 3.364 4.126c-.409.311-.837.597-1.281.856L15.5 17.724c.148-.091.29-.186.431-.29v-.025ZM6.586 8.063a5.238 5.238 0 0 0-.29.431L1.617 5.976c.259-.443.545-.87.856-1.277l4.113 3.364Zm14.427 11.864a12.27 12.27 0 0 1-1.089 1.089l-3.379-4.101c.129-.116.245-.245.368-.368l4.1 3.38ZM4.075 2.987l3.379 4.091c-.129.115-.245.245-.368.368l-4.091-3.38c.688-.778 1.163-1.135 1.08-1.079Zm18.313 15.029a11.61 11.61 0 0 1-.856 1.281l-4.116-3.364a6.02 6.02 0 0 0 .29-.431l4.682 2.518v-.004ZM5.985 1.612l2.517 4.679a7.444 7.444 0 0 0-.434.29L4.704 2.468c.408-.314.835-.6 1.281-.856ZM23.36 15.873c-.163.487-.36.963-.588 1.423L18.08 14.8c.072-.157.138-.318.199-.481l5.081 1.554ZM8.137.633l1.548 5.085a5.78 5.78 0 0 0-.481.198L6.715 1.221A12.33 12.33 0 0 1 8.137.633Zm15.758 12.949a11.738 11.738 0 0 1-.315 1.508l-5.072-1.53c.041-.17.076-.339.101-.509l5.286.531ZM10.418.101l.532 5.287a7.537 7.537 0 0 0-.51.1L8.908.416a12.157 12.157 0 0 1 1.51-.315Zm13.556 11.131c.034.511.034 1.024 0 1.535l-5.286-.506v-.523l5.286-.506ZM12.769.022l-.51 5.29h-.519l-.51-5.29a13.17 13.17 0 0 1 1.539 0Zm10.827 8.89c.138.496.243.999.315 1.508l-5.286.535a6.368 6.368 0 0 0-.101-.513l5.072-1.53ZM15.1.416l-1.541 5.073a8.672 8.672 0 0 0-.51-.101l.532-5.287c.709.094 1.498.273 1.519.315Zm2.203.824-2.502 4.68a5.199 5.199 0 0 0-.481-.202L15.871.636c.745.255 1.413.572 1.432.604Zm5.466 5.47c.227.46.423.936.588 1.422l-5.078 1.573c-.06-.16-.129-.314-.202-.481l4.692-2.514Zm-6.854-.133a7.972 7.972 0 0 0-.434-.289l2.517-4.683c.446.257.874.543 1.281.856l-3.364 4.116Zm6.46-.613L17.7 8.481a6.825 6.825 0 0 0-.29-.434l4.11-3.367c0 .03.378.464.855 1.284Zm-1.362-1.892-4.091 3.383c-.113-.133-.245-.247-.368-.371l3.38-4.091c-.065-.044.476.387 1.079 1.079Z"
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
export class SvgPhotonIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
