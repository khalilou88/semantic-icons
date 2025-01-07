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
  selector: 'svg[si-deblur-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 3v18a9 9 0 0 0 0-18z" />
    <svg:circle cx="6" cy="14" r="1" />
    <svg:circle cx="6" cy="18" r="1" />
    <svg:circle cx="6" cy="10" r="1" />
    <svg:circle cx="3" cy="10" r=".5" />
    <svg:circle cx="6" cy="6" r="1" />
    <svg:circle cx="3" cy="14" r=".5" />
    <svg:circle cx="10" cy="21" r=".5" />
    <svg:circle cx="10" cy="3" r=".5" />
    <svg:circle cx="10" cy="6" r="1" />
    <svg:circle cx="10" cy="14" r="1.5" />
    <svg:circle cx="10" cy="10" r="1.5" />
    <svg:circle cx="10" cy="18" r="1" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDeblurIcon implements OnInit {
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
