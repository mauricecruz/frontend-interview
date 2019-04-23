import "./styles.css";

class Slideshow {
  constructor() {
    this.selected = 0;
    this.root = null;
    this.images = [
      "https://picsum.photos/id/22/400/300",
      "https://picsum.photos/id/20/400/300",
      "https://picsum.photos/id/53/400/300",
      "https://picsum.photos/id/101/400/300",
      "https://picsum.photos/id/288/400/300",
      "https://picsum.photos/id/128/400/300",
    ];
  }

  init(node) {
    document.querySelector(".image-current").setAttribute("src", this.images[this.selected]);
    document.querySelector(".action.previous").addEventListener("click", () => {
      this.previous();
    });
    document.querySelector(".action.next").addEventListener("click", () => {
      this.next();
    });
    this.buildIndicator();
  }

  buildIndicator() {
    const container = document.querySelector(".indicator-container");

    this.images.forEach((image) => {
      const node = document.createElement("div");

      node.classList.add("indicator");
      container.appendChild(node);
    });

    container.querySelectorAll(".indicator")[this.selected].classList.add("selected");
  }

  previous() {
    this.selected = (this.selected === 0 ? this.images.length : this.selected) - 1;
    this.updateImage(this.selected);
    this.updateIndicator(this.selected);
  }

  next() {
    this.selected = this.selected === this.images.length - 1 ? 0 : this.selected + 1;
    this.updateImage(this.selected);
    this.updateIndicator(this.selected);
  }

  updateImage(index) {
    const container = document.querySelector(".image-current");
    container.setAttribute("src", this.images[index]);
  }

  updateIndicator(index) {
    document.querySelector(".indicator.selected").classList.remove("selected");
    document.querySelectorAll(".indicator")[index].classList.add("selected");
  }
}

const slideshow = new Slideshow();

slideshow.init();
