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
  selector: 'svg[si-vexxhost-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>VEXXHOST</svg:title>
    <svg:path
      d="M8.787 16.045a23.43 23.43 0 0 0-1.402 2.185c.16-.301.331-.6.509-.898q.569-.948 1.225-1.88c3.684-5.16 9.117-9.202 14.354-11.112l-.43-1.317c-.018-.012-.032-.02-.04-.014-7.366 2.68-14.173 9.534-16.55 17.194.116-.28.237-.559.37-.836 3.407-5.592 9.963-10.16 16.079-12.157l-.183-1.252c-5.385 1.683-10.555 5.398-13.932 10.087ZM23.04 3.023v-.014h-.03s.011.002.03.014zM7.385 18.23l.509-.898c-.178.298-.348.597-.51.898zM23.05 8.058a11.447 11.447 0 0 1 .798 4.092 11.792 11.792 0 0 1-18.604 9.683A12.084 12.084 0 0 1 4.238 2.916 11.847 11.847 0 0 1 7.908.713a11.525 11.525 0 0 1 4.196-.711 11.181 11.181 0 0 1 7.616 3.11A11.423 11.423 0 0 0 12.11.6a10.878 10.878 0 0 0-3.9.843 11.236 11.236 0 0 0-3.34 2.173A11.46 11.46 0 0 0 2.5 6.781a11.186 11.186 0 0 0 .711 11.266 11.032 11.032 0 0 0 2.72 2.827 10.9 10.9 0 0 0 3.554 1.658 11.072 11.072 0 0 0 7.7-.732 11.435 11.435 0 0 0 5.386-5.715 11.826 11.826 0 0 0 .948-3.938 12.084 12.084 0 0 0-.47-4.09zM9.173 6.873H6.79l3.504 4.872a29.78 29.78 0 0 1 1.277-1.529zm5.971 11.61h2.358l-3.98-5.551q-.764.597-1.477 1.234zm-1.01 0h.385l-2.843-3.966-.237.22zM6.182 6.873H5.76l4.01 5.563c.065-.092.137-.184.21-.274zm-.837 0h-.421L9.36 13.01c.064-.095.132-.187.199-.28zm7.957 11.61h.381l-2.516-3.509-.237.237z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiVexxhostIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '2A1659');
  }
}
