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
  selector: 'svg[si-adminer-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Adminer</svg:title>
    <svg:path
      d="M22.521 8.297a.53.53 0 0 1-.53.53.53.53 0 0 1-.531-.53.53.53 0 0 1 .53-.53.53.53 0 0 1 .531.53zm-1.085-6.122c-.264-.008-.438.01-.438.01l.076.836s.577-.045 1.12.107c.272.076.521.198.689.369.167.17.277.382.277.758 0 .196-.052.296-.139.39a.964.964 0 0 1-.378.232c-.312.113-.65.116-.65.116l-.422-.002v2.174h.84V5.758c.177-.017.25.004.517-.092.241-.087.502-.223.714-.455A1.42 1.42 0 0 0 24 4.255c0-.565-.208-1.03-.518-1.346-.31-.316-.697-.488-1.061-.59a4.193 4.193 0 0 0-.985-.144ZM17.892 3.79l-2.874 2.487 2.886 2.451.544-.64-2.14-1.817 2.133-1.846zM6.587 5.108c-1.734 0-3.302.186-4.47.5-.584.157-1.068.343-1.438.579-.37.235-.679.56-.679 1V19.747c0 .287.145.54.337.73.191.191.437.343.732.48.59.275 1.39.49 2.37.641 1.96.305 4.335.305 6.295 0 .98-.152 1.78-.366 2.37-.64.296-.138.54-.29.732-.48.191-.19.337-.444.337-.731V7.187c0-.44-.309-.765-.68-1-.37-.236-.853-.422-1.437-.579-1.167-.314-2.736-.5-4.47-.5Zm0 .84c1.672 0 3.187.185 4.25.471.533.143.953.315 1.207.476.253.161.29.274.29.292 0 .018-.037.13-.29.29-.254.162-.674.334-1.206.477-1.064.287-2.579.472-4.251.472-1.673 0-3.188-.185-4.252-.472-.532-.143-.952-.315-1.205-.476-.254-.162-.29-.273-.29-.291 0-.018.036-.13.29-.292.253-.161.673-.333 1.205-.476 1.064-.286 2.58-.471 4.252-.471ZM.839 8.25c.352.2.76.374 1.278.514 1.168.314 2.736.5 4.47.5 1.733 0 3.302-.186 4.47-.5.518-.14.925-.315 1.276-.514v3.123c0 .01 0 .047-.09.135a1.835 1.835 0 0 1-.493.313c-.475.221-1.217.429-2.145.573-1.856.288-4.181.288-6.038 0-.928-.144-1.67-.352-2.144-.573a1.829 1.829 0 0 1-.494-.313c-.088-.088-.09-.126-.09-.135Zm0 4.182c.083.047.137.107.23.15.59.276 1.39.49 2.37.642 1.96.304 4.335.304 6.295 0 .98-.152 1.78-.366 2.37-.642.093-.043.147-.103.23-.15v3.127c0 .01-.002.047-.09.135a1.834 1.834 0 0 1-.494.314c-.475.221-1.217.429-2.145.573-1.856.288-4.181.288-6.038 0-.928-.144-1.67-.352-2.144-.573a1.828 1.828 0 0 1-.494-.314c-.088-.088-.09-.126-.09-.135zm0 4.187c.083.047.137.107.23.15.59.275 1.39.49 2.37.642 1.96.304 4.335.304 6.295 0 .98-.153 1.78-.367 2.37-.642.093-.043.147-.103.23-.15v3.127c0 .01-.002.047-.09.135a1.834 1.834 0 0 1-.494.314c-.475.221-1.217.429-2.145.573-1.856.288-4.181.288-6.038 0-.928-.144-1.67-.352-2.144-.573a1.828 1.828 0 0 1-.494-.314c-.088-.088-.09-.126-.09-.135Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAdminerIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#34567C');
  }
}
