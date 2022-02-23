import { Button } from '@mui/material';
import { NextPage } from 'next';
import { useCallback } from 'react';
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil';
import { taskContentFormAtom, taskListAtom, taskTitleFormAtom } from '../atoms';
import { Tasks } from '../types';

interface TaskButtonProps {}

const TaskButton: NextPage<TaskButtonProps> = () => {
  const taskList: Tasks = useRecoilValue<Tasks>(taskListAtom);
  const taskTitleFormValue: string = useRecoilValue<string>(taskTitleFormAtom);
  const taskContentFormValue: string =
    useRecoilValue<string>(taskContentFormAtom);
  const setTaskList: SetterOrUpdater<Tasks> =
    useSetRecoilState<Tasks>(taskListAtom);
  const setTaskTitleFormValue: SetterOrUpdater<string> =
    useSetRecoilState<string>(taskTitleFormAtom);
  const setTaskContentFormValue: SetterOrUpdater<string> =
    useSetRecoilState<string>(taskContentFormAtom);

  const onClickFormValue = useCallback(() => {
    // スプレッド構文を用いて追加する
    setTaskList([
      ...taskList,
      { title: taskTitleFormValue, content: taskContentFormValue },
    ]);
    // 値を初期化
    setTaskTitleFormValue('');
    setTaskContentFormValue('');
  }, [
    setTaskList,
    setTaskContentFormValue,
    taskList,
    setTaskTitleFormValue,
    taskContentFormValue,
    taskTitleFormValue,
  ]);

  return <Button onClick={() => onClickFormValue()}>タスクを追加する</Button>;
};

export default TaskButton;
