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
  selector: 'svg[si-allocine-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>AlloCin&#233;</svg:title>
    <svg:path
      d="M16.434.001a.826.826 0 00-.164.008l-3.423.543a2.635 2.635 0 01-2.189 3.01 2.629 2.629 0 01-3.01-2.185l-3.417.538a.818.818 0 00-.677.931l3.24 20.467a.818.818 0 00.931.677l3.423-.543a2.635 2.635 0 012.189-3.01 2.629 2.629 0 013.01 2.185l3.422-.543a.818.818 0 00.677-.93L17.2.685a.816.816 0 00-.767-.685zm-3.22 6.534c.066 0 .128.005.185.017.423.09.975.6 1.315.955.178.187.192.519.048.73l-1.228 1.795a.89.89 0 01-.437.283c-.504.125-1.248-.95-1.771 1.507-.524 2.458.59 1.776 1.003 2.098a.828.828 0 01.283.437l.394 2.14a.613.613 0 01-.341.649c-.456.182-1.167.427-1.589.336-.907-.192-2.342-2.4-1.57-6.044.725-3.415 2.71-4.89 3.708-4.903Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAllocineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
