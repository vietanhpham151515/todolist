import html from "../core.js";
import Item from "../component/item.js"




import { connect } from "../store.js";

function List({ todos, filter, filters }) {
 
  return html`
    <section class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        onchange="dispatch('toggleAll', this.checked)"
        ${todos.every(filters.completed) && "checked"}
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${todos.filter(filters[filter])
          .map((todo, index) => Item({ todo, index }))}
      </ul>
    </section>
  `;
}
export default connect()(List);
