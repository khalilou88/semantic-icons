import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-nationalgrid-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>National Grid</title>
      <path
        d="M0 11.06h.292v.415h.01c.106-.289.426-.485.764-.485.673 0 .877.355.877.928v1.547H1.65v-1.5c0-.415-.135-.728-.608-.728-.464 0-.742.355-.75.825v1.403H0zm2.467.736c.027-.563.422-.806.969-.806.422 0 .88.13.88.774v1.277c0 .112.056.177.172.177.033 0 .07-.01.093-.019v.247a.8.8 0 01-.19.019c-.297 0-.343-.168-.343-.42h-.01c-.204.313-.412.49-.871.49-.44 0-.803-.22-.803-.704 0-.676.655-.699 1.285-.773.241-.028.375-.061.375-.327 0-.396-.282-.494-.625-.494-.362 0-.63.168-.64.56zm1.557.355h-.008c-.038.07-.168.093-.246.107-.497.088-1.113.084-1.113.554 0 .294.26.476.533.476.445 0 .84-.285.834-.755zm1.443-1.091h.487v.247h-.487v1.622c0 .19.028.302.236.317.084 0 .167-.005.25-.015v.252c-.088 0-.171.01-.26.01-.388 0-.523-.13-.518-.541v-1.645h-.418v-.247h.418v-.722h.292zm1.308 2.405V11.06h-.293v2.405zm0-2.857v-.47h-.293v.47zm2.702 1.655c0 .69-.398 1.272-1.13 1.272-.734 0-1.132-.583-1.132-1.272 0-.69.398-1.273 1.131-1.273s1.131.583 1.131 1.273m-1.97 0c0 .512.278 1.025.84 1.025.56 0 .838-.513.838-1.025 0-.513-.278-1.026-.839-1.026-.56 0-.839.513-.839 1.026m2.401-1.203h.293v.415h.01c.106-.289.425-.485.764-.485.673 0 .877.355.877.928v1.547h-.292v-1.5c0-.415-.135-.728-.608-.728-.464 0-.742.355-.751.825v1.403h-.293zm2.467.736c.029-.563.422-.806.97-.806.421 0 .88.13.88.774v1.277c0 .112.056.177.172.177a.27.27 0 00.093-.019v.247a.804.804 0 01-.19.019c-.298 0-.344-.168-.344-.42h-.009c-.204.313-.412.49-.872.49-.44 0-.802-.22-.802-.704 0-.676.654-.699 1.285-.773.24-.028.375-.061.375-.327 0-.396-.283-.494-.626-.494-.361 0-.63.168-.64.56zm1.558.355h-.01c-.036.07-.166.093-.245.107-.496.088-1.113.084-1.113.554 0 .294.26.476.534.476.445 0 .839-.285.834-.755zm1.33 1.314v-3.328h-.291v3.328zm2.839-2.48v2.35c0 .428-.033 1.141-1.248 1.141-.51 0-1.047-.219-1.075-.746h.704c.028.126.08.252.455.252.347 0 .514-.168.514-.569v-.298l-.009-.009c-.106.191-.269.373-.658.373-.593 0-1.062-.415-1.062-1.282 0-.857.482-1.277 1.024-1.277.46 0 .645.27.724.434h.01v-.368zm-1.197 1.944c.441 0 .552-.378.552-.718 0-.4-.195-.727-.557-.727-.24 0-.51.178-.51.755 0 .317.13.69.515.69zm1.753-1.943h.62v.429h.01c.135-.252.283-.495.678-.495.041 0 .083.005.125.01v.661c-.056-.009-.125-.009-.186-.009-.505 0-.598.317-.598.592v1.29h-.649zm2.526 2.478v-2.495h-.648v2.495zm-.802-3.461l.477.479.477-.48-.477-.478zM24 13.465h-.635v-.312h-.01c-.157.28-.444.377-.713.377-.732 0-1.039-.652-1.039-1.333 0-.857.482-1.277 1.025-1.277a.79.79 0 01.714.387h.009V10.12H24zm-1.196-.47c.413 0 .575-.346.575-.714 0-.396-.111-.797-.556-.797-.413 0-.552.369-.552.76 0 .294.115.75.533.75z"
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
export class SvgNationalgridIcon {
  readonly class = input<string>('');
}
