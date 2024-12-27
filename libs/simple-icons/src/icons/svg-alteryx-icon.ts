import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-alteryx-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Alteryx</title>
      <path
        d="m2.312 13.2-.014.01-.014.008a1.796 1.796 0 0 1-.943.293C.886 13.5.72 13.34.71 12.9c.01-.504.178-.66.747-.695l.785-.037.035-.002h.034V13.2zm1.429.248a.185.185 0 0 0-.182-.137.37.37 0 0 0-.072.009c-.121.03-.189.038-.282.045-.178.008-.21-.061-.22-.26v-2.732a.24.24 0 0 0-.088-.164l-.017-.012c-.006-.004-.012-.01-.02-.014-.148-.087-.394-.157-.604-.21l-.015-.005a3.437 3.437 0 0 0-1.158-.072c-.12.012-.442.065-.55.102-.032.01-.133.059-.137.155.002.05.058.21.058.21.037.111.076.138.146.153.057.006.18-.02.261-.033a2.726 2.726 0 0 1 .922-.032c.357.055.494.165.494.165v1.06l-.031.001-.762.02c-1.02.032-1.49.436-1.484 1.25-.001.37.115.667.335.858.205.18.506.276.868.276h.001a1.73 1.73 0 0 0 1.122-.404l.033-.026.017.038a.611.611 0 0 0 .423.355 1.172 1.172 0 0 0 .412.031c.117-.016.271-.037.443-.118.095-.045.162-.1.157-.2a2.037 2.037 0 0 0-.07-.309zm11.261.614h-.37a.177.177 0 0 1-.135-.051c-.03-.035-.043-.082-.043-.146v-3.51c-.003-.066.014-.114.048-.146.03-.03.073-.043.132-.043h.335c.063 0 .105.013.138.04.033.028.051.075.05.13l.004.094.003.079.053-.058a1.103 1.103 0 0 1 1.048-.347c.07.013.096.083.09.12 0 .019 0 .033-.002.046l-.056.354a.116.116 0 0 1-.107.107.618.618 0 0 1-.095-.01c-.04-.006-.085-.014-.165-.014-.26 0-.549.171-.742.438l-.006.008v2.712c0 .06-.015.108-.045.142a.174.174 0 0 1-.135.055zm-2.287-2.375h-1.702c.024-.858.351-1.21.89-1.21.524 0 .82.288.82.961 0 .053 0 .187-.008.25zm-.796-1.756c-.953 0-1.67.663-1.67 2.17 0 1.382.647 2.06 1.865 2.06.193 0 .422-.022.64-.067.035-.006.07-.015.105-.023a2.45 2.45 0 0 0 .33-.12c.076-.029.135-.088.139-.161a3.34 3.34 0 0 0-.08-.33c-.03-.073-.096-.119-.163-.115-.023 0-.35.071-.37.077a2.406 2.406 0 0 1-.586.077c-.866 0-1.124-.414-1.124-1.266v-.062h2.27a.143.143 0 0 0 .128-.125l.002-.03c.008-.148.013-.305.013-.43 0-1.047-.508-1.655-1.5-1.655zm5.371 5.712h-.025c-.134 0-.244-.01-.352-.031-.067-.012-.092-.099-.078-.217 0 0 .008-.126.027-.215.017-.09.06-.132.108-.132h.014l.037.002c.021.001.052.005.081.008.066.007.133.014.186.014.442-.005.681-.167.85-.577l.204-.498.02-.053.007-.022-.007-.023-1.363-3.604a.133.133 0 0 1-.008-.047.09.09 0 0 1 .02-.06.09.09 0 0 1 .065-.027h.517c.075 0 .13.04.147.098l.898 2.58.06.174.061-.173.927-2.562a.152.152 0 0 1 .146-.118h.004l.014.001h.428c.035 0 .06.007.078.021a.07.07 0 0 1 .024.055.186.186 0 0 1-.013.066l-1.525 4.09c-.332.911-.752 1.25-1.552 1.25zm6.143-1.59a.223.223 0 0 1-.204-.118l-.814-1.258-.029-.042-.027.042-.814 1.256a.226.226 0 0 1-.206.12l-.013-.002h-.435a.132.132 0 0 1-.083-.024.096.096 0 0 1-.034-.079c0-.036.013-.074.034-.105l1.178-1.789.014-.018-.014-.018-1.086-1.674a.152.152 0 0 1-.027-.082c0-.07.064-.113.126-.113h.408c.089 0 .158.038.188.098l.764 1.16.027.04.026-.04.76-1.153a.2.2 0 0 1 .184-.105h.419c.06 0 .127.043.127.113 0 .025-.01.051-.03.08l-1.085 1.676-.013.018.013.018 1.175 1.785a.184.184 0 0 1 .038.108.099.099 0 0 1-.033.08.138.138 0 0 1-.085.024h-.433l-.016.002zm-17.643.01c-.192 0-.377-.031-.538-.09a.829.829 0 0 1-.347-.216c-.232-.255-.252-.572-.255-.99v-4c0-.023.01-.047.025-.065a1.22 1.22 0 0 1 .527-.34c.013-.005.022-.005.033-.005a.14.14 0 0 1 .099.04c.032.033.048.08.047.14v4.255c.002.221.055.397.152.507.083.092.218.138.389.138.042 0 .088-.003.144-.01a2.09 2.09 0 0 0 .324-.078.156.156 0 0 1 .063-.013c.068 0 .127.048.15.119 0 0 .06.204.068.3.005.084-.07.14-.139.164a2.16 2.16 0 0 1-.742.144zm3.737-.61c-.022-.072-.081-.12-.151-.12a.17.17 0 0 0-.063.013 1.66 1.66 0 0 1-.45.088l-.018.002c-.176 0-.308-.048-.392-.14-.08-.087-.136-.23-.14-.495v-.014l.021-2.106h.862a.185.185 0 0 0 .12-.033c.043-.034.05-.09.048-.12v-.265c.001-.057-.015-.098-.048-.124a.185.185 0 0 0-.113-.03h-.869V8.798c0-.062-.015-.108-.047-.141a.146.146 0 0 0-.099-.04c-.01 0-.02 0-.036.005-.05.019-.186.066-.334.17a1.313 1.313 0 0 0-.156.137.102.102 0 0 0-.023.063l-.02 1.103h-.446a.168.168 0 0 0-.124.047.18.18 0 0 0-.042.128v.242c0 .053-.001.098.039.142.046.042.09.039.142.04h.418l-.04 1.982.001.085c.002.42.022.738.255.995.178.194.503.305.89.307.349 0 .62-.093.745-.144.066-.028.141-.082.138-.165 0-.079-.068-.301-.068-.301z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
      color: currentColor;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgAlteryxIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
