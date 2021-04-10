import './index.css';
import Case from '../../components/case/index.js';
import Conditions from '../../components/conditions/index.js';

const Home = () => (
    <section className = "review-section">
      <div className="case"><Case/></div>
      <div className="list-conditions"><Conditions/></div>
    </section>
  );

export default Home;