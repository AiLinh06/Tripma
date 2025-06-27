
import Navigation from '../components/NavBar/Navigation';
import SearchBar from '../components/SearchBar/SearchBar';
import Header from '../components/Header/Header';
import styles from './homeLayout.module.css';

function HomeLayout() {


  return (
    <div className={styles.app}>
      <Header />
      <Navigation />
      <div className={styles.textContainer}>
        <div className={styles.centeredText}>
          It's more than <br /> just a trip
        </div>
      </div>
      <SearchBar />
    </div>
  );
}

export default HomeLayout;
