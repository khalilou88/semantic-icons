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
  selector: 'svg[si-approval-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 16h12v2H6zm6-12c-1.66 0-3 1.34-3 3l3 4 3-4c0-1.66-1.34-3-3-3z"
      opacity=".3"
    />
    <svg:path
      d="M12 2C9.24 2 7 4.24 7 7l5 7 5-7c0-2.76-2.24-5-5-5zm0 9L9 7c0-1.66 1.34-3 3-3s3 1.34 3 3l-3 4zm6 3H6c-1.1 0-2 .9-2 2v6h16v-6c0-1.1-.9-2-2-2zm0 4H6v-2h12v2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiApprovalIcon implements OnInit {
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
