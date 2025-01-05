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
  selector: 'svg[si-amazoniam-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Amazon Identity Access Management</svg:title>
    <svg:path
      d="M24 3.4286v17.1428c0 .2572-.1714.4286-.4286.4286H.4286C.1714 21 0 20.8286 0 20.5714V3.4286C0 3.1714.1714 3 .4286 3h23.1428c.2572 0 .4286.1714.4286.4286ZM.8571 20.1429H23.143V3.857H.857Zm12.8572-5.5715h6.4286v.8572h-6.4286ZM19.2857 12h2.1429v.8571h-2.1429zm-5.5714 0h3.4286v.8571h-3.4286ZM2.1429 18.4286v-6.8572q0-.1714.1285-.3.1286-.1285.3-.1285h.8572v-3c0-1.5 1.5428-2.7 3.4285-2.7 1.8858 0 3.4286 1.2 3.4286 2.7v3h.8572c.2571 0 .4285.2142.4285.4285v6.8572q0 .1714-.1285.3-.1286.1285-.3.1285H2.5714c-.2571 0-.4285-.2142-.4285-.4285zM3 18h7.7143v-1.7143H9v-.8571h1.7143v-1.2857H9v-.8572h1.7143V12H3Zm5.1429-3.4286c0 .5572-.3429 1.0286-.8572 1.2v.9429h-.8571v-.9429c-.5143-.1714-.8572-.6428-.8572-1.2 0-.6857.6-1.2857 1.2857-1.2857.7286 0 1.2858.6 1.2858 1.2857zM4.2857 11.143h5.1429v-3c0-.9858-1.2-1.8429-2.5715-1.8429-1.3714 0-2.5714.8571-2.5714 1.8429Zm3 3.4285c0-.2143-.1714-.4285-.4286-.4285-.2142 0-.4285.2142-.4285.4285 0 .2572.2143.4286.4285.4286.2572 0 .4286-.1714.4286-.4286Zm13.2857-5.1428h.8572v.8571h-.8572zm-6.8571 0h4.7143v.8571h-4.7143z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAmazoniamIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'DD344C');
  }
}
