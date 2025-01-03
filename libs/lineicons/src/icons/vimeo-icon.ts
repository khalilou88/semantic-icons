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
  selector: 'svg[si-vimeo-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.9934 7.37368C21.8967 9.34078 20.5423 12.0173 17.898 15.4033C15.1892 18.9505 12.8674 20.7241 10.997 20.7241C9.86837 20.7241 8.8687 19.6922 8.03027 17.4994C7.48206 15.5645 6.99835 13.5652 6.4179 11.5658C5.83744 9.43752 5.1925 8.34111 4.4508 8.34111C4.32181 8.34111 3.77361 8.66358 2.87068 9.30853L2 8.01863C2.99967 7.14795 3.96709 6.27727 4.96676 5.37434C6.28891 4.24569 7.22408 3.63299 7.93353 3.60074C9.4814 3.47175 10.4166 4.56816 10.8035 6.79323C11.1583 9.24403 11.4485 10.7919 11.6097 11.3724C12.0612 13.404 12.5772 14.4036 13.0609 14.4036C13.4801 14.4036 14.0928 13.7587 14.9635 12.4365C15.8341 11.1144 16.2211 10.0825 16.3179 9.40527C16.4468 8.27661 15.9631 7.66391 14.9635 7.66391C14.512 7.66391 13.996 7.76065 13.5123 8.01863C14.4798 4.79389 16.3179 3.21377 19.0911 3.27826C21.1227 3.37501 22.0901 4.7294 21.9934 7.37368Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiVimeoIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
