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
  selector: 'svg[si-abstract-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Abstract</svg:title>
    <svg:path
      d="M12 0c9.601 0 12 2.399 12 12 0 9.601-2.399 12-12 12-9.601 0-12-2.399-12-12C0 2.399 2.399 0 12 0zm-1.969 18.564c2.524.003 4.604-2.07 4.609-4.595 0-2.521-2.074-4.595-4.595-4.595S5.45 11.449 5.45 13.969c0 2.516 2.065 4.588 4.581 4.595zm8.344-.189V5.625H5.625v2.247h10.498v10.503h2.252zm-8.344-6.748a2.343 2.343 0 11-.002 4.686 2.343 2.343 0 01.002-4.686z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAbstractIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
