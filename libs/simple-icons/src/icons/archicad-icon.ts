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
  selector: 'svg[si-archicad-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Archicad</svg:title>
    <svg:path
      d="M22.5896 16.3222c-.779 0-1.4104-.6315-1.4104-1.4105 0-.779.6314-1.4104 1.4104-1.4104S24 14.1328 24 14.9117c0 .779-.6315 1.4105-1.4104 1.4105zM.1507 19.8272c-.35.6959-.0696 1.5438.6263 1.8938.6959.35 1.5438.0695 1.8938-.6263 0 0 7.8494-16.0114 14.2545-16.1487 4.2299-.0907 4.2313 5.642 4.2313 5.642 0 .779.6314 1.4104 1.4104 1.4104s1.4104-.6314 1.4104-1.4104c0 0 .0566-8.3813-7.0196-8.4569C8.7634 1.8711.1507 19.8272.1507 19.8272z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiArchicadIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#2D50A5');
  }
}
