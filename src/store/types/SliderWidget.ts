import IWidget, { makeId, WidgetTypes } from '@/store/types/Widget'

export interface ISliderWidget extends IWidget {
  data: {
    marginTop: number,
    marginBottom: number,
    width: number,
    height: number,
    imageUrls: Array<string>
  }
}

let counter = -1

export function createDefaultSlider (): ISliderWidget {
  counter++
  return {
    type: WidgetTypes.SLIDER,
    number: counter,
    id: makeId(10),
    data: {
      marginTop: 0,
      marginBottom: 0,
      width: 540,
      height: 176,
      imageUrls: ['https://via.placeholder.com/540x176?text=1', 'https://via.placeholder.com/540x176?text=2', 'https://via.placeholder.com/540x176?text=3']
    },
    template: ''
  }
}

export function staticSliderTemplate (): string {
  return `
  <style>
  .ws-slider {
    position: relative;
  }
  .slide {
    display: none;
    list-style: none;
  }

  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 8px 16px;
    margin-top: -22px;
    color: grey;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 50%;
    left: 56px;
    user-select: none;
  }

  .next {
    left: auto;
    right: 16px;
  }

  .prev:hover, .next:hover {
    background-color: #f1f1f1;
    color: black;
  }
  </style>
  <script>
  let slideIndex = {}

  function plusSlides (value, sliderId) {
    slideIndex[sliderId] += value
    showSlides(slideIndex[sliderId], sliderId)
  }

  function showSlides (value, sliderId) {
    const slides = document.getElementsByClassName('slider-' + sliderId)

    if (value > slides.length) {
      slideIndex[sliderId] = 1
    }
    if (value < 1) {
      slideIndex[sliderId] = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
      slides.item(i).style.display = i === slideIndex[sliderId] - 1 ? 'block' : 'none'
    }
  }
  </script>
  `
}

export function sliderToTemplate (data: ISliderWidget): string {
  return `<ul id="${data.id + '_' + data.number}" class="ws-slider" style="margin: ${data.data.marginTop}px 80px ${data.data.marginBottom}px;">
    ${data.data.imageUrls.map((imageUrl) => (`
    <li class="slide slider-${data.id}">
      <img src="${imageUrl}" style="width: 100%; aspect-ratio: ${data.data.width / data.data.height}">
    </li>
    `)).join('\n')}
    <a class="prev" onclick="plusSlides(-1, '${data.id}')">&#10094;</a>
    <a class="next" onclick="plusSlides(1, '${data.id}')">&#10095;</a>
  </ul>
  <script>
  slideIndex['${data.id}'] = 1
  showSlides(1, '${data.id}')
  </script>`
}
