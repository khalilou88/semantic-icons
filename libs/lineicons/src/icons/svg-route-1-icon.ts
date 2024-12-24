import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-route-1-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.50436 4.63189C5.0073 4.63189 4.60436 5.03483 4.60436 5.53189C4.60436 6.02894 5.0073 6.43189 5.50436 6.43189H5.5118C6.00886 6.43189 6.4118 6.02894 6.4118 5.53189C6.4118 5.03483 6.00886 4.63189 5.5118 4.63189H5.50436Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.15962 10.4077C5.22892 10.3219 5.33831 10.1864 5.51098 9.97237L5.04002 10.5561C5.31541 10.7783 5.70863 10.7778 5.98344 10.5548L5.51098 9.97237C5.61407 10.0995 5.69467 10.1988 5.7577 10.2765L6.12269 10.7265L5.82711 10.362C5.98356 10.5548 5.98331 10.555 5.98344 10.5548L5.98425 10.5542L5.98528 10.5533L5.98801 10.5511L5.99609 10.5445L6.02236 10.5225C6.0442 10.504 6.07455 10.478 6.11218 10.4447C6.1874 10.3783 6.29209 10.2827 6.41643 10.1609C6.66428 9.91804 6.99458 9.56666 7.3261 9.12999C7.97631 8.27355 8.69653 7.00309 8.69653 5.53186C8.69653 3.76896 7.26742 2.33984 5.50451 2.33984C3.74161 2.33984 2.3125 3.76896 2.3125 5.53186C2.3125 7.00434 3.03708 8.27533 3.69055 9.13151C4.02381 9.56816 4.35583 9.91949 4.60493 10.1623C4.7299 10.2841 4.83511 10.3796 4.91069 10.4461C4.94852 10.4793 4.97901 10.5053 5.00095 10.5237L5.02733 10.5457L5.03544 10.5523L5.03818 10.5546L5.03922 10.5554L5.04002 10.5561C5.04013 10.5562 5.03986 10.5559 5.12028 10.4564L4.90235 10.7265L5.15962 10.4077ZM3.8125 5.53186C3.8125 4.59738 4.57004 3.83984 5.50451 3.83984C6.43899 3.83984 7.19653 4.59738 7.19653 5.53186C7.19653 6.52559 6.69897 7.47539 6.1314 8.22296C5.91338 8.51013 5.69461 8.75482 5.50955 8.94574C5.32318 8.75456 5.10267 8.50935 4.88293 8.22144C4.31216 7.47361 3.8125 6.52434 3.8125 5.53186Z"
        fill="#323544"
      />
      <path
        d="M19.1206 16.2491C18.6235 16.2491 18.2206 16.652 18.2206 17.1491C18.2206 17.6461 18.6235 18.0491 19.1206 18.0491H19.128C19.6251 18.0491 20.028 17.6461 20.028 17.1491C20.028 16.652 19.6251 16.2491 19.128 16.2491H19.1206Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.6559 22.173C18.6561 22.1731 18.6562 22.1733 19.1272 21.5896L18.6559 22.173C18.9312 22.3951 19.3248 22.3949 19.5997 22.172L19.1272 21.5896C19.5997 22.172 19.5995 22.1722 19.5997 22.172L19.6005 22.1714L19.6015 22.1705L19.6042 22.1683L19.6123 22.1616L19.6386 22.1397C19.6604 22.1212 19.6908 22.0952 19.7284 22.0619C19.8036 21.9955 19.9083 21.8999 20.0326 21.7781C20.2805 21.5352 20.6108 21.1838 20.9423 20.7472C21.5925 19.8907 22.3127 18.6203 22.3127 17.149C22.3127 15.3861 20.8836 13.957 19.1207 13.957C17.3578 13.957 15.9287 15.3861 15.9287 17.149C15.9287 18.6215 16.6533 19.8925 17.3068 20.7487C17.64 21.1853 17.972 21.5367 18.2211 21.7795C18.3461 21.9013 18.4513 21.9968 18.5269 22.0632C18.5647 22.0965 18.5952 22.1225 18.6172 22.1409L18.6435 22.1629L18.6517 22.1695L18.6544 22.1718L18.6559 22.173ZM17.4287 17.149C17.4287 16.2146 18.1863 15.457 19.1207 15.457C20.0552 15.457 20.8127 16.2146 20.8127 17.149C20.8127 18.1428 20.3152 19.0926 19.7476 19.8402C19.5296 20.1273 19.3108 20.372 19.1258 20.5629C18.9394 20.3718 18.7189 20.1265 18.4991 19.8386C17.9284 19.0908 17.4287 18.1415 17.4287 17.149Z"
        fill="#323544"
      />
      <path
        d="M7.95031 10.7265H10.7091C11.8984 10.7265 12.8625 11.6905 12.8625 12.8798C12.8625 14.069 11.8984 15.0331 10.7091 15.0331H5.9697C3.95202 15.0331 2.31637 16.6688 2.31637 18.6864C2.31637 20.7041 3.95202 22.3398 5.96969 22.3398H16.6221C16.442 22.14 16.2496 21.912 16.0562 21.6587C15.8757 21.4222 15.6824 21.1479 15.4933 20.8398H5.96969C4.78045 20.8398 3.81637 19.8757 3.81637 18.6864C3.81637 17.4972 4.78045 16.5331 5.9697 16.5331H10.7091C12.7268 16.5331 14.3625 14.8975 14.3625 12.8798C14.3625 10.8621 12.7268 9.22647 10.7091 9.22647H9.07552C8.88923 9.53099 8.6988 9.80242 8.52077 10.0369C8.32574 10.2938 8.13164 10.5247 7.95031 10.7265Z"
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
export class SvgRoute1Icon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
