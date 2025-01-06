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
  selector: 'svg[si-image-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M456 64H56a24 24 0 00-24 24v336a24 24 0 0024 24h400a24 24 0 0024-24V88a24 24 0 00-24-24zm-124.38 64.2a48 48 0 11-43.42 43.42 48 48 0 0143.42-43.42zM76 416a12 12 0 01-12-12v-87.63L192.64 202l96.95 96.75L172.37 416zm372-12a12 12 0 01-12 12H217.63l149.53-149.53L448 333.84z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiImageSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
