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
  selector: 'svg[si-type-specimen-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M4 6H2v16h16v-2H4z" />
    <svg:path
      d="M22 2H6v16h16V2zm-5.37 12.5-.8-2.3H12.2l-.82 2.3H9.81l3.38-9h1.61l3.38 9h-1.55z"
    />
    <svg:path d="m13.96 7.17-1.31 3.72h2.69l-1.3-3.72z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTypeSpecimenIcon implements OnInit {
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
