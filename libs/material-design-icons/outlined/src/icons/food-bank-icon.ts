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
  selector: 'svg[si-food-bank-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m12 5.5 6 4.5v9H6v-9l6-4.5M12 3 4 9v12h16V9l-8-6zm-.5 6.5v3H11v-3h-1v3h-.5v-3h-1v3c0 .83.67 1.5 1.5 1.5v4h1v-4c.83 0 1.5-.67 1.5-1.5v-3h-1zm1.5 2v3h1V18h1V9.5c-1.1 0-2 .9-2 2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFoodBankIcon implements OnInit {
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
