import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tindie-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Tindie</title>
      <path
        d="M21.576 1.742c-.051 0-.102.003-.152.008-1.724.137-3.14 1.095-4.098 2.773a8.284 8.284 0 0 0-.53 1.126c-.659-.396-1.624-.825-2.706-.825-.203 0-.405.016-.602.046-.729.112-2.949.453-4.497 1.938-.77.74-1.333 1.733-1.687 2.49-.861-.7-2.262-1.565-3.924-1.565-.737 0-1.459.172-2.147.513-.78.355-1.239 1.496-1.233 2.4.005.701.288 1.223.777 1.433.112.048.225.054.321.054.736 0 3.983-.568 5.928-.938l1.662 4.448.081.08c.005.005.082.081.214.212l.767.762c.29.289.625.622.974.97-.153.118-.319.25-.486.392-.914.773-1.321 1.388-1.321 1.886 0 1.016 1.629 2.313 2.955 2.313.302 0 .585-.11.841-.229l.535-.416c.415-.383.758-.935 1.027-1.484 1.002-.094 1.966-.459 2.773-.871l1.013-.584c.684-.44 1.121-.819 1.165-.857l.167-.147.269-6.285L18.1 7.202c.821-.301 1.848-.687 2.799-1.058 2.667-1.042 2.771-1.185 2.881-1.336.291-.402.293-.932.007-1.495-.394-.772-1.329-1.571-2.211-1.571Zm0 1.041c.39 0 1.025.496 1.284 1.003.084.165.107.294.095.366-.539.301-3.252 1.358-5.268 2.094.428-1.228 1.488-3.278 3.827-3.459l.022-.002c.013-.002.026-.002.04-.002ZM14.09 5.865c.967 0 1.851.461 2.385.812.197.13.348.245.436.317l.017.045.01.029.182.488 1.493 3.995-.097 2.281c-.858-.114-1.604-.115-2.285-.015-.364.054-.709.137-1.043.247a7.175 7.175 0 0 0-.206.073l-.629-1.534-.426-1.04-2.139-5.221c.794-.28 1.513-.391 1.858-.443a2.83 2.83 0 0 1 .444-.034Zm-2.727.641 2.072 5.056.426 1.041.7 1.706c-1.103.498-2.128 1.306-3.361 2.364-.34-.339-.658-.655-.925-.921-.323-.321-.571-.567-.692-.687l-.047-.126-1.475-3.948-.159-.427c.044-.121.114-.302.208-.52.297-.69.839-1.754 1.602-2.485.491-.472 1.077-.81 1.651-1.053Zm1.013.158c-.128 0-.233.104-.233.233 0 .128.105.232.233.232s.232-.104.232-.232c0-.129-.104-.233-.232-.233Zm.39.845c-.128 0-.233.105-.233.233a.233.233 0 0 0 .466 0c0-.128-.105-.233-.233-.233Zm.325.781a.233.233 0 0 0-.233.232c0 .129.105.233.233.233s.233-.104.233-.233a.233.233 0 0 0-.233-.232Zm-9.711.483c1.41 0 2.64.809 3.365 1.416-1.978.376-4.892.877-5.597.902-.057-.067-.106-.226-.108-.452-.004-.646.339-1.32.626-1.447l.021-.01c.545-.271 1.115-.409 1.693-.409Zm12.7.38c-.315 0-.622.091-.887.264-.364.238-.613.602-.703 1.028-.089.425-.007.859.23 1.222.301.462.811.737 1.363.737.315 0 .622-.091.887-.264.751-.49.963-1.499.473-2.25-.301-.462-.811-.737-1.363-.737Zm0 .91c.243 0 .468.122.6.325.216.33.123.774-.208.99a.709.709 0 0 1-.389.116.715.715 0 0 1-.702-.862c.04-.187.15-.348.31-.452a.702.702 0 0 1 .389-.117Zm-5.23.951c-.316 0-.623.091-.888.265-.364.237-.613.602-.703 1.027-.089.425-.007.859.23 1.222.301.462.811.738 1.363.738.315 0 .622-.092.887-.265.364-.237.613-.602.703-1.027.089-.425.008-.859-.23-1.223a1.6227 1.6227 0 0 0-1.362-.737Zm0 .91c.243 0 .467.122.6.325.104.16.14.351.101.538a.7148.7148 0 0 1-.699.568.7133.7133 0 0 1-.6-.324.7097.7097 0 0 1-.102-.538c.04-.187.15-.348.31-.452a.7109.7109 0 0 1 .39-.117Zm6.315 2.275c.082-.001.166-.001.251.001.339.007.697.036 1.08.089l-.123 2.881c-.092.073-.22.171-.377.285-.262.189-.608.42-1.009.65-.641.367-1.426.728-2.246.901-.318.067-.64.107-.962.107-.047 0-.095-.001-.142-.003l-.034-.034c-.224-.226-.478-.481-.748-.752-.408-.408-.85-.849-1.276-1.274-.018-.019-.037-.037-.055-.055 1.452-1.245 2.574-2.11 3.874-2.522a5.655 5.655 0 0 1 1.053-.227c.229-.028.466-.044.714-.047Zm-.237.203c-.129 0-.233.105-.233.233s.104.233.233.233c.128 0 .233-.105.233-.233s-.105-.233-.233-.233Zm.845 0a.233.233 0 0 0 0 .466c.129 0 .233-.105.233-.233s-.104-.233-.233-.233Zm-.609 1.287c-.44.069-1.343.456-2.137.826-.793.369-1.476.722-1.476.722 1.795 1.468 3.8-.765 3.613-1.548Zm-5.699 2.717c.582.581 1.149 1.149 1.572 1.577l.055.056-.028.144c-.24.399-.506.716-.777.848-.12.058-.26.087-.415.087-.897 0-1.881-.897-1.914-1.216.054-.25.714-.894 1.507-1.496Z"
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
export class SvgTindieIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
