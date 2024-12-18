import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-2fas-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>2FAS</title>
      <path
        d="M12 0c-.918 0-1.833.12-2.72.355L4.07 1.748a2.64 2.64 0 0 0-1.96 2.547v9.115a7.913 7.913 0 0 0 3.552 6.606l5.697 3.765a1.32 1.32 0 0 0 1.467-.008l5.572-3.752a7.931 7.931 0 0 0 3.493-6.57V4.295a2.638 2.638 0 0 0-1.961-2.547L14.72.355A10.594 10.594 0 0 0 12 0ZM7.383 5.4h9.228c.726 0 1.32.594 1.32 1.32 0 .734-.587 1.32-1.32 1.32H7.383c-.727 0-1.32-.593-1.32-1.32 0-.726.593-1.32 1.32-1.32zM7.38 9.357h3.299c.727 0 1.32.595 1.32 1.32a1.32 1.32 0 0 1-1.318 1.32H7.38c-.726 0-1.32-.592-1.32-1.32 0-.725.594-1.32 1.32-1.32zm0 3.96c.727 0 1.32.593 1.32 1.32 0 .727-.586 1.318-1.32 1.318-.726 0-1.32-.592-1.32-1.318 0-.727.594-1.32 1.32-1.32z"
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
export class Svg2fasIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}