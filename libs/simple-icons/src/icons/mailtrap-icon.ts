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
  selector: 'svg[si-mailtrap-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Mailtrap</title>
    <svg:path
      d="M5.37146 17.60681 3.33477 18.8148c-.27629.18168-.15004.49398 0 .55693l7.90979 4.43194c.46722.26178 1.04287.26178 1.51009 0l8.01458-4.49068c.24282-.14382.20298-.43614 0-.53479l-2.15348-1.16353c-.18174-.11994-.58711-.08004-.73069.01758l-5.13041 2.87463c-.46722.26178-1.04287.26178-1.51009 0l-5.17584-2.90007c-.19295-.11868-.4986-.11196-.69726 0ZM11.24492.19634c.46722-.26179 1.04281-.26179 1.51003 0l6.36966 3.56896c.25428.12865.27732.47404 0 .62979-.41988.23442-.98311.54855-1.45045.80916-.54595.30446-1.21057.30357-1.75592-.00201l-3.16329-1.7724c-.46722-.26179-1.04281-.26179-1.51003 0l-3.16701 1.7745c-.54577.30577-1.21096.30634-1.75727.00163-.48583-.27097-1.07519-.59951-1.49988-.83566-.23557-.10117-.28461-.40149 0-.57448L11.24492.19634Zm10.72402 5.37209c.46723.26179.75505.74561.75505 1.26917v10.32526c0 .51102-.32004.60637-.66139.42786l-2.3588-1.27315V9.37593l-6.94878 3.8935c-.46722.26178-1.04281.26178-1.51003 0l-6.94881-3.8935v6.9408L2.1528 17.58922c-.25545.16242-.87679.2136-.87679-.42636V6.8376c0-.52356.28782-1.00739.75504-1.26917.75174-.39366 1.52849 0 1.52849 0l8.44043 4.73955 8.42726-4.73955s.74839-.45137 1.54171 0Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMailtrapIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}