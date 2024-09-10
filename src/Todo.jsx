import "./style.css";

import { useState } from 'react'

export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "Todo1です",
    "Todo2です"
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "Todoでしたよ"
  ]);
  return (
    <>
      <div className="input-area">
        <input placeholder='TODOを入力' />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          { incompleteTodos.map((todo, index) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          { completeTodos.map((todo, index) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
