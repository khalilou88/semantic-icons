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
  selector: 'svg[si-coin-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M23.0049 12.0028V14.0028C23.0049 17.3165 18.08 20.0028 12.0049 20.0028C6.03824 20.0028 1.18114 17.4116 1.00957 14.1797L1.00488 14.0028V12.0028C1.00488 15.3165 5.92975 18.0028 12.0049 18.0028C18.08 18.0028 23.0049 15.3165 23.0049 12.0028ZM12.0049 4.00281C18.08 4.00281 23.0049 6.6891 23.0049 10.0028C23.0049 13.3165 18.08 16.0028 12.0049 16.0028C5.92975 16.0028 1.00488 13.3165 1.00488 10.0028C1.00488 6.6891 5.92975 4.00281 12.0049 4.00281Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCoinFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
