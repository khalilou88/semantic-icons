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
  selector: 'svg[si-call-missed-outgoing-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m3.7 9.11 7.59 7.59c.39.39 1.02.39 1.41 0l6.3-6.3V14c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1h3.59L12 14.59 5.11 7.7a.996.996 0 0 0-1.41 0c-.38.39-.38 1.03 0 1.41z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCallMissedOutgoingIcon implements OnInit {
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
