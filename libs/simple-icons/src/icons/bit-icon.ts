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
  selector: 'svg[si-bit-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Bit</svg:title>
    <svg:path
      d="M10.98 12.959q0 .897-.509 1.42-.51.52-1.456.52-.34 0-.643-.072-.303-.073-.546-.194-.291-.17-.328-.364-.036-.194-.036-.388V9.804q0-.219.134-.328.133-.109.4-.109t.4.11q.134.108.134.327v1.553q.145-.097.352-.158.206-.06.424-.06.728 0 1.202.473.473.473.473 1.347zm-2.45.946q.097.073.23.097.134.024.255.024.413 0 .631-.255.219-.254.219-.74 0-.485-.219-.752-.218-.267-.607-.267-.145 0-.279.049-.133.048-.23.121zm4.465-3.81q0 .267-.182.449t-.449.182q-.291 0-.473-.182t-.182-.449q0-.291.182-.461.182-.17.473-.17.267 0 .449.17t.182.461zm-.097 1.48v2.864q0 .218-.134.327-.133.11-.4.11t-.413-.11q-.145-.109-.145-.327v-2.864q0-.218.145-.327.146-.11.413-.11t.4.11q.134.109.134.327zm3.276 2.33q.218 0 .303.182.085.182.085.328 0 .072-.048.157-.049.085-.146.158-.146.073-.364.121-.218.049-.437.049-.437 0-.703-.158-.267-.158-.413-.4-.121-.219-.146-.473-.024-.255-.024-.546v-1.19h-.291q-.219 0-.328-.12-.109-.122-.109-.34 0-.219.11-.34.108-.122.327-.122h.291v-.703q0-.219.134-.328.133-.11.4-.11t.4.11q.134.11.134.328v.703h.68q.218 0 .327.122.11.121.11.34 0 .218-.11.34-.11.12-.328.12h-.68v1.19q0 .12.013.254.012.134.06.255.05.073.122.11.073.036.194.036.049 0 .121-.012.073-.013.122-.013.048-.024.097-.036.048-.012.097-.012zM.012 12.012q0-2.5.947-4.683.946-2.184 2.572-3.81Q5.157 1.893 7.34.946 9.525 0 12 0t4.66.946q2.183.947 3.821 2.573 1.638 1.626 2.56 3.81.947 2.184.947 4.683 0 2.475-.947 4.66-.922 2.183-2.56 3.81-1.638 1.625-3.822 2.572Q14.475 24 12 24q-2.475 0-4.66-.946-2.183-.947-3.81-2.573-1.625-1.626-2.571-3.81-.947-2.184-.947-4.659ZM12 .874q-2.305 0-4.32.873-2.038.874-3.542 2.39-1.505 1.517-2.379 3.531-.873 2.039-.873 4.344t.873 4.32q.874 2.038 2.379 3.543 1.504 1.504 3.542 2.378 2.015.873 4.32.873t4.344-.873q2.014-.874 3.518-2.378 1.505-1.505 2.379-3.543.898-2.015.898-4.32t-.898-4.344q-.874-2.014-2.379-3.53-1.504-1.517-3.518-2.39Q14.305.873 12 .873ZM8.384 3.422q.073.17.024.34-.048.17-.218.266-1.383.728-2.342 1.614-.958.886-1.735 2.342-.097.17-.267.218-.17.049-.315-.024-.17-.097-.219-.267-.048-.17.025-.315.849-1.602 1.905-2.585 1.055-.983 2.536-1.76.17-.096.34-.036.17.061.266.207z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBitIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
