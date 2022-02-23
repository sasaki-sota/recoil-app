import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import { NextPage } from 'next';
import { ChangeEvent, useCallback } from 'react';
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil';
import { taskContentFormAtom, taskTitleFormAtom } from '../atoms';

interface TaskFormProps {}

const TaskForm: NextPage<TaskFormProps> = () => {
  // stateの値を取得
  const taskTitleValue: string = useRecoilValue<string>(taskTitleFormAtom);
  const taskContentValue: string = useRecoilValue<string>(taskContentFormAtom);
  // setStateの部分の処理
  const setTaskTitleValue: SetterOrUpdater<string> =
    useSetRecoilState<string>(taskTitleFormAtom);
  const setTaskContentValue: SetterOrUpdater<string> =
    useSetRecoilState<string>(taskContentFormAtom);

  // 値の変更処理
  const onChangeFormTitleValue = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setTaskTitleValue(event.target.value);
    },
    [setTaskTitleValue]
  );
  const onChangeFormContentValue = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setTaskContentValue(event.target.value);
    },
    [setTaskContentValue]
  );
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="my-input">タスク名</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          type="text"
          value={taskTitleValue}
          onChange={(event) => onChangeFormTitleValue(event)}
          placeholder="自動販売機に行く"
        />
        <FormHelperText id="my-helper-text">
          項目を記述してください!
        </FormHelperText>
      </FormControl>{' '}
      <br />
      <FormControl>
        <InputLabel htmlFor="my-input">内容</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          type="text"
          value={taskContentValue}
          onChange={(event) => onChangeFormContentValue(event)}
          placeholder="今日の気分はコカコーラ"
        />
        <FormHelperText id="my-helper-text">
          内容を記述してください!
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default TaskForm;
