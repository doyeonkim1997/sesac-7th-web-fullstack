import React from 'react';

const TodoModal = () => {
  return (
    <div className="modal fade" id="addTodoModal" tabIndex="-1" aria-labelledby="addTodoModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addTodoModalLabel">새 할 일 추가</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form id="addTodoForm">
              <div className="mb-3">
                <label htmlFor="todoTitle" className="form-label">제목 <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="todoTitle" required />
              </div>
              <div className="mb-3">
                <label htmlFor="todoDescription" className="form-label">설명</label>
                <textarea className="form-control" id="todoDescription" rows="3"></textarea>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="todoIsCompleted" />
                <label className="form-check-label" htmlFor="todoIsCompleted">완료됨</label>
              </div>
              <button type="submit" className="btn btn-primary">추가</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
