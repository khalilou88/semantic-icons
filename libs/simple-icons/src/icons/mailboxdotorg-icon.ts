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
  selector: 'svg[si-mailboxdotorg-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>mailbox.org</svg:title>
    <svg:path
      d="M2.229 22.844H24V10.501l-8.628 5.882c-.613.419-1.226-.003-1.226-.003L0 6.646v13.969s0 2.229 2.229 2.229m12.558-9.273L24 7.261V1.156H2.229S0 1.156 0 3.384v.06l14.787 10.127Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMailboxdotorgIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '76BB21');
  }
}
