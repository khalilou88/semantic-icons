import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-flux-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Flux</title>
      <path
        d="M11.402 23.747c.154.075.306.154.454.238.181.038.37.004.525-.097l.386-.251c-1.242-.831-2.622-1.251-3.998-1.602l2.633 1.712Zm-7.495-5.783a8.088 8.088 0 0 1-.222-.236.696.696 0 0 0 .112 1.075l2.304 1.498c1.019.422 2.085.686 3.134.944 1.636.403 3.2.79 4.554 1.728l.697-.453c-1.541-1.158-3.327-1.602-5.065-2.03-2.039-.503-3.965-.977-5.514-2.526Zm1.414-1.322-.665.432c.023.024.044.049.068.073 1.702 1.702 3.825 2.225 5.877 2.731 1.778.438 3.469.856 4.9 1.982l.682-.444c-1.612-1.357-3.532-1.834-5.395-2.293-2.019-.497-3.926-.969-5.467-2.481Zm7.502 2.084c1.596.412 3.096.904 4.367 2.036l.67-.436c-1.484-1.396-3.266-1.953-5.037-2.403v.803Zm.698-2.337a64.695 64.695 0 0 1-.698-.174v.802l.512.127c2.039.503 3.965.978 5.514 2.526l.007.009.663-.431c-.041-.042-.079-.086-.121-.128-1.702-1.701-3.824-2.225-5.877-2.731Zm-.698-1.928v.816c.624.19 1.255.347 1.879.501 2.039.502 3.965.977 5.513 2.526.077.077.153.157.226.239a.704.704 0 0 0-.238-.911l-3.064-1.992c-.744-.245-1.502-.433-2.251-.618a31.436 31.436 0 0 1-2.065-.561Zm-1.646 3.049c-1.526-.4-2.96-.888-4.185-1.955l-.674.439c1.439 1.326 3.151 1.88 4.859 2.319v-.803Zm0-1.772a8.543 8.543 0 0 1-2.492-1.283l-.686.446c.975.804 2.061 1.293 3.178 1.655v-.818Zm0-1.946a7.59 7.59 0 0 1-.776-.453l-.701.456c.462.337.957.627 1.477.865v-.868Zm3.533.269-1.887-1.226v.581c.614.257 1.244.473 1.887.645Zm5.493-8.863L12.381.112a.705.705 0 0 0-.762 0L3.797 5.198a.698.698 0 0 0 0 1.171l7.38 4.797V7.678a.414.414 0 0 0-.412-.412h-.543a.413.413 0 0 1-.356-.617l1.777-3.079a.412.412 0 0 1 .714 0l1.777 3.079a.413.413 0 0 1-.356.617h-.543a.414.414 0 0 0-.412.412v3.488l7.38-4.797a.7.7 0 0 0 0-1.171Z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgFluxIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
