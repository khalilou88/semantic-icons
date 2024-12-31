import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-blockbench-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Blockbench</title>
      <path
        d="M23.651 3.277c-.25.002-1.009.057-3.47.226l-9.113.627c-3.044.208-2.743.18-2.888.27-.163.102-.254.274-.308.58-.451 2.177-.812 3.74-1.104 5.007-.015.04-.046.178-.07.306-.038.218-.037.239.012.307.105.144.23.176 1.14.294 4.78.63 8.905 1.164 13.412 1.765.931.124.948.125.99.022.032-.081.091-.36.207-.971.476-2.468 1.03-5.366 1.433-7.42.126-.642.132-.712.069-.82a.507.507 0 0 0-.153-.153c-.04-.024-.007-.042-.157-.04zM5.65 11.31c-.161.025-1.416.205-2.79.4-1.373.194-2.554.374-2.624.399-.21.076-.294.285-.194.478.062.12.215.19.7.324.065.018.15.043.19.056 4.54 1.274 9.338 2.68 13.583 3.888.238.071.563.197.77.197.157-.042 1.053-.484 3.082-1.505 1.649-.83 3.022-1.53 3.052-1.555.113-.099.173-.31.113-.402-.012-.018-.173-.055-.357-.082-3.949-.579-8.122-1.19-11.684-1.71-2.014-.29-2.635-.384-2.804-.422a3.329 3.329 0 0 0-.647-.09 2.254 2.254 0 0 0-.39.024zM4.32 14.55h-.016c-.054.011-1.122 2.303-1.122 2.407 0 .107.076.238.168.287.101.055.165.056.312.005.445-.139.918-.293 1.36-.425 1.316-.395 1.337-.403 1.477-.549.115-.12.328-.562.39-.811a.803.803 0 0 1 .057-.154c.02-.035.03-.065.024-.065-.768-.198-1.565-.415-2.292-.614a2.947 2.947 0 0 0-.358-.081zm13.52 1.843c-.07.04-.271.155-.448.254-.481.291-.937.593-1.446.833-.413.259-.594.315-.801.248a9.005 9.005 0 0 0-.786-.204.076.076 0 0 0-.067.05c-.23.643-.507 1.395-.74 2.053-.086.232-.236.767-.234.832.002.064.142.196.25.236a.551.551 0 0 0 .231.027c1.257-.51 2.215-1.15 3.284-1.71.327-.171.447-.29.494-.492.094-.407.182-.808.269-1.2.183-.812.194-.888.148-.961a.038.038 0 0 0-.035-.02c-.054.012-.08.036-.118.054z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBlockbenchIcon {
  readonly class = input<string>('');
}
