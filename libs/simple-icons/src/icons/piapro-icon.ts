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
  selector: 'svg[si-piapro-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Piapro</title>
    <svg:path
      d="M11.988 0c-4.705 0-8.7 3.492-9.351 8.168-.06.207-.09.444-.09.68V24l5.21-3.403V9.44c0-2.338 1.893-4.261 4.231-4.261s4.261 1.894 4.261 4.232c0 2.337-1.894 4.261-4.231 4.261-.77 0-1.54-.207-2.22-.621v5.563A9.45 9.45 0 0 0 21.191 11.6C22.405 6.51 19.268 1.45 14.207.266A9.48 9.48 0 0 0 11.988 0Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPiaproIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
