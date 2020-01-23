import React from 'react';
import CompleteQuiz from './completeQuiz/CompleteQuiz'
import DeleteQuiz from './deleteQuiz/deleteQuiz'
import Layout from '../components/Layout/Layout';
import QuizList from './QuizList/QuizList';
import CreateQuiz from './CreateQuiz/CreateQuiz'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={QuizList} />
          <Route path="/deleteQuiz/:id" exact component={DeleteQuiz} />
          <Route path="/completeQuiz/:id" exact component={CompleteQuiz} />
          <Route path="/quizList" exact component={QuizList} />
          <Route path="/createQuiz" exact component={CreateQuiz} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
