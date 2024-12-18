import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-slackware-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Slackware</title>
      <path
        d="M12.924 1.228c-.584-.01-1.251 0-1.485.027-2.46.282-4.138 1.3-4.753 2.891-.218.552-.274 1.002-.243 1.772.048 1.21.419 2.004 1.262 2.742 1.225 1.06 2.98 1.508 5.998 1.508 2.737 0 3.71.413 3.916 1.675.313 1.867-1.57 3.07-4.414 2.827-1.878-.16-3.496-.912-4.223-1.967a7.772 7.772 0 01-.355-.62c-.382-.76-.64-.978-1.176-.978-.43.005-.732.165-.918.494l-.133.24v4.03l.137.296c.165.344.4.546.744.63.35.09.794-.036 1.42-.402l.5-.29.826.185c1.82.403 2.75.523 4.065.523 1.103.005 1.548-.046 2.455-.285 1.124-.297 1.974-.785 2.717-1.57.8-.844 1.15-1.853 1.097-3.147-.069-1.628-.695-2.698-2-3.414-.96-.525-2.292-.79-4.377-.88-2.042-.086-2.794-.155-3.515-.32-.51-.12-.785-.25-1.076-.515-.653-.589-.59-1.755.136-2.482.642-.637 1.511-.928 2.774-.928 1.432.005 2.393.27 3.412.955.185.127.721.62 1.193 1.092.886.902 1.135 1.082 1.506 1.082.244 0 .59-.163.732-.344.26-.329.303-.63.303-2.2 0-1.66-.043-1.91-.377-2.282-.387-.425-.848-.42-1.75.031l-.59.297-.63-.17c-1.496-.392-2.038-.477-3.178-.504zM0 13.775v9h24v-1H1v-8z"
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
export class SvgSlackwareIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
