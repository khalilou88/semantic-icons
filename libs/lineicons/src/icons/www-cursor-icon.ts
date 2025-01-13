import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-www-cursor-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.5 6.75C3.5 6.33579 3.83579 6 4.25 6H19.7514C20.1656 6 20.5014 6.33579 20.5014 6.75L20.5014 15.513L22.0014 16.6088L22.0014 6.75C22.0014 5.50736 20.9941 4.5 19.7514 4.5H4.25C3.00736 4.5 2 5.50736 2 6.75V17.25C2 18.4926 3.00736 19.5 4.25 19.5H13.6535L13.4919 18H4.25C3.83579 18 3.5 17.6642 3.5 17.25V6.75Z"
      fill="#323544"
    />
    <svg:path
      d="M18.7005 14.1143H18.5867L17.4784 13.3046L17.1965 11.958C17.1925 11.9459 17.1864 11.9399 17.1784 11.9399C17.1703 11.9399 17.1643 11.9459 17.1603 11.958L16.9798 12.9404L16.7118 12.7446C16.2591 12.4139 15.7106 12.2709 15.1738 12.3213L14.5972 10.37L13.9425 12.8342C13.5481 13.1633 13.2803 13.6164 13.1793 14.1143H12.5602C12.5039 14.1143 12.4696 14.0881 12.4576 14.0358L12.0227 11.958C12.0187 11.9459 12.0126 11.9399 12.0046 11.9399C11.9965 11.9399 11.9905 11.9459 11.9864 11.958L11.6059 14.0297C11.5938 14.0861 11.5616 14.1143 11.5093 14.1143H10.6093C10.5852 14.1143 10.563 14.1082 10.5429 14.0962C10.5228 14.08 10.5107 14.0599 10.5066 14.0358L9.42334 10.37L8.44946 14.0358C8.43738 14.0881 8.40517 14.1143 8.35282 14.1143H7.38642C7.33005 14.1143 7.29582 14.0881 7.28374 14.0358L6.84886 11.958C6.84483 11.9459 6.83879 11.9399 6.83074 11.9399C6.82269 11.9399 6.81665 11.9459 6.81262 11.958L6.4321 14.0297C6.42002 14.0861 6.38781 14.1143 6.33546 14.1143H5.4355C5.41134 14.1143 5.38919 14.1082 5.36906 14.0962C5.34893 14.08 5.33685 14.0599 5.33282 14.0358L4.1369 9.98895C4.13287 9.9809 4.13086 9.97083 4.13086 9.95875C4.13086 9.91043 4.15905 9.88627 4.21542 9.88627H5.24222C5.29457 9.88627 5.32678 9.91245 5.33886 9.96479L5.85226 11.9338C5.85629 11.9459 5.86233 11.954 5.87038 11.958C5.87843 11.958 5.88447 11.9499 5.8885 11.9338L6.29318 9.96479C6.30526 9.91245 6.33949 9.88627 6.39586 9.88627H7.2777C7.33005 9.88627 7.36226 9.91245 7.37434 9.96479L7.82734 11.9338C7.83137 11.9499 7.83741 11.958 7.84546 11.958C7.85351 11.958 7.85955 11.9499 7.86358 11.9338L8.31658 9.96479C8.32866 9.91245 8.36087 9.88627 8.41322 9.88627L10.416 9.88627C10.4684 9.88627 10.5006 9.91245 10.5127 9.96479L11.0261 11.9338C11.0301 11.9459 11.0362 11.954 11.0442 11.958C11.0523 11.958 11.0583 11.9499 11.0623 11.9338L11.467 9.96479C11.4791 9.91245 11.5133 9.88627 11.5697 9.88627H12.4515C12.5039 9.88627 12.5361 9.91245 12.5482 9.96479L13.0012 11.9338C13.0052 11.9499 13.0112 11.958 13.0193 11.958C13.0273 11.958 13.0334 11.9499 13.0374 11.9338L13.4904 9.96479C13.5025 9.91245 13.5347 9.88627 13.587 9.88627H15.5899C15.6422 9.88627 15.6744 9.91245 15.6865 9.96479L16.1999 11.9338C16.2039 11.9459 16.21 11.954 16.218 11.958C16.2261 11.958 16.2321 11.9499 16.2362 11.9338L16.6408 9.96479C16.6529 9.91245 16.6871 9.88627 16.7435 9.88627H17.6254C17.6777 9.88627 17.7099 9.91245 17.722 9.96479L18.175 11.9338C18.179 11.9499 18.1851 11.958 18.1931 11.958C18.2012 11.958 18.2072 11.9499 18.2112 11.9338L18.6642 9.96479C18.6763 9.91245 18.7085 9.88627 18.7609 9.88627H19.7937C19.8259 9.88627 19.8481 9.89634 19.8602 9.91647C19.8763 9.93258 19.8803 9.95674 19.8722 9.98895L18.7971 14.0358C18.785 14.0881 18.7528 14.1143 18.7005 14.1143Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.0065 13.9953C15.2637 13.8469 15.5842 13.8641 15.8239 14.0392L20.6798 17.5866C20.9216 17.7632 21.0351 18.0666 20.9687 18.3586C20.9023 18.6505 20.6686 18.875 20.3743 18.9296L18.8817 19.2066L19.6831 20.5947C19.8902 20.9534 19.7673 21.4121 19.4086 21.6192C19.0499 21.8263 18.5912 21.7034 18.3841 21.3447L17.5825 19.9564L16.5958 21.1111C16.4013 21.3387 16.0901 21.4288 15.8041 21.3404C15.5181 21.2519 15.312 21.0018 15.28 20.7042L14.6358 14.7252C14.604 14.43 14.7494 14.1438 15.0065 13.9953ZM16.5851 18.8147L16.7863 18.5791C17.121 18.1875 17.5798 17.9226 18.0863 17.8286L18.3909 17.7721L16.3089 16.2511L16.5851 18.8147Z"
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
export class SiWwwCursorIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
