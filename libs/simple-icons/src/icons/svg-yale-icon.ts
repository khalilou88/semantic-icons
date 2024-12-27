import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-yale-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Yale</title>
      <path
        d="M15.8 15.72v-1.24c-.64.04-.8-.24-.8-.76V7.6h-1.36v6.24c0 1.2.44 1.96 2.16 1.88zm4.96-5.24c-.44-.52-1.12-.88-2.08-.88-1 0-1.68.36-2.12.88-.52.64-.64 1.56-.64 2.24 0 .64.12 1.4.56 2.04.44.6 1.16 1 2.28 1 .76 0 1.36-.16 1.8-.48.44-.32.76-.84.8-1.36h-1.4c-.04.2-.16.36-.32.52-.2.16-.48.2-.88.2-.56 0-.92-.16-1.12-.48-.16-.24-.24-.64-.24-1h4.04c0-1.08-.16-2.04-.68-2.68zm-3.4 1.64c0-.32.12-.76.36-1s.56-.36.96-.36c.4 0 .72.12.96.36s.32.68.32 1zM10.4 9.64c-1.6 0-2.36.84-2.44 2h1.4c.04-.52.32-.84 1.04-.84.84 0 1.08.4 1.08 1v.36h-1.24c-.8 0-1.32.08-1.72.36-.48.32-.76.76-.76 1.44 0 .84.52 1.8 2.12 1.8.8 0 1.32-.24 1.68-.68v.6h1.32v-3.84c-.04-1.28-.72-2.2-2.48-2.2zm1.04 4.16c0 .64-.56.92-1.32.92-.84 0-1.04-.36-1.04-.8 0-.24.08-.44.28-.56.16-.08.4-.12.88-.12h1.2zM9.12 7.6H7.56l-1.92 3.6-1.92-3.6H2.16l2.76 4.96v3.08h1.44v-3.08zM24 12c0 6.64-5.36 12-12 12S0 18.64 0 12 5.36 0 12 0s12 5.36 12 12"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgYaleIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
