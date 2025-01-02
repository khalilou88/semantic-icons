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
  selector: 'svg[si-opentofu-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>OpenTofu</title>
    <svg:path
      d="m10.184 23.25.002-.01-.033-.017-8.388-4.611a1.6841 1.6841 0 0 1-.873-1.475V6.864c0-.614.335-1.18.873-1.476l9.424-5.18a1.6868 1.6868 0 0 1 1.622 0l8.31 4.568.022.012.006.002-.004-.001 1.09.599c.538.296.873.862.873 1.476v10.273c0 .614-.335 1.179-.873 1.475l-8.388 4.611-.03.016-1.006.553c-.505.277-1.117.277-1.622 0l-1.003-.552-.002.01Zm.603-1.158-.005-.001.012.006c.252.123.55-.055.558-.338l.001-9.147c0-.141-.078-.272-.202-.34L2.763 7.661c-.259-.142-.576.045-.576.341v9.135c0 .141.077.272.201.34l8.394 4.613.005.002Zm.556-.327Zm0 0Zm-2.539-4.802-.005.003-1.959-1.031-.003-.004c.001-.003.001-.007.001-.01.023-.305.153-.525.346-.632.194-.107.45-.101.72.041.272.143.508.397.671.691.163.293.252.628.229.935v.007ZM5.71 15.177l-.005.002-1.96-1.031-.002-.004.001-.01c.022-.304.152-.524.346-.632.194-.107.449-.101.72.042.271.143.508.396.671.69.162.294.252.628.229.935v.008Zm14.981-8.999-.003-.018a.382.382 0 0 0-.191-.25l-8.31-4.567a.3883.3883 0 0 0-.374 0L3.503 5.91c-.162.089-.226.265-.193.423l.009.007-.009-.007c.022.1.083.194.183.253l8.32 4.572c.116.064.258.064.374 0l8.321-4.573c.151-.089.212-.256.183-.407Zm-17.37.16Zm-.002.002c0-.001-.003-.003-.005-.006-.002-.002-.004-.004-.004-.003l.009.009Zm-.467-1.56-.003.002c.002.004.005.006.005.006l-.002-.008Zm.007.007c-.001.001-.002.001-.003.001h-.002l.005-.001Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiOpentofuIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
