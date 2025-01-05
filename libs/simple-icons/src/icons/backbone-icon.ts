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
  selector: 'svg[si-backbone-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Backbone</svg:title>
    <svg:path
      d="M11.978.805A5.3 5.3 0 0 1 9.972 2.29a5.3 5.3 0 0 1 2.006 1.487 5.3 5.3 0 0 1 2.006-1.488A5.3 5.3 0 0 1 11.978.804m10.6 17.27L19.45 19.22v-6.875c0-.456.37-.826.825-.826h1.479c.454 0 .824.37.824.826zm-4.55-5.73v7.399l-3.865 1.416v-14c0-.22.087-.43.243-.585a.82.82 0 0 1 .58-.24h.008l2.213.019a.827.827 0 0 1 .818.824v5.086h.004zm3.727-2.246h-1.48c-.291 0-.57.055-.826.157V7.178c0-1.23-1-2.237-2.23-2.247l-2.213-.017h-.019a2.23 2.23 0 0 0-1.582.651 2.23 2.23 0 0 0-.664 1.595v16.037L24 19.068v-6.725a2.25 2.25 0 0 0-2.247-2.246M9.839 21.159l-3.865-1.416v-7.398l-.001-.08h.003V7.176c0-.45.367-.82.818-.824l2.214-.018h.007a.82.82 0 0 1 .58.24.82.82 0 0 1 .244.585zM4.551 19.22l-3.127-1.146v-5.73c0-.456.37-.826.824-.826h1.479c.454 0 .824.37.824.826zM9.015 4.913h-.018l-2.214.018a2.254 2.254 0 0 0-2.23 2.247v3.076a2.2 2.2 0 0 0-.826-.157h-1.48A2.25 2.25 0 0 0 0 12.345v6.724l11.262 4.127V7.157a2.23 2.23 0 0 0-.665-1.594 2.23 2.23 0 0 0-1.582-.652"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBackboneIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#000000');
  }
}
