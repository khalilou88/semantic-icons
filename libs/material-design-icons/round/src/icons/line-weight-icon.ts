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
  selector: 'svg[si-line-weight-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 15H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zm0-5H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm0-6H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm.5 15h-17c-.28 0-.5.22-.5.5s.22.5.5.5h17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLineWeightIcon implements OnInit {
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
