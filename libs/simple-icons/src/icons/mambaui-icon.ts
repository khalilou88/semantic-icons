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
  selector: 'svg[si-mambaui-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Mamba UI</svg:title>
    <svg:path
      d="M4.0454 15.831c1.3027.3488 2.4956.7732 3.9102 1.0423a30.7131 30.7131 0 0 0 .4045 6.0695c-1.6978-1.9082-4.1376-5.1865-4.3147-7.1117Zm15.8426 0c-1.2583.3488-2.4104.7732-3.7766 1.0423a31.7724 31.7724 0 0 1-.3904 6.0695c1.6439-1.9082 4.0012-5.1865 4.167-7.1117zM6.7826 1.0573c2.3175 4.1689 9.686 3.6288 11.4596 0a6.223 6.223 0 0 1 2.3374 1.3862c-.0862 3.607-2.3374 4.8974-2.3374 4.8974l.0777.8376c2.5657-.7428 3.5217-.6632 3.336-5.0216 1.2895 1.0583 2.4559 3.067 2.3355 4.3584-.125 1.3416-2.037 5.3768-1.8002 5.3058a87.7487 87.7487 0 0 1-8.4447 3.2043 2.9305 2.9305 0 0 0-1.9433-1.6723 12.7813 12.7813 0 0 0-1.784 1.7794c-2.347-.8527-4.4238-1.8002-6.5944-2.7211l-1.7055-.6282-.776-1.9897c-1.0422-2.579-1.5159-4.0154.1554-6.2789.3639-.4917.9977-1.5604 1.5558-1.7945-.109 3.6952-1.2242 5.4537 2.9438 5.4574l.0776-.8375s-1.8096-.2265-2.2492-4.8975zm2.073 11.2029c-.2074.2785-.3363.3486-.5428.6282.052.1392-.2066.1743-.1554.3136A2.8651 2.8651 0 0 0 9.01 14.353a2.6643 2.6643 0 0 0 1.7054-1.1511c-.2065-.4397-1.443-1.1626-1.8599-.9409Zm5.663 0c-.414.2785-.9048.6632-1.3188.9418.1288.2094.8015.7324.9313.9417.3904.235.2957.4274.776.2094a1.4013 1.4013 0 0 0 .8527-1.2554c-.2065-.2444-.414-.593-.6205-.8375Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMambauiIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '6D28D9');
  }
}
