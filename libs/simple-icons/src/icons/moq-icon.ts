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
  selector: 'svg[si-moq-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Moq</title>
    <svg:path
      d="M12.1341.0013A13 13 0 0 0 10.853.05c-.7988.066-1.771.2708-2.6115.547-.6786.2161-2.672 1.152-2.672 1.248 0 .024-.0722.0733-.1562.1153-.3063.1381-1.3338.9726-1.9102 1.543-.5705.5764-1.405 1.602-1.543 1.9083-.042.084-.0893.1562-.1133.1562-.0961 0-1.0322 1.9829-1.2364 2.6134-.8106 2.5039-.8108 5.1452.0059 7.6252.1981.6004.8211 1.958 1.1094 2.4024.066.096.1742.282.2402.4082.066.12.1516.2226.1817.2226.036 0 .0585.0285.0585.0645 0 .114.7266.9728 1.375 1.6153 1.3812 1.375 2.9498 2.3192 4.8713 2.9317.7386.2342 1.4276.3646 2.4844.4727 1.0088.102 1.1066.102 2.1153 0 .5825-.0601 1.29-.1606 1.5782-.2266.6965-.1621 1.8325-.5533 2.463-.8536.4863-.2281 1.5728-.853 1.795-1.0332.054-.042.3178-.251.582-.455.6125-.4804 1.4044-1.2744 1.8848-1.8868.2041-.2642.415-.528.457-.582.1802-.2223.811-1.3088 1.0391-1.7892.2942-.6245.6835-1.7718.8516-2.4864.066-.2942.1686-1.0019.2227-1.5723.096-.9728.096-1.0987 0-2.1075-.2822-2.9182-1.4049-5.3442-3.4044-7.3498-.6425-.6485-1.5012-1.375-1.6153-1.375-.036 0-.0664-.0245-.0664-.0606 0-.03-.1026-.1136-.2227-.1797-.126-.066-.3061-.1741-.4082-.2402-.4263-.2762-1.7943-.9073-2.3887-1.1055C14.6354.2241 13.403.0167 12.134.0013M4.7433 8.312a1.5 1.5 0 0 1 .211 0c.1893.013.3817.0618.5664.1504l.252.1211.3242-.1328c.8046-.3363 1.7117-.0053 1.9219.6973.102.3482.102 5.0133 0 5.1153-.084.0841-.9363.0958-1.0684.0118-.078-.048-.0894-.3969-.1074-2.4024-.018-2.552-.0134-2.5037-.3496-2.3536l-.1426.0723v2.336c0 2.672.0414 2.4688-.541 2.4688s-.541.1963-.541-2.4337c0-2.0115-.0117-2.3165-.0958-2.3946-.048-.054-.1318-.0957-.1738-.0957s-.1258.0417-.1738.0957c-.0841.078-.0957.378-.0957 2.3595 0 1.6813-.0183 2.282-.0723 2.336-.1141.114-.9796.0966-1.0997-.0235-.084-.09-.0961-.3481-.078-2.5098.018-2.1677.0308-2.4324.1269-2.6485.2088-.4571.6494-.7339 1.1367-.7696m6.8244 0c.2812-.015.5753.0133.877.0899.5764.144 1.1221.607 1.4043 1.1894.1562.3303.1563.337.1563 1.8321 0 1.4592-.0045 1.5073-.1426 1.7716-.3002.5764-.6669.9003-1.2793 1.1465-.4324.1681-1.2727.1625-1.7891-.0176-.4804-.1741-.9316-.5893-1.1778-1.0996l-.1738-.3594v-3.004l.1562-.2989c.4053-.761 1.1253-1.205 1.9688-1.25m6.1389.086a2.8 2.8 0 0 1 .3613 0c.1395.0088.282.0285.4238.0586.1742.036.4265.1195.5586.1855.2522.1261.75.5718.75.6738 0 .03.036.1024.084.1504.042.054.1314.2457.1915.4258.168.4804.1699 2.6243.0078 3.1407-.1682.5285-.5473.9894-1.0997 1.3497-.4563.2942-.4618.3016-.4258.5898.036.3663.2458.666.582.834.3303.1682.3595.2213.3595.6837 0 .3963-.114.6074-.3301.6074-.2462 0-.8277-.2466-1.0919-.4688-.5104-.4143-.8594-1.0857-.8594-1.6621 0-.2462-.0893-.4512-.1914-.4512-.2281 0-.92-.6362-1.1602-1.0625-.2401-.4384-.2818-.786-.2578-2.209l.0176-1.3224.1816-.3535c.3448-.685 1.0686-1.1145 1.8985-1.17ZM11.724 9.5367c-.1321 0-.3293.0494-.4434.1035-.114.054-.266.1794-.332.2695-.1141.1561-.1246.2633-.1426 1.4102-.012 1.0929-.0002 1.267.0898 1.4532.3363.6485 1.32.6485 1.6563 0 .09-.1862.1019-.3603.0899-1.4532-.018-1.1469-.0285-1.254-.1426-1.4102-.1621-.2222-.4752-.373-.7754-.373m6.0177.0761c-.0783.0013-.1468.008-.1934.0215-.168.042-.4269.2992-.541.5274-.072.156-.0898.4333-.0898 1.334.006 1.261.0376 1.3858.4219 1.668.2762.2042.7918.2099 1.08.0117.3964-.2642.4263-.4068.4083-1.7578-.018-1.165-.024-1.2139-.1621-1.418-.084-.1201-.1977-.2451-.2637-.2872-.099-.0585-.4252-.1035-.6602-.0996"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMoqIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
