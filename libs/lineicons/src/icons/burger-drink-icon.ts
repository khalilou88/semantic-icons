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
  selector: 'svg[si-burger-drink-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.1514 4.49326C11.2593 4.19709 11.5408 4 11.856 4H14.2655C14.6798 4 15.0155 3.66421 15.0155 3.25C15.0155 2.83579 14.6798 2.5 14.2655 2.5H11.856C10.9104 2.5 10.0657 3.09128 9.74198 3.97979L8.9832 6.0625H4C3.78832 6.0625 3.58649 6.15196 3.44432 6.30879C3.30215 6.46563 3.23288 6.67525 3.25361 6.88592L4.4178 18.7219C4.53109 19.8737 5.49966 20.7517 6.657 20.7517H9.29844C9.21459 20.5159 9.16895 20.2621 9.16895 19.9976V19.2517H6.657C6.27122 19.2517 5.94836 18.959 5.9106 18.5751L4.82739 7.5625H14.1996L13.8431 11.1875H15.3503L15.7734 6.88592C15.7941 6.67525 15.7249 6.46563 15.5827 6.30879C15.4405 6.15196 15.2387 6.0625 15.027 6.0625H10.5796L11.1514 4.49326Z"
      fill="#323544"
    />
    <svg:path
      d="M12.9189 12.6887C11.6763 12.6887 10.6689 13.6961 10.6689 14.9387V15.9723C10.2929 16.0128 10 16.3312 10 16.718C10 17.1048 10.2929 17.4233 10.6689 17.4637V19.9988C10.6689 20.413 11.0047 20.7488 11.4189 20.7488H19.3291C19.7433 20.7488 20.0791 20.413 20.0791 19.9988V17.4639C20.4561 17.4244 20.75 17.1055 20.75 16.718C20.75 16.3305 20.4561 16.0117 20.0791 15.9721V14.9387C20.0791 13.6961 19.0717 12.6887 17.8291 12.6887H12.9189ZM18.5791 15.968H12.1689V14.9387C12.1689 14.5245 12.5047 14.1887 12.9189 14.1887H17.8291C18.2433 14.1887 18.5791 14.5245 18.5791 14.9387V15.968ZM12.1689 17.468H13.358L14.1395 18.2486C14.4324 18.5412 14.9071 18.5411 15.1998 18.2483L15.9801 17.468H18.5791V19.2488H12.1689V17.468Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBurgerDrinkIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
