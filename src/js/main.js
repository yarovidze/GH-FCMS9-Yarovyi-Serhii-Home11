$(document).ready(function () {
  addTaskList()
  delTaskList()
  editTaskList()
  doneTask()
  clearAllTask()
})
// add new Task
function addTaskList() {
  $('#add-task-btn').click(function () {
    let valueTask = $('#task-input').val()
    if (!valueTask) {
      alert("Input task please")
      return false
    }
    $('#task-list').prepend(`<li class="list-item"><span>${valueTask}</span> <a href="#" id="edit" class="edit-btn"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                            <a href="#" id="done" class="done-btn"><i class="fa fa-check-square-o" aria-hidden="true"></i></a>
                            <a href="#" id="delete-btn" class="delete-btn"><i class="fa fa-times" aria-hidden="true"></i></a>
                        </li>`)
    localStorage.setItem('task-list', $('#task-list').html())
    $('#task-input').val('')
  })
}

// delete Task
function delTaskList() {
  $('#task-list').on('click', '#delete-btn', function () {
    $(this).parent().remove()
    localStorage.setItem('task-list', $('#task-list').html())
  })
}
// edit task
function editTaskList() {
  $('#task-list').on('click', '#edit', function() {
    let valueTask = $(this).siblings('span')
    $('#modal-form').modal('show')
    let editTaskItem = $('#input-edit-task')
    editTaskItem.val(valueTask.text())
    $('#edit-task-btn').off('click')
    $('#edit-task-btn').click(function() {
      valueTask.text(editTaskItem.val())
      localStorage.setItem('task-list', $('#task-list').html())
    })
  })

}

//done task
function doneTask() {
  $('#task-list').on('click', '#done', function() {
    let valueTask = $(this).siblings('span').text()
    $(this).parent().remove()
    $('#task-list').append('<li class="task-done">'+valueTask+'</li>')
    localStorage.setItem('task-list', $('#task-list').html())
  })
}
//clear all
function clearAllTask() {
  $('.task-container').on('click', '#clear-all-btn', function () {
    $('li').remove()
    localStorage.setItem('task-list', $('#task-list').html())
  })
}
// output localStorage
  let toDoList = localStorage.getItem('task-list')
  $('#task-list').html(toDoList)

