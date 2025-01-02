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
  selector: 'svg[si-ir-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="ir-a">
        <svg:path fill-opacity=".7" d="M186 0h496v496H186z" />
      </clipPath>
    </defs>
    <g
      fill-rule="evenodd"
      clip-path="url(#ir-a)"
      transform="translate(-192)scale(1.0321)"
    >
      <svg:path fill="#fff" d="M0 0h868.1v496H0z" />
      <svg:path fill="#da0000" d="M0 333.1h868.1v163H0z" />
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M165 340h47.6v3.3H165zm7.1 16.4h3.3v3.2H172zm40.6-.1v3.3h-9.5v-3.3zm5.1-16.3h3.3v19.6h-3.3z"
        />
        <svg:path d="M236.7 356.3v3.3h-18v-3.3zm-33.5-7.6h3.3v10.9h-3.3z" />
        <svg:path
          d="M234 340h3.3v19.6h-3.2zm-8.1 0h3.2v19.6H226zm-43.4 7.8v3.3H165v-3.3zm38 0v3.3h-17.3v-3.3z"
        />
        <svg:path d="M203.2 348.6h3.3v11h-3.3z" />
        <svg:path d="M203.2 348.6h3.3v11h-3.3z" />
        <svg:path
          d="M203.2 348.6h3.3v11h-3.3zm-38 0h3.2v11H165zm27.8 0h3.3v11H193zm-13.8 0h3.3v11h-3.3z"
        />
        <svg:path d="M195.3 356.3v3.3h-14.7v-3.3zm1-8.5v3.3H187v-3.3z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M87 340h47.5v3.3H86.9zm7 16.4h3.3v3.2H94zm40.6-.1v3.3h-9.5v-3.3zm5.1-16.3h3.3v19.6h-3.3z"
        />
        <svg:path d="M158.6 356.3v3.3h-18v-3.3zm-33.5-7.6h3.3v10.9H125z" />
        <svg:path
          d="M156 340h3.2v19.6H156zm-8.2 0h3.3v19.6h-3.3zm-43.4 7.8v3.3H87v-3.3zm38 0v3.3h-17.3v-3.3z"
        />
        <svg:path d="M125.1 348.6h3.3v11H125z" />
        <svg:path d="M125.1 348.6h3.3v11H125z" />
        <svg:path
          d="M125.1 348.6h3.3v11H125zm-38 0h3.2v11H87zm27.8 0h3.3v11H115zm-13.8 0h3.3v11H101z"
        />
        <svg:path d="M117.2 356.3v3.3h-14.6v-3.3zm1-8.5v3.3H109v-3.3z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M242.5 340H290v3.3h-47.5zm7 16.4h3.3v3.2h-3.2zm40.6-.1v3.3h-9.5v-3.3zm5.1-16.3h3.3v19.6h-3.3z"
        />
        <svg:path d="M314.2 356.3v3.3h-18v-3.3zm-33.6-7.6h3.3v10.9h-3.3z" />
        <svg:path
          d="M311.5 340h3.3v19.6h-3.3zm-8.2 0h3.3v19.6h-3.3zm-43.4 7.8v3.3h-17.3v-3.3zm38 0v3.3h-17.3v-3.3z"
        />
        <svg:path d="M280.6 348.6h3.3v11h-3.3z" />
        <svg:path d="M280.6 348.6h3.3v11h-3.3z" />
        <svg:path
          d="M280.6 348.6h3.3v11h-3.3zm-38 0h3.2v11h-3.2zm27.9 0h3.2v11h-3.2zm-13.9 0h3.3v11h-3.3z"
        />
        <svg:path d="M272.8 356.3v3.3H258v-3.3zm1-8.5v3.3h-9.4v-3.3z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M789.3 340h47.5v3.3h-47.5zm7 16.4h3.3v3.2h-3.2zm40.6-.1v3.3h-9.5v-3.3zm5.2-16.3h3.2v19.6h-3.2z"
        />
        <svg:path d="M861 356.3v3.3h-18v-3.3zm-33.6-7.6h3.3v10.9h-3.3z" />
        <svg:path
          d="M858.3 340h3.3v19.6h-3.3zm-8.2 0h3.3v19.6H850zm-43.4 7.8v3.3h-17.3v-3.3zm38 0v3.3h-17.3v-3.3z"
        />
        <svg:path d="M827.4 348.6h3.3v11h-3.3z" />
        <svg:path d="M827.4 348.6h3.3v11h-3.3z" />
        <svg:path
          d="M827.4 348.6h3.3v11h-3.3zm-38 0h3.2v11h-3.2zm27.9 0h3.3v11h-3.3zm-13.8 0h3.2v11h-3.3z"
        />
        <svg:path d="M819.6 356.3v3.3h-14.7v-3.3zm1-8.5v3.3h-9.4v-3.3z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M320.4 340h47.5v3.3h-47.5zm7.1 16.4h3.3v3.2h-3.3zm40.6-.1v3.3h-9.5v-3.3zm5-16.3h3.3v19.6h-3.2z"
        />
        <svg:path d="M392.1 356.3v3.3h-18v-3.3zm-33.5-7.6h3.2v10.9h-3.2z" />
        <svg:path
          d="M389.4 340h3.3v19.6h-3.3zm-8.1 0h3.2v19.6h-3.3zm-43.5 7.8v3.3h-17.3v-3.3zm38.1 0v3.3h-17.3v-3.3z"
        />
        <svg:path d="M358.6 348.6h3.2v11h-3.2z" />
        <svg:path d="M358.6 348.6h3.2v11h-3.2z" />
        <svg:path
          d="M358.6 348.6h3.2v11h-3.2zm-38.1 0h3.3v11h-3.3zm27.9 0h3.3v11h-3.3zm-13.8 0h3.3v11h-3.3z"
        />
        <svg:path d="M350.7 356.3v3.3H336v-3.3zm1-8.5v3.3h-9.3v-3.3z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M398.6 340h47.6v3.3h-47.6zm7.1 16.4h3.3v3.2h-3.3zm40.6-.1v3.3h-9.5v-3.3zm5.1-16.3h3.3v19.6h-3.3z"
        />
        <svg:path d="M470.3 356.3v3.3h-18v-3.3zm-33.5-7.6h3.3v10.9h-3.3z" />
        <svg:path
          d="M467.6 340h3.3v19.6h-3.3zm-8.1 0h3.2v19.6h-3.2zm-43.4 7.8v3.3h-17.4v-3.3zm38 0v3.3h-17.3v-3.3z"
        />
        <svg:path d="M436.8 348.6h3.3v11h-3.3z" />
        <svg:path d="M436.8 348.6h3.3v11h-3.3z" />
        <svg:path
          d="M436.8 348.6h3.3v11h-3.3zm-38 0h3.2v11h-3.3zm27.8 0h3.3v11h-3.3zm-13.8 0h3.3v11h-3.3z"
        />
        <svg:path d="M429 356.3v3.3h-14.7v-3.3zm.9-8.5v3.3h-9.3v-3.3z" />
      </g>
      <svg:path fill="#239f40" d="M0 0h868.1v163H0z" />
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M477.3 340h47.5v3.3h-47.5zm7.1 16.4h3.3v3.2h-3.3zm40.6-.1v3.3h-9.5v-3.3zm5-16.3h3.4v19.6H530z"
        />
        <svg:path d="M549 356.3v3.3h-18v-3.3zm-33.5-7.6h3.2v10.9h-3.2z" />
        <svg:path
          d="M546.3 340h3.3v19.6h-3.3zm-8.1 0h3.2v19.6h-3.2zm-43.4 7.8v3.3h-17.4v-3.3zm38 0v3.3h-17.3v-3.3z"
        />
        <svg:path d="M515.5 348.6h3.2v11h-3.2z" />
        <svg:path d="M515.5 348.6h3.2v11h-3.2z" />
        <svg:path
          d="M515.5 348.6h3.2v11h-3.2zm-38.1 0h3.3v11h-3.3zm27.9 0h3.3v11h-3.3zm-13.8 0h3.3v11h-3.3z"
        />
        <svg:path d="M507.6 356.3v3.3h-14.7v-3.3zm1-8.5v3.3h-9.3v-3.3z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M555.5 340h47.6v3.3h-47.6zm7.1 16.4h3.3v3.2h-3.3zm40.6-.1v3.3h-9.5v-3.3zm5.1-16.3h3.3v19.6h-3.3z"
        />
        <svg:path d="M627.2 356.3v3.3h-18v-3.3zm-33.5-7.6h3.3v10.9h-3.3z" />
        <svg:path
          d="M624.6 340h3.2v19.6h-3.2zm-8.2 0h3.3v19.6h-3.3zm-43.4 7.8v3.3h-17.4v-3.3zm38 0v3.3h-17.3v-3.3z"
        />
        <svg:path d="M593.7 348.6h3.3v11h-3.3z" />
        <svg:path d="M593.7 348.6h3.3v11h-3.3z" />
        <svg:path
          d="M593.7 348.6h3.3v11h-3.3zm-38 0h3.2v11h-3.3zm27.8 0h3.3v11h-3.3zm-13.8 0h3.3v11h-3.3z"
        />
        <svg:path d="M585.8 356.3v3.3h-14.6v-3.3zm1-8.5v3.3h-9.3v-3.3z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M633.8 340h47.5v3.3h-47.5zm7 16.4h3.3v3.2h-3.3zm40.6-.1v3.3H672v-3.3zm5.1-16.3h3.3v19.6h-3.3z"
        />
        <svg:path d="M705.5 356.3v3.3h-18v-3.3zm-33.6-7.6h3.3v10.9h-3.3z" />
        <svg:path
          d="M702.8 340h3.3v19.6h-3.3zm-8.2 0h3.3v19.6h-3.3zm-43.4 7.8v3.3h-17.4v-3.3zm38 0v3.3H672v-3.3z"
        />
        <svg:path d="M672 348.6h3.2v11h-3.3z" />
        <svg:path d="M672 348.6h3.2v11h-3.3z" />
        <svg:path
          d="M672 348.6h3.2v11h-3.3zm-38.2 0h3.3v11h-3.3zm28 0h3.2v11h-3.3zm-13.9 0h3.3v11h-3.3z"
        />
        <svg:path d="M664 356.3v3.3h-14.6v-3.3zm1-8.5v3.3h-9.3v-3.3z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M712.4 340H760v3.3h-47.6zm7.1 16.4h3.3v3.2h-3.3zm40.6-.1v3.3h-9.5v-3.3zm5.1-16.3h3.3v19.6h-3.3z"
        />
        <svg:path d="M784.1 356.3v3.3h-18v-3.3zm-33.5-7.6h3.3v10.9h-3.3z" />
        <svg:path
          d="M781.5 340h3.2v19.6h-3.2zm-8.2 0h3.3v19.6h-3.3zm-43.4 7.8v3.3h-17.4v-3.3zm38 0v3.3h-17.3v-3.3z"
        />
        <svg:path d="M750.6 348.6h3.3v11h-3.3z" />
        <svg:path d="M750.6 348.6h3.3v11h-3.3z" />
        <svg:path
          d="M750.6 348.6h3.3v11h-3.3zm-38 0h3.2v11h-3.3zm27.8 0h3.3v11h-3.3zm-13.8 0h3.3v11h-3.3z"
        />
        <svg:path d="M742.7 356.3v3.3h-14.6v-3.3zm1-8.5v3.3h-9.3v-3.3z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M8 340h47.5v3.3H7.9zm7 16.4h3.3v3.2H15zm40.6-.1v3.3H46v-3.3zm5.1-16.3H64v19.6h-3.3z"
        />
        <svg:path d="M79.6 356.3v3.3h-18v-3.3zm-33.5-7.6h3.3v10.9H46z" />
        <svg:path
          d="M77 340h3.2v19.6H77zm-8.2 0H72v19.6h-3.2zm-43.4 7.8v3.3H8v-3.3zm38 0v3.3H46.1v-3.3z"
        />
        <svg:path d="M46 348.6h3.4v11H46z" />
        <svg:path d="M46 348.6h3.4v11H46z" />
        <svg:path
          d="M46 348.6h3.4v11H46zm-38 0h3.3v11H8zm28 0h3.2v11h-3.3zm-14 0h3.4v11H22z"
        />
        <svg:path d="M38.2 356.3v3.3H23.5v-3.3zm1-8.5v3.3h-9.3v-3.3z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M165 139h47.6v3.2H165zm7.1 16.3h3.3v3.2H172zm40.6 0v3.2h-9.5v-3.3zm5.1-16.3h3.3v19.5h-3.3z"
        />
        <svg:path d="M236.7 155.2v3.3h-18v-3.3zm-33.5-7.6h3.3v11h-3.3z" />
        <svg:path
          d="M234 139h3.3v19.5h-3.2zm-8.1 0h3.2v19.5H226zm-43.4 7.7v3.3H165v-3.2zm38 0v3.3h-17.3v-3.2z"
        />
        <svg:path d="M203.2 147.6h3.3v11h-3.3z" />
        <svg:path d="M203.2 147.6h3.3v11h-3.3z" />
        <svg:path
          d="M203.2 147.6h3.3v11h-3.3zm-38 0h3.2v11H165zm27.8 0h3.3v11H193zm-13.8 0h3.3v11h-3.3z"
        />
        <svg:path d="M195.3 155.2v3.3h-14.7v-3.3zm1-8.4v3.2H187v-3.2z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M87 139h47.5v3.2H86.9zm7 16.3h3.3v3.2H94zm40.6 0v3.2h-9.5v-3.3zm5.1-16.3h3.3v19.5h-3.3z"
        />
        <svg:path d="M158.6 155.2v3.3h-18v-3.3zm-33.5-7.6h3.3v11H125z" />
        <svg:path
          d="M156 139h3.2v19.5H156zm-8.2 0h3.3v19.5h-3.3zm-43.4 7.7v3.3H87v-3.2zm38 0v3.3h-17.3v-3.2z"
        />
        <svg:path d="M125.1 147.6h3.3v11H125z" />
        <svg:path d="M125.1 147.6h3.3v11H125z" />
        <svg:path
          d="M125.1 147.6h3.3v11H125zm-38 0h3.2v11H87zm27.8 0h3.3v11H115zm-13.8 0h3.3v11H101z"
        />
        <svg:path d="M117.2 155.2v3.3h-14.6v-3.3zm1-8.4v3.2H109v-3.2z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M242.5 139H290v3.2h-47.5zm7 16.3h3.3v3.2h-3.2zm40.6 0v3.2h-9.5v-3.3zm5.1-16.3h3.3v19.5h-3.3z"
        />
        <svg:path d="M314.2 155.2v3.3h-18v-3.3zm-33.6-7.6h3.3v11h-3.3z" />
        <svg:path
          d="M311.5 139h3.3v19.5h-3.3zm-8.2 0h3.3v19.5h-3.3zm-43.4 7.7v3.3h-17.3v-3.2zm38 0v3.3h-17.3v-3.2z"
        />
        <svg:path d="M280.6 147.6h3.3v11h-3.3z" />
        <svg:path d="M280.6 147.6h3.3v11h-3.3z" />
        <svg:path
          d="M280.6 147.6h3.3v11h-3.3zm-38 0h3.2v11h-3.2zm27.9 0h3.2v11h-3.2zm-13.9 0h3.3v11h-3.3z"
        />
        <svg:path d="M272.8 155.2v3.3H258v-3.3zm1-8.4v3.2h-9.4v-3.2z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M789.3 139h47.5v3.2h-47.5zm7 16.3h3.3v3.2h-3.2zm40.6 0v3.2h-9.5v-3.3zm5.2-16.3h3.2v19.5h-3.2z"
        />
        <svg:path d="M861 155.2v3.3h-18v-3.3zm-33.6-7.6h3.3v11h-3.3z" />
        <svg:path
          d="M858.3 139h3.3v19.5h-3.3zm-8.2 0h3.3v19.5H850zm-43.4 7.7v3.3h-17.3v-3.2zm38 0v3.3h-17.3v-3.2z"
        />
        <svg:path d="M827.4 147.6h3.3v11h-3.3z" />
        <svg:path d="M827.4 147.6h3.3v11h-3.3z" />
        <svg:path
          d="M827.4 147.6h3.3v11h-3.3zm-38 0h3.2v11h-3.2zm27.9 0h3.3v11h-3.3zm-13.8 0h3.2v11h-3.3z"
        />
        <svg:path d="M819.6 155.2v3.3h-14.7v-3.3zm1-8.4v3.2h-9.4v-3.2z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M320.4 139h47.5v3.2h-47.5zm7.1 16.3h3.3v3.2h-3.3zm40.6 0v3.2h-9.5v-3.3zm5-16.3h3.3v19.5h-3.2z"
        />
        <svg:path d="M392.1 155.2v3.3h-18v-3.3zm-33.5-7.6h3.2v11h-3.2z" />
        <svg:path
          d="M389.4 139h3.3v19.5h-3.3zm-8.1 0h3.2v19.5h-3.3zm-43.5 7.7v3.3h-17.3v-3.2zm38.1 0v3.3h-17.3v-3.2z"
        />
        <svg:path d="M358.6 147.6h3.2v11h-3.2z" />
        <svg:path d="M358.6 147.6h3.2v11h-3.2z" />
        <svg:path
          d="M358.6 147.6h3.2v11h-3.2zm-38.1 0h3.3v11h-3.3zm27.9 0h3.3v11h-3.3zm-13.8 0h3.3v11h-3.3z"
        />
        <svg:path d="M350.7 155.2v3.3H336v-3.3zm1-8.4v3.2h-9.3v-3.2z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M398.6 139h47.6v3.2h-47.6zm7.1 16.3h3.3v3.2h-3.3zm40.6 0v3.2h-9.5v-3.3zm5.1-16.3h3.3v19.5h-3.3z"
        />
        <svg:path d="M470.3 155.2v3.3h-18v-3.3zm-33.5-7.6h3.3v11h-3.3z" />
        <svg:path
          d="M467.6 139h3.3v19.5h-3.3zm-8.1 0h3.2v19.5h-3.2zm-43.4 7.7v3.3h-17.4v-3.2zm38 0v3.3h-17.3v-3.2z"
        />
        <svg:path d="M436.8 147.6h3.3v11h-3.3z" />
        <svg:path d="M436.8 147.6h3.3v11h-3.3z" />
        <svg:path
          d="M436.8 147.6h3.3v11h-3.3zm-38 0h3.2v11h-3.3zm27.8 0h3.3v11h-3.3zm-13.8 0h3.3v11h-3.3z"
        />
        <svg:path d="M429 155.2v3.3h-14.7v-3.3zm.9-8.4v3.2h-9.3v-3.2z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M477.3 139h47.5v3.2h-47.5zm7.1 16.3h3.3v3.2h-3.3zm40.6 0v3.2h-9.5v-3.3zm5-16.3h3.4v19.5H530z"
        />
        <svg:path d="M549 155.2v3.3h-18v-3.3zm-33.5-7.6h3.2v11h-3.2z" />
        <svg:path
          d="M546.3 139h3.3v19.5h-3.3zm-8.1 0h3.2v19.5h-3.2zm-43.4 7.7v3.3h-17.4v-3.2zm38 0v3.3h-17.3v-3.2z"
        />
        <svg:path d="M515.5 147.6h3.2v11h-3.2z" />
        <svg:path d="M515.5 147.6h3.2v11h-3.2z" />
        <svg:path
          d="M515.5 147.6h3.2v11h-3.2zm-38.1 0h3.3v11h-3.3zm27.9 0h3.3v11h-3.3zm-13.8 0h3.3v11h-3.3z"
        />
        <svg:path d="M507.6 155.2v3.3h-14.7v-3.3zm1-8.4v3.2h-9.3v-3.2z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M555.5 139h47.6v3.2h-47.6zm7.1 16.3h3.3v3.2h-3.3zm40.6 0v3.2h-9.5v-3.3zm5.1-16.3h3.3v19.5h-3.3z"
        />
        <svg:path d="M627.2 155.2v3.3h-18v-3.3zm-33.5-7.6h3.3v11h-3.3z" />
        <svg:path
          d="M624.6 139h3.2v19.5h-3.2zm-8.2 0h3.3v19.5h-3.3zm-43.4 7.7v3.3h-17.4v-3.2zm38 0v3.3h-17.3v-3.2z"
        />
        <svg:path d="M593.7 147.6h3.3v11h-3.3z" />
        <svg:path d="M593.7 147.6h3.3v11h-3.3z" />
        <svg:path
          d="M593.7 147.6h3.3v11h-3.3zm-38 0h3.2v11h-3.3zm27.8 0h3.3v11h-3.3zm-13.8 0h3.3v11h-3.3z"
        />
        <svg:path d="M585.8 155.2v3.3h-14.6v-3.3zm1-8.4v3.2h-9.3v-3.2z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M633.8 139h47.5v3.2h-47.5zm7 16.3h3.3v3.2h-3.3zm40.6 0v3.2H672v-3.3zm5.1-16.3h3.3v19.5h-3.3z"
        />
        <svg:path d="M705.5 155.2v3.3h-18v-3.3zm-33.6-7.6h3.3v11h-3.3z" />
        <svg:path
          d="M702.8 139h3.3v19.5h-3.3zm-8.2 0h3.3v19.5h-3.3zm-43.4 7.7v3.3h-17.4v-3.2zm38 0v3.3H672v-3.2z"
        />
        <svg:path d="M672 147.6h3.2v11h-3.3z" />
        <svg:path d="M672 147.6h3.2v11h-3.3z" />
        <svg:path
          d="M672 147.6h3.2v11h-3.3zm-38.2 0h3.3v11h-3.3zm28 0h3.2v11h-3.3zm-13.9 0h3.3v11h-3.3z"
        />
        <svg:path d="M664 155.2v3.3h-14.6v-3.3zm1-8.4v3.2h-9.3v-3.2z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M712.4 139H760v3.2h-47.6zm7.1 16.3h3.3v3.2h-3.3zm40.6 0v3.2h-9.5v-3.3zm5.1-16.3h3.3v19.5h-3.3z"
        />
        <svg:path d="M784.1 155.2v3.3h-18v-3.3zm-33.5-7.6h3.3v11h-3.3z" />
        <svg:path
          d="M781.5 139h3.2v19.5h-3.2zm-8.2 0h3.3v19.5h-3.3zm-43.4 7.7v3.3h-17.4v-3.2zm38 0v3.3h-17.3v-3.2z"
        />
        <svg:path d="M750.6 147.6h3.3v11h-3.3z" />
        <svg:path d="M750.6 147.6h3.3v11h-3.3z" />
        <svg:path
          d="M750.6 147.6h3.3v11h-3.3zm-38 0h3.2v11h-3.3zm27.8 0h3.3v11h-3.3zm-13.8 0h3.3v11h-3.3z"
        />
        <svg:path d="M742.7 155.2v3.3h-14.6v-3.3zm1-8.4v3.2h-9.3v-3.2z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M8 139h47.5v3.2H7.9zm7 16.3h3.3v3.2H15zm40.6 0v3.2H46v-3.3zm5.1-16.3H64v19.5h-3.3z"
        />
        <svg:path d="M79.6 155.2v3.3h-18v-3.3zm-33.5-7.6h3.3v11H46z" />
        <svg:path
          d="M77 139h3.2v19.5H77zm-8.2 0H72v19.5h-3.2zm-43.4 7.7v3.3H8v-3.2zm38 0v3.3H46.1v-3.2z"
        />
        <svg:path d="M46 147.6h3.4v11H46z" />
        <svg:path d="M46 147.6h3.4v11H46z" />
        <svg:path
          d="M46 147.6h3.4v11H46zm-38 0h3.3v11H8zm28 0h3.2v11h-3.3zm-14 0h3.4v11H22z"
        />
        <svg:path d="M38.2 155.2v3.3H23.5v-3.3zm1-8.4v3.2h-9.3v-3.2z" />
      </g>
      <svg:path
        fill="#d90000"
        d="M119.3 329h5.9v10h-5.9zm155.5 0h5.9v10h-5.9zM0 329h5.8v10H0zm78.9 0h5.9v10h-5.9zm78.4 0h5.8v10h-5.8zm38.8 0h5.8v10h-5.8zm39.5 0h6v10h-6zm78 0h5.9v10h-5.9zm196.8 0h5.8v10h-5.8zm-157.2 0h5.9v10h-5.9zm38.8 0h5.9v10H392zm39.2 0h5.8v10h-5.8zm39.2 0h5.8v10h-5.8zm313 0h6v10h-6zm-235 0h5.8v10h-5.9zm39.5 0h5.9v10h-5.9zm40 0h5.9v10h-5.9zm37.6 0h5.9v10h-5.9zm40 0h5.9v10h-6zm39.2 0h5.8v10h-5.8zm116 0h5.8v10h-5.9zm-37.6 0h5.8v10h-5.8zm-783.8 0h5.9v10h-5.9z"
      />
      <svg:path
        fill="#239e3f"
        d="M119.3 157.6h5.9v10.1h-5.9zm155.5 0h5.9v10.1h-5.9zM0 157.6h5.8v10.1H0zm78.9 0h5.9v10.1h-5.9zm78.4 0h5.8v10.1h-5.8zm38.8 0h5.8v10.1h-5.8zm39.5 0h6v10.1h-6zm78 0h5.9v10.1h-5.9zm196.8 0h5.8v10.1h-5.8zm-157.2 0h5.9v10.1h-5.9zm38.8 0h5.9v10.1H392zm39.2 0h5.8v10.1h-5.8zm39.2 0h5.8v10.1h-5.8zm313 0h6v10.1h-6zm-235 0h5.8v10.1h-5.9zm39.5 0h5.9v10.1h-5.9zm40 0h5.9v10.1h-5.9zm37.6 0h5.9v10.1h-5.9zm40 0h5.9v10.1h-6zm39.2 0h5.8v10.1h-5.8zm116 0h5.8v10.1h-5.9zm-37.6 0h5.8v10.1h-5.8zm-783.8 0h5.9v10.1h-5.9z"
      />
      <g fill="#da0000">
        <svg:path
          d="M457 191.4c8.3 10 33.5 65.5-15.2 101.9-22.9 17.2-8.7 18-8 21 36.8-19.6 48.8-46 48.5-69.8-.3-23.7-12.8-44.6-25.2-53.1z"
        />
        <svg:path
          d="M462 188.8a71 71 0 0 1 15 108.8c26.4-5.8 60-83.7-15.2-108.8zm-55.9 0a71 71 0 0 0-15 108.8c-26.5-5.8-60.1-83.7 15-108.8"
        />
        <svg:path
          d="M411 191.4c-8.2 10-33.5 65.5 15.2 101.9 22.9 17.2 8.7 18 8 21-36.7-19.6-48.8-46-48.5-69.8.3-23.7 12.9-44.6 25.3-53.1"
        />
        <svg:path
          d="M480.7 309.2a102 102 0 0 1-46-9c2.2 4.3 4 7 6.3 11.4 12.8 1.1 30.5 2.6 39.7-2.4m-92 0c14.4.2 32.6-2 46-9-2.2 4.3-4 7-6.3 11.4-12.8 1.1-30.5 2.6-39.7-2.4m26.4-134.4c3 7.7 10.6 8.9 18.8 4.3 6 3.6 15.2 3.8 18.4-4 2.4 19.2-17.8 14.7-18.5 11-7.5 7.2-21.5 3-18.7-11.3"
        />
        <svg:path d="m434.4 321.3 7.6-8.7 1-116.4-9-8-9 7.6 1.8 117.2z" />
      </g>
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiIrFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
