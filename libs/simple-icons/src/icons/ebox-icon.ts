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
  selector: 'svg[si-ebox-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>EBOX</svg:title>
    <svg:path
      d="m.939 14.973 10.97 6.4V24L.94 17.6v-2.626zm22.123 0v2.626l-10.971 6.4v-2.626l10.97-6.401ZM.939 10.66l10.97 6.4v2.627l-7.223-4.214-1.068.622-2.253-1.313 1.07-.623-1.496-.873V10.66zm22.123 0v2.626l-1.496.873 1.07.624-2.253 1.313-1.07-.623-7.224 4.214V17.06l10.972-6.4ZM.939 6.347l10.97 6.4v2.627l-3.525-2.057-1.067.622-2.252-1.314 1.067-.622-1.429-.833-1.066.622-2.253-1.314 1.068-.622-1.514-.883Zm22.123 0v2.626l-1.514.883 1.07.622-2.254 1.315-1.068-.623-1.428.833 1.068.622-2.252 1.314-1.07-.622-3.525 2.057v-2.627l10.972-6.4ZM12 8.584l3.236 1.885-2.252 1.314-.983-.573-.982.573-2.252-1.314 3.235-1.885Zm0-4.293 6.916 4.03-2.252 1.315L12 6.918 7.338 9.635 5.085 8.321ZM12 0l10.597 6.175-2.252 1.314L12 2.627 3.657 7.489 1.405 6.175 12 0Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEboxIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'BE2323');
  }
}
