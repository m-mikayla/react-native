export interface Task {
  id: string;
  name: string;
  taskPicture?: string;
  assignee: string;
  dueDate: number;
  createdDate: number;
  timeAllowance: number;
  completed: boolean;
  recurring: Recurring;
  assigneePicture?: "string";
}

export enum Recurring {
  DAILY = "Daily",
  WEEKLY = "Weekly",
  MONTHLY = "Monthly",
  ANNUALLY = "Annual",
}
