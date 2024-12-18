import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-pterodactyl-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Pterodactyl</title>
      <path
        d="M15.236 3.775a8.404 8.404 0 0 0-.535.004c-.576 0-1.573.103-2.201.234-1.834.367-4.348 1.65-5.5 2.855-1.362 1.415-1.362 1.755 0 .917 1.074-.708 4.663-2.227 5.187-2.227.157 0 .287.106.287.264 0 .13.524-.132 1.153-.604.628-.445 1.363-.969 1.625-1.152.334-.197.372-.275-.016-.291zm1.262 2.449c-.475.01-.894.041-1.143.094-1.676.34-3.457 1.388-5.29 3.117-.97.917-1.782 1.571-1.782 1.414 0-.157.104-.367.262-.445.419-.262 2.698-3.56 2.54-3.692-.209-.236-3.902 1.57-5.605 2.723-1.99 1.362-4.19 3.746-4.95 5.422-.34.707-.575 1.336-.523 1.389.053.026.89-.525 1.86-1.258.969-.734 1.833-1.257 1.912-1.178.078.079-.42.732-1.127 1.44-.707.733-1.206 1.31-1.127 1.31.078 0 1.152-.42 2.357-.943l2.174-.916.395.601c1.283 1.991 3.325 2.882 6.547 2.803 1.729-.026 2.096.028 2.986.656.55.367 1.153.68 1.336.68.184 0 .393.183.498.393.079.21.418.394.733.394.524-.026.55-.053.158-.289-.262-.13-.473-.394-.473-.55 0-.158.21-.444.473-.628.419-.314.419-.34 0-.367-.236 0-.525.105-.604.262-.288.471-1.1.261-1.545-.367-.393-.629-.393-.655.577-.97l.968-.314-1.832-.89c-.995-.472-2.044-.865-2.306-.865-.42 0-.47-.13-.313-.864.603-2.829 3.325-4.794 8.46-6.103C23.133 8.02 24 7.733 24 7.628c0-.288-4.166-1.23-6.026-1.361a14.798 14.798 0 0 0-1.476-.043Zm-12.354 5.36c.157 0 .159.156-.05.392-.184.236-.394.341-.446.29-.183-.184.182-.683.496-.683zm13.07 6.023a.535.535 0 0 0-.417.264c-.079.13-.054.261.103.261.131 0 .342-.13.42-.261.079-.157.052-.264-.105-.264zm-2.827.787c-.577 0-.628.052-.34.393.183.21.628.392.968.392.577 0 .628-.052.34-.392-.183-.21-.628-.393-.968-.393z"
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
export class SvgPterodactylIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
