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
  selector: 'svg[si-eject-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.416 3.62407L19.4818 14.2227C19.6349 14.4524 19.5729 14.7629 19.3431 14.9161C19.261 14.9708 19.1645 15 19.0657 15H4.93426C4.65812 15 4.43426 14.7762 4.43426 14.5C4.43426 14.4013 4.46348 14.3048 4.51823 14.2227L11.584 3.62407C11.7372 3.39431 12.0476 3.33222 12.2774 3.4854C12.3323 3.52201 12.3794 3.56914 12.416 3.62407ZM5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18C4 17.4477 4.44772 17 5 17Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEjectFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
