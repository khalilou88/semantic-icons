import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-bspwm-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>bspwm</title>
      <path
        d="M5.814 8.437c-.02-.02-.025-.076-.025-.166v-.895c0-.076.005-.12.02-.136.01-.015.055-.025.126-.025h.683c.433 0 .654.211.654.629 0 .422-.221.628-.654.628H5.93c-.06 0-.101-.01-.116-.035zm.146 1.795h.709a.714.714 0 0 0 .502-.176c.131-.116.201-.292.201-.528 0-.231-.065-.402-.196-.513a.762.762 0 0 0-.507-.166h-.75c-.055 0-.09.01-.105.03-.02.02-.025.076-.025.156v1.076c0 .05.01.086.03.1.02.016.065.02.14.02zm11.392-1.61h.492c.211 0 .372-.065.483-.2.11-.136.17-.322.17-.553 0-.433-.22-.654-.653-.654h-.492c-.076 0-.121.01-.136.02-.02.01-.025.045-.025.1v1.082c0 .1.005.155.02.176.015.02.06.03.14.03zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-8.041-4.9c0 .06.005.09.015.1.01.01.04.015.1.015h.262c.08 0 .13.01.15.025.016.015.026.056.026.12v2.715c0 .031.005.051.005.061 0 .065-.035.096-.1.096h-.358c-.05 0-.075.01-.085.02-.01.01-.015.045-.015.105v.1c0 .071.005.116.015.132.01.015.045.02.105.02h1.64c.06 0 .095-.005.105-.02.01-.01.02-.05.02-.121v-.161c0-.055-.035-.085-.095-.085-.015 0-.036.005-.066.005-.03.005-.055.005-.07.005h-.261c-.076 0-.121-.005-.136-.015-.02-.01-.025-.046-.025-.106V9.1c0-.071.03-.106.1-.106.01 0 .03.005.06.005h.493c.463 0 .81-.1 1.05-.307.237-.206.358-.483.358-.824 0-.332-.12-.583-.352-.764-.231-.176-.583-.267-1.056-.267h-1.649c-.02 0-.04 0-.07-.005-.03 0-.056-.005-.066-.005-.07 0-.1.03-.1.09V7.1zm-5.47 3.443c0 .035.005.06.025.07.015.016.05.02.106.02h.136c.03 0 .06 0 .08-.004a.12.12 0 0 0 .056-.03c.01-.015.02-.03.03-.04.005-.01.015-.026.025-.051a.335.335 0 0 1 .03-.06c.035-.066.06-.1.075-.1.01 0 .04.02.096.055.236.19.538.28.905.28.432 0 .784-.1 1.055-.3a.984.984 0 0 0 .403-.83 1.14 1.14 0 0 0-.126-.543.885.885 0 0 0-.317-.347 2.183 2.183 0 0 0-.437-.201 5.763 5.763 0 0 0-.478-.146 3.673 3.673 0 0 1-.432-.136.816.816 0 0 1-.322-.211.499.499 0 0 1-.12-.342c0-.15.06-.266.18-.352.121-.085.302-.13.544-.13.206 0 .397.06.578.176a.87.87 0 0 1 .362.472c0 .015.005.05.01.106a.354.354 0 0 0 .03.126c.01.03.035.045.07.045h.186c.05 0 .08-.01.096-.035a.2.2 0 0 0 .025-.111v-.976a.17.17 0 0 0-.02-.09c-.01-.01-.04-.02-.086-.02h-.1a.45.45 0 0 0-.151.015c-.025.01-.05.035-.076.075l-.05.08c-.04.061-.065.086-.08.086-.01 0-.045-.02-.106-.07a1.333 1.333 0 0 0-.79-.236c-.361 0-.658.085-.899.256-.241.171-.357.422-.357.754 0 .201.04.367.12.503a.8.8 0 0 0 .318.317c.13.07.27.13.432.18.156.05.312.096.472.136.156.04.297.091.428.141.13.056.236.13.316.231.08.101.126.227.126.372a.6.6 0 0 1-.206.468c-.136.12-.352.181-.648.181a1.12 1.12 0 0 1-.694-.221 1.014 1.014 0 0 1-.402-.548.395.395 0 0 1-.02-.11c-.006-.051-.016-.086-.036-.101a.25.25 0 0 0-.11-.02h-.136c-.05 0-.08.005-.096.015-.015.01-.02.03-.02.06v.045c0 .02.005.04.005.05v.936c0 .02-.005.04-.005.06v.05zm-5.932-.065c0 .055.005.09.025.11.015.02.046.026.086.026h.065c.03 0 .06-.005.08-.005H6.72c.427 0 .769-.086 1.025-.257.252-.17.383-.437.383-.799a.772.772 0 0 0-.262-.609c-.176-.15-.417-.246-.724-.291.553-.11.835-.407.835-.885 0-.312-.126-.543-.377-.699-.252-.15-.578-.231-.98-.231H4.707c-.025 0-.04-.005-.05-.005-.04 0-.07.01-.08.03-.016.02-.02.055-.02.11v.167c0 .04.004.06.014.065.01.01.04.01.09.01h.378c.03 0 .045.01.055.02.01.01.015.04.015.08v2.695c0 .11-.01.176-.03.197-.02.02-.08.025-.186.025h-.241c-.046 0-.07.01-.08.02-.01.015-.016.05-.016.11v.116zm6.52 3.2c0-.05-.006-.08-.016-.09a.231.231 0 0 0-.097-.013h-.838c-.06 0-.094.007-.104.02-.013.013-.017.054-.017.12v.105c0 .05.007.08.02.09.014.013.05.017.114.017a.76.76 0 0 1 .155.01c.023.007.036.017.036.037 0 .01-.013.05-.036.124l-.232.663c-.04.114-.09.255-.144.423-.04.117-.067.174-.074.174-.01 0-.033-.074-.073-.225a9.152 9.152 0 0 0-.1-.331l-.252-.764a.258.258 0 0 1-.017-.078c0-.02.023-.033.077-.033h.077c.05 0 .08-.004.094-.013.013-.007.02-.03.02-.071v-.188c0-.033-.007-.053-.02-.067-.013-.013-.037-.02-.064-.02-.013 0-.03.003-.053.003-.027.004-.044.004-.057.004h-.862c-.02 0-.03-.004-.037-.004-.033 0-.053.007-.063.02-.014.014-.017.047-.017.094v.1c0 .014-.003.028-.003.044v.037c0 .024.003.04.013.047.01.01.03.014.064.014h.11c.054 0 .087.017.1.05l.028.07a.27.27 0 0 1 .016.067c0 .014-.01.047-.03.094l-.291.684c-.014.037-.037.09-.067.16-.034.075-.05.118-.057.132-.037.08-.06.12-.067.12-.014 0-.03-.023-.044-.07a3.822 3.822 0 0 1-.07-.198c-.027-.08-.044-.14-.054-.174l-.265-.754-.02-.054-.023-.05a.066.066 0 0 1-.007-.034c0-.027.037-.043.117-.043h.135c.036 0 .06-.004.067-.014a.196.196 0 0 0 .013-.087v-.16c0-.038-.007-.061-.017-.074a.071.071 0 0 0-.053-.02c-.007 0-.02.003-.04.003H6.978c-.024 0-.04-.004-.047-.004-.054 0-.077.03-.077.084v.178c0 .047.003.074.016.08.01.01.044.014.101.014h.1a.34.34 0 0 1 .068.006c.016.004.03.01.043.02.01.014.017.02.02.027a.3.3 0 0 1 .017.047c.007.024.01.04.017.05l.697 1.921.013.044c.007.02.01.03.014.037 0 .006.007.013.017.023a.04.04 0 0 0 .033.017.27.27 0 0 0 .057.003h.15c.02 0 .041 0 .058-.003.013 0 .027-.004.04-.004a.06.06 0 0 0 .034-.013.07.07 0 0 1 .02-.014c.006-.003.01-.01.016-.023.007-.01.01-.017.014-.024l.013-.033c.007-.017.01-.03.017-.04l.355-.845c.014-.033.067-.174.168-.422.034-.08.054-.124.067-.124.013 0 .037.054.064.154a4.3 4.3 0 0 0 .144.432l.308.815.017.05a.157.157 0 0 0 .016.047l.024.023a.05.05 0 0 0 .044.02c.016.004.04.004.07.004h.12c.03 0 .058 0 .078-.007a.158.158 0 0 0 .047-.013c.013-.003.023-.013.033-.027l.02-.037a.268.268 0 0 0 .017-.05c.007-.027.01-.047.017-.06l.647-1.87a.841.841 0 0 1 .027-.084.131.131 0 0 1 .036-.03.253.253 0 0 1 .104-.017h.141a.16.16 0 0 0 .07-.01c.007-.007.014-.024.014-.05v-.188zm5.671 2.126c0-.027-.006-.044-.016-.054a.173.173 0 0 0-.077-.013h-.175c-.053 0-.087-.007-.1-.023-.017-.017-.024-.047-.024-.088v-.107l-.057-1.435c0-.013-.003-.026-.003-.046v-.04c0-.03.007-.05.02-.058a.29.29 0 0 1 .104-.013h.094c.064 0 .1-.003.114-.017.013-.01.02-.043.02-.104v-.124c0-.043-.007-.073-.02-.087a.084.084 0 0 0-.06-.023c-.01 0-.027.003-.048.003h-.864a.297.297 0 0 0-.087.01.103.103 0 0 0-.054.037c-.013.017-.02.034-.027.047a.322.322 0 0 0-.023.063.48.48 0 0 1-.02.07l-.279.758c-.073.198-.13.362-.164.496-.033.125-.06.185-.08.185-.02 0-.044-.064-.074-.198a8.58 8.58 0 0 0-.147-.51l-.275-.878a.165.165 0 0 0-.04-.067.194.194 0 0 0-.081-.013h-1.002c-.023 0-.037-.003-.044-.003-.03 0-.05.006-.063.02-.014.013-.017.043-.017.083v.165c0 .04.003.067.017.073.01.01.04.014.093.014h.155c.04 0 .07.006.083.013.014.01.02.027.02.047l-.006.097-.07 1.475v.084c0 .033-.007.06-.02.074-.014.013-.04.02-.081.02h-.168c-.06 0-.097.006-.107.016-.013.01-.017.04-.017.094v.154c0 .037.004.06.017.074.01.014.027.017.054.017h.037c.02 0 .037-.003.05-.003h.905c.04 0 .064-.004.077-.014.01-.006.017-.027.017-.053v-.215c0-.03-.004-.05-.01-.057a.06.06 0 0 0-.04-.013h-.205c-.054 0-.09-.004-.107-.017-.02-.013-.027-.033-.027-.064 0-.01 0-.03.003-.057a.46.46 0 0 0 .007-.06l.027-.73.003-.202c0-.134.003-.251.01-.352.003-.1.01-.15.02-.15.014 0 .044.067.084.2.037.121.094.302.171.537l.389 1.186c.013.047.03.074.047.081.013.01.047.013.1.013h.252c.026 0 .05-.003.07-.016a.119.119 0 0 0 .034-.04.287.287 0 0 0 .02-.064c.006-.027.01-.047.016-.06l.41-1.214c.02-.057.053-.181.103-.369.034-.134.057-.204.07-.204.007 0 .014.043.02.124.004.084.007.184.01.302l.004.174.027.784c0 .02 0 .04.003.067 0 .027.004.044.004.05 0 .03-.01.05-.027.064-.017.014-.047.017-.094.017h-.16c-.051 0-.081.007-.095.017-.013.01-.017.03-.017.063v.198c0 .034.004.054.014.064.01.01.027.013.05.013h.037c.017 0 .03-.003.044-.003h1.132c.054 0 .084-.004.098-.014.01-.006.016-.033.016-.077v-.194zM21.128 12a.173.173 0 0 0-.174-.174h-5.975v-8.78a.173.173 0 1 0-.347 0v8.78H9.294v-8.78a.173.173 0 1 0-.348 0v8.78h-5.9a.174.174 0 0 0 0 .348h8.78v8.78a.173.173 0 1 0 .348 0v-8.78h8.78a.173.173 0 0 0 .173-.174z"
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
export class SvgBspwmIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
