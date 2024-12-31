import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-kingstontechnology-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Kingston Technology</title>
      <path
        d="M14.123.0007c-.5442-.0038-1.0301.008-1.4389.0204C7.185.1697 4.2115 1.7057 4.2115 1.7057s-.2967.1988-.148.8428c0 0 .0993.7921.1983 1.139l.0494.0996c-.099.099-.4958.2973-.6445.4954-.3468.446-.0493 2.4772-.0493 2.4772.3468 2.1303.6938 2.5265.6938 2.5265s.4956.6436 1.1892 1.0895c.2973.1486.2477.4954.2477.4954L3.3203 24h16.3492l-3.4187-7.4808c.6936 0 2.1306.3464 2.9232-1.883.7432-2.1303 1.1397-5.3502 1.1893-6.2915.099-.9414-.0999-2.9233-.0503-3.4187 0-.1486.3473-.6442.3473-.9415.0496-.4459-.0006-.8418-.0996-1.585-.0496-.2972-.0983-.644-.1974-.9908-.0496-.2478-.0999-.3964-.298-.4955C17.91.1701 15.7555.0124 14.123.0007Zm-1.4389.4171c.545 0 5.1027-.0492 7.233.8922.1983.1486.0498.8915-.0493 1.2879-.0495.2972-.3967.3967-.3967.3967-.3468.099-.446.3464-.446.3464s.4458 4.3102.4954 4.4589c.0495.1981-.1485.1981-.5448.2477-.1982 0-2.4772.0493-2.4772.0493s-.4956-.0491-.446-.3464c0-.1981.0992-.595.1983-.595h.4461s.991.0497.6938-.0494l-1.0402-.2477s-.2483.0004-.3474.149c-.0495.1486-.297.9415-.297.9415s-.0002.0491.0493.0987c.0495.0495 2.5768 1.883 2.5768 1.883s-2.1311-.199-2.7752-.0503c-.644.1486-1.9813.8422-2.8235.9908-.8422.1487-3.9636.4955-4.1618.4955l-1.2386-5.35s-.1484-1.3375-1.5356-1.288c-1.0404.0495-1.189.2967-1.2386.3958-.099.1981 0 .3967 0 .3967l3.3693 5.7468s-2.2792-1.0896-3.171-2.3282c-.4954-.644-.9416-3.8645-.6444-4.4095.2973-.4954 2.1306-.8915 2.9233-.7925.3963.0496.7433.4452.9415.6929.0495.099.0985.0501.148.0996 0 0-.1982-1.2383-.9909-1.2879-1.1394-.099-2.3774.3464-2.3774.3464s-.0995-.0004-.149-.149c-.0496-.1982-.1984-1.2386-.1984-1.2386s.0495-.198.2477-.297c0 0 3.2209-1.4863 8.0265-1.4863zm.6435 1.4273c-.0704.003-.0987.0096-.0987.0096-2.0808.8423-3.765 2.675-3.765 2.5759.1981.0495.594 0 .594 0 1.8332-1.5854 3.4187-2.2295 3.4187-2.2295 1.3377 0 3.6165.7927 3.765.7432.0496 0 .0498-.2475-.0493-.297-.2477-.0496-.7433-.2973-1.6846-.4955-1.3748-.2973-1.9688-.316-2.1801-.3067Zm6.788 1.3972c.1981.0496.198.049.297.148.1486.0992.0991.3966 0 .4461-.099.0991-.1484-.0988-.7925-.0493 0 0 .2973-.5943.4955-.5448zm-4.8711.1016c-.3623-.0186-.8641.0469-1.4215.1955-.7431.1982-2.2294.9415-2.2294.9415.5945.2477 1.5861.3468 2.5275.4954 1.0404.0991 2.179-.446 2.179-.446-.0495-.1487-.3963-1.0408-.743-1.14-.0868-.0247-.1919-.0402-.3126-.0464zm.7867 7.4015c.7242.0174 1.5759.1012 2.449.3241 0 0 .4957.3964.4461.7432 0 0-3.567.198-4.9543-.9416 0 0 .852-.1548 2.0592-.1257zm-9.7383.176 1.5356 1.0403 2.5265 11.5429H3.9145Zm11.8032 1.4554a8.479 8.479 0 0 1 .7315.031s.2973.2475-.4954 1.0401c-.9909.9414-2.7256 1.6843-4.2615 1.288 0 0 .5664-2.351 4.0254-2.3591zm-8.0875 4.1918s3.1216 1.9323 3.617 2.6755l.3464 4.3108h-2.2787Zm5.3007 3.9634s1.8335 1.6852 2.3785 3.0229h-3.0713z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgKingstontechnologyIcon {
  readonly class = input<string>('');
}
