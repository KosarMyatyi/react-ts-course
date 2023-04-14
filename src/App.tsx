import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersPage from './component/UsersPage';
import TodosPage from './component/TodosPage';
import NavBar from './component/NavBar';
import UserItemPage from './component/UserItemPage';
import TodoItemPage from './component/TodoItemPage';

const App = () => {

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path={'/users'} element={<UsersPage />}></Route>
        <Route path={'/todos'} element={<TodosPage />}></Route>
        <Route path={'/users/:id'} element={<UserItemPage />}></Route>
        <Route path={'/todos/:id'} element={<TodoItemPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;