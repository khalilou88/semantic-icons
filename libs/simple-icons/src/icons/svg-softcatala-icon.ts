import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-softcatala-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Softcatal&#224;</title>
      <path
        d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0ZM8.363 3.808c.495 0 .924.088 1.286.264.361.176.661.41.9.7.238.292.413.598.523.919.11.32.165.633.165.937 0 .279-.069.53-.207.753-.137.223-.31.334-.515.334a.495.495 0 0 1-.427-.2c-.097-.135-.203-.354-.317-.659-.147-.436-.323-.776-.529-1.02-.206-.245-.536-.367-.991-.367-.423 0-.763.133-1.022.398a1.323 1.323 0 0 0-.388.958c0 .23.044.43.132.599.088.168.21.312.363.433.155.12.31.215.469.284.158.068.418.168.782.3.455.152.868.32 1.237.504.369.184.683.407.942.67.259.262.46.595.606.997.011.03.019.065.03.097a11.59 11.59 0 0 1-.036-.903c0-.931.097-1.765.293-2.502.196-.736.476-1.366.84-1.89.366-.523.793-.922 1.284-1.195a3.174 3.174 0 0 1 1.57-.411c.678 0 1.282.187 1.81.56a3.8 3.8 0 0 1 1.216 1.382c.282.55.423 1.068.423 1.556 0 .268-.069.504-.206.71-.137.204-.302.307-.496.307-.217 0-.38-.071-.489-.214-.108-.142-.23-.387-.362-.735-.22-.574-.48-1.004-.78-1.289a1.541 1.541 0 0 0-1.104-.427c-.697 0-1.252.367-1.665 1.1-.413.732-.62 1.773-.62 3.122 0 .902.092 1.651.275 2.25.183.598.441 1.044.776 1.34.335.295.727.442 1.177.442.487 0 .899-.167 1.236-.502.337-.334.59-.826.762-1.474.072-.306.162-.555.268-.747.107-.193.278-.289.514-.289.202 0 .375.098.52.293.144.195.216.437.216.726 0 .368-.065.765-.197 1.193a4.65 4.65 0 0 1-.62 1.26 3.333 3.333 0 0 1-1.078 1.003c-.438.257-.948.386-1.53.386-.442 0-.843-.057-1.205-.172a2.925 2.925 0 0 1-.984-.537 3.888 3.888 0 0 1-.813-.96 6.345 6.345 0 0 1-.564-1.22 7.816 7.816 0 0 1-.246-.887c0 .035.003.069.004.105 0 .7-.126 1.33-.378 1.887-.251.558-.62.995-1.104 1.31-.485.316-1.06.474-1.724.474-.797 0-1.454-.216-1.972-.648-.366-.31-.664-.725-.893-1.243a3.721 3.721 0 0 1-.344-1.51c0-.285.069-.528.206-.73.137-.203.313-.304.525-.304.172 0 .318.079.437.236.12.158.221.392.306.702.102.368.213.675.333.922.119.247.287.45.503.611.217.16.502.24.854.24.485 0 .878-.161 1.181-.484.303-.324.455-.727.455-1.21 0-.384-.082-.695-.245-.934a1.609 1.609 0 0 0-.634-.548 8.483 8.483 0 0 0-1.038-.402c-.58-.195-1.065-.422-1.455-.682a2.75 2.75 0 0 1-.93-1.064c-.23-.449-.344-1.007-.344-1.674 0-.636.121-1.2.363-1.694a2.609 2.609 0 0 1 1.052-1.139c.459-.265.998-.398 1.619-.398Zm9.43 12.702h.137c.04 0 .07.01.09.03a.38.38 0 0 1 .067.129l.045.118a.25.25 0 0 1 .027.083c0 .023-.014.035-.043.035a.21.21 0 0 1-.124-.04 1.136 1.136 0 0 1-.138-.168.823.823 0 0 1-.111-.166c0-.014.017-.021.051-.021zm-4.97.501a.16.16 0 0 1 .103.033c.028.022.05.05.068.086a.693.693 0 0 1 .043.111l.045.16.385 1.331c.03.101.045.175.045.221a.22.22 0 0 1-.043.132c-.029.04-.063.06-.103.06a.104.104 0 0 1-.06-.018.146.146 0 0 1-.043-.048.502.502 0 0 1-.037-.093l-.033-.11-.07-.259h-.6l-.07.265c-.027.103-.05.173-.07.209-.02.036-.051.054-.096.054-.037 0-.07-.02-.1-.058a.213.213 0 0 1-.042-.13c0-.029.003-.058.01-.088l.033-.125.377-1.34.038-.138a.831.831 0 0 1 .049-.135.244.244 0 0 1 .067-.087.16.16 0 0 1 .103-.033zm2.502 0a.16.16 0 0 1 .104.033c.027.023.05.05.067.086a.712.712 0 0 1 .043.111l.045.16.385 1.331c.03.101.045.175.045.221a.222.222 0 0 1-.043.132c-.028.04-.063.06-.103.06a.104.104 0 0 1-.06-.018.145.145 0 0 1-.043-.048.517.517 0 0 1-.036-.093 15.369 15.369 0 0 1-.033-.11l-.07-.259h-.6l-.07.265a1.208 1.208 0 0 1-.07.209.102.102 0 0 1-.096.054c-.038 0-.071-.02-.1-.058a.211.211 0 0 1-.043-.13c0-.029.003-.058.01-.088l.033-.125.377-1.34.039-.138a.831.831 0 0 1 .048-.135.24.24 0 0 1 .067-.087.161.161 0 0 1 .104-.033zm1.05 0c.045 0 .082.021.11.063a.354.354 0 0 1 .041.191v1.502h.605c.049 0 .086.017.112.05a.194.194 0 0 1 .038.123.19.19 0 0 1-.038.123c-.025.031-.063.047-.111.047h-.721c-.065 0-.112-.02-.14-.06-.029-.041-.043-.106-.043-.196v-1.59a.36.36 0 0 1 .04-.19c.028-.042.063-.063.108-.063zm1.675 0a.16.16 0 0 1 .104.033c.028.022.05.05.067.086a.712.712 0 0 1 .043.111l.045.16.385 1.331c.03.101.045.175.045.221a.222.222 0 0 1-.043.132c-.028.04-.063.06-.103.06a.104.104 0 0 1-.06-.018.145.145 0 0 1-.042-.048.502.502 0 0 1-.037-.093l-.033-.11-.07-.259h-.6l-.07.265a1.208 1.208 0 0 1-.07.209.102.102 0 0 1-.096.054c-.038 0-.07-.02-.1-.058a.213.213 0 0 1-.043-.13c0-.029.003-.058.01-.088l.033-.125.377-1.34.039-.138a.831.831 0 0 1 .048-.135.24.24 0 0 1 .068-.087.161.161 0 0 1 .103-.033zm-6.683 0c.12 0 .226.034.319.1a.674.674 0 0 1 .214.247c.05.098.074.191.074.278 0 .048-.012.09-.036.127-.024.036-.053.055-.087.055-.038 0-.067-.013-.086-.038a.566.566 0 0 1-.064-.132.62.62 0 0 0-.138-.229.27.27 0 0 0-.194-.076c-.123 0-.22.065-.293.196-.073.13-.11.316-.11.556 0 .16.017.294.049.4a.506.506 0 0 0 .137.24.302.302 0 0 0 .207.078c.086 0 .158-.03.217-.09a.568.568 0 0 0 .135-.262.54.54 0 0 1 .047-.133.096.096 0 0 1 .09-.051c.036 0 .066.017.092.052a.211.211 0 0 1 .038.13.736.736 0 0 1-.034.212.842.842 0 0 1-.11.225.592.592 0 0 1-.19.18.515.515 0 0 1-.269.069.687.687 0 0 1-.212-.031.513.513 0 0 1-.173-.097.7.7 0 0 1-.144-.172 1.134 1.134 0 0 1-.1-.217 1.484 1.484 0 0 1-.061-.257 1.938 1.938 0 0 1-.02-.29c0-.166.016-.315.051-.446.034-.131.084-.244.148-.337a.684.684 0 0 1 .227-.213.554.554 0 0 1 .276-.074zm-4.117 0c.152 0 .284.044.393.13a.8.8 0 0 1 .249.371c.056.16.084.348.084.564 0 .16-.015.304-.046.434a1.08 1.08 0 0 1-.139.34.65.65 0 0 1-.227.219.618.618 0 0 1-.308.076.614.614 0 0 1-.538-.298 1.077 1.077 0 0 1-.138-.342 1.886 1.886 0 0 1-.047-.432c0-.159.016-.304.049-.437a1.07 1.07 0 0 1 .141-.338.65.65 0 0 1 .225-.213.613.613 0 0 1 .302-.073Zm-1.493.001a.55.55 0 0 1 .235.047.528.528 0 0 1 .29.457.25.25 0 0 1-.038.135c-.025.04-.056.06-.093.06a.091.091 0 0 1-.078-.036.52.52 0 0 1-.058-.118.558.558 0 0 0-.097-.182c-.037-.044-.098-.066-.18-.066a.251.251 0 0 0-.187.071.234.234 0 0 0-.071.171.22.22 0 0 0 .09.185.378.378 0 0 0 .086.05c.029.013.077.03.143.054.083.027.158.057.226.09a.645.645 0 0 1 .172.12.485.485 0 0 1 .11.178c.026.071.04.16.04.263a.79.79 0 0 1-.07.336.537.537 0 0 1-.516.318.555.555 0 0 1-.36-.115.607.607 0 0 1-.163-.221.652.652 0 0 1-.063-.27c0-.05.013-.094.038-.13a.113.113 0 0 1 .096-.054.1.1 0 0 1 .08.042c.022.029.04.07.055.126a1 1 0 0 0 .061.164c.022.044.053.08.092.11a.26.26 0 0 0 .156.042c.089 0 .16-.029.216-.086a.3.3 0 0 0 .083-.217.284.284 0 0 0-.045-.166.292.292 0 0 0-.116-.098 1.558 1.558 0 0 0-.19-.072 1.137 1.137 0 0 1-.265-.122.495.495 0 0 1-.17-.19.642.642 0 0 1-.062-.299c0-.114.022-.215.066-.303a.47.47 0 0 1 .192-.203.592.592 0 0 1 .295-.071zm2.65.034h.704c.048 0 .083.015.106.045.023.03.035.068.035.116a.186.186 0 0 1-.035.118c-.023.03-.058.044-.105.044h-.589v.528h.492c.046 0 .08.014.102.043a.181.181 0 0 1 .034.115.176.176 0 0 1-.034.114c-.023.028-.057.042-.102.042h-.492v.68c0 .085-.013.15-.041.191-.028.042-.064.063-.107.063-.044 0-.08-.021-.108-.063a.353.353 0 0 1-.042-.192v-1.587c0-.06.006-.11.019-.147a.15.15 0 0 1 .06-.083.189.189 0 0 1 .104-.027zm1.076 0h.95c.051 0 .09.016.115.049a.198.198 0 0 1 .038.125.194.194 0 0 1-.039.125c-.025.032-.063.047-.114.047h-.326v1.498c0 .087-.014.15-.041.192-.028.042-.063.063-.107.063-.045 0-.08-.021-.109-.063a.35.35 0 0 1-.041-.192v-1.496h-.326c-.051 0-.089-.016-.114-.048a.196.196 0 0 1-.037-.125.19.19 0 0 1 .039-.127c.025-.031.063-.046.112-.046zm4.1 0h.95c.051 0 .09.016.115.049a.198.198 0 0 1 .038.125.194.194 0 0 1-.038.125c-.026.031-.064.047-.115.047h-.326v1.498c0 .087-.014.15-.041.192-.028.042-.063.063-.107.063s-.08-.021-.108-.063a.35.35 0 0 1-.042-.192v-1.496h-.326c-.05 0-.089-.016-.113-.048a.197.197 0 0 1-.038-.125.19.19 0 0 1 .039-.127c.026-.031.063-.046.112-.046zm-6.334.297a.307.307 0 0 0-.165.047.404.404 0 0 0-.13.138.767.767 0 0 0-.087.23 1.434 1.434 0 0 0-.031.315c0 .117.01.223.031.318a.767.767 0 0 0 .09.236c.038.063.082.11.132.14.05.031.105.047.164.047a.322.322 0 0 0 .21-.08.54.54 0 0 0 .154-.248c.037-.113.056-.25.056-.413a1.32 1.32 0 0 0-.052-.393.541.541 0 0 0-.149-.252.327.327 0 0 0-.223-.085Zm5.572.11-.219.85h.441zm2.502 0-.218.85h.44zm2.725 0-.218.85h.44zm-6.858 2.39h.392l-.96.96-.197-.195zm.636 0h.392l-1.279 1.279-.196-.196zm.636 0h.392l-1.597 1.596-.196-.195zm.635 0h.393l-1.915 1.915-.196-.197z"
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
export class SvgSoftcatalaIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
