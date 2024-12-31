import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lydia-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Lydia</title>
      <path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.895 17.611a.421.421 0 01-.168.035h-1.155a.608.608 0 01-.56-.377l-4-9.613-3.991 9.607a.61.61 0 01-.56.377H6.273a.42.42 0 01-.385-.59L10.91 5.575a.793.793 0 01.726-.475h.748a.792.792 0 01.726.48l5.003 11.482a.42.42 0 01-.218.549z"
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
export class SvgLydiaIcon {
  readonly class = input<string>('');
}
