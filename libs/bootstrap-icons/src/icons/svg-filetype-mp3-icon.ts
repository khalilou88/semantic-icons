import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-filetype-mp3-icon',
  imports: [],
  template: `
    <svg
      class="bi bi-filetype-mp3"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-4.911 9.67h-.443v-.609h.422a.7.7 0 0 0 .322-.073.56.56 0 0 0 .22-.2.5.5 0 0 0 .076-.284.49.49 0 0 0-.176-.392.65.65 0 0 0-.442-.15.7.7 0 0 0-.252.041.6.6 0 0 0-.193.112.5.5 0 0 0-.179.349H7.71q.009-.235.102-.437.094-.202.27-.352.176-.152.428-.237.255-.085.583-.088.418-.003.723.132.304.135.472.372a.9.9 0 0 1 .173.539.83.83 0 0 1-.12.478.96.96 0 0 1-.619.439v.041a1 1 0 0 1 .718.434.9.9 0 0 1 .144.521q.003.285-.117.507a1.1 1.1 0 0 1-.329.378q-.21.152-.486.234-.273.08-.583.08-.451 0-.77-.153a1.2 1.2 0 0 1-.487-.41 1.1 1.1 0 0 1-.178-.563h.726a.46.46 0 0 0 .106.258.7.7 0 0 0 .249.179 1 1 0 0 0 .357.067.9.9 0 0 0 .384-.076.6.6 0 0 0 .252-.217.56.56 0 0 0 .088-.319.56.56 0 0 0-.334-.522.8.8 0 0 0-.372-.079ZM.706 15.925v-2.66h.038l.952 2.16h.516l.946-2.16h.038v2.66h.715v-3.999h-.8l-1.14 2.596h-.026l-1.14-2.596H0v4zm5.458-3.999h-1.6v4h.792v-1.342h.803q.43 0 .732-.173.304-.177.463-.475a1.4 1.4 0 0 0 .161-.677q0-.374-.158-.677a1.2 1.2 0 0 0-.46-.477 1.4 1.4 0 0 0-.733-.179m.545 1.333a.8.8 0 0 1-.085.381.57.57 0 0 1-.237.24.8.8 0 0 1-.375.082h-.66v-1.406h.66q.328 0 .513.182.184.181.184.521"
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
export class SvgFiletypeMp3Icon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
