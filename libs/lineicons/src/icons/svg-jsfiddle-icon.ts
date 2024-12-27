import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-jsfiddle-icon',
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.67616 13.7032C6.67616 12.3758 7.82397 11.352 9.16639 11.352C9.88481 11.352 10.5234 11.7301 11.0578 12.1644C11.406 12.4474 11.7424 12.7825 12.0536 13.1043C12.0552 13.1059 12.0567 13.1074 12.0583 13.109C12.1814 13.2345 12.3039 13.3628 12.4265 13.4912C12.7709 13.8519 13.1167 14.2141 13.4834 14.5219C13.9838 14.942 14.4299 15.1765 14.8335 15.1765C15.751 15.1765 16.4458 14.488 16.4458 13.7032C16.4458 12.9173 15.7584 12.23 14.8335 12.23C14.0844 12.23 13.7052 12.6386 13.4117 12.9549C13.389 12.9794 13.3668 13.0033 13.3449 13.0265C13.1786 13.2029 12.9008 13.211 12.7245 13.0448C12.5481 12.8784 12.5399 12.6006 12.7062 12.4243C12.726 12.4032 12.7477 12.3796 12.7714 12.3537C13.0707 12.0269 13.6887 11.352 14.8335 11.352C16.1858 11.352 17.3237 12.377 17.3237 13.7032C17.3237 15.0306 16.1759 16.0544 14.8335 16.0544C14.1071 16.0544 13.4566 15.6456 12.919 15.1943C12.5593 14.8924 12.2086 14.5337 11.8886 14.1995C11.8032 14.1115 11.7182 14.0228 11.6333 13.9341C11.2625 13.5473 10.8932 13.162 10.5041 12.8457C10.0182 12.4508 9.5779 12.23 9.16639 12.23C8.2489 12.23 7.55403 12.9185 7.55403 13.7032C7.55403 14.4891 8.24145 15.1765 9.16639 15.1765C9.91239 15.1765 10.2909 14.768 10.5851 14.4505C10.6089 14.4248 10.6321 14.3998 10.6549 14.3756C10.8212 14.1992 11.099 14.191 11.2754 14.3573C11.4518 14.5236 11.46 14.8014 11.2936 14.9778C11.2734 14.9993 11.2511 15.0238 11.2266 15.0505C10.9277 15.3776 10.3093 16.0544 9.16639 16.0544C7.81403 16.0544 6.67616 15.0294 6.67616 13.7032Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.27316 8.01143C9.33268 6.19589 11.3078 4.97656 13.5645 4.97656C16.9504 4.97656 19.6966 7.69937 19.6966 11.0652C19.6966 11.0875 19.6964 11.1093 19.6959 11.1306C21.0629 11.8211 22 13.2301 22 14.8592C22 17.1763 20.1195 19.041 17.7914 19.0226H6.23294L6.22748 19.0226C3.89065 18.9936 2 17.1011 2 14.7593C2 13.3232 2.7254 12.0491 3.82568 11.2769C3.7886 11.0904 3.7688 10.8974 3.7688 10.7002C3.7688 9.01205 5.14594 7.65366 6.82832 7.65366C7.35013 7.65366 7.84197 7.78063 8.27316 8.01143ZM13.5645 5.85447C11.479 5.85447 9.67436 7.06934 8.83229 8.8296C8.77484 8.94972 8.66597 9.03727 8.53629 9.06759C8.40665 9.09792 8.27023 9.06776 8.16545 8.98556C7.79945 8.69853 7.33855 8.53156 6.82832 8.53156C5.62506 8.53156 4.64668 9.5026 4.64668 10.7002C4.64668 10.9224 4.68252 11.1379 4.74731 11.3394C4.81001 11.5345 4.72942 11.747 4.55312 11.8514C3.54882 12.4463 2.87789 13.5325 2.87789 14.7593C2.87789 16.6147 4.37567 18.1202 6.23577 18.1448H17.7968C19.6399 18.1601 21.1221 16.6875 21.1221 14.8592C21.1221 13.4886 20.2801 12.3098 19.0724 11.8098C18.897 11.7371 18.7881 11.5599 18.8027 11.3705L18.804 11.3533C18.8124 11.245 18.8188 11.1619 18.8188 11.0652C18.8188 8.19034 16.4716 5.85447 13.5645 5.85447Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgJsfiddleIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
