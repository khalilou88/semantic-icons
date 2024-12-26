import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-gstreamer-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GStreamer</title>
      <path
        d="M17.091 14.055c-.029-.586.226-1.949.811-1.82.25.055.181.399.1.77-.11.502-.3 1.049-.3 1.049s.714.028.7 0c.071-.9.26-1.878.785-1.805.435.061-.124 1.805-.124 1.805h.65c-.023-.296.136-.985.226-1.483.09-.498-.101-.716-.502-.72s-.798.347-.798.347c.016-.3-.38-.347-.38-.347-.421-.027-.826.257-.826.257l.038-.22h-.636s-.032.35-.16.99c-.129.638-.3 1.176-.3 1.176h.716zm4.354-2.22c-.87 0-1.259.614-1.259 1.242s.371 1.042 1.128 1.042c.355 0 .556-.328.556-.328s.012-.09-.055-.053c-.067.038-.25.116-.49.116s-.497-.227-.497-.791h1.37c.072-.229.118-1.229-.753-1.229zm.127.974h-.665c0-.46.368-.806.618-.683.228.106.047.683.047.683zm-8.306-.975c-.871 0-1.26.615-1.26 1.243s.372 1.042 1.128 1.042c.356 0 .557-.328.557-.328s.012-.09-.056-.053c-.067.038-.25.116-.489.116s-.497-.227-.497-.791h1.37c.072-.229.118-1.229-.753-1.229zm.127.975h-.665c0-.46.31-.757.56-.634.228.106.105.634.105.634zm9.623 1.28h-.703s.41-1.472.446-2.194c-.006.006.609 0 .609 0s-.053.163-.076.305c.174-.193.233-.366.705-.366.006 0 0 .609 0 .609s-.44-.11-.6.049c-.158.158-.328.285-.381 1.597zm-12.12 0h-.702s.41-1.472.446-2.194c-.006.006.609 0 .609 0s-.053.163-.076.305c.174-.193.233-.366.705-.366.006 0 0 .609 0 .609s-.44-.11-.6.049c-.158.158-.328.285-.382 1.597zm-.856-2.95-.574.198-.132.535h-.366v.352h.289s-.308 1.103-.25 1.44c.057.366.414.443.626.433s.27-.164.26-.221-.299.055-.328-.205c-.02-.154.24-1.447.24-1.447h.454v-.352h-.357l.138-.734zm5.985 2.916c.085-.07.028-.21-.045-.228-.084-.172.173-1.178.173-1.454s-.462-.828-1.416-.308c-.092.059-.058.155-.036.187s.066.053.086.032c.09-.098.48-.2.663-.007.125.115.12.339.033.425-.106.01-1.15-.02-1.276.644-.216 1.18 1.107.558 1.175.51s.06.14.172.219c.301.026.412.03.471-.02zm-.66-.493c-.107.282-.505.24-.528.04-.086-.668.603-.618.603-.618s.032.296-.075.578zm-6.948-1.04.2-.337s-.163-.347-.644-.347-.758.347-.758.758.915.721.694 1.128c-.37.379-.76-.24-.753-.28-.028.04-.219.304-.21.304.047.092.214.385.75.392.444.005.712-.324.72-.73.01-.546-.785-.823-.794-1.072-.01-.25.527-.537.795.184zm-1.048-.803c-.085-.08-.15.027-.342.107-.193.08-.257.07-.45.043-.316-.07-.871-.049-1.017.022-.975.391-.452 1.116-.293 1.26-.001 0-.238.125-.272.32-.044.251.071.387.075.39-.319.017-.524.338-.474.6.053.283.39.508.872.51 1.02.022 1.072-.63 1.072-.63.14-.793-.533-.83-1.012-.792-.173-.155-.038-.3-.045-.3 1.619.039 1.211-1.041 1.211-1.041.273-.067.81-.36.675-.489zm-2.168 2.272c.634.114.89-.031.933.292.018.316-.25.406-.561.425-.311.02-.538-.138-.551-.34-.012-.203.164-.182.179-.377zm.98-1.38c-.06.26-.239.44-.402.404-.163-.037-.248-.277-.19-.537.06-.26.239-.44.402-.403.163.037.248.277.19.537zM4.037 9.475c-.464 0-1.142-.378-1.802-.378s-1.055.378-1.124.43c-.069.05-.112.248.094.188.206-.06.378-.06.704-.06s1.107.446 1.896.446 1.45-.609 1.596-.823c.145-.215.008-.284-.103-.232-.112.051-.832.429-1.261.429zm2.012 1.175c-.487 0-1.199-.377-1.893-.377s-1.108.377-1.18.429c-.073.051-.118.248.099.188.216-.06.396-.06.739-.06.342 0 1.162.446 1.992.446s1.523-.609 1.676-.823c.153-.215.009-.283-.108-.232s-.874.43-1.325.43zm-2.8 1.297c-.506 0-1.244-.408-1.964-.408s-1.15.408-1.224.464-.122.268.103.203c.224-.065.41-.065.766-.065s1.206.482 2.066.482c.86 0 1.58-.658 1.738-.89.16-.23.01-.305-.112-.25-.121.056-.906.464-1.374.464z"
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
export class SvgGstreamerIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
