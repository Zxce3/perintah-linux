import "@hotwired/turbo"
import { Application, Controller } from "@hotwired/stimulus"
import HelloController from "./controllers/hello_controller"
import CalloutController from "./controllers/callout_controller"
import SearchController from "./controllers/search_controller"
// import "./halfmoon"
const application = Application.start()
application.register("hello", HelloController)
application.register("callout", CalloutController)
application.register("search", SearchController)

// Are we in an <iframe>?
if (window.top !== window) {
  // 🎶 Never Gonna Give You Up 🎶
  location.replace("https://www.youtube.com/embed/dQw4w9WgXcQ")
}
