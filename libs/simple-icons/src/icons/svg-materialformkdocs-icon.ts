import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-materialformkdocs-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Material for MkDocs</title>
      <path
        d="m17.029 18.772.777 1.166-5.417 2.709L0 16.451V4.063l5.417-2.709 5.298 7.948 7.867-5.24L24 1.354V16.84l-5.417 2.709zm2.023-13.827v13.253l3.949-1.975V2.97zM5.076 2.642 1.458 4.45 12.73 21.358l3.618-1.809z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgMaterialformkdocsIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}