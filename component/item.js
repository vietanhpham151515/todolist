import html from "../core.js";
import { connect } from "../store.js";

function Item({ todo, index, editIndex }) {
  return html`
    <li
      class="${todo.completed && "completed"} ${editIndex === index &&
      "editing"}"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          ${todo.completed && "checked"}
          onchange="dispatch('toggle' , ${index})"
        />
        <label ondblclick="dispatch('sEdit', ${index})">${todo.title}</label>
        <button
          class="destroy"
          onclick="dispatch('destroy' , ${index})"
        ></button>
      </div>
      <input
        class="edit"
        value="${todo.title}"
        onkeyup="event.keyCode === 13 && dispatch('endEdit', this.value.trim())  "
        onblur="dispatch('endEdit', this.value.trim())"
      />
    </li>
  `;
}
export default connect()(Item);
