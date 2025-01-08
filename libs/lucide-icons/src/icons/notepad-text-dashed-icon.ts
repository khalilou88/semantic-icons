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
  selector: 'svg[si-notepad-text-dashed-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M8 2v4" />
    <svg:path d="M12 2v4" />
    <svg:path d="M16 2v4" />
    <svg:path d="M16 4h2a2 2 0 0 1 2 2v2" />
    <svg:path d="M20 12v2" />
    <svg:path d="M20 18v2a2 2 0 0 1-2 2h-1" />
    <svg:path d="M13 22h-2" />
    <svg:path d="M7 22H6a2 2 0 0 1-2-2v-2" />
    <svg:path d="M4 14v-2" />
    <svg:path d="M4 8V6a2 2 0 0 1 2-2h2" />
    <svg:path d="M8 10h6" />
    <svg:path d="M8 14h8" />
    <svg:path d="M8 18h5" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNotepadTextDashedIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
    this.render.setAttribute(svg, 'stroke', 'currentColor');
    this.render.setAttribute(svg, 'stroke-width', '2');
    this.render.setAttribute(svg, 'stroke-linecap', 'round');
    this.render.setAttribute(svg, 'stroke-linejoin', 'round');
  }
}
