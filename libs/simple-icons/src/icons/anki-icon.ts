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
  selector: 'svg[si-anki-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Anki</title>
    <svg:path
      d="m15.845 22.627-.169.131-.182.091c-.109.042-.23.069-.362.079-.27.021-.611-.036-.989-.16-.686-.223-1.537-.67-2.256-.973-.343-.145-.633-.281-.829-.254-.197.027-.44.236-.73.467-.611.486-1.311 1.145-1.91 1.546-.331.22-.644.368-.91.42-.13.026-.255.032-.37.021l-.201-.038-.196-.082-.177-.119-.143-.145a1.3 1.3 0 0 1-.187-.32c-.104-.25-.154-.593-.154-.99.001-.721.164-1.669.23-2.447.031-.37.07-.687-.016-.866-.087-.178-.359-.345-.67-.55-.65-.431-1.494-.893-2.06-1.34-.312-.246-.548-.498-.681-.735a1.3 1.3 0 0 1-.134-.345l-.025-.202.016-.213.059-.205.094-.18c.064-.097.145-.191.246-.277.207-.175.517-.33.895-.452.685-.222 1.637-.361 2.397-.539.362-.084.676-.145.819-.281.144-.138.217-.45.316-.808.209-.752.387-1.696.638-2.373.138-.373.305-.676.489-.874.091-.098.187-.176.286-.235l.185-.086.207-.051.214-.006.2.033c.113.03.226.079.339.148.231.143.473.389.706.711.424.584.85 1.446 1.253 2.114.192.318.347.598.522.692.174.094.494.068.865.052.78-.034 1.734-.157 2.455-.128.397.017.736.081.983.195.12.055.223.123.31.201l.14.148.112.181.072.201.03.202c.007.115-.005.238-.036.368-.063.263-.223.57-.457.891-.425.583-1.113 1.254-1.623 1.845-.244.281-.463.514-.498.71-.035.194.089.49.219.838.273.731.684 1.601.879 2.295.108.382.151.725.119.995-.015.131-.049.252-.095.358l-.098.179zm-1.54-18.929c-.018-.057-.07-.226-.122-.346-.17-.387-.418-.846-.544-1.216-.166-.483-.099-.88.102-1.096.201-.214.592-.308 1.086-.177.377.1.851.316 1.249.458.125.044.297.084.354.096.047-.032.193-.134.291-.221.316-.282.675-.659.988-.894.408-.305.807-.366 1.074-.241.266.124.476.468.504.977.021.391-.037.909-.049 1.331-.004.132.011.309.017.366.046.035.187.142.301.209.365.213.835.438 1.155.662.417.294.597.655.56.947-.035.293-.296.599-.773.782-.365.141-.875.246-1.28.364-.126.037-.29.106-.343.129-.019.056-.077.223-.105.351-.091.413-.159.93-.274 1.304-.151.487-.438.77-.727.826s-.661-.098-.983-.494c-.246-.303-.504-.756-.742-1.105-.074-.11-.19-.243-.229-.287-.058-.001-.235-.004-.366.009-.421.042-.933.135-1.324.141-.51.008-.867-.177-1.011-.435-.142-.257-.11-.659.167-1.088.212-.328.563-.713.822-1.047.08-.104.171-.256.202-.305"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiAnkiIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
