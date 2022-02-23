import { NextPage } from 'next';
import { RecoilRoot } from 'recoil';
import TaskButton from '../components/TaskButton';
import TaskForm from '../components/TaskForm';
import TasKList from '../components/TaskList';

interface RootProps {}

const Root: NextPage<RootProps> = () => {
  return (
    <RecoilRoot>
      <TaskForm />
      <TasKList />
      <TaskButton />
    </RecoilRoot>
  );
};

export default Root;
