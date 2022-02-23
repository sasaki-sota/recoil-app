import { atom } from 'recoil';
import { Tasks } from './types';

// ここの部分でTypescriptならユニオンにできます。
export const taskListAtom = atom<Tasks>({
  // ここの部分はユニークなキーになることが求められます。
  key: 'TaskList',
  //   ここの部分が初期値にあたります。
  // 例: const [hoge, setHoge] = useState() <- ここです！
  default: [
    {
      title: '夜ご飯を買いに行く',
      content: '二郎ラーメンでニンニクマシマシアブラカラメ',
    },
  ],
});

export const taskTitleFormAtom = atom<string>({
  key: 'TaskTitleForm',
  default: '',
});

export const taskContentFormAtom = atom<string>({
  key: 'TaskContentForm',
  default: '',
});
