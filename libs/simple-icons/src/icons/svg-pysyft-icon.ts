import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-pysyft-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>PySyft</title>
      <path
        d="m16.524 17.985 1.413-.46V13.64Zm6.485-5.632L24 9.305l-6.786-4.93zm-4.346-4.515 2.414 7.422 1.489-2.052zm.136 3.2 1.59 4.898-1.59 1.156zM9.732 20.19l3.688-1.198H8.863ZM12 22.03l4.159-3.023-5.747 1.87zm3.266 1.225 3.894-5.363-6.305 4.581zm4.149.158h-3.2l5.788-7.967Zm-9.657-1.947-6.305-4.581v2.532zm-5.175 1.947h8.377l-9.365-3.045Zm-.365-9.346-.607 1.87 4.16 3.021zm2.722 2.284-2.278-3.14.87-1.197ZM0 9.305l2.592 7.98V7.422Zm5.865-3.091-2.41.784v6.635Zm.952-.14-1.593 4.898 3.561-4.897Zm2.915.159 1.413.46-3.696 2.685zm4.863-3.761L11.998.587 5.206 5.52ZM8.946 5.213h7.81L15.267 3.16zm3.083.862 5.765 1.872-.61-1.872zm5.908 2.823v1.488l-3.702-2.688Z"
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
export class SvgPysyftIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}