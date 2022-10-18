import type { GetServerSideProps, NextPage } from 'next'
import TodoList from '../components/TodoList'
import { TodoType } from '../types/todo'
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from 'axios';
import { getTodosAPI } from '../lib/api/todos';

interface IProps {
  todos: TodoType[]
}

const Home: NextPage<IProps> = ({ todos }) => {

  return (
    <TodoList todos={todos} />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await getTodosAPI()
    return { props: { todos: data } }
  } catch (e) {

    return { props: { todos: [] } }
  }
}

export default Home
