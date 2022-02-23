import { selector } from 'recoil';
import { taskListAtom } from './atoms';
import { Tasks } from './types';

// ここの部分でTypescriptならユニオンにできます。
export const taskListSelector = selector<Tasks>({
  // ここの部分はユニークなキーになることが求められます。
  key: 'TaskListSelector',
  // getを受け取る関数になっています
  get: ({ get }) => {
    // 先ほどAtomsの方で定義したものを取得しています。
    const taskList: Tasks = get(taskListAtom);
    // 値を返さないと許してくれません
    return taskList;
  },
});
