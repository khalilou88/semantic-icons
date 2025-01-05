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
  selector: 'svg[si-zigbee2mqtt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Zigbee2MQTT</svg:title>
    <svg:path
      d="M7.044 0 .038 7.03v9.94L7.044 24h9.91l7.008-7.03V7.03L16.954 0Zm4.525 1.904c.02.001.04.011.047.03l.467.96a.765.765 0 0 1 .242 0l.467-.958a.053.053 0 0 1 .047-.032l.838-.031c.028 0 .053.02.054.049a.052.052 0 0 1-.05.053l-.805.03-.28.968c.356.164.604.543.604.986 0 .155-.03.304-.086.437.019.015.039.03.053.045 0 0 .098.144.184.338 1.641.462 5.698 1.05 5.238 2.32-.517 1.428-3.34.991-3.813.604-.64-.525-1.184-1.019-1.529-1.414a2.546 2.546 0 0 1-.064.148 5.27 5.27 0 0 1-1.97.034 2.038 2.038 0 0 1-.089-.184c-.343.4-.898.905-1.555 1.443-.472.387-3.295.824-3.812-.603-.467-1.288 3.709-1.873 5.305-2.338.084-.204.181-.35.181-.35a.322.322 0 0 1 .05-.044 1.137 1.137 0 0 1-.085-.436c0-.443.249-.822.604-.986l-.278-.967-.806-.031a.052.052 0 0 1-.051-.053c.001-.028.026-.05.054-.049zm1.63 4.92c.082.173.168.385.243.623-.743.207-1.766.164-2.472-.037.068-.21.144-.398.218-.556a5.678 5.678 0 0 0 2.01-.03zm-2.321.908c.768.219 1.84.265 2.668.038.047.203.082.418.098.636-.82.3-2.113.237-2.872-.04.018-.218.057-.432.106-.634zm-.106 1.057c.812.26 2.023.314 2.887.043a2.53 2.53 0 0 1-.12.686c-.676.236-1.88.218-2.66-.053-.066-.22-.1-.448-.107-.676zm.264 1.139c.727.182 1.613.193 2.266.05-.156.252-.376.48-.676.67a.747.747 0 0 1-.887 0c-.549-.347-.703-.751-.703-.72Zm2.858 2.136c.14-.002.162.077.164.16l.064 3.712c.002.089-.024.161-.158.164l-.65.011c-.121.002-.163-.058-.165-.158l-.064-3.713c-.002-.12.059-.162.158-.164zm-2.565.045c.14-.002.163.077.164.16l.067 3.711c.002.115-.052.163-.16.165l-.649.011c-.128.002-.164-.064-.166-.158l-.064-3.713c-.002-.114.05-.162.16-.164zm.633 6.057c.133.033.471.124.582.432a1 1 0 0 1 .055.34v1.35c0 .102-.013.196-.037.284-.095.342-.425.47-.768.516v.223c0 .1-.045.146-.147.146h-.625c-.126 0-.146-.068-.146-.146v-.223c-.314-.046-.527-.141-.637-.283a.821.821 0 0 1-.164-.518v-1.35a1 1 0 0 1 .055-.34c.11-.307.45-.398.584-.431.165-.04.373-.062.625-.062s.459.021.623.062zm-4.492 0c.068 0 .129.017.187.121l.365.662c.036.063.053.07.075.07h.035c.022 0 .039-.006.074-.07l.361-.662c.05-.089.098-.121.188-.121h.658c.078 0 .147.02.147.146v2.633c0 .101-.046.147-.147.147h-.627c-.101 0-.146-.046-.146-.147v-1.431l-.239.443a.222.222 0 0 1-.216.13h-.163a.221.221 0 0 1-.214-.13l-.24-.443v1.431c0 .101-.046.147-.147.147h-.606c-.1 0-.146-.046-.146-.147v-2.633c0-.126.068-.146.146-.146h.655zm7.75 0c.078 0 .146.02.146.146v.49c0 .127-.068.147-.146.147h-.598v1.996c0 .078-.02.147-.146.147h-.659c-.1 0-.146-.046-.146-.147V18.95h-.598c-.102 0-.144-.038-.144-.146v-.49c0-.109.043-.147.144-.147h2.147zm2.666 0c.078 0 .146.02.146.146v.49c0 .127-.068.147-.146.147h-.598v1.996c0 .078-.02.147-.146.147h-.659c-.1 0-.146-.046-.146-.147V18.95h-.598c-.102 0-.144-.038-.144-.146v-.49c0-.109.043-.147.144-.147h2.147zm-6.828.79a.173.173 0 0 0-.06.132v1.11c0 .053.019.1.06.136.083.075.479.075.562 0a.177.177 0 0 0 .06-.137v-1.11a.173.173 0 0 0-.06-.132c-.083-.075-.48-.075-.562 0z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiZigbee2mqttIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#FFC135');
  }
}
