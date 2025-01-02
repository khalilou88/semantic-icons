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
  selector: 'svg[si-xmpp-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>XMPP</title>
    <svg:path
      d="m3.401 4.594 1.025.366 3.08.912c-.01.18-.016.361-.016.543 0 3.353 1.693 7.444 4.51 10.387 2.817-2.943 4.51-7.034 4.51-10.387 0-.182-.006-.363-.016-.543l3.08-.912 1.025-.366L24 3.276C23.854 8.978 19.146 14.9 13.502 18.17c1.302 1.028 2.778 1.81 4.388 2.215v.114l.004.001v.224a14.55 14.55 0 0 1-4.829-1.281A20.909 20.909 0 0 1 12 18.966c-.353.17-.708.329-1.065.477a14.55 14.55 0 0 1-4.829 1.281V20.5l.004-.001v-.113c1.61-.406 3.086-1.188 4.389-2.216C4.854 14.9.146 8.978 0 3.276l3.401 1.318Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiXmppIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
