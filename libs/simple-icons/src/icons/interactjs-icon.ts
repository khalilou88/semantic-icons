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
  selector: 'svg[si-interactjs-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>InteractJS</svg:title>
    <svg:path
      d="M12.382.01C12.255.006 12.128 0 12 0A11.999 11.999 0 0 0 1.804 18.327l9.911-17.17zm7.097 19.686L11.201 5.121 2.788 19.689l.007.007h16.684zm.184 1.538H4.337a11.998 11.998 0 0 0 15.326 0zm2.917-3.568A11.999 11.999 0 0 0 12.382.01l.667 1.148zM12.383.009l-.001.001h.001V.009z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiInteractjsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
