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
  selector: 'svg[si-monica-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Monica</svg:title>
    <svg:path
      d="M3.99 1.13C1.88 1.13 0 3.369 0 5.575c0 1.4.827 2.505 1.73 3.127a17.048 17.048 0 0 0-.978 3.608c-1.205 7.394 5.824 10.56 11.441 10.56 5.617 0 11.85-3.612 11.063-10.56a14.743 14.743 0 0 0-.883-3.682C23.235 7.993 24 6.92 24 5.574c0-2.206-1.879-4.443-3.99-4.443-1.534 0-3.215.245-4.02 1.224a11.772 11.772 0 0 0-3.797-.609c-1.462 0-2.856.218-4.14.666-.787-1.026-2.5-1.281-4.063-1.281zm8.13 2.772c4.505 0 8.24 2.896 8.872 8.467.632 5.57-4.367 8.467-8.873 8.467-4.506 0-10.146-2.539-9.18-8.467.967-5.928 4.674-8.467 9.18-8.467zM7.604 9.08c-1.752 0-2.771 2.205-2.771 4.377 0 2.172.666 2.845 2.264 3.227 1.598.38 3.423-1.692 3.423-3.864 0-2.171-1.163-3.74-2.916-3.74zm8.852 0c-1.753 0-2.916 1.569-2.916 3.74 0 2.172 1.824 4.245 3.422 3.864 1.598-.382 2.266-1.055 2.266-3.227 0-2.172-1.02-4.377-2.772-4.377zm-8.38 1.58c.922 0 1.1.71 1.1 1.635 0 .924-.57 1.633-1.493 1.633-.435 0-.566-.11-.762-.36-.22-.28-.384-.603-.33-1.273.09-1.119.562-1.635 1.484-1.635zm7.91 0c.922 0 1.392.516 1.482 1.635.054.67-.11.994-.33 1.273-.197.25-.327.36-.762.36-.923 0-1.494-.709-1.494-1.633s.18-1.635 1.103-1.635zm-3.925 5.004c-.868 0-1.724.089-1.724.637s.868 1.826 1.736 1.826c.869 0 1.711-1.278 1.711-1.826s-.854-.637-1.723-.637z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMonicaIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '2C2B29');
  }
}
