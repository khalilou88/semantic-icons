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
  selector: 'svg[si-shower-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 7c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5z" opacity=".3" />
    <svg:circle cx="8" cy="20" r="1" />
    <svg:circle cx="16" cy="17" r="1" />
    <svg:path
      d="M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92zM7 12c0-2.76 2.24-5 5-5s5 2.24 5 5H7z"
    />
    <svg:circle cx="16" cy="20" r="1" />
    <svg:circle cx="12" cy="17" r="1" />
    <svg:circle cx="8" cy="17" r="1" />
    <svg:circle cx="12" cy="20" r="1" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiShowerIcon implements OnInit {
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
