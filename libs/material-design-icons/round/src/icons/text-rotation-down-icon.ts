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
  selector: 'svg[si-text-rotation-down-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m6.35 19.65 1.79-1.79c.32-.32.1-.86-.35-.86H7V5c0-.55-.45-1-1-1s-1 .45-1 1v12h-.79c-.45 0-.67.54-.35.85l1.79 1.79c.19.2.51.2.7.01zM12.2 8.5v5l-1.6.66c-.36.15-.6.5-.6.89 0 .69.71 1.15 1.34.88l8.97-3.88c.42-.18.69-.59.69-1.05 0-.46-.27-.87-.69-1.05l-8.97-3.88a.966.966 0 0 0-1.34.89c0 .39.24.74.6.89l1.6.65zm6.82 2.5L14 12.87V9.13L19.02 11z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTextRotationDownIcon implements OnInit {
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
