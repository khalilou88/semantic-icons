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
  selector: 'svg[si-materialformkdocs-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Material for MkDocs</svg:title>
    <svg:path
      d="m17.029 18.772.777 1.166-5.417 2.709L0 16.451V4.063l5.417-2.709 5.298 7.948 7.867-5.24L24 1.354V16.84l-5.417 2.709zm2.023-13.827v13.253l3.949-1.975V2.97zM5.076 2.642 1.458 4.45 12.73 21.358l3.618-1.809z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMaterialformkdocsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
