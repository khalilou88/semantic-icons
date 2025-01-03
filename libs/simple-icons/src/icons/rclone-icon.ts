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
  selector: 'svg[si-rclone-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Rclone</title>
    <svg:path
      d="M11.842.6258C9.3647.6813 6.9754 1.9906 5.646 4.2933c-.7593 1.3144-1.0647 2.7662-.966 4.1745a7.99 7.99 0 0 1 2.6568-.4541l1.4705-.0013c-.0093-.5594.1245-1.1284.4245-1.6482.8827-1.5284 2.837-2.0522 4.3654-1.1695 1.5284.8824 2.0519 2.8366 1.1695 4.365l-1.4782 2.5647 1.1955 2.0714 2.3914-.0004 1.4775-2.5655c2.0262-3.5088.8239-7.9959-2.6853-10.0217C14.4614.9118 13.1396.5967 11.842.6258m-1.5451 8.073-2.9605.0029C3.2844 8.7017 0 11.9867 0 16.0383c0 4.052 3.2844 7.3367 7.3364 7.3367 1.5174 0 2.9267-.4609 4.0967-1.2497a8 8 0 0 1-1.72-2.0748l-.7368-1.273c-.4799.288-1.0392.4565-1.6395.4565-1.765 0-3.1958-1.4307-3.1958-3.1958 0-1.7647 1.4307-3.1954 3.1958-3.1954l2.96-.0022 1.1962-2.0708zm9.587.7475a7.99 7.99 0 0 1-.935 2.5278l-.7344 1.2745c.4892.2717.915.6719 1.2153 1.192.8823 1.528.3585 3.4826-1.1699 4.365-1.528.8823-3.4828.3588-4.3651-1.1696l-1.482-2.5628h-2.3915L8.8256 17.144l1.483 2.5626c2.0262 3.5091 6.513 4.7112 10.022 2.685 3.5089-2.0257 4.7112-6.5125 2.6853-10.0216-.7588-1.3144-1.863-2.3052-3.132-2.9237"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRcloneIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
