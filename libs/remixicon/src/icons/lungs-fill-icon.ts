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
  selector: 'svg[si-lungs-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.5 5.5C9.91162 5.97054 10.5483 7.65881 10.8268 9.52302L6.30385 12.134L7.30385 13.866L11.014 11.7247C11.0598 13.0789 11 14.3085 11 15C11 18 10 21 6 21C2 21 2 21 2 17C2 9.5 5.50055 4.50018 8.5 5.5ZM22.0012 17L22.001 17.436C21.9956 21 21.8503 21 18.0012 21C14.0012 21 13.0013 18 13.0013 15C13.0013 14.3086 12.9415 13.0795 12.9872 11.7257L16.6962 13.866L17.6962 12.134L13.1743 9.52402C13.4527 7.65942 14.0894 5.97062 15.5013 5.5C18.5007 4.50018 22.0012 9.5 22.0012 17ZM13 2V11H11V2H13Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLungsFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
