import styles from './App.module.css';
import { useSelector } from 'react-redux';

function App() {
  const lists = useSelector((state) => state.listsReducer.lists);

  console.log(lists);

  return (
    <div className="app-container">
      app
    </div>
  );
}

export default App;
