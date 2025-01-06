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
  selector: 'svg[si-calendar-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M32 456a24 24 0 0024 24h400a24 24 0 0024-24V176H32zm320-244a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm0 80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm-80-80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm0 80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm0 80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm-80-80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm0 80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm-80-80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm0 80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zM456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 00-24 23.77V144h448V87.77A23.8 23.8 0 00456 64z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCalendarSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
