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
  selector: 'svg[si-mail-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M464 80H48a16 16 0 00-16 16v320a16 16 0 0016 16h416a16 16 0 0016-16V96a16 16 0 00-16-16zM265.82 284.63a16 16 0 01-19.64 0L89.55 162.81l19.64-25.26L256 251.73l146.81-114.18 19.64 25.26z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMailSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
