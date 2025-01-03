import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-hk-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#EC1B2E" d="M0 0h512v512H0" />
    <svg:path
      id="hk-a"
      fill="#fff"
      d="M282.3 119.2C203 114 166.6 218 241.6 256.4 215.6 234 221 201 231.5 184l1.9 1c-13.8 23.6-11.2 52.8 11 71-12.6-12.2-9.4-39 12.2-48.8s23.6-39.3 16.4-49.1q-14.7-25.6 9.3-39zM243.9 180l-4.7 7.4-1.8-8.6-8.6-2.3 7.8-4.3-.6-9 6.5 6.2 8.3-3.3-3.7 8 5.6 6.9z"
    />
    <use xlink:href="#hk-a" transform="rotate(72 248.5 259.5)" />
    <use xlink:href="#hk-a" transform="rotate(144 248.5 259.5)" />
    <use xlink:href="#hk-a" transform="rotate(216 248.5 259.5)" />
    <use xlink:href="#hk-a" transform="rotate(288 248.5 259.5)" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiHkFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}