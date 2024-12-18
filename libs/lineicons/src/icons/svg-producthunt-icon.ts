import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-producthunt-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3224 9.00004H10.4515V12H13.3224C14.1289 12 14.8386 11.3226 14.8386 10.5162C14.8708 9.6452 14.1289 9.00004 13.3224 9.00004Z"
        fill="#323544"
      />
      <path
        d="M12 2C6.45161 2 2 6.45161 2 12C2 17.5484 6.45161 22 12 22C17.5484 22 22 17.5484 22 12C22 6.45161 17.5484 2 12 2ZM13.3226 14H10.4516V17H8.45161V7H13.3226C15.2903 7 16.8387 8.54839 16.8387 10.5161C16.871 12.4516 15.2581 14 13.3226 14Z"
        fill="#323544"
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
export class SvgProducthuntIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
