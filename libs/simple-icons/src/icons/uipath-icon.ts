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
  selector: 'svg[si-uipath-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>UiPath</title>
    <svg:path
      d="M0 7.882v8.235h8.235V7.882H0Zm.852.852h6.53v6.53H.852v-6.53Zm22.268.695c-.514 0-.886.345-.886.873 0 .511.36.878.886.878.518 0 .88-.359.88-.878 0-.521-.359-.873-.88-.873Zm-17.023.055a.501.501 0 0 0-.522.522c0 .302.22.509.522.509.302 0 .522-.206.522-.509a.501.501 0 0 0-.522-.522Zm17.023.102c.437 0 .716.278.716.716 0 .426-.274.712-.716.712-.426 0-.719-.271-.719-.712 0-.44.278-.716.719-.716Zm-.347.213v.988h.197v-.318h.14l.176.318h.22l-.186-.347a.32.32 0 0 0 .206-.311c0-.203-.159-.33-.374-.33h-.379Zm-3.74.002v4.468h.853v-1.774c0-.571.302-.914.804-.914s.763.33.763.838v1.85h.852v-1.946c0-.88-.619-1.45-1.409-1.45-.509 0-.818.192-1.01.515V9.801h-.853Zm3.937.157h.157c.115 0 .193.064.193.171 0 .118-.078.181-.193.181h-.157v-.352Zm-21.375.049v2.495c0 1.141.625 1.808 1.684 1.808 1.079 0 1.718-.681 1.718-1.808v-2.495h-.852v2.495c0 .646-.275 1.004-.846 1.004-.591 0-.852-.378-.852-1.004v-2.495h-.852Zm7.547 0v4.262h.852v-1.375h.77c.928 0 1.533-.543 1.533-1.457 0-.88-.591-1.43-1.533-1.43H9.142Zm7.809 0v.914h-.399v.722h.399v1.45c0 .791.35 1.176 1.161 1.176h.447v-.729h-.337c-.33 0-.419-.144-.419-.44v-1.457h.749v-.722h-.749v-.914h-.852Zm-6.957.687h.681c.488 0 .756.276.756.743 0 .502-.268.776-.756.776h-.681v-1.519Zm4.138.186c-.921 0-1.546.728-1.546 1.718 0 .997.639 1.712 1.546 1.712.537 0 .887-.193 1.086-.516v.475h.853v-3.348h-.853v.523c-.206-.344-.563-.564-1.086-.564Zm-8.461.041v3.348h.852v-3.348h-.852Zm8.661.701c.543 0 .886.399.886.976 0 .585-.364.963-.886.963-.578 0-.88-.406-.88-.963 0-.598.337-.976.88-.976Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiUipathIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
