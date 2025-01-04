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
  selector: 'svg[si-decentraland-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Decentraland</svg:title>
    <svg:path
      d="M16.9246 18.9776h3.1342l-3.1342-3.7778Zm-8.507-9.4221v6.6221h5.5072ZM12.0442 0C5.4177 0 0 5.3333 0 11.9555c0 1.4666.2687 2.8888.7612 4.1777l4.6565-5.5555L8.104 7.3333l6.537 7.8221 1.8805-2.2666 4.9252 5.8666h.403c1.388-1.9555 2.1491-4.311 2.1491-6.8444C24.0885 5.3333 18.6708 0 12.0442 0ZM8.0593 6.2666c-.9402 0-1.6566-.7555-1.6566-1.6444 0-.8889.7612-1.6444 1.6566-1.6444.9403 0 1.6567.7555 1.6567 1.6444 0 .8889-.7164 1.6444-1.6567 1.6444zm8.731 5.3777c-1.8358 0-3.3133-1.4666-3.3133-3.2888 0-1.8222 1.4775-3.2889 3.3133-3.2889 1.8357 0 3.3133 1.4667 3.3133 3.2889.0447 1.8222-1.4776 3.2888-3.3133 3.2888zm-3.985 5.7334H1.1642c.2686.5333.582 1.0222.8955 1.511h9.4473ZM4.4776 21.422h14.9993c.4925-.4 1.0298-.8889 1.3432-1.2444H3.1343c.4477.4444.8954.8889 1.3432 1.2444zm7.5668 2.5777c1.97 0 3.8506-.4444 5.5072-1.2889H6.5371C8.1937 23.5554 10.0295 24 12.0443 24z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDecentralandIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
