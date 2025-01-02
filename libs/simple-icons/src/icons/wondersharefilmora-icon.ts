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
  selector: 'svg[si-wondersharefilmora-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Wondershare Filmora</title>
    <svg:path
      d="M5.475 0A5.463 5.463 0 0 0 0 5.475v13.05A5.463 5.463 0 0 0 5.475 24h13.05A5.463 5.463 0 0 0 24 18.525V5.475A5.463 5.463 0 0 0 18.525 0H5.475Zm4.552 3.6 4.026 4.029-4.617 4.623-.022-.023a1.088 1.088 0 0 0-.158-1.339L5.999 7.63l4.028-4.03ZM14.528 8l4.027 4.03-8.528 8.536L6 16.536 14.528 8Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiWondersharefilmoraIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
