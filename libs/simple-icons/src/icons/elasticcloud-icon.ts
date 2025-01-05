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
  selector: 'svg[si-elasticcloud-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Elastic Cloud</svg:title>
    <svg:path
      d="M13.318 0c-6.628 0-12 5.372-12 12 0 2.008.495 3.9 1.368 5.563a14.299 14.299 0 0 1 5.09-3.664c.307-.13.624-.22.948-.28A4.842 4.842 0 0 1 8.443 12a4.875 4.875 0 0 1 7.494-4.11 2.218 2.218 0 0 0 2.055.164 12.047 12.047 0 0 0 4.69-3.554A11.975 11.975 0 0 0 13.318 0zM9.426 15.77c-.266.01-.531.069-.783.175a12.044 12.044 0 0 0-4.69 3.555c2.2 2.742 5.576 4.5 9.365 4.5 3.789 0 7.165-1.758 9.364-4.5a12.048 12.048 0 0 0-4.69-3.555 2.217 2.217 0 0 0-2.055.165 4.845 4.845 0 0 1-2.62.765 4.846 4.846 0 0 1-2.618-.765 2.193 2.193 0 0 0-1.273-.34z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiElasticcloudIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#005571');
  }
}
