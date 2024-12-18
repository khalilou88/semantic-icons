import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-fluxus-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Fluxus</title>
      <path
        d="M14.348 19.35a2738.241 2738.241 0 0 0-3.926-5.741 595.98 595.98 0 0 1-1.5-2.194 433.452 433.452 0 0 0-1.646-2.396c-.493-.712-.88-1.343-.86-1.404.021-.06.944-.73 2.05-1.489 4.797-3.285 8.82-6.032 8.962-6.117.124-.075.152.287.147 1.963l-.005 2.055-2.993 2.02c-1.647 1.111-2.975 2.072-2.953 2.136.117.326 2.53 3.694 2.645 3.694.11 0 1.55-.937 3.084-2.005.224-.156.227-.125.226 1.905v2.063l-.692.446c-.38.245-.692.49-.692.544 0 .054.313.545.694 1.09l.695.993-.03 3.543-.03 3.544z"
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
export class SvgFluxusIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
