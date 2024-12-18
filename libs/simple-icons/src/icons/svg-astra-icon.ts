import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-astra-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Astra</title>
      <path
        d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0m-.1452 5.3226 1.4517 2.9032c-1.6452 3.3194-3.2904 6.6484-4.9355 9.9677H5.758c2.0323-4.287 4.0646-8.5838 6.0968-12.871m2.7097 5.3226c1.229 2.516 2.4484 5.0322 3.6774 7.5483h-2.8064c-.3194-.7451-.6484-1.4806-.9678-2.2258H12l.0484-.0967c.842-1.742 1.6742-3.4839 2.5161-5.2258"
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
export class SvgAstraIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
