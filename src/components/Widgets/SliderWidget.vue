<template>
  <ul :id="data.id + '_' + data.number" class="ws-slider" :style="`margin: ${data.data.marginTop}px 80px ${data.data.marginBottom}px;`">
    <li v-for="imageUrl in data.data.imageUrls" :key="imageUrl" :ref="`slider-${data.id}`" :class="`slide slider-${data.id}`">
      <img :src="imageUrl" :style="`width: 100%; aspect-ratio: ${data.data.width / data.data.height}`">
    </li>
    <a class="prev" @click="() => plusSlides(-1, data.id)">&#10094;</a>
    <a class="next" @click="() => plusSlides(1, data.id)">&#10095;</a>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ISliderWidget } from '@/store/types/SliderWidget'

@Component({})
export default class SliderWidget extends Vue {
  @Prop()
  public inputData!: ISliderWidget

  public data = {} as ISliderWidget

  public slideIndex: any = {}

  public created () {
    this.data = this.inputData

    this.$watch('inputData', (newData) => {
      this.data = newData

      this.$forceUpdate()
      this.slideIndex[this.data.id] = 1
      this.showSlides(1, this.data.id)
    })
  }

  public mounted () {
    this.slideIndex[this.data.id] = 1
    this.showSlides(1, this.data.id)
  }

  public plusSlides (value: number, sliderId: string) {
    this.slideIndex[sliderId] += value
    this.showSlides(this.slideIndex[sliderId], sliderId)
  }

  public showSlides (value: number, sliderId: string) {
    const slides = this.$refs[`slider-${sliderId}`] as any

    if (value > slides.length) {
      this.slideIndex[sliderId] = 1
    }
    if (value < 1) {
      this.slideIndex[sliderId] = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = i === this.slideIndex[sliderId] - 1 ? 'block' : 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
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
