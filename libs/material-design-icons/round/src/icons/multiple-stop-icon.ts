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
  selector: 'svg[si-multiple-stop-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 5.21c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79a.5.5 0 0 1-.85-.36V9h-3c-.55 0-1-.45-1-1s.45-1 1-1h3V5.21zM10 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM6 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm1 10h3c.55 0 1-.45 1-1s-.45-1-1-1H7v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79a.5.5 0 0 0 .85-.36V17zm7 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMultipleStopIcon implements OnInit {
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
