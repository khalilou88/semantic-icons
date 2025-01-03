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
  selector: 'svg[si-ibm-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2 8V8.54734H5.89296V8H2ZM6.44452 8V8.54734H11.9922C11.9922 8.54734 11.4255 8 10.675 8H6.44452ZM13.0805 8V8.54734H16.4367L16.2375 8H13.0805ZM18.843 8L18.6437 8.54734H21.9695V8H18.843ZM2 9.06444V9.61178H5.89296V9.06444H2ZM6.44452 9.06522V9.6118H12.6359C12.6359 9.6118 12.5636 9.19054 12.4375 9.06522H6.44452ZM13.0805 9.06522V9.6118H16.8047L16.6203 9.06522H13.0805ZM18.4445 9.06522L18.2601 9.6118H21.9695V9.06522H18.4445ZM3.11874 10.1289V10.677H4.80468V10.1289H3.11874ZM7.56328 10.1289V10.677H9.24922V10.1289H7.56328ZM10.8891 10.1289V10.677H12.575C12.575 10.677 12.682 10.3875 12.682 10.1289H10.8891ZM14.1992 10.1289V10.677H17.1883L16.9891 10.1289H14.1992ZM18.0773 10.1289L17.8773 10.677H20.8812V10.1289H18.0773ZM3.11874 11.1941V11.7415H4.80468V11.1941H3.11874ZM7.56328 11.1941V11.7415H11.8695C11.8695 11.7415 12.2298 11.4606 12.3445 11.1941H7.56328ZM14.1992 11.1941V11.7415H15.8852V11.4368L15.9922 11.7415H19.0805L19.1953 11.4368V11.7415H20.8813V11.1941H17.7164L17.5484 11.6577L17.3797 11.1941H14.1992ZM3.11874 12.2586V12.8059H4.80468V12.2586H3.11874ZM7.56328 12.2586V12.8059H12.3445C12.2297 12.5403 11.8695 12.2586 11.8695 12.2586H7.56328ZM14.1992 12.2586V12.8059H15.8852V12.2586H14.1992ZM16.1914 12.2586L16.3953 12.8059H18.7109L18.9047 12.2586H16.1914ZM19.1953 12.2586V12.8059H20.8812V12.2586H19.1953ZM3.11874 13.323V13.8703H4.80468V13.323H3.11874ZM7.56328 13.323V13.8703H9.24922V13.323H7.56328ZM10.8891 13.323V13.8703H12.682C12.682 13.612 12.575 13.323 12.575 13.323H10.8891ZM14.1992 13.323V13.8703H15.8852V13.323H14.1992ZM16.5742 13.323L16.7719 13.8703H18.3242L18.5234 13.323H16.5742ZM19.1953 13.323V13.8703H20.8812V13.323H19.1953ZM2.03046 14.3874V14.9356H5.92342V14.3874H2.03046ZM6.44452 14.3874V14.9356H12.4375C12.5636 14.8101 12.6359 14.3874 12.6359 14.3874H6.44452ZM13.1109 14.3874V14.9356H15.8852V14.3874H13.1109ZM16.9578 14.3874L17.1609 14.9356H17.9508L18.1414 14.3874H16.9578ZM19.1953 14.3874V14.9356H22V14.3874H19.1953ZM2.03046 15.4527V16H5.92342V15.4527H2.03046ZM6.44452 15.4527V15.9992H10.675C11.4255 15.9992 11.9922 15.4527 11.9922 15.4527H6.44452ZM13.1109 15.4527V16H15.8852V15.4527H13.1109ZM17.343 15.4527L17.5383 15.9985L17.5719 15.9992L17.7703 15.4527H17.343ZM19.1953 15.4527V16H22V15.4527H19.1953Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiIbmIcon implements OnInit {
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
