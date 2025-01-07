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
  selector: 'svg[si-signal-wifi-connected-no-internet-4-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98L12 21v-9h8.99L24 8.98zM19.59 14l-2.09 2.09-.3-.3L15.41 14 14 15.41l1.79 1.79.3.3L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41 19.59 14z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSignalWifiConnectedNoInternet4Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
