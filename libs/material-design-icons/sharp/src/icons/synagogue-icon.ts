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
  selector: 'svg[si-synagogue-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 8v13h4v-7h4v7h4V8l-6-5-6 5zm7.5 2c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM3 5c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2zM1 9h4v12H1zm20-4c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2zm-2 4h4v12h-4z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSynagogueIcon implements OnInit {
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
