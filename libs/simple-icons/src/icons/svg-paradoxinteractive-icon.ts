import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-paradoxinteractive-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Paradox Interactive</title>
      <path
        d="M23.384 12.65c-.141-.703.587-1.31.241-2.029-.345-.718-2.012-.67-2.038-1.488-.037-.949 1.347-.466 1.928-.446 0-1.52-.597-2.824-2.238-1.797a.89.89 0 0 1-.77-.299c-.524-.896 1.001-1.09 1.048-1.803 0-.42-.492-.686-.65-1.048a1.8 1.8 0 0 1 0-.76c0-.1-.12-.105-.199-.126-.309-.078-.597.1-.917.032a4.4 4.4 0 0 1-.86-.524 1.15 1.15 0 0 1-.298.403c-.23.32-1.048 1.457-1.573.964a.92.92 0 0 1-.125-.791C17.21.952 16.493.737 14.742.459c-.42-.068-1.489-.32-1.976-.173 0 .335.425 2.689-.33 2.563-.896 0-.409-2.332-1.709-2.62a1.2 1.2 0 0 0-.64.314c-.183.267.184 1.09.263 1.41a2.14 2.14 0 0 1-.058 1.263V3.3C8.814 3.3 8.977.034 6.671 1.643c0 .876 2.096 1.982 1.368 2.94a.85.85 0 0 1-.525.326c-1.116.136-1.572-2.275-2.803-2.06a.7.7 0 0 0-.451.367c-.32.555 1.048 1.389 1.263 1.955a1.7 1.7 0 0 1-.037.89c-1.048 0-2.285-1.503-3.265-.55a.64.64 0 0 0-.262.587c.1.399.812.33 1.048.708v.047c.372.844-.482 1.462-.492 2.228 0 .382.288.597.167 1.011-.42 1.426-1.771-.162-2.416.446s.079 1.682.126 2.327a8.5 8.5 0 0 1-.23 1.147 2.9 2.9 0 0 0 .335.986c.125.456 0 .959.246 1.352.729 1.121 1.944-1.94 2.521-.65.445 1.048-1.808.985-1.866 1.777-.057.791 1.29 1.493 1.814 1.986a2.74 2.74 0 0 1 .901 1.677 5.2 5.2 0 0 1-.377 1.85 2 2 0 0 0 .644.032c1.143-.34 1.814-2.165 1.625-3.297-.173-.954-.697-1.771-.765-2.767s.89-2.62 0-3.323l-.12-.073a.34.34 0 0 1-.336.136.74.74 0 0 1-.524-.173.445.445 0 0 1-.157-.624c.22-.325.843-.262.917-.697.157-.964-1.86-1.153-.64-2.343a1.17 1.17 0 0 1 .928-.356c.566.042 1.934.45 1.855 1.174-.036.33-.314.64-.194 1.006.12.367.682.341.834.697.199.488-.21.85-.168 1.305a.28.28 0 0 0 .147.226 1.6 1.6 0 0 1 .602.403c.257.566-.43 1.258.483 1.573 0-.404-.09-.944.262-1.153a1.2 1.2 0 0 0 .257.325c.288.45.408.875.995 1.048a3.3 3.3 0 0 0-.46-1.604c.418 0 .68.556 1.157.43s.048-.603-.052-.807c-.288-.582.126-1.049-.047-1.573s-1.735-1.037-2.207-1.478a.67.67 0 0 1-.246-.639c.288-.891 1.336-.362 2.096-.571a1.9 1.9 0 0 0 .85-.608 1.5 1.5 0 0 0 .361-1.494 1.6 1.6 0 0 1-.293-.912c.22-1.604 2.814-1.515 3.946-.933.577.294 1.127.975.823 1.667-.273.608-1.006.257-1.52.482a3.4 3.4 0 0 0-1.205 1.572c-.231.65.414 1.143.456 1.777.089 1.384-.566 2.657-.839 3.91-.052.23.152.524.026.75-.199.335-.613.214-.948.335a3.3 3.3 0 0 0-.603.44c-.482.299-1.048.446-1.106 1.106.304 0 .524-.163.854-.194a.058.058 0 0 1 .068.063v.063c-.073.576-.524 1.048-.256 1.666.408 0 .524-.953 1.184-.702.079 0 .068 0 .09.073a4.8 4.8 0 0 0 .434 1.211.27.27 0 0 0 .226-.267 4 4 0 0 1 .057-1.373c.2-.524.556-.451.467-1.153a2 2 0 0 0 .346-.22c.833-.289.97-.77 2.023-.74a1.75 1.75 0 0 1 .723.126c.183 0 .115-.288.047-.524-.372-1.226-.839-2.437-.839-3.852h.2a8 8 0 0 0 .744 1.206c.157.251.665 1.415 1.116 1.163.21-.126.336-1.572.456-1.913.446-1.2 1.704-1.462 2.448-.304s.267 3.417-.63 4.266c-.35.33-.853.33-1.189.64-.335.309-.037.927-.094 1.352a1.93 1.93 0 0 1-.603 1.048c-.629.634-1.483.917-2.128 1.499-.278.246-.34.655-.681.807-.34.152-.75-.042-1.1.063l-.771.482c-.472.247-1.237.66-1.489.74 0 1.005 2.406.47 2.899.204.35-.19.456-.65.802-.802.345-.152.697.215 1.095.078a5.3 5.3 0 0 0 1.048-.65 21 21 0 0 0 1.866-1.294 2.1 2.1 0 0 0 .597-.65c.152-.425-.524-1.473.671-1.3.923.12 1.845-1.735 2.018-2.39.105-.524.204-1.016.304-1.53l.383-.923c.22-.754-.462-.754-.572-1.278M2.462 14.594a.886.886 0 0 1-.928-1.294 1.37 1.37 0 0 1 .598-.525 1.28 1.28 0 0 1 .755.231.891.891 0 0 1-.425 1.588m4.942-5.393a.43.43 0 0 1-.267-.058c-.938-.398-.55-1.006-.194-1.671.713.288.875 1.509.461 1.73m1.316 2.757a1.81 1.81 0 0 1 1.137 1.536.5.5 0 0 1-.084.22.72.72 0 0 1-.466 0c-.702-.3-.598-1.064-.598-1.756Zm6.918 3.071a1.05 1.05 0 0 1-.372.65.75.75 0 0 1-.75-.461 2.3 2.3 0 0 1 0-.886 11.6 11.6 0 0 1 .472-2.945c.325.712.21 1.572.367 2.363a4 4 0 0 1 .278 1.28zm4.717-4.224a6.6 6.6 0 0 1-1.31-.037c-1.646-.325-.226-2.175.126-2.914.67.603 1.415 1.986 1.184 2.95"
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
export class SvgParadoxinteractiveIcon {
  readonly class = input<string>('');
}
