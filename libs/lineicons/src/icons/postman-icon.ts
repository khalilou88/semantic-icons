import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-postman-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19.9143 5.88823C16.5388 1.51724 10.2593 0.710264 5.88823 4.08565C1.51723 7.46114 0.710246 13.7408 4.0857 18.1118C7.46123 22.4828 13.741 23.2897 18.1121 19.9144C18.1128 19.9137 18.1136 19.9131 18.1143 19.9125C22.483 16.5364 23.2893 10.2583 19.9143 5.88823ZM17.3552 8.3832L16.5744 7.61505L16.4063 7.44692L16.4532 7.40004L17.6365 6.28248C17.849 6.53936 17.9653 6.86273 17.9647 7.19692C17.9639 7.5878 17.808 7.96242 17.5312 8.23839C17.4761 8.29089 17.4173 8.3392 17.3552 8.3832ZM6.69817 16.738L6.83667 16.8678L7.56186 17.5929L5.94817 17.4879L6.69817 16.738ZM16.4897 5.72982C16.8153 5.73188 17.1313 5.83982 17.3897 6.03785L16.0897 7.34623L16.0894 7.34654C16.0817 7.35276 16.0747 7.3597 16.0685 7.36748C16.0674 7.36889 16.0663 7.37033 16.0652 7.37186C16.0631 7.37483 16.0611 7.37789 16.0591 7.38095C16.0573 7.38401 16.0555 7.38708 16.0539 7.39026C16.0514 7.39504 16.0492 7.39995 16.0475 7.40495C16.0467 7.40679 16.0462 7.40864 16.0456 7.41048C16.045 7.41233 16.0445 7.41414 16.044 7.41598C16.0306 7.46561 16.0467 7.52089 16.0894 7.55498L17.0727 8.53827C16.5219 8.77827 15.8803 8.6557 15.4566 8.2297C15.0404 7.81033 14.9192 7.18189 15.1419 6.63598C15.3648 6.09007 15.896 5.73288 16.4897 5.72982ZM15.5813 8.99624C15.5775 9.12461 15.5197 9.24524 15.4229 9.32961L11.5285 12.7187L11.5153 12.7302L11.3732 12.5881L11.3114 12.5264L11.2811 12.496L11.1941 12.409L11.1607 12.3756L11.094 12.3089L14.7814 8.6547C14.8454 8.59086 14.9234 8.54948 15.0056 8.5307C15.0313 8.52477 15.0574 8.52098 15.0836 8.51958C15.1277 8.51702 15.1721 8.5207 15.2153 8.53061C15.2505 8.53867 15.2849 8.55083 15.3178 8.56717C15.3344 8.57533 15.3507 8.58464 15.3663 8.59495C15.3827 8.60577 15.3986 8.61761 15.4137 8.6307C15.4226 8.63824 15.4313 8.64633 15.4397 8.6547C15.4529 8.66686 15.4652 8.6797 15.4765 8.6932C15.5089 8.7408 15.5367 8.79114 15.5597 8.84345C15.5754 8.89227 15.5828 8.94405 15.5813 8.99624ZM11.0831 12.7353C11.0849 12.742 11.0872 12.7486 11.0899 12.755L11.1238 12.7882L11.2699 12.9312L11.2156 12.9379L10.4073 13.037L10.5065 12.9379L10.898 12.5464L11.0831 12.7353ZM15.0138 8.23745C14.8526 8.2587 14.6969 8.33123 14.5729 8.45502L10.8983 12.1134L10.1771 11.3923C12.0831 9.49508 13.2485 8.50477 13.973 8.17995C14.3027 7.97211 14.7204 8.00327 15.0138 8.23745ZM9.96496 11.6051L9.98017 11.6201L10.5748 12.2147L9.02333 12.5467L9.96496 11.6051ZM7.93158 16.4627C7.83179 16.5105 7.77951 16.622 7.80658 16.7293L7.97305 17.4542C7.98561 17.4717 7.98561 17.4952 7.97305 17.5126C7.95417 17.5296 7.92545 17.5296 7.90658 17.5126L6.92348 16.5211L9.9528 13.4463L11.5216 13.203L12.098 13.7794C10.8229 14.8391 9.42383 15.7402 7.93158 16.4627ZM12.373 13.5628L11.7645 12.9546L15.5938 9.59699C15.3222 10.6774 13.878 12.1405 12.373 13.5628ZM17.6479 7.01317C17.6153 6.95873 17.5473 6.93757 17.4893 6.96351C17.4616 6.97761 17.4405 7.00245 17.4313 7.03226C17.4219 7.06198 17.4249 7.09426 17.4394 7.12195C17.4978 7.2447 17.4816 7.39004 17.3978 7.49689C17.3768 7.5177 17.3655 7.54642 17.3666 7.57592C17.3669 7.60523 17.378 7.63342 17.3978 7.65498C17.4192 7.66345 17.443 7.66345 17.4644 7.65498C17.504 7.66498 17.5457 7.65201 17.5728 7.62158C17.7128 7.45011 17.742 7.21345 17.6479 7.01317Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPostmanIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
