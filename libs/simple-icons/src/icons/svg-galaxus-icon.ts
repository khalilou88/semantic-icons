import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-galaxus-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Galaxus</title>
      <path
        d="M12 6.181c3.604 0 6.53 3.111 6.53 6.943 0 3.831-2.926 6.942-6.53 6.942s-6.53-3.111-6.53-6.942c0-3.832 2.926-6.943 6.53-6.943m2.506-3.088c-.101.258-.209.531-.209.733 0 .245.072.458.144.673.043.127.086.254.114.389.024.11-.014.174-.078.283-.04.069-.092.157-.145.288a.738.738 0 0 0-.078-.019 7.36 7.36 0 0 0-4.515.002l-.023.005-.05.013a2.06 2.06 0 0 0-.146-.289c-.062-.107-.099-.169-.076-.277.03-.13.069-.258.114-.384.072-.216.145-.431.145-.676 0-.205-.108-.478-.21-.736-.091-.232-.178-.451-.178-.599 0-.192.384-.462.783-.744.253-.179.513-.362.685-.532.158-.156.315-.357.465-.55.271-.348.524-.673.739-.673h.039c.213.012.463.331.729.672.15.191.305.39.462.545.171.169.43.351.682.53.4.282.785.554.785.745 0 .148-.087.368-.178.601M5.054 9.69a3.45 3.45 0 0 0-1.467-.273c-1.659.036-1.694-3.348-1.384-3.553.257-.169 3.032-.061 4.656 1.293A8.079 8.079 0 0 0 5.054 9.69m1.361 10.137c-.163 1.58-3.578 1.29-3.748.971-.16-.3.184-3.356 2.311-4.417a8.111 8.111 0 0 0 1.661 2.494c-.107.246-.183.557-.224.952m12.607-3.445c2.135 1.068 2.542 4.185 2.382 4.486-.17.318-3.658.538-3.82-1.04a3.189 3.189 0 0 0-.224-.952 8.102 8.102 0 0 0 1.662-2.494m-6.96 4.78c.365 0 .73-.028 1.091-.082-.117 1.287.312 2.387 1.562 2.599a.277.277 0 0 0 .091-.002.323.323 0 0 1 .082-.004c-.53.251-1.112.397-1.728.293-1.43-.243-2.425-1.496-2.421-2.926.429.079.872.122 1.323.122m5.08-14.006c1.623-1.353 4.398-1.461 4.654-1.292.311.205.276 3.59-1.383 3.553a3.457 3.457 0 0 0-1.468.273 8.105 8.105 0 0 0-1.803-2.534"
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
export class SvgGalaxusIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
