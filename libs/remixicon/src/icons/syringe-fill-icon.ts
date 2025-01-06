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
  selector: 'svg[si-syringe-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.6779 7.97918L20.2637 9.39339L18.1424 7.27207L16.021 9.39339L19.5566 12.9289L18.1424 14.3431L17.4353 13.636L11.0713 20H5.41444L3.29312 22.1213L1.87891 20.7071L4.00023 18.5858V12.9289L10.3642 6.56497L9.65708 5.85786L11.0713 4.44365L14.6068 7.97918L16.7281 5.85786L14.6068 3.73654L16.021 2.32233L21.6779 7.97918ZM9.65708 14.3431L6.82865 11.5147L5.41444 12.9289L8.24287 15.7574L9.65708 14.3431ZM12.4855 11.5147L9.65708 8.68629L8.24287 10.1005L11.0713 12.9289L12.4855 11.5147Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSyringeFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
