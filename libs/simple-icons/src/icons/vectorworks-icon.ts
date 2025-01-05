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
  selector: 'svg[si-vectorworks-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Vectorworks</svg:title>
    <svg:path
      d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.725c-5.925 0-10.725-4.8-10.725-10.725S6.075 1.275 12 1.275 22.725 6.075 22.725 12 17.925 22.725 12 22.725zM8.775 7.5h-2.25c-.15 0-.208.086-.15.225l4.425 10.65c.04.098.15.225.3.225h1.95c.15 0 .206-.086.15-.225l-4.35-10.8c-.028-.07-.035-.075-.075-.075zm8.7 0h-2.25c-.075 0-.13.023-.15.075L13.35 11.85a.6.6 0 0 0 0 .375l1.05 2.55c.075.15.225.15.3 0l2.925-7.05c.057-.139 0-.225-.15-.225z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiVectorworksIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '000000');
  }
}
