import React from 'react';
import CompleteQuiz from './completeQuiz/CompleteQuiz';
import DeleteQuiz from './deleteQuiz/deleteQuiz'
import Layout from '../components/Layout/Layout';
import QuizList from './QuizList/QuizList';
import CreateQuiz from './CreateQuiz/CreateQuiz';
import Login from './users/login/login';
import CreateUser from './users/CreateUser/CreateUser';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={QuizList} />
          <Route path="/login" exact component={Login}/>
          <Route path="/createuser" exact component={CreateUser}/>
          <Route path="/deleteQuiz/:id" exact component={DeleteQuiz} />
          <Route path="/completeQuiz/:id" exact component={CompleteQuiz} />
          <Route path="/quizList" exact component={QuizList} />
          <Route path="/createQuiz" exact component={CreateQuiz} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
