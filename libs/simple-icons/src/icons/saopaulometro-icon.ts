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
  selector: 'svg[si-saopaulometro-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>S&#227;o Paulo Metro</svg:title>
    <svg:path
      d="M13.366 6.543l5.092 5.456-5.092 5.456V6.543zM24 0v24H0V0h24zm-5.542 11.999l1.747-1.872L11.976 1.9l-8.227 8.228 1.747 1.871-1.747 1.871 8.227 8.229 8.228-8.229-1.746-1.871zm-7.87 5.455V6.543l-5.092 5.456 5.092 5.455z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSaopaulometroIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
