import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-virus-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <svg:path d="M12 7v-4" />
    <svg:path d="M11 3h2" />
    <svg:path d="M15.536 8.464l2.828 -2.828" />
    <svg:path d="M17.657 4.929l1.414 1.414" />
    <svg:path d="M17 12h4" />
    <svg:path d="M21 11v2" />
    <svg:path d="M15.535 15.536l2.829 2.828" />
    <svg:path d="M19.071 17.657l-1.414 1.414" />
    <svg:path d="M12 17v4" />
    <svg:path d="M13 21h-2" />
    <svg:path d="M8.465 15.536l-2.829 2.828" />
    <svg:path d="M6.343 19.071l-1.413 -1.414" />
    <svg:path d="M7 12h-4" />
    <svg:path d="M3 13v-2" />
    <svg:path d="M8.464 8.464l-2.828 -2.828" />
    <svg:path d="M4.929 6.343l1.414 -1.413" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiVirusIcon implements OnInit {
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