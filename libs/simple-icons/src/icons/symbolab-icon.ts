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
  selector: 'svg[si-symbolab-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Symbolab</svg:title>
    <svg:path
      d="M3.382 0C1.513 0 0 1.547 0 3.455v17.09C0 22.451 1.513 24 3.382 24h17.236C22.487 24 24 22.452 24 20.544V3.454C24 1.548 22.485 0 20.618 0zm4.541 6.789c.85 0 1.552.152 2.104.456s.827.68.826 1.132c0 .324-.097.578-.29.764s-.467.276-.81.276c-.192 0-.505-.063-.937-.188s-.76-.19-.98-.19c-.364 0-.653.085-.87.255a.808.808 0 0 0-.324.67c0 .437.477.806 1.431 1.107l.518.161c1.029.345 1.777.779 2.248 1.304s.708 1.177.712 1.958c-.006 1.077-.392 1.949-1.156 2.615S8.622 18.11 7.373 18.11c-.959 0-1.778-.172-2.457-.517s-1.018-.748-1.018-1.21c-.012-.3.108-.592.328-.797s.512-.302.881-.302c.182 0 .563.09 1.144.273s1.07.274 1.468.274c.318.01.627-.106.864-.319a1.03 1.03 0 0 0 .347-.789 1.04 1.04 0 0 0-.357-.82c-.237-.206-.744-.426-1.52-.663-1.127-.335-1.914-.732-2.36-1.192s-.671-1.079-.67-1.856c0-.999.361-1.816 1.085-2.452s1.662-.952 2.815-.951zm6.338 2.886c.254-.01.504.078.697.245.178.163.349.465.512.908l1.344 3.592 1.465-3.793a1.85 1.85 0 0 1 .432-.723.9.9 0 0 1 .63-.229 1.17 1.17 0 0 1 .848.307c.21.204.314.48.314.83a1.55 1.55 0 0 1-.05.374l-.004.002a3.494 3.494 0 0 1-.146.45l-3.626 8.619c-.152.363-.308.617-.465.757a.841.841 0 0 1-.577.21c-.363 0-.65-.104-.862-.31s-.32-.486-.321-.841c0-.137.017-.273.051-.405.036-.143.085-.282.148-.414l.98-2.125-2.404-5.607a1.341 1.341 0 0 1-.09-.292 2.155 2.155 0 0 1-.028-.374 1.154 1.154 0 0 1 .332-.84c.214-.223.511-.348.82-.341z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSymbolabIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#DB3F59');
  }
}
