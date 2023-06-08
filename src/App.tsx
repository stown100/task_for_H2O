import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./app.module.scss"

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
