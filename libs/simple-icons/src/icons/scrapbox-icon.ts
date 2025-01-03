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
  selector: 'svg[si-scrapbox-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Scrapbox</title>
    <svg:path
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3c.194 0 .388.04.535.117l4.93 2.592c.296.156.295.406 0 .562L12.32 8.977c-.177.092-.177.244 0 .337l5.145 2.706c.183.096.342.286.44.498l-4.987 2.623a.533.533 0 0 0-.281.476v.002a.536.536 0 0 0 .281.479l4.836 2.545a.948.948 0 0 1-.29.248l-4.929 2.591c-.296.156-.774.156-1.07 0l-4.93-2.591c-.296-.156-.295-.407 0-.563l5.145-2.705c.176-.092.177-.245 0-.338L6.535 12.58a1 1 0 0 1-.373-.367l4.942-2.57a.516.516 0 0 0 .279-.26.554.554 0 0 0 0-.48.515.515 0 0 0-.28-.258l-4.939-2.57a1 1 0 0 1 .371-.366l4.93-2.592A1.19 1.19 0 0 1 12 3zM6 7.176l3.781 1.967L6 11.109V7.176zm12 6.48v3.926l-3.732-1.963L18 13.656z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiScrapboxIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}