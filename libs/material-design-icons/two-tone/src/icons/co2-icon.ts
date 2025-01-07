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
  selector: 'svg[si-co2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14 9h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-.5 4.5h-2v-3h2v3zM8 13v1c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1H6.5v-.5h-2v3h2V13H8zm12.5 2.5h-2v1h3V18H17v-2.5c0-.55.45-1 1-1h2v-1h-3V12h3.5c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCo2Icon implements OnInit {
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
