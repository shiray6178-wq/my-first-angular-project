export type UserModel = {
  id: number;
  name: string;
  avatar: string;
};

export type TaskModel = {
  id: number;
  userId: number;
  title: string;
  time: string;
  summary: string;
};

