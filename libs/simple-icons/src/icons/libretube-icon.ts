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
  selector: 'svg[si-libretube-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>LibreTube</title>
    <svg:path
      d="M2.12 0c-.2688.004-.5138.2196-.5138.5206v4.9981c0 .1875.1009.3604.2641.4525l9.8769 5.5768c.3522.199.3522.7062 0 .9051L1.8703 18.03a.52.52 0 0 0-.264.4526v4.997c0 .4016.436.6514.7824.4484L22.207 12.3121a.3777.3777 0 0 0-.0003-.652L2.3883.072A.516.516 0 0 0 2.1199 0zm-.005 7.9458c-.2671.006-.5088.2216-.5088.5203v7.056c0 .3982.4296.6484.776.452l6.222-3.528c.3512-.199.3512-.705 0-.904l-6.222-3.528a.515.515 0 0 0-.2674-.0683z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiLibretubeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}