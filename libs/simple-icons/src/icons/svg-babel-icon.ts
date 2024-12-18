import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-babel-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Babel</title>
      <path
        d="M15.76 0c-1.603.147-3.719.713-6.317 1.719a22.366 22.366 0 01-2.44 1.539l.01.158c.064 0 .136-.043.24-.096.106-.01.169.032.169.137l.168-.094.084-.011.01.074c.01.073-.566.523-1.707 1.33l.093.146-.084.012-.177-.064c0 .052-.073.085-.24.095l.01.084.189.21a.673.673 0 01-.252-.053c-.367.031-.734.303-1.09.806l.094.147c.314-.283.492-.43.544-.43l.022.23c-.052 0-.136.042-.24.094l.199.295A5.86 5.86 0 016.29 5.291c.23.063.346.125.346.209l.168-.01c1.225-.911 2.44-1.562 3.644-1.97l.012.158c-.22.335-.377.501-.461.511.01.116.052.21.115.305.021.21-.524 1.583-1.635 4.139-2.535 5.93-4.651 10.307-6.359 13.156 0 .052.041.136.094.23.419-.104.691-.197.806-.302l.096-.012.01.158.158-.011.166-.094c0 .052.063.073.168.062l.012.159c.01.157-.075.397-.274.722-.178.2-.355.607-.554 1.225l.01.074.158-.01c.68-.764 1.204-1.52 1.56-2.254 2.001-.586 3.52-1.162 4.578-1.728 1.058-.094 1.876-.365 2.42-.826l-.011-.084-.399.115-.094.01-.01-.084c.776-.116 1.32-.293 1.614-.524 1.519-1.173 2.66-2 3.435-2.492 2.4-1.76 3.531-3.457 3.395-5.07-.01-.168-.545-.828-1.582-1.98-.021-.22.345-.535 1.078-.954l2.086-1.834c.46-.597.744-1.56.838-2.89l-.031-.315c-.084-.932-.756-1.687-2.034-2.264C19.06.303 17.708.031 15.76 0zm2.525 1.037c1.55.063 2.347.335 2.389.817l-.063.158-2.326-.975zm-1.482 1.317c1.063-.016 1.617.267 1.672.863l.156-.012-.031-.398.168-.01c.408.22.627.492.648.816.021.22-.094.494-.355.819-.105.01-.168-.064-.178-.221l-.168.012-.041.47c-.702 1.048-1.205 1.582-1.52 1.614-.283.387-.462.587-.535.597-.22.262-.816.712-1.8 1.34-.325.032-1.531.493-3.616 1.404a.595.595 0 00-.334-.052l-.012-.147c-.02-.304.107-.681.41-1.142.158-.86.335-1.352.534-1.467l1.738-3.906c-.02-.241.347-.43 1.111-.555l.252-.022.02.221a50.387 50.387 0 011.394-.2c.173-.014.335-.022.487-.024zm3.619.39h.027c.139.012.288.263.446.744l.01.147c-.085.01-.24-.242-.471-.744l-.012-.147zm-9.836 2.483h.072l.022.23c-.074.01-.177.116-.303.336l-.012-.156c.147-.178.22-.316.22-.41zM5.6 5.354l.01.072c-.053 0-.136.043-.24.095l-.085.01-.01-.146.325-.031zM9.885 6.86l.031.315-.084.01-.031-.313.084-.012zm-.2.567c-.02.262-.084.397-.22.408l-.084.01c.094-.178.147-.303.137-.397l.168-.021zm-.345.816l.01.074-.147.25-.158.012-.01-.074c.157-.01.231-.093.22-.25l.085-.012zm-.358.735l-.04.386-.085.01-.03-.387.155-.01zm8.497.28l.345.212c.01.104-.042.167-.146.177-.147-.094-.262-.136-.346-.136l-.021-.23.168-.022zm-6.653.891l.012.147-.326.033-.01-.148.324-.032zm5.363.545c.23.105.347.21.358.293l.01.075c-.22.02-.42-.095-.608-.346l.24-.022zm2.6.252c.178.074.261.148.272.221l.052.617c-.073.168-.146.252-.23.252l-.094-1.09zm-4.195.065c.84-.014 1.482.184 1.922.605l.03.315c-.376 1.09-.795 1.719-1.245 1.918l-2.096 1.666c-1.56 1.026-2.4 1.538-2.525 1.548-2.483 1.373-4.032 2.075-4.63 2.127l-.095.01c.084-.293 1.185-2.555 3.322-6.808.943-.084 2.43-.525 4.452-1.32l.492-.042c.128-.01.253-.017.373-.02zm-3.055.49l.01.074-.334.031-.012-.074.336-.031zm-5.226 5.07c-.105.535-.221.808-.336.819l-.01-.075c-.021-.272.094-.513.346-.744zm7.101.336l.01.147c.01.063-.23.261-.701.607-1.394.681-2.21 1.152-2.452 1.393-1.508.523-2.252.849-2.242.974-1.34.535-2.22.923-2.638 1.164-.095.01-.241-.031-.43-.115-.021-.272.093-.494.365-.672.23-.02.463.011.672.106.251-.126.68-.274 1.299-.42l-.012-.156-.492.04c.063-.083.535-.303 1.436-.67l.251-.02.01.073c-.419.032-.66.167-.713.387.01.094.064.147.168.137.304-.21.461-.324.461-.356.608-.115 2.274-.995 5.008-2.619zm-7.584.723l.01.072c.01.105-.042.17-.147.18l-.01-.074c-.01-.095.042-.157.147-.178zm3.77.937c.089-.002.139.049.148.131-.199.021-.566.178-1.121.492l-.084.01-.01-.156a1.586 1.586 0 001.026-.47c.014-.003.028-.006.04-.007zm-3.664 1.243l.01.082c-.064 0-.138.043-.243.095l-.156.01c-.01-.073.032-.136.137-.168l.252-.02zm-1.918.953l.177.072c-.063.471-.198.713-.44.734a1.076 1.076 0 00-.513-.105l-.021-.23c-.01-.095.043-.147.158-.178.105-.01.167.061.178.218.282-.345.44-.511.46-.511Z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBabelIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
