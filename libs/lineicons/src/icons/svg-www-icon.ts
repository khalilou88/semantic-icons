import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-www-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7139 14.0959C15.734 14.108 15.7562 14.114 15.7803 14.114H16.6803C16.7327 14.114 16.7649 14.0858 16.7769 14.0294L17.1575 11.9577C17.1615 11.9456 17.1675 11.9396 17.1756 11.9396C17.1836 11.9396 17.1897 11.9456 17.1937 11.9577L17.6286 14.0355C17.6407 14.0878 17.6749 14.114 17.7313 14.114H18.6977C18.75 14.114 18.7822 14.0878 18.7943 14.0355L19.8694 9.98868C19.8775 9.95647 19.8735 9.93231 19.8573 9.9162C19.8453 9.89607 19.8231 9.886 19.7909 9.886H18.7581C18.7057 9.886 18.6735 9.91218 18.6614 9.96452L18.2084 11.9336C18.2044 11.9497 18.1984 11.9577 18.1903 11.9577C18.1823 11.9577 18.1762 11.9497 18.1722 11.9336L17.7192 9.96452C17.7071 9.91218 17.6749 9.886 17.6225 9.886H16.7407C16.6843 9.886 16.6501 9.91218 16.638 9.96452L16.2333 11.9336C16.2293 11.9497 16.2233 11.9577 16.2152 11.9577C16.2072 11.9537 16.2011 11.9456 16.1971 11.9336L15.6837 9.96452C15.6716 9.91218 15.6394 9.886 15.5871 9.886H13.5847C13.5323 9.886 13.5001 9.91218 13.488 9.96452L13.035 11.9336C13.031 11.9497 13.025 11.9577 13.0169 11.9577C13.0089 11.9577 13.0028 11.9497 12.9988 11.9336L12.5458 9.96452C12.5337 9.91218 12.5015 9.886 12.4491 9.886H11.5673C11.5109 9.886 11.4767 9.91218 11.4646 9.96452L11.0599 11.9336C11.0559 11.9497 11.0499 11.9577 11.0418 11.9577C11.0338 11.9537 11.0277 11.9456 11.0237 11.9336L10.5103 9.96452C10.4982 9.91218 10.466 9.886 10.4137 9.886H8.41127C8.35892 9.886 8.32671 9.91218 8.31463 9.96452L7.86163 11.9336C7.8576 11.9497 7.85156 11.9577 7.84351 11.9577C7.83545 11.9577 7.82941 11.9497 7.82539 11.9336L7.37239 9.96452C7.36031 9.91218 7.32809 9.886 7.27575 9.886H6.39391C6.33753 9.886 6.30331 9.91218 6.29123 9.96452L5.88655 11.9336C5.88252 11.9497 5.87648 11.9577 5.86843 11.9577C5.86037 11.9537 5.85433 11.9456 5.85031 11.9336L5.33691 9.96452C5.32483 9.91218 5.29261 9.886 5.24027 9.886H4.21347C4.15709 9.886 4.12891 9.91016 4.12891 9.95848C4.12891 9.97056 4.13092 9.98063 4.13495 9.98868L5.33087 14.0355C5.33489 14.0596 5.34697 14.0798 5.36711 14.0959C5.38724 14.108 5.40939 14.114 5.43355 14.114H6.33351C6.38585 14.114 6.41807 14.0858 6.43015 14.0294L6.81067 11.9577C6.81469 11.9456 6.82073 11.9396 6.82879 11.9396C6.83684 11.9396 6.84288 11.9456 6.84691 11.9577L7.28179 14.0355C7.29387 14.0878 7.32809 14.114 7.38447 14.114H8.35087C8.40321 14.114 8.43543 14.0878 8.44751 14.0355L9.42119 10.3705L10.5043 14.0355C10.5083 14.0596 10.5204 14.0798 10.5405 14.0959C10.5606 14.108 10.5828 14.114 10.6069 14.114H11.5069C11.5593 14.114 11.5915 14.0858 11.6035 14.0294L11.9841 11.9577C11.9881 11.9456 11.9941 11.9396 12.0022 11.9396C12.0102 11.9396 12.0163 11.9456 12.0203 11.9577L12.4552 14.0355C12.4673 14.0878 12.5015 14.114 12.5579 14.114H13.5243C13.5766 14.114 13.6088 14.0878 13.6209 14.0355L14.5946 10.3705L15.6777 14.0355C15.6817 14.0596 15.6938 14.0798 15.7139 14.0959Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.24805 4.5C3.00541 4.5 1.99805 5.50736 1.99805 6.75V17.25C1.99805 18.4926 3.0054 19.5 4.24804 19.5H19.7495C20.9921 19.5 21.9995 18.4926 21.9995 17.25L21.9995 6.75C21.9995 5.50736 20.9921 4.5 19.7495 4.5H4.24805ZM3.49805 6.75C3.49805 6.33579 3.83383 6 4.24805 6H19.7495C20.1637 6 20.4995 6.33579 20.4995 6.75L20.4995 17.25C20.4995 17.6642 20.1637 18 19.7495 18H4.24804C3.83383 18 3.49805 17.6642 3.49805 17.25V6.75Z"
        fill="#323544"
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
export class SvgWwwIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
