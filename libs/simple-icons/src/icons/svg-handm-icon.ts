import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-handm-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>H&amp;M</title>
      <path
        d="M16.866 4.565c.871-.429 1.303-.372 1.313.061.012.565-.071 1.313-.131 1.857-.323 2.947-.864 5.356-.906 8.383 1.424-3.686 2.619-6.248 4.156-9.403.488-1.004.799-.818 1.2-.996 1.563-.695 1.622-.268 1.417.581-.758 3.15-2.695 13.068-2.992 14.595-.086.442-.566.255-.691.082-.556-.769-1.183-.781-1.112-1.293.348-2.546 1.603-8.934 1.93-10.439-1.669 3.42-3.398 7.694-4.286 10.118-.189.515-.531.477-.745.1-.3-.529-.883-.799-.979-1.424-.306-1.987.348-5.776.439-8.172-.908 2.618-2.433 7.701-3.101 9.997-.276.95-1.193.795-.949-.131 1.015-3.854 3.201-10.67 4.148-13.121.222-.576.805-.556 1.289-.795Zm-5.535-.474c.276.067.254.393.085.838-.499 1.314-1.19 3.04-1.981 5.076.497-.057.767-.076.767-.076.713-.088.846.269.645.648-.16.303-.353.101-1.02 1.096-.376.561-.99.709-1.332.784-.821 2.175-1.702 4.602-2.557 7.188-.125.377-.489.295-.598.142-.402-.562-.698-.58-1.01-1.034-.037-.074-.11-.173-.066-.354.229-.936.837-2.859 1.762-5.392-1.165.253-2.426.524-2.947.645-.624 1.651-1.234 3.308-1.811 4.944-.358 1.015-1.29.819-.963-.141.521-1.528 1.096-3.115 1.673-4.654-.646-.069-.864-.525-1.225-.906-.139-.147-.443-.126-.592-.332-.267-.371-.241-.536.377-.714.806-.233 1.617-.449 2.432-.649 1.044-2.694 1.987-5.006 2.49-6.239.388-.951 1.387-.862 1.008.075-.772 1.906-1.563 3.885-2.344 5.893.963-.217 1.931-.409 2.904-.576.713-1.831 1.462-3.648 2.247-5.449.055-.126.215-.304.381-.332.525-.09 1.379-.552 1.675-.481ZM9.543 16.426c.082-.05.163-.111.244-.178-.062-.183-.123-.366-.183-.55-.061.078-.12.157-.179.237-.349.479-.142.65.118.491Zm.465-2.275c.433-.489-.423-.693-.226.054.011.042.025.092.04.146.063-.065.125-.132.186-.2Zm.45 1.473c.429-.372.838-.003.414.624a6.955 6.955 0 0 1-.307.424c.045.128.091.255.14.381.219.562-.357.703-.542.237a7.29 7.29 0 0 1-.05-.129c-.35.31-.754.505-1.186.37-.711-.221-.892-1.222-.228-1.993.266-.309.466-.524.634-.695-.041-.133-.081-.267-.118-.401-.087-.312-.164-.675.148-1.046.586-.695 1.945-.078 1.257.992-.165.258-.359.501-.561.748.07.221.14.441.212.661.061-.06.123-.117.187-.173Z"
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
export class SvgHandmIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
