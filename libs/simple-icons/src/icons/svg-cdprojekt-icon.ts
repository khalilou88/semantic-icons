import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cdprojekt-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>CD Projekt</title>
      <path
        d="M18.942,20.154c-0.687,0.323-1.719,0.302-2.986-0.072l0.213,0.547l-0.389-0.226l-1.537-0.907h0.001 l-0.033-0.158C14.783,19.509,17.746,20.507,18.942,20.154z M7.929,22.045c-0.127,0.229,0.179,0.645,0.179,0.645 c-0.687-0.534-1.276,0.346-1.276,0.346c-0.039-0.385,0.397-0.669,0.397-0.669c-0.715,0.113-1.549,0.78-1.549,0.78 c-0.097-0.333,0.319-0.556,0.319-0.556c0-0.263,0.361-0.236,0.763-0.347c0.272-0.074,0.679-0.186,0.919-0.252 c0.005-0.004,0.007-0.01,0.011-0.013c0-0.002,0.303-0.348,0.671-0.745c0.291-0.31,0.614-0.648,0.868-0.88 c0.118,0.018,0.226,0.031,0.294,0.037c-0.243,0.199-0.651,0.62-0.999,0.994C8.266,21.665,8.039,21.921,7.929,22.045z M10.168,14.083 l8.822,6.05c-0.013,0.007-0.029,0.011-0.042,0.018c-0.008-0.004-0.163-0.064-0.328-0.129c-0.081-0.033-0.178-0.072-0.29-0.118 h-0.001c-0.005-0.002-0.012-0.005-0.019-0.009c-0.772-0.317-2.27-0.951-4.634-2.041c-2.4-1.112-3.815-1.798-5.028-2.388l0.001,0.002 c0,0-0.001-0.002-0.002-0.002l4.363,3.974l0.006,0.004l0.011,0.011h0.002l0.256,0.211l-1.153,0.348 c-0.001-0.006-0.005-0.013-0.006-0.018c-0.006-0.016-0.011-0.033-0.017-0.051c-0.003-0.008-0.006-0.017-0.009-0.025 c-0.006-0.017-0.012-0.033-0.018-0.05c-0.003-0.007-0.006-0.015-0.009-0.023c-0.011-0.023-0.021-0.047-0.032-0.073l-0.202,0.094 c0.09,0.197,0.121,0.356,0.121,0.482c-0.001,0.16-0.064,0.282-0.109,0.353c-0.025,0.037-0.07,0.086-0.071,0.086l0.064,0.088 c-0.004,0.011-0.008,0.023-0.014,0.035c-0.341,0.545-0.652,1.308-0.786,1.653c-0.044,0.114-0.069,0.183-0.069,0.183 c0,0,0,0.002-0.001,0.005c0.227,0.009,0.767,0.073,0.627,0.504l-0.122,0.444c-0.268-0.478-0.154-0.606-0.154-0.606 C10.544,22.894,8.968,24,8.968,24c0.052-0.411,0.506-0.697,0.768-0.847c-0.221-0.026-0.494,0.165-0.64,0.283 c0.137-0.27,0.335-0.433,0.539-0.522c-0.002-0.002-0.002-0.002-0.003-0.004c0.359-0.135,0.712-0.069,0.753-0.029l-0.002,0.001 c0.122-0.038,0.131-0.043,0.241-0.068c0.036-0.026,0.071-0.112,0.088-0.158c0.001-0.005,0.363-1.014,0.81-1.774 c-0.217-0.021-0.388-0.274-0.388-0.581c0-0.018,0.001-0.037,0.002-0.055c-0.475,0.069-0.973,0.088-1.484,0.043 c-0.016,0-0.032-0.003-0.049-0.005c0,0.001,0,0.001,0,0.001c-0.024-0.002-0.131-0.012-0.262-0.029 c-0.945-0.128-1.803-0.45-2.507-0.911l0.002,0.01c0,0-1.279-0.682-1.551-2.233l-0.309,0.195c0-1.39,0.238-2.365,0.563-3.111 l-0.38,0.037l0.38-0.534c-0.05,0.103-0.096,0.212-0.143,0.332l0.233-0.039l0-.002c0.047-0.096,0.092-0.184,0.138-0.27 c0.092-0.169,0.188-0.328,0.295-0.484c0.024-0.035,0.069-0.098,0.111-0.152c0.062-0.08,0.147-0.179,0.204-0.245 c0.051-0.06,0.166-0.172,0.22-0.221c0.041-0.037,0.114-0.096,0.147-0.12l-0.229,1.072c0.669-0.832,1.912-2.075,2.535-2.665 c-0.118-0.222-0.248-0.418-0.386-0.581L8.08,10.763l-0.025,0.019c0,0-0.416,0.314-0.565,0.412c-0.409,0.267-0.706-0.07-0.722-0.09 c0.088,0.074,0.201,0.12,0.328,0.12c0.14,0,0.267-0.055,0.357-0.144c0.092-0.088,0.147-0.209,0.147-0.343 c0-0.068-0.014-0.132-0.038-0.191c-0.044-0.097-0.12-0.178-0.214-0.23H7.35c0,0-0.104-0.06-0.082-0.158 c0.022-0.099,0.206-0.291,0.206-0.291l0.225-0.229l0.36-0.367l0.777-0.79c0.047-0.052,0.077-0.087,0.077-0.087L8.231,8.686 L8.229,8.68c0-0.009,0.006-0.037,0.053-0.123c0.065-0.119,0.22-0.335,0.224-0.343l0.001-0.001L7.242,9.117c0-0.001,0-0.001,0-0.002 c0.074-0.35,0.824-1.365,0.858-1.412L7.27,8.464c0-0.002-0.001-0.004-0.003-0.006C7.224,8.2,7.638,7.317,7.695,7.197 C7.697,7.193,7.698,7.19,7.7,7.187C7.398,7.488,7.18,7.815,7.173,7.823c0-0.291,0.223-0.709,0.223-0.709 C7.332,7.176,7.272,7.242,7.214,7.307C6.346,8.285,6.095,9.429,6.027,9.873c0,0,0,0.001-0.001,0.001 C5.881,9.963,5.97,9.854,5.9,10.022c-0.256,0.073-0.47,0.202-0.642,0.346c-0.287,0.237-0.459,0.511-0.513,0.605 c0.034-0.043,0.07-0.083,0.105-0.119C5.38,10.3,5.992,10.36,5.992,10.36s0.682,1.26,0.542,1.405 c-0.015,0.015-0.039,0.017-0.072,0.006c-0.09-0.031-0.149-0.017-0.182,0.024c-0.105,0.117-0.009,0.454-0.008,0.462l-1.809-0.778 c0.858-0.318,1.47-0.1,1.47-0.1c0,0.212,0.48,0.184,0.48,0.184l0-.001h0.001c0-0.196-0.365-0.43-0.365-0.43 s-0.327,0.136-0.716,0c-0.077-0.027-0.161-0.038-0.242-0.034C5.02,11.1,4.946,11.115,4.874,11.136 c-0.206,0.059-0.357,0.174-0.357,0.174v-0.001L4.515,11.31l1.131-4.139l0.119,1.591L8.06,3.367l0.039,4.037L14.354,0l-3.847,8.316 l0.023,0.041l2.713-1.954l-0.573,1.149l3.793-1.481l-3.539,2.585l6.612-0.81l-8.021,3.471l4.105-1.001L10.168,14.083z M11.512,11.319l0.001,0l-0.001-0.004C11.512,11.316,11.512,11.317,11.512,11.319z M9.515,12.181 c-0.095-0.395-0.223-0.757-0.371-1.076L8.2,13.182L9.515,12.181z M7.215,11.087c0.208-0.071,0.314-0.308,0.239-0.529l-0.208,0.071 c0.013,0.031,0.022,0.064,0.022,0.099c0,0.031-0.005,0.06-0.017,0.086l0.095,0.057c-0.032,0.051-0.081,0.095-0.141,0.12 c-0.036,0.016-0.074,0.022-0.112,0.022c-0.122,0-0.236-0.074-0.286-0.195c-0.004-0.01-0.01-0.022-0.012-0.034l-0.092,0.03 C6.778,11.038,7.008,11.158,7.215,11.087z"
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
export class SvgCdprojektIcon {
  readonly class = input<string>('');
}
