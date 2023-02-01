// hello_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static get targets() {
    return [ "name", "output" ]
  }
  connect() {
    console.log("Hello, Stimulus!", this.element)
  }
  greet() {
    this.outputTarget.textContent =
      `Hello, ${this.nameTarget.value}!`
  }
}
