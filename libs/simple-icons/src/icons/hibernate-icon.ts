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
  selector: 'svg[si-hibernate-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Hibernate</svg:title>
    <svg:path
      d="M5.365 0L9.98 7.994h8.95L14.31 0H5.366zm-.431.248L.46 7.994l4.613 8.008L9.55 8.24 4.934.248zm13.992 7.75l-4.475 7.76 4.617 7.992 4.471-7.744-4.613-8.008zm-4.905 8.006l-8.95.002L9.688 24h8.946l-4.615-7.994.001-.002Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHibernateIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '59666C');
  }
}
