import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sendgrid-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>SendGrid</title>
      <path
        d="M.8 24h13.6c.88 0 1.6-.72 1.6-1.6v-4.8c0-.88-.72-1.6-1.6-1.6H9.6c-.88 0-1.6-.72-1.6-1.6V9.6C8 8.72 7.28 8 6.4 8H1.6C.72 8 0 8.72 0 9.6v13.6c0 .44.36.8.8.8zM23.2 0H9.6C8.72 0 8 .72 8 1.6v4.8C8 7.28 8.72 8 9.6 8h4.8c.88 0 1.6.72 1.6 1.6v4.8c0 .88.72 1.6 1.6 1.6h4.8c.88 0 1.6-.72 1.6-1.6V.8c0-.44-.36-.8-.8-.8Z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSendgridIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
