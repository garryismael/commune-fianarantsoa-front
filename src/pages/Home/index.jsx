import Chart from '../../components/Chart';
import FeaturedInfo from '../../components/FeaturedInfo';
import WidgetLg from '../../components/WidgetLg';
import WidgetSm from '../../components/WidgetSm';
import { userData } from "../../dummyData";
import './index.css';

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}

export default Home;