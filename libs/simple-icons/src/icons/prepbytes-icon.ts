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
  selector: 'svg[si-prepbytes-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>PrepBytes</svg:title>
    <svg:path
      d="M12 0C5.427 0 .0997 5.3717.1016 12c0 6.6283 5.3273 12 11.8984 12s11.8984-5.3736 11.8984-12c0-6.6283-5.3273-12-11.8984-12zm1.4082 7.1602h1.127v3.914l.2675-.1855a3.5647 3.5647 0 0 1 2.252-.6992c.0095 0 .0198.002.0293.002 1.924.1048 3.3998 1.7497 3.2969 3.6737-.2155 3.5392-5.069 4.5848-6.625 1.3946-.3757-.7761-.3483-.4843-.375-4.5059l.0273-3.5937zm-4.7324.1328a3.4259 3.4259 0 0 1 2.1308.7539c1.5084 1.1765 1.7943 3.3475.6387 4.873-1.167 1.5408-3.3616 1.8448-4.9023.6778-.0801-.0534-.1895-.1068-.2696-.1602-.0267 0-.0273.8561-.0273 1.9297v1.9297H5.119v-3.1895c0-3.8614.0013-4.0768.377-4.8281A3.6055 3.6055 0 0 1 7.91 7.375c.2541-.0572.5101-.0831.7657-.082zm-.0684 1.1035c-1.0545-.0057-1.9793.6966-2.2539 1.7148-.3337 1.2357.3992 2.51 1.6367 2.8438 1.2357.3337 2.5081-.3992 2.8418-1.6367.3337-1.2357-.3972-2.5081-1.6347-2.8418a2.2104 2.2104 0 0 0-.5899-.0801zm8.42 2.8965c-1.1232-.0687-2.142.659-2.4395 1.7441-.347 1.2662.3979 2.5748 1.664 2.9219 1.2662.347 2.5749-.398 2.922-1.664.347-1.2662-.398-2.5749-1.6641-2.922a1.48 1.48 0 0 0-.4825-.08z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPrepbytesIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#5A87C6');
  }
}
