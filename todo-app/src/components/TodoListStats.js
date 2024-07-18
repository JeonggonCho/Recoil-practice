import {useRecoilValue} from "recoil";
import {todoListStatsState} from "../atoms/todoAtoms";

const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>Total Items: {totalNum}</li>
      <li>Completed Items: {totalCompletedNum}</li>
      <li>Uncompleted Items: {totalUncompletedNum}</li>
      <li>Completed Percent: {formattedPercentCompleted}%</li>
    </ul>
  );
};

export default TodoListStats;