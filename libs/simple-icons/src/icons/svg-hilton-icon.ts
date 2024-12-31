import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hilton-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Hilton</title>
      <path
        d="M0 7.544v8.912h24V7.544H0zm23.588 8.503H.406V7.95h23.182v8.097zM3.682 14.41h-1.62v-.249l.324-.044V9.873l-.324-.045v-.242h1.62v.242l-.324.045v1.813h2.107V9.873l-.355-.045v-.242h1.647v.242l-.334.045v4.244l.334.044v.25H5.11v-.25l.355-.044v-1.933H3.358v1.933l.324.044v.25zm5.298 0H7.466v-.218l.31-.044V11.24l-.31-.045v-.218h1.203v3.17l.31.045v.218zm2.171.004H9.638v-.215l.303-.041V9.845l-.303-.044V9.59h1.203v4.568l.31.04v.216zm.941-3.116h-.634v-.32h.658v-.717l.88-.262v.978h.807v.32h-.81v2.043c0 .528.108.695.589.695.177 0 .334 0 .48-.037v.235c-.436.153-.804.218-1.114.218-.696 0-.856-.314-.856-.914v-2.24zm3.924 3.214c1.139 0 1.861-.715 1.861-1.786 0-1.176-.678-1.844-1.803-1.844-1.139 0-1.861.74-1.861 1.844 0 1.32.702 1.786 1.803 1.786zm.024-3.364c.525 0 .849.474.849 1.558 0 1.111-.304 1.544-.85 1.544-.51 0-.834-.453-.834-1.544 0-1.105.323-1.558.835-1.558zm3.72 3.262h-1.521v-.218l.31-.044v-2.884l-.31-.045v-.242h1.21v.478c.375-.3.74-.543 1.248-.543.678 0 .981.396.981 1.173v2.066l.31.041v.218h-1.513v-.218l.303-.044v-1.954c0-.542-.2-.784-.613-.784-.191 0-.495.133-.716.287v2.45l.31.045v.218zM7.738 10.07a.487.487 0 0 1 .975 0 .487.487 0 0 1-.488.485.485.485 0 0 1-.487-.485z"
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
export class SvgHiltonIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
