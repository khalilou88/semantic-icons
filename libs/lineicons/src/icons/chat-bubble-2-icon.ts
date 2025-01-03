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
  selector: 'svg[si-chat-bubble-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.511 3.33199C14.347 2.22762 12.6579 1.72505 10.9857 2.15006C9.23355 2.59537 7.9514 3.94422 7.50793 5.56986C6.3866 6.11855 5.61328 7.27053 5.61328 8.6047C5.61328 10.1948 6.71175 11.5275 8.19159 11.8865C8.57553 12.6981 9.20177 13.4069 10.0343 13.8879C11.5672 14.7736 13.4181 14.6689 14.8124 13.7615C16.3935 14.5234 18.321 13.9563 19.2258 12.416C19.3295 12.2394 19.4157 12.0569 19.4846 11.8706C20.9325 11.4894 21.9999 10.1721 21.9999 8.6047C21.9999 7.37194 21.3394 6.29476 20.3553 5.70551C20.0649 4.62181 19.2696 3.68913 18.1343 3.27148C17.2484 2.94555 16.3163 2.99277 15.511 3.33199ZM14.7704 4.73516C15.0126 5.03316 15.4408 5.10007 15.7624 4.8902C16.295 4.54259 16.9763 4.44372 17.6164 4.67923C18.3515 4.94966 18.843 5.59215 18.9534 6.31847C18.9918 6.57067 19.1557 6.78608 19.3886 6.89028C20.045 7.18404 20.4999 7.84206 20.4999 8.6047C20.4999 9.57572 19.7619 10.3753 18.8167 10.4718C18.49 10.5052 18.223 10.7472 18.1578 11.069C18.1172 11.2697 18.0431 11.4679 17.9324 11.6563C17.399 12.5644 16.2304 12.8682 15.3223 12.3348L15.1364 12.2256C14.8636 12.0653 14.5195 12.0935 14.2765 12.296C13.3225 13.0908 11.9213 13.2458 10.7847 12.5891C10.1332 12.2127 9.66928 11.6287 9.43162 10.9655C9.33397 10.693 9.08825 10.501 8.80024 10.4722C7.85322 10.3775 7.11328 9.57703 7.11328 8.6047C7.11328 7.77841 7.6477 7.07499 8.39186 6.82494C8.65108 6.73784 8.84234 6.51656 8.89101 6.24747C9.11689 4.99842 10.0476 3.93615 11.3551 3.60384C12.656 3.27321 13.9742 3.75554 14.7704 4.73516Z"
      fill="#323544"
    />
    <svg:path
      d="M4.75 20.75C4.75 20.0596 5.30964 19.5 6 19.5C6.69036 19.5 7.2501 20.0596 7.2501 20.75C7.2501 21.4404 6.69046 22 6.0001 22C5.30974 22 4.75 21.4404 4.75 20.75Z"
      fill="#323544"
    />
    <svg:path
      d="M9.61719 15.4229C8.37455 15.4229 7.36719 16.4302 7.36719 17.6729C7.36719 18.9155 8.37455 19.9229 9.61719 19.9229C10.8598 19.9229 11.8672 18.9155 11.8672 17.6729C11.8672 16.4302 10.8598 15.4229 9.61719 15.4229ZM8.86719 17.6729C8.86719 17.2586 9.20297 16.9229 9.61719 16.9229C10.0314 16.9229 10.3672 17.2586 10.3672 17.6729C10.3672 18.0871 10.0314 18.4229 9.61719 18.4229C9.20297 18.4229 8.86719 18.0871 8.86719 17.6729Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiChatBubble2Icon implements OnInit {
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
