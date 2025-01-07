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
  selector: 'svg[si-bedroom-parent-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M6.5 12h11v2h-11zm.75-3.5h4v2h-4zm5.5 0h4v2h-4z" />
    <svg:path
      d="M22 2H2v20h20V2zm-3 15h-1.5v-1.5h-11V17H5v-5l.65-.55V7H11c.37 0 .72.12 1 .32.28-.2.63-.32 1-.32h5.35v4.45L19 12v5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBedroomParentIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
