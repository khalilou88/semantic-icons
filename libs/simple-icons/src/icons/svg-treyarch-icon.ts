import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-treyarch-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Treyarch</title>
      <path
        d="M2.313 23.017C.576 22.764-.232 21.704.058 20.061a6.643 6.643 0 0 1 .88-2.288c1.328-2.123 3.2-3.896 5.3-5.016.556-.297 1.881-.863 2.02-.863.03 0 .106.232.167.516.095.442.19.64.67 1.397.308.485.587.908.62.941.085.085.164-.471.164-1.153v-.572l.25.463c.294.542.588.98.743 1.109.06.05.006-.1-.122-.333-.982-1.793-1.62-4.265-1.622-6.286-.002-2.003.488-3.555 1.417-4.488.444-.446.813-.628 1.35-.667 1-.072 1.748.635 2.235 2.113.08.247.13.467.108.488-.022.023-.04-.003-.04-.058 0-.053-.133-.37-.295-.703-.332-.682-.786-1.219-1.187-1.402-.257-.118-.759-.166-.844-.082-.023.023.133.23.347.46.482.514.865 1.27 1.099 2.165.151.58.176.826.203 2.042.058 2.547-.35 4.406-1.289 5.861-.396.616-.456.554-.083-.087.154-.265.272-.564.295-.752.022-.172.026-.313.011-.313s-.11.148-.212.329c-.164.292-.21.33-.405.33h-.22l.134.215.134.217-.598.788c-.496.654-.916 1.19-1.179 1.503-.047.055-.741-1.063-1.084-1.745a6.541 6.541 0 0 0-.197-.375c-.047-.053-1.217.549-1.728.889-1.559 1.037-2.59 2.74-2.16 3.57.318.614 1.731.37 3.166-.55.181-.115.556-.393.833-.616.277-.223.568-.406.646-.406.081 0 .297-.146.502-.34.197-.186.374-.324.392-.306.06.061-1.838 1.857-2.473 2.34-1.562 1.185-2.92 1.643-3.876 1.306-.265-.094-.272-.093-.27.05.002.223.23.674.403.799.152.11.148.11-.174.067-.974-.134-1.547-.72-1.548-1.583 0-.385.213-1.165.477-1.74.595-1.298 2.396-3.08 3.694-3.653.296-.13.418-.248.824-.787.372-.496.453-.642.374-.673-.128-.049-.332.03-1.307.513-2.741 1.355-4.636 3.4-5.194 5.605-.231.916-.078 1.967.366 2.507l.153.187-.031-.814c-.026-.681-.009-.904.107-1.362.136-.539.492-1.363.7-1.622.076-.093.069-.054-.024.137-.397.82-.532 1.769-.344 2.416.305 1.051 1.716 1.562 3.24 1.173 1.04-.265 2.373-1.01 3.749-2.096.9-.71 2.84-2.689 3.375-3.44 1.631-2.296 2.48-5.781 2.15-8.84-.261-2.422-1.335-4.097-2.825-4.405a4.576 4.576 0 0 1-.62-.177c-.22-.088-.24-.11-.132-.153.335-.13 1.167-.046 1.701.175.09.038.112.03.078-.026-.094-.152-.54-.29-1.093-.338l-.56-.049.461-.01.461-.012-.259-.137c-.208-.11-.327-.128-.609-.095-.695.082-1.577.512-2.201 1.074-.431.389-.197.015.298-.476 1.1-1.088 2.587-1.296 4.117-.574.573.27 1.346 1 1.706 1.61.443.754.77 1.763.945 2.918.19 1.254.056 4-.267 5.48l-.118.54.631.208c.61.2 1.675.653 1.634.694-.01.011-.36-.11-.775-.268-.415-.159-.768-.275-.784-.258-.076.075 1.393 1.451 1.906 1.786 1.974 1.286 3.3 2.717 3.524 3.804.023.11-.032.027-.122-.184-.396-.93-1.05-1.723-2.146-2.605-1.376-1.107-2.975-2.005-3.94-2.213-.449-.097-.182.074.558.36 1.925.74 3.764 2.121 4.814 3.617.762 1.085.872 2.134.263 2.506-.325.198-1.153.183-2.036-.038-.589-.148-2.732-.934-2.679-.983.01-.008.226.038.48.103 1.368.36 2.145-.015 2.057-.994-.116-1.275-1.615-2.72-3.596-3.466-.231-.087-.427-.15-.434-.14a45.97 45.97 0 0 1-1.034 1.788l-.514.847.156.273a2 2 0 0 1 .202.602c.08.581.244.85.737 1.213 1.082.795 2.677 1.561 3.92 1.882.337.087.55.16.472.162-.188.004-1.284-.287-1.736-.462-1.087-.42-2.078-.994-3.483-2.017-.696-.506-.962-.667-1.001-.604-.064.103.116.267 1.027.938 1.96 1.444 4.675 2.543 6.282 2.543.992 0 1.62-.34 1.981-1.073a2.88 2.88 0 0 0 .256-.84l.051-.425.092.296c.099.32.13 1.549.048 1.877-.05.195-.048.195.08-.034.524-.927.54-2.254.043-3.38a9.99 9.99 0 0 0-.494-.9c-.407-.665-.165-.407.389.413.95 1.407 1.38 2.8 1.197 3.87a3.259 3.259 0 0 1-.239.774c-.31.605-.987 1.113-1.783 1.337-.483.136-1.965.121-2.657-.026-2.165-.463-4.985-2.04-6.989-3.908l-.365-.34-.658.639c-1.713 1.66-3.34 2.755-4.841 3.258-.647.216-1.636.411-2.53.499-.81.079-1.024.078-1.583-.003zM12.97 10.99c.393-1.77.336-3.854-.135-4.908-.61-1.367-1.746-.996-2.083.68-.154.766-.19 1.6-.112 2.55.063.764.213 1.789.3 2.04.02.06.277.082.98.082h.951zm6.514 9.62a.591.591 0 0 1 .23 0c.064.014.012.03-.115.03-.126 0-.178-.016-.115-.03zm2.637-2.227c0-.182.013-.248.028-.148.015.1.015.248 0 .33-.016.08-.029-.001-.028-.183zM7.786 10c-.268-1.136-.324-1.7-.288-2.866.025-.78.072-1.22.174-1.63.137-.549.468-1.535.503-1.5.01.009-.005.147-.034.303-.03.16-.024.394.012.537.051.2.034.366-.08.802-.19.72-.258 2.574-.128 3.452.048.324.078.618.067.655a4.22 4.22 0 0 0-.019.51c.001.245-.008.445-.02.445-.01 0-.095-.319-.187-.708z"
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
export class SvgTreyarchIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
