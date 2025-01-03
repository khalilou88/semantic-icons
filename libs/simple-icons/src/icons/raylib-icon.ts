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
  selector: 'svg[si-raylib-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Raylib</title>
    <svg:path
      d="M0 0v24h24V0H0Zm1.5 1.5h21v21h-21v-21Zm14.813 15.469v3.281h.937v-.469h-.469V16.97h-.468Zm1.406 0v.468h.468v-.468h-.468Zm.937 0v3.281H21v-2.344h-1.875v-.937h-.469Zm-10.781.937v2.344h.469v-1.875h1.875v-.469H7.875Zm2.813 0v.469h1.874v.469h-1.874v1.406h2.343v-2.344h-2.344Zm2.812 0v2.344h1.875v.469H13.5v.468h2.344v-3.28h-.469v1.874h-1.406v-1.875H13.5Zm4.219 0v2.344h.468v-2.344h-.468Zm1.406.469h1.406v1.406h-1.406v-1.406Zm-7.969.938h1.406v.468h-1.406v-.468Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRaylibIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
