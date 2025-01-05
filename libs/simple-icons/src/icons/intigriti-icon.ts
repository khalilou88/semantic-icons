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
  selector: 'svg[si-intigriti-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Intigriti</svg:title>
    <svg:path
      d="M19.9133 6.0364c-1.1056.574-3.7632 1.924-5.8999 3.0084-3.7738 1.9134-7.0267 3.593-7.1117 3.6674-.032.0213.0106.404.085.8611.574 3.4123 2.1473 6.4526 4.316 8.3555l.691.6165.6909-.5953c1.839-1.6158 3.3273-4.2202 4.0502-7.0585.1488-.5634.2764-1.3076.287-1.6477l.0213-.6166-2.9553-1.5308-.7335.372c-.3933.202-.7229.3934-.7229.4253 0 .0319.6698.3933 1.4883.7973l1.4882.7335-.0637.3827c-.3934 2.1686-1.6158 4.7517-2.9234 6.1868l-.606.6698-.4464-.4253c-.9248-.893-1.9347-2.615-2.5194-4.3053-.3295-.946-.7229-2.4343-.659-2.4875.0212-.0212 3.0402-1.5414 6.7077-3.391l6.6546-3.3699.2126.3508c.6697 1.0843.7229 2.5407.1382 3.7313-.6484 1.3181-1.754 1.9879-3.3698 2.0623l-.978.0425-.0638.3189c-.0319.1807-.0638.4784-.0638.6803 0 .319.032.3615.3827.4253.574.1063 1.7647-.032 2.4556-.287 1.6796-.6273 2.849-1.9135 3.3699-3.7313.4464-1.5627-.032-3.423-1.265-4.8475-.2127-.2445-.4465-.4464-.5103-.4464-.0744.0106-1.0312.4783-2.1473 1.0524zM1.3739 5.4836C.1833 6.8762-.2632 8.6196.1514 10.2354c.4677 1.8071 1.6583 3.136 3.3698 3.7737.691.2552 1.8816.3934 2.4556.287.4146-.085.4571-.202.319-1.031l-.0638-.3934-.978-.0425c-1.6265-.0744-2.7214-.7442-3.3805-2.0836-.574-1.148-.5315-2.5406.085-3.6143l.2658-.4571 3.8482 1.956 3.8588 1.956.7123-.3508c.3933-.202.7122-.404.7122-.4465 0-.0638-9.3441-4.805-9.4823-4.805-.0425 0-.2658.2233-.4996.4997zm6.3144-3.6144l-.2657.404.2338.0638c.691.1807 1.6903.9567 2.1048 1.637l.2127.3402-.5953.8824c-.5953.893-1.212 2.0304-1.212 2.2323 0 .0957.9568.6379 1.1375.6379.0426 0 .287-.404.5316-.8824.5315-1.0417.9567-1.6583 1.6583-2.4024l.4996-.5315.4465.4783c.7016.7548 1.2119 1.4883 1.6902 2.4237.2445.4678.4678.8824.489.9143.0638.0744 1.2013-.5422 1.2013-.6591 0-.1914-.6485-1.3713-1.2225-2.2111l-.5953-.8717.2232-.3508c.3295-.5316 1.2012-1.2757 1.754-1.499.2658-.1169.4784-.255.4784-.3082 0-.0638-.1063-.2445-.2445-.4146l-.2445-.2976-.5209.2445c-.3083.1488-.8717.5846-1.3394 1.0524l-.808.8079-.659-.606-.6485-.6165-.6484.6165-.6591.6166-.7548-.7654C9.3254 2.1882 8.2943 1.476 8.018 1.476c-.032 0-.1808.1807-.3296.3933z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiIntigritiIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#161A36');
  }
}
