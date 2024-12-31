import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cbc-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>CBC</title>
      <path
        d="M12 0c-1.5673 0-2.9376.8395-3.6855 2.0938l7.369.0019C14.9357.8402 13.5676 0 12 0zm0 2.7676c-2.3692 0-4.291 1.9188-4.291 4.287h8.5781c0-2.3682-1.9191-4.287-4.2871-4.287zm-4.9531.209c-2.2507 0-4.0762 1.8241-4.0762 4.0742h4.0762V2.9766zm9.9043.002v4.0722l4.0722.002c0-2.2501-1.8234-4.0743-4.0722-4.0743zM7.0469 7.709c-2.3698 0-4.289 1.9224-4.289 4.291 0 2.368 1.9189 4.2871 4.289 4.2871V7.709zm9.9043 0v8.5781c2.3682 0 4.291-1.9191 4.291-4.2871 0-2.3686-1.9228-4.291-4.291-4.291zm-4.9551.002C9.6278 7.711 7.709 9.6316 7.709 12c0 2.3686 1.9188 4.2871 4.287 4.2871 2.3684 0 4.2892-1.9185 4.2892-4.2871 0-2.3683-1.9208-4.289-4.2891-4.289zm-9.9004.6035C.8399 9.062 0 10.4327 0 12c0 1.5666.8398 2.9364 2.0938 3.6855l.0019-7.371zm19.8086 0 .002 7.371C23.1595 14.9364 24 13.5666 24 12c0-1.5673-.8402-2.9379-2.0957-3.6855zM7.0469 16.9492l-4.0742.002c0 2.2491 1.8222 4.0703 4.0742 4.0703v-4.0723zm9.9043 0v4.0703c2.2485 0 4.0722-1.8189 4.0722-4.0683l-4.0722-.002zm-9.2422.002c0 2.3692 1.9218 4.289 4.291 4.289 2.368 0 4.2871-1.9198 4.2871-4.289H7.709zm.5488 4.9531C9.0061 23.1592 10.3755 24 11.9434 24c1.5672 0 2.9366-.8408 3.6855-2.0957H8.258z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCbcIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
