import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-omadacloud-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Omada Cloud</title>
      <path
        d="M12.7661 7.7505c-1.5153 0-2.9.6719-3.785 1.9064l.6576.675c.71-.9905 1.9078-1.6246 3.1274-1.6246 1.2207 0 2.4211.634 3.131 1.6246l.6558-.6737c-.885-1.235-2.271-1.9077-3.7868-1.9077Zm-.006 2.1913c-.9665 0-1.8425.4007-2.481 1.1946l.6656.6835c.4615-.5727 1.1276-.921 1.8154-.921.6884 0 1.3536.3633 1.815.9372l.6737-.692c-.639-.795-1.521-1.2023-2.4887-1.2023zm5.9575.9935v1.7361a1.9864 1.9864 0 0 0-1.2757-.4662c-1.0993 0-1.9933.897-1.9933 1.9995 0 1.103.894 1.9996 1.9933 1.9996.4848 0 .93-.1747 1.2757-.4645v.3045h.718v-5.109Zm-12.524 1.2699c-.8826 0-1.6005.7202-1.6005 1.6053v2.2343h.718v-2.2343c0-.4879.396-.885.8824-.885.487 0 .8833.3971.8833.885v2.2343h.7176v-2.2343c0-.4879.3959-.885.8829-.885.487 0 .8833.3971.8833.885v2.2343h.7176v-2.2343c0-.885-.7184-1.6053-1.601-1.6053-.4837 0-.9355.2168-1.2416.5952-.3066-.3784-.7583-.5952-1.242-.5952Zm6.6682 0c-1.0992 0-1.9933.897-1.9933 1.9995 0 1.103.894 1.9996 1.9933 1.9996.465 0 .9166-.1652 1.2757-.4663v.3063h.718v-1.8396c0-1.1025-.8945-1.9995-1.9937-1.9995zm9.145 0c-1.0993 0-1.9938.897-1.9938 1.9995 0 1.103.8945 1.9996 1.9937 1.9996.465 0 .9162-.1652 1.2753-.4663v.3063H24v-1.8396c0-1.1025-.894-1.9995-1.9933-1.9995zm-20.0122.0443c-.062 0-.1234.0029-.184.0085C.7966 12.3515 0 13.209 0 14.2495c0 1.1028.8948 2 1.9946 2 1.0999 0 1.9947-.8972 1.9947-2s-.8948-2-1.9947-2zm10.8674.676c.7032 0 1.2757.574 1.2757 1.2792 0 .7058-.5725 1.2793-1.2757 1.2793s-1.2752-.5735-1.2752-1.2793c0-.7053.572-1.2793 1.2752-1.2793zm4.58 0c.7033 0 1.2758.574 1.2758 1.2792 0 .7058-.5725 1.2793-1.2757 1.2793s-1.2753-.5735-1.2753-1.2793c0-.7053.572-1.2793 1.2753-1.2793zm4.565 0c.7031 0 1.2752.574 1.2752 1.2792 0 .7058-.572 1.2793-1.2753 1.2793-.7032 0-1.2761-.5735-1.2761-1.2793 0-.7053.5729-1.2793 1.2761-1.2793zm-19.9988.0582c.7033 0 1.2758.5735 1.2758 1.2788 0 .7058-.5725 1.2797-1.2757 1.2797-.7033 0-1.2753-.5739-1.2753-1.2797 0-.7053.572-1.2788 1.2753-1.2788z"
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
export class SvgOmadacloudIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
