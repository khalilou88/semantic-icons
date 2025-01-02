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
  selector: 'svg[si-apachehadoop-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Apache Hadoop</title>
    <svg:path
      d="M12.098 3.01c-1.133.277-1.466.474-1.842 1.787.478-.962.84-1.315 1.842-1.787zm3.228.076c-.834-.053-1.715.177-2.756.615a3.97 3.97 0 00-1.199.76c-.31.287-.576.62-.866 1.006a1.312 1.312 0 00-.468.095 1.868 1.868 0 00-.539.356c-.141.124-.28.252-.416.383v.002c-.123.12-.244.241-.363.365-.945.152-1.72.32-2.41.588a6.314 6.314 0 00-1.97 1.217c-.252.222-.482.469-.687.736a5.435 5.435 0 00-.503.803c-.13.142-.26.288-.399.414a1.45 1.45 0 01-.441.285c-.093.035-.133.058-.137.056-.004-.001-.008-.033-.012-.047.235-.21.267-.55.289-.86.03.034.053.068.082.113.031.047.062.095.1.142l.158.2.055-.249c.046-.208.081-.484.027-.724-.034-.153-.117-.315-.235-.393l.036-.09c.04-.1.08-.204.115-.303l.069-.193-.204.035c-.27.047-.852.366-1.261.791-.152.158-.284.33-.37.514a.984.984 0 00-.093.59.91.91 0 00.272.498c.03.12.058.223.087.316.033.104.068.198.112.29.119.247.31.398.529.468.182.059.369.066.566.02a3.83 3.83 0 00-.072.69 8.911 8.911 0 00.07 1.394c.013.093.028.184.045.275l-.107.291-.166.455-.37.365-.343.34a9.22 9.22 0 01-.082.08c-.232.224-.279.27-.213.662.04.241.119.484.242.72.114.216.267.427.463.624.245.245.647.55 1.066.71.245.092.488.138.723.097l-.039.11a4.046 4.046 0 01-.123.3c-.285.624.008.95.463 1.158.227.104.497.173.748.238l.168.045c.298.08.812.228 1.281.258.513.033.974-.073 1.098-.533.049-.182.078-.322.09-.459a2.33 2.33 0 00-.01-.406c.144-.32.21-.423.316-.578l.053-.08c.115-.17.168-.29.188-.426.018-.131.004-.262-.02-.461l-.011-.084a6.822 6.822 0 001.338.05l-.118.061-.055.03c-.395.203-.413.587-.289.984.112.357.343.723.487.945.303.467.592.861.943 1.076.368.226.786.253 1.328-.04.276-.15.363-.302.48-.507.038-.066.08-.133.126-.204.101-.05.382-.296.67-.534l.296-.242c.073.053.164.09.27.115.14.034.305.05.504.065.149.01.635.01.949.01h.227c.324.001.585-.016.783-.128.21-.119.334-.331.361-.71a1.28 1.28 0 00-.008-.378.946.946 0 00-.136-.312l-.014-.502-.016-.521a2.372 2.372 0 00-.068-.536 3.558 3.558 0 00-.18-.505c-.053-.127-.096-.245-.138-.36a5.756 5.756 0 00-.229-.547l.018-.123.181.174.266.258c.203.196.39.373.607.502.226.133.479.21.807.195a1.925 1.925 0 001.016-.385c.293-.216.528-.509.627-.832l.084-.279.07-.225c.482.082.998.11 1.498.057a3.7 3.7 0 001.351-.389 3.406 3.406 0 001.35-1.33h.002v-.002c.355-.616.555-1.34.63-2.088.062-.599.028-1.415-.097-2.2-.11-.701-.295-1.38-.55-1.87a.736.736 0 00-.137-.178 1.413 1.413 0 00-.51-.31c-.206-.07-.422-.084-.594.006a.485.485 0 00-.123.09 2.793 2.793 0 00-.3.388c-.106.153-.21.307-.337.414-.149.128-.327.202-.502.272a3.454 3.454 0 00-.261-.508 4.81 4.81 0 00-.399-.54 2.21 2.21 0 00-.365-.349 5.357 5.357 0 00-.41-.275c-.407-.255-.754-.559-1.108-.87-.16-.14-.323-.282-.482-.413-.842-.695-1.628-1.031-2.469-1.084zm-4.129.004c-.57.137-.68.245-.851.804.273-.41.43-.545.851-.804zm3.952.465c.829-.001 1.587.303 2.431 1.013.412.347.774.684 1.192.983-.152.013-.283.04-.455.107.21-.04.451 0 .67.04.06.039.124.078.189.116.295.174.463.27.662.547.21.294.386.589.541.912-.101-.036-.186-.067-.262-.09a.566.566 0 00-.533.034l-.012.006c-.163.079-.416.17-.586.197a.7.7 0 00.405-.006.565.565 0 00-.018.539.269.269 0 01-.02-.12.228.228 0 01.249-.208.233.233 0 01.187.33c-.117.02-.233.055-.353.1a4.41 4.41 0 00-.237.095 3.722 3.722 0 011.084-.02c.025.117.05.24.073.366l-.137.01-.012.002c-.174-.14-.367-.117-.633-.057-.806.184-.617.637-.988 1.318.385-.47.357-.962.984-1.11.147-.036.247-.078.346-.063-.178.09-.333.237-.394.41-.173.486-.065.895-.254 1.35.234-.407.249-.802.459-1.23.075-.153.354-.4.525-.403l.14-.002c.042.27.068.539.052.761a8.535 8.535 0 01-.198 1.24c.213-.272.31-.85.403-1.257.097-.424.07-.934-.014-1.389-.117-.625.527-.522.9-.816.275-.217.463-.564.715-.809.25-.243.644.114.742.352.426 1.03.62 2.65.508 3.69-.126 1.164-.69 2.437-1.719 3.01-1.31.732-2.854.285-4.156-.154-.278-.093-.47-.229-.715-.382.067.3.097.615.008.914-.14.474-.367 1.251.277 1.394.246.055.357.048.704-.13a1.3 1.3 0 01-.616.011.397.397 0 01-.314-.273c.06.044.16.066.33.107.478.115.932-.114 1.021-.445.052-.194.043-.295.153-.559.099.03.202.059.306.084l-.177.578c-.154.501-.752.904-1.28.895-.488-.009-.797-.314-1.134-.613l-.678-.6a5.228 5.228 0 01-1.658-.834c.4.472.673.732 1.232.967-.081.83-.37 1.436-.615 2.23-.111.36-.991 1.8-1.234 1.94-.174.1-1.26 1.016-1.465 1.136-.153.203-.287.483-.516.604-.698.37-1.148-.339-1.523-.936-.171-.272-.645-1.054-.23-1.273.39-.208.61-.357 1.009-.62.059.108.159.212.225.32l-.043-.352a2.752 2.752 0 01-.008-.596c.016-.206.03-.413.047-.62-.06.21-.179.42-.239.63-.024.084-.045.152-.056.214a7.05 7.05 0 01-2.682.034 16.76 16.76 0 00-.185-.926c-.018.278-.007 1.047-.008 1.476-.001.333-.016.448-.188.731-.16.265-.228.325-.453.773.019.283.019.47-.057.739-.125.446-1.386.098-1.718.007-.41-.112-1.256-.278-1.043-.824.187-.48.307-.986.398-1.658-.75-1.08-1.448-2.56-1.582-3.873-.104-1.019-.04-1.646.18-2.27.35-.987.837-1.843 1.62-2.53C5.778 7.89 6.767 7.516 8.316 7.28c-.373.417-.741.858-1.143 1.33-.406.479-.648.963-.906 1.487-.357.722-.348.996.125 1.63.407.547.627.794.804 1.328-.146.303-.2.56-.25.973.5.545.87.918 1.354 1.033.475.113.872.093 1.297-.125.944-.482 1.816-1.107 2.88-1.132.493-1.211.444-2.222.208-3.393-.162-.8-.227-1.557-.278-2.373-.2.84-.236 1.577-.088 2.414.18 1.008.318 2.124-.18 3.01-.962.073-1.788.658-2.655 1.107-.35.18-.712.198-1.098.092-.358-.098-.6-.334-.986-.78-.006-.446.095-.653.3-1.058.33-.65.695-1.255 1.094-1.894-.49.59-.953 1.084-1.338 1.677-.147-.419-.358-.633-.707-1.105-.34-.461-.375-.662-.12-1.196.255-.536.472-1.008.907-1.478.753-.813 1.443-1.717 2.266-2.518.447-.434.628-.42 1.22-.51a20.768 20.768 0 001.606-.31 22.5 22.5 0 01-1.553.08h-.015c.506-.646.799-1.006 1.62-1.363.95-.412 1.738-.652 2.47-.652zm.556 2.79c-1.101.276-1.307.739-1.166 1.45.121-.535.335-1.05 1.166-1.45zm-3.263.061c-.446.05-.89.096-1.336.139-.375.035-.436.03-.702.293-.403.399-.794 1.768-.92 2.316.198-.455.69-1.729 1.069-2.053.105-.09.18-.143.258-.183-.271.455-.252.566-.157 1.176.081-.62.295-.859.647-1.32a9.287 9.287 0 001.14-.368zm10.226.053c-.255.517-.65.95-1.185 1.215-.288.142-.47.093-.791.062.326.094.533.21.853.096.652-.233.967-.756 1.123-1.373zm-2.28.834c.023.047.046.096.067.144a.602.602 0 00-.05.041.572.572 0 00-.126-.181l.11-.004zm-3.26.4c-.36.166-.779.126-1.087.334-.271.184-.646.764-.922 1.01.2-.078.394-.212.57-.354.002.22.101.426.27.565a.31.31 0 01.092-.492.312.312 0 01.432.191c-.148.11-.284.238-.397.387a1.666 1.666 0 00-.24.44 4.222 4.222 0 012.002-1.294c-.2-.003-.437.034-.678.114a.732.732 0 00-.482-.614c.16-.085.316-.175.44-.287zm-1.042 1.64a.735.735 0 01-.125-.083.35.35 0 00.125.084zM1.32 8.34c-.953.672-1.19.978-1.062 2.338C.352 9.608.56 9.145 1.32 8.34zm-.808.404c-.482.336-.545.475-.5 1.059.105-.482.203-.664.5-1.059zm1.779.195c-.07.15-.118.264-.152.381-.147.508.066.962-.395 1.33.217.438.207.612.711.41.195-.078.355-.187.498-.316-.07.18-.133.361-.191.545l-.03.094c-.36.153-.834.25-1.015-.13a3.458 3.458 0 01-.203-.595c-.594-.615.294-1.427.777-1.719zm.123.276c.123.071.156.2.17.375-.073-.074-.132-.122-.227-.112.008-.06.019-.119.034-.177.007-.03.014-.058.023-.086zm14.87 3.267c-.131.022-.365.07-.495.092-.348.059-.387.142-.441.484l-.086.524a9.16 9.16 0 01.228-.568c.084-.184.132-.202.31-.3.127-.068.357-.163.483-.232zm-14.47 2.4c.274.946.738 1.876 1.255 2.657v.014a.993.993 0 01-.149.369c-.369.493-1.306-.23-1.578-.508-.297-.303-.496-.662-.543-.998-.034-.246-.001-.252.17-.426l.693-.701.153-.406zm12.405.62c.056.183.101.364.183.558.138.326.205.526.215.875l.032 1.106c.117.206.136.249.115.484-.043.481-.203.513-.625.506-.192-.003-.957-.007-1.15-.023-.274-.024-.429-.05-.512-.112.43-.316 1.162-1.619 1.304-2.068.151-.474.315-.888.438-1.326z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiApachehadoopIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
