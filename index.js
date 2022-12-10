const main = document.querySelector('.row');

async function getTask() {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/v1/todo/');
    const data = await response.json();
    renderTasks(data);
  } catch (error) {
    console.log(error);
  }
}

function renderTasks(data) {
  main.innerHTML = '';
  data.forEach((task) => {
    main.innerHTML += `
    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <h4>${task.title}</h2>
          <p>
            ${task.body}
          </p>
        </div>
      </div>
    </div>`;
  });
}

getTask();
