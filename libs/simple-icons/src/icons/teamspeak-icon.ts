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
  selector: 'svg[si-teamspeak-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>TeamSpeak</title>
    <svg:path
      d="M12.005.605h-.09l-.028.001h-.064l-.03.001-.07.001-.02.001-.09.003h-.022l-.07.003-.03.001-.063.003L11.4.62l-.09.005-.09.006h-.015l-.01.001-.064.005-.03.002-.07.005-.02.002-.088.008-.02.001-.07.007-.027.003-.065.006-.025.003-.088.01-.09.01-.023.003-.066.008-.008.002-.015.002h-.003l-.073.01-.015.002-.05.007-.04.006-.014.002-.073.01-.024.005-.07.01-.02.004-.088.015-.035.006-.018.004-.035.006-.02.003-.07.013-.02.004-.08.015h-.003l-.004.001-.005.001-.087.018-.007.002H9.57l-.034.008-.043.01-.018.002L9.4.89l-.013.003-.09.02-.09.02-.01.003-.08.02-.011.003-.087.022-.092.024-.088.024-.01.002-.084.024h-.003l-.09.026-.091.027H8.56l-.073.023-.01.003-.005.002h-.003l-.028.01a6.02 6.02 0 0 0-.19.062l-.08.025-.257.091-.075.027a8.04 8.04 0 0 0-.305.12c-.02.007-.041.014-.061.023l-.144.06a12.574 12.574 0 0 0-.53.24l-.07.034-.08.04c-.17.085-.34.174-.506.267-.154.18-.304.362-.45.548l-.06.08-.036.043.005-.003c-.037.048-.072.098-.11.146-.077.103-.156.205-.231.31-.057.08-.112.162-.167.243-.081.118-.163.234-.24.355-.054.083-.105.168-.158.25-.074.12-.15.24-.22.362-.051.085-.1.172-.148.258-.07.126-.141.25-.21.38-.044.086-.09.174-.132.26a16.1 16.1 0 0 0-.187.379c-.045.096-.088.193-.132.29a16.02 16.02 0 0 0-.433 1.063l-.05.128.009-.012c-.127.357-.245.717-.348 1.084l-.107.049a4.673 4.673 0 0 0-.015.006 4.75 4.75 0 0 0-.56.307 4.673 4.673 0 0 0-.035.022 4.693 4.693 0 0 0-.493.37 4.673 4.673 0 0 0-.045.038 4.705 4.705 0 0 0-.427.427 4.673 4.673 0 0 0-.044.05 4.692 4.692 0 0 0-.366.488 4.673 4.673 0 0 0-.025.04 4.663 4.663 0 0 0-.302.553 4.673 4.673 0 0 0-.01.024 4.638 4.638 0 0 0-.227.606 4.673 4.673 0 0 0-.003.013c-.06.208-.108.42-.14.64a4.673 4.673 0 0 0 0 .01 4.7 4.7 0 0 0 0 1.318 4.673 4.673 0 0 0 0 .01c.032.218.08.432.14.64a4.673 4.673 0 0 0 .004.014c.061.208.137.41.226.605a4.673 4.673 0 0 0 .01.024c.09.192.19.377.303.554a4.673 4.673 0 0 0 .024.038c.112.172.235.336.368.49a4.673 4.673 0 0 0 .041.049c.133.15.275.293.426.426a4.673 4.673 0 0 0 .048.04c.155.134.318.256.49.367a4.673 4.673 0 0 0 .04.027c.178.113.364.215.557.304a4.673 4.673 0 0 0 .015.006c.197.09.4.166.61.228a4.673 4.673 0 0 0 .017.005c.207.06.42.107.637.138a4.673 4.673 0 0 0 .012.002 4.698 4.698 0 0 0 1.315 0 4.673 4.673 0 0 0 .012-.002c.218-.031.43-.078.637-.138a4.673 4.673 0 0 0 .017-.005 4.67 4.67 0 0 0 .609-.227 4.673 4.673 0 0 0 .017-.008c.192-.09.378-.19.555-.303a4.673 4.673 0 0 0 .042-.027c.17-.111.335-.234.49-.366a4.673 4.673 0 0 0 .045-.04c.152-.133.295-.277.429-.43a4.673 4.673 0 0 0 .039-.044c.134-.156.257-.32.37-.493a4.673 4.673 0 0 0 .02-.035 4.62 4.62 0 0 0 .306-.557 4.673 4.673 0 0 0 .01-.021c.089-.197.165-.4.227-.61a4.673 4.673 0 0 0 .002-.008c.06-.208.108-.421.14-.64a4.673 4.673 0 0 0 0-.02 4.698 4.698 0 0 0 .04-.881 4.673 4.673 0 0 0 0-.002c0-.05-.005-.098-.01-.147a4.673 4.673 0 0 0-.006-.085 4.176 4.176 0 0 0-.028-.222 4.673 4.673 0 0 0 0-.005 4.606 4.606 0 0 0-.304-1.098 4.673 4.673 0 0 0 0-.001c-.03-.07-.061-.14-.094-.21a4.673 4.673 0 0 0-.002-.003 4.528 4.528 0 0 0-.083-.165 4.673 4.673 0 0 0-.02-.04l-.07-.123a4.673 4.673 0 0 0-.05-.085l-.037-.06a4.673 4.673 0 0 0-.087-.137l-.012-.016A4.673 4.673 0 0 0 7.14 8.635c-.018-.011-.035-.023-.053-.033a4.673 4.673 0 0 0-.096-.055c-.036-.021-.072-.043-.11-.063a4.673 4.673 0 0 0-.044-.022 4.636 4.636 0 0 0-1.368-.464 13.673 13.673 0 0 1 3.39-5.233 10.301 10.301 0 0 1 3.147-.493c5.7 0 10.329 4.629 10.33 10.329v.002c0 2.13-.647 4.11-1.753 5.756l-.013.018C18.5 21.46 14.682 23.57 9.503 23.02l.02.016c5.2 1.138 9.375-.545 11.882-3.46l-.018.026a10.7 10.7 0 0 0 .308-.372c.018-.023.035-.048.054-.071.094-.122.186-.245.275-.37l.1-.146a10.726 10.726 0 0 0 .506-.816l.076-.133c.173-.32.329-.647.469-.981l.062-.158a10.68 10.68 0 0 0 .314-.901c.016-.053.033-.105.047-.157a9.7 9.7 0 0 0 .136-.527l.003-.018c.039-.17.072-.343.103-.516l.025-.16a10.6 10.6 0 0 0 .108-.95c.004-.06.01-.118.012-.177.009-.181.015-.363.015-.545C24.001 5.982 18.626.605 12.005.605zm.232 3.277c1.363 1.373 2.135 3.205 2.41 5.229.104.765-.046 1.61-.77 2.13-.058.333.115.696.267 1.055.388.92.98 1.757 1.408 2.642.384.798-.632 1.388-1.374 1.63a6.24 6.24 0 0 1-.275.084c.048.383.274.67.215 1.003a.98.98 0 0 1-.372.6s.28.878-.38 1.26c-.152.087-.33.104-.364.34-.064.468-.134.926-.504 1.307-.056.057-.115.11-.177.159 4.326-.152 7.97-3.507 8.372-7.93.435-4.794-3.104-9.04-7.9-9.476a8.865 8.865 0 0 0-.556-.034zm-1.973.17a8.68 8.68 0 0 0-2.003.672c.388.134.736.316.97.534 1.09 1.01 1.629 2.003 1.93 3.383.267 1.218.395 1.809-.245 2.253-.865.6.923 3.164 1.272 3.906-.46.592-1.062.579-1.38.743-.176.09-.103.426-.074.685.028.254.26.413.133.61-.114.175-.55.188-.737.31.182.2.585.399.53.658-.04.2-.492.166-.666.622-.093.245-.045.698-.238.927-.448.53-.917.62-1.85.517a15.94 15.94 0 0 1-.908-.127 8.61 8.61 0 0 0 2.263 1.137c.25.082.517.11.78.082.492-.046.834-.226 1.166-.62.22-.26.165-.776.27-1.054.199-.52.713-.478.76-.706.06-.296-.398-.523-.604-.75.214-.138.707-.153.838-.353.145-.223-.12-.404-.152-.693-.032-.294-.115-.676.085-.78.36-.186 1.045-.172 1.569-.844-.397-.844-2.43-3.76-1.447-4.442.728-.506.583-1.177.28-2.563-.344-1.57-.957-2.698-2.195-3.847a2.214 2.214 0 0 0-.347-.26Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTeamspeakIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
