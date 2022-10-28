const addTask = document.querySelector(".add_task");
const form = document.querySelector("form");
const show = document.querySelector(".show_item");
const array = [];

addTask.addEventListener("click", addItem);

function addItem() {
  // console.log("我點了這裡");
  // console.log(form.children.length);

  if (form.children.length === 0) {
    form.innerHTML = `
            <form>
            <div class="text_area">
              <input type="checkbox" />
              <input type="text" name="item" placeholder="Type Something Here..." required />
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
          </from>
    `;
  } else {
    form.innerHTML = "";
  }

  // console.log(form.children.length);

  // 再按一次會隱藏
  const addTaskButton = document.querySelector(".add_task_button");
  const cancel = document.querySelector(".cancel");

  cancel.addEventListener("click", () => {
    form.innerHTML = "";
  });
  addTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(form);
    const text = form.querySelector("[name=item]").value;

    const item = {
      text,
      done: false,
    };

    array.push(item);
    addList(array, show);

    form.innerHTML = "";
  });
}

function addList(array = [], show) {
  show.innerHTML = array.map((item, i) => {
    return `
  <div class="text_area">
              <input type="checkbox" />
              <input type="text" data-index=${i} id="item${i}"  required />
              ${item.text}
              <div class="edit_button">
                <a href="##" class="star">
                  <i class="fa-fw far fa-star"></i>
                </a>
                <a href="##" class="pen"
                  ><i class="fa-fw fas fa-pen editState"></i
                ></a>
              </div>
            </div> 
  `;
  });
}
