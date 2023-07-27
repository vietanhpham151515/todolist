import html from "../core.js";
import header from "../component/header.js";
import list from "../component/list.js"
import Footer from "../component/footer.js"
import { connect } from "../store.js";
function App({todos}) {
  return html` 
    <selection class="todoapp"> 
        ${header()} 
        ${todos.length >0 && list()} 
        ${todos.length >0 && Footer()}
    </selection> `
}
export default connect()(App);
