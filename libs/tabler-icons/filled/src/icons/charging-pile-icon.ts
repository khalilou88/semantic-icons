import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-charging-pile-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M12 3a3 3 0 0 1 3 3v4a3 3 0 0 1 3 3v3a.5 .5 0 1 0 1 0v-6.585l-1 -1l-.293 .292a1 1 0 0 1 -1.414 -1.414l.292 -.293l-.292 -.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 .293 .707v7a2.5 2.5 0 1 1 -5 0v-3a1 1 0 0 0 -1 -1v7a1 1 0 0 1 0 2h-12a1 1 0 0 1 0 -2v-13a3 3 0 0 1 3 -3zm-2.486 7.643a1 1 0 0 0 -1.371 .343l-1.5 2.5l-.054 .1a1 1 0 0 0 .911 1.414h1.233l-.59 .986a1 1 0 0 0 1.714 1.028l1.5 -2.5l.054 -.1a1 1 0 0 0 -.911 -1.414h-1.235l.592 -.986a1 1 0 0 0 -.343 -1.371m2.486 -5.643h-6a1 1 0 0 0 -1 1v1h8v-1a1 1 0 0 0 -1 -1"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiChargingPileIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}