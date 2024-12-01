import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-layers-1-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.8609 4.96887C12.3192 4.7747 11.727 4.7747 11.1853 4.96887L2.91085 7.935C1.73804 8.35542 1.73806 10.014 2.91085 10.4344L11.1853 13.4006C11.727 13.5948 12.3192 13.5948 12.8609 13.4006L21.1354 10.4344C22.3082 10.014 22.3082 8.35542 21.1354 7.93501L12.8609 4.96887ZM11.6915 6.38089C11.9059 6.30403 12.1403 6.30403 12.3547 6.38089L20.1764 9.18473L12.3547 11.9886C12.1403 12.0654 11.9059 12.0654 11.6915 11.9886L3.86977 9.18473L11.6915 6.38089Z"
        fill="#323544"
      />
      <path
        d="M2.91085 13.5646L5.05398 12.7964L7.27658 13.5931L3.86977 14.8144L11.6915 17.6182C11.9059 17.6951 12.1403 17.6951 12.3547 17.6182L20.1764 14.8144L16.7695 13.5931L18.9921 12.7964L21.1354 13.5646C22.3082 13.9851 22.3082 15.6437 21.1354 16.0641L12.8609 19.0302C12.3192 19.2244 11.727 19.2244 11.1853 19.0302L2.91085 16.0641C1.73806 15.6437 1.73804 13.9851 2.91085 13.5646Z"
        fill="#323544"
      />
    </svg>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgLayers1Icon {
  readonly class = input('');
}
