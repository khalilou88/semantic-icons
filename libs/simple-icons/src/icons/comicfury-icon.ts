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
  selector: 'svg[si-comicfury-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>ComicFury</svg:title>
    <svg:path
      d="m0 6.959 1.899-3.256 2.725 2.736 2.973-.204L9.3 3.297l2.213 2.693 8.655-.252.406-1.085L24 5.128v5.268l-11.248 3.526-1.085 6.781H0V6.959zm2.195-.748L1.041 8.137l1.75 1.748 1.133-1.948-1.729-1.726zm7.409-.448L8.48 7.546l1.224 1.598 1.137-1.766-1.237-1.615zm3.901 3.751-1.992.349.997 2.025.995-2.374zm3.319-.565-1.992.348.996 2.025.996-2.373zm3.228-.611-1.991.349.996 2.025.995-2.374zm3.183-.566-1.992.349.996 2.025.996-2.374z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiComicfuryIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#79BD42');
  }
}
