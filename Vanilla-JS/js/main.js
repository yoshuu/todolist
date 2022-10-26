const addTask = document.querySelector(".add_task");
const form = document.querySelector("form");
const array = [];

addTask.addEventListener("click", addItem);

function addItem() {
  console.log("我點了這裡");
  console.log(form.children.length);

  if (form.children.length === 0) {
    form.innerHTML = `
            <from>
            <div class="text_area">
              <input type="checkbox" />
              <input type="text" placeholder="Type Something Here..." />
              <div class="edit_button">
                <a href="##" class="star">
                  <i class="fa-fw far fa-star"></i>
                </a>
                <a href="##" class="pen"
                  ><i class="fa-fw fas fa-pen editState"></i
                ></a>
              </div>
            </div>
            <div class="detail">
              <div class="deadline">
                <div class="title">
                  <i class="fa-fw fas fa-calendar-alt"></i>
                  <span>Deadline</span>
                </div>
                <div class="content">
                  <input type="date" />
                  <input type="time" />
                </div>
              </div>
              <div class="file">
                <div class="title">
                  <i class="fa-fw far fa-file"></i>
                  <span>File</span>
                </div>
                <div class="content">
                  <button class="add_button">+</button>
                </div>
              </div>
              <div class="comment">
                <div class="title">
                  <i class="fa-fw far fa-comment-dots"></i>
                  <span>Comment</span>
                </div>
                <div class="content">
                  <textarea placeholder="meet him at Lorence"></textarea>
                </div>
              </div>
            </div>
            <div class="wrap_button">
              <button class="cancel">x Cancel</button>
              <button class="add_task_button">+ Add Task</button>
            </div>
          </form>
    `;
  } else {
    form.innerHTML = "";
  }

  console.log(form.children.length);
}
