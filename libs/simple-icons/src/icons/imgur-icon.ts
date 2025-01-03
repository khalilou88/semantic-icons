import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-imgur-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Imgur</title>
    <svg:path
      d="M21.147 3.043c-.002-.113-.069-.182-.189-.191a14.117 14.117 0 00-.51-.045l-.162-.01a21.998 21.998 0 00-1.085-.046l-.217-.005c-.172-.003-.35-.004-.532-.004l-.189-.001c-.295 0-.601.003-.919.01l-.106.003a55.86 55.86 0 00-.87.026l-.237.009c-.335.013-.676.029-1.027.049l-.012.001c-.357.021-.724.045-1.095.071l-.275.021c-.304.023-.609.048-.92.076l-.25.021c-.38.035-.766.074-1.156.115-.08.009-.161.019-.242.027-.319.035-.641.073-.965.113l-.33.042c-.403.051-.806.105-1.212.164a.547.547 0 00-.154.045.303.303 0 00-.097.074l-.003.002c-.045.055-.047.12.004.179.003.004.002.008.005.012l3.488 3.456-6.629 6.596c-.069.067-.068.165 0 .251.856 1.093 1.44 1.793 2.143 2.492.699.703 1.398 1.286 2.493 2.143a.216.216 0 00.132.051.167.167 0 00.119-.051l6.597-6.629 3.455 3.488a.143.143 0 00.101.047c.096 0 .187-.118.212-.292.746-5.141.882-10.051.634-12.31z M15.87 24l6.356-6.357.026-.026.156-.155-.006-.006a3.144 3.144 0 00.822-1.711c.804-5.53.903-10.591.654-12.952a2.904 2.904 0 00-.834-1.812 2.96 2.96 0 00-1.816-.855C20.458.042 19.476 0 18.318 0c-2.999 0-6.667.284-10.063.777a3.143 3.143 0 00-1.887.991L0 8.137V24H15.87zm1.528-6.707c-.151 0-.563.405-.563.613a.1.1 0 01-.099.1.1.1 0 01-.099-.1c0-.208-.411-.613-.563-.613a.1.1 0 01-.099-.1c0-.054.044-.098.099-.098.152 0 .563-.404.563-.614 0-.055.044-.098.099-.098.054 0 .099.043.099.098 0 .21.412.614.563.614a.1.1 0 010 .198zM5.4 7.045c.197 0 .735-.528.735-.801a.13.13 0 01.128-.129c.071 0 .128.058.128.129 0 .272.538.801.735.801.071 0 .128.057.128.128a.128.128 0 01-.128.128c-.197 0-.735.528-.735.801a.128.128 0 01-.128.128.128.128 0 01-.128-.128c0-.273-.538-.801-.735-.801a.128.128 0 010-.256zm-3.99 3.26c0-.065.057-.098.119-.118.69-.228 1.269-.8 1.403-1.554.011-.064.053-.118.118-.118.066 0 .107.054.119.118.133.754.711 1.326 1.401 1.554.062.02.118.053.118.118s-.056.098-.118.119c-.69.227-1.269.799-1.403 1.553-.011.064-.053.119-.119.119-.065 0-.106-.054-.118-.119-.134-.754-.713-1.326-1.403-1.553-.061-.022-.117-.054-.117-.119zm1.565 9.307c-.113 0-.42.302-.42.459 0 .04-.034.073-.074.073a.074.074 0 01-.074-.073c0-.157-.307-.459-.42-.459a.074.074 0 01-.074-.073c0-.039.034-.073.074-.073.113 0 .42-.302.42-.457 0-.042.033-.073.074-.073.04 0 .074.031.074.073 0 .155.307.457.42.457.04 0 .073.034.073.073a.073.073 0 01-.073.073zm.568-3.047c-.14 0-.521.375-.521.568a.092.092 0 11-.183 0c0-.193-.381-.568-.521-.568a.09.09 0 01-.091-.09c0-.051.041-.092.091-.092.14 0 .521-.375.521-.568a.09.09 0 01.092-.09.09.09 0 01.091.09c0 .193.381.568.521.568a.091.091 0 010 .182zm3.334 4.382c-.203 0-.758.546-.758.827 0 .073-.06.133-.132.133a.133.133 0 01-.133-.133c0-.281-.555-.827-.758-.827a.134.134 0 01-.133-.133c0-.073.059-.132.133-.132.204 0 .758-.545.758-.828 0-.071.06-.132.133-.132.073 0 .132.061.132.132 0 .283.555.828.758.828.074 0 .133.059.133.132a.133.133 0 01-.133.133zm1.922-.806c-1.086-.851-1.869-1.498-2.653-2.287-.789-.784-1.436-1.566-2.287-2.654-.626-.8-.566-1.897.144-2.607l.001-.001.002-.001L9.364 7.26 7.149 5.066l-.003-.003-.002-.003c-.52-.52-.7-1.27-.472-1.958.148-.447.464-.802.867-1.049a1.983 1.983 0 01.371-.19 2.1 2.1 0 01.468-.131c.005 0 .009-.003.014-.004C11.746 1.24 15.363.96 18.317.96h.002c1.125 0 2.072.041 2.818.121.469.046.903.249 1.228.576.328.331.525.767.562 1.237.243 2.311.144 7.253-.651 12.714-.001.01-.006.016-.007.025a2.258 2.258 0 01-.18.586c-.006.014-.01.028-.018.042-.333.699-1.001 1.163-1.771 1.163-.51 0-.992-.2-1.358-.567l-.003-.002-.004-.004-2.192-2.215-5.333 5.359-.001.002h-.001a1.94 1.94 0 01-1.378.573c-.44 0-.877-.151-1.231-.429zm2.576 2.09c-.139 0-.518.373-.518.566a.09.09 0 01-.091.09.09.09 0 01-.09-.09c0-.193-.379-.566-.519-.566a.09.09 0 110-.18c.139 0 .519-.373.519-.566a.09.09 0 01.09-.09c.05 0 .091.041.091.09 0 .193.379.566.518.566.05 0 .091.039.091.09s-.04.09-.091.09zm2.115-2.437c.248 0 .922-.662.922-1.003 0-.088.072-.161.161-.161.088 0 .161.073.161.161 0 .341.674 1.003.921 1.003.089 0 .161.073.161.161a.16.16 0 01-.161.161c-.247 0-.921.662-.921 1.005a.162.162 0 01-.161.162.162.162 0 01-.161-.162c0-.343-.674-1.005-.922-1.005a.161.161 0 010-.322z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiImgurIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
