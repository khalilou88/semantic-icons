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
  selector: 'svg[si-fluke-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Fluke</title>
    <svg:path
      d="M20.603 12.656h-.092v-.131h.08c.065 0 .078.013.078.065 0 .04-.026.066-.066.066zm.263.013c0 .157-.118.288-.276.288s-.275-.13-.275-.288c0-.158.105-.276.262-.289.17 0 .289.118.289.289zm-.118.197-.105-.17c.052-.014.091-.053.091-.106 0-.079-.052-.118-.13-.118h-.145v.394h.066v-.17h.065l.105.17h.053zM24 8.393v7.214H0V8.393h24zM6.44 11.567H4.222V11.2h2.203v-.498H3.633v2.308h.59v-.892h2.216v-.55zm2.819.866H7.384v-1.731h-.577v2.308h2.452v-.577zm3.462-1.731h-.577v1.77h-2.02v-1.77h-.576v1.875c.039.42.432.433.432.433h2.308s.38-.013.433-.433v-1.875zm3.568 2.308-1.837-1.18 1.745-1.128h-1.023l-1.299.8v-.8h-.577v2.308h.577v-.866l1.377.866h1.037zm3.239-2.308h-2.912v2.308h2.912v-.538h-2.335v-.328h2.335v-.537h-2.335v-.355h2.335v-.55zm1.403 1.967a.347.347 0 0 0-.34-.341.347.347 0 0 0-.342.34c0 .184.158.342.341.342a.347.347 0 0 0 .341-.341z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFlukeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
