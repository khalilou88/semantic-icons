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
  selector: 'svg[si-22mp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M15 14h1.5v1.5H15z" />
    <svg:path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM6.5 9c0-.55.45-1 1-1h2V7H7.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H10c.55 0 1 .45 1 1V8c0 .55-.45 1-1 1H8v1h2.25c.41 0 .75.34.75.75s-.34.75-.75.75H7.5c-.55 0-1-.45-1-1V9zm6 8.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v3.75c0 .41-.34.75-.75.75S6 18.16 6 17.75V13.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v4.25zm.5-7.25V9c0-.55.45-1 1-1h2V7h-2.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.75c.55 0 1 .45 1 1V8c0 .55-.45 1-1 1h-2v1h2.25c.41 0 .75.34.75.75s-.34.75-.75.75H14c-.55 0-1-.45-1-1zm5 5.5c0 .55-.45 1-1 1h-2v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V13.5c0-.55.45-1 1-1H17c.55 0 1 .45 1 1V16z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Si22mpIcon implements OnInit {
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
