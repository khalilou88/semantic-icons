import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cloud-bolt-2-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.41032 9.23329C6.48046 6.19302 8.96698 3.75 12.0241 3.75C15.0813 3.75 17.5678 6.19308 17.6379 9.23338C20.0922 9.42706 22.0235 11.4801 22.0235 13.9842C22.0235 16.0917 20.6556 17.8797 18.7591 18.5087C18.8505 18.0617 18.8984 17.599 18.8984 17.125C18.8984 17.0203 18.8961 16.9162 18.8915 16.8126C19.8672 16.2478 20.5235 15.1927 20.5235 13.9842C20.5235 12.1806 19.0614 10.7184 17.2578 10.7184H16.8894C16.4752 10.7184 16.1394 10.3827 16.1394 9.96844V9.3653C16.1394 7.09248 14.2969 5.25 12.0241 5.25C9.75128 5.25 7.9088 7.09248 7.9088 9.3653V9.96844C7.9088 10.3827 7.57301 10.7184 7.1588 10.7184H6.78922C4.98558 10.7184 3.52344 12.1806 3.52344 13.9842C3.52344 15.1926 4.17977 16.2478 5.15541 16.8126C5.15078 16.9161 5.14844 17.0203 5.14844 17.125C5.14844 17.599 5.1964 18.0617 5.28773 18.5087C3.39135 17.8796 2.02344 16.0917 2.02344 13.9842C2.02344 11.4797 3.95539 9.42638 6.41032 9.23329Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.56836 11.75C9.23759 11.75 8.94588 11.9667 8.85033 12.2834L7.35033 17.2547C7.28179 17.4819 7.32479 17.7281 7.46629 17.9186C7.60778 18.1091 7.83107 18.2214 8.06836 18.2214H9.50701V21.75C9.50701 22.0533 9.68975 22.3268 9.97 22.4429C10.2503 22.559 10.5728 22.4948 10.7873 22.2803L16.5087 16.559C16.7232 16.3445 16.7874 16.0219 16.6713 15.7416C16.5552 15.4614 16.2817 15.2786 15.9784 15.2786H13.7897V12.5C13.7897 12.0858 13.454 11.75 13.0397 11.75H9.56836ZM9.07805 16.7214L10.1255 13.25H12.2897V16.0286C12.2897 16.2275 12.3688 16.4183 12.5094 16.559C12.6501 16.6996 12.8408 16.7786 13.0397 16.7786H14.1677L11.007 19.9393V17.4714C11.007 17.0572 10.6712 16.7214 10.257 16.7214H9.07805Z"
        fill="#323544"
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
export class SvgCloudBolt2Icon {
  readonly class = input<string>('');
}
