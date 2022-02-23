import CheckIcon from '@mui/icons-material/Check';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import { taskListSelector } from '../selectors';
import { Task, Tasks } from '../types';

interface TasKListProps {}

const TasKList: NextPage<TasKListProps> = () => {
  const taskList: Tasks = useRecoilValue<Tasks>(taskListSelector);
  return (
    <>
      <p>残っているタスク一覧</p>
      <List sx={{ width: '100%', maxWidth: 720 }}>
        {taskList.map((task: Task, index: number) => (
          <ListItem key={`${task.title}_${index}`}>
            <ListItemAvatar>
              <Avatar>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={task.title} secondary={task.content} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TasKList;
