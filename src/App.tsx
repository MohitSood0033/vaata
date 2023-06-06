import './App.css';
import { Route, Routes } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Login from './components/Login/Login';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Home from 'components/Home/Home';
import Signup from './components/Signup/Signup';
import VerifyAccount from 'components/Signup/VerifyAccount/VerifyAccount';
import BusinessInfo from 'components/Signup/BusinessInfo/BusinessInfo';
import FormInfo from 'components/Signup/FormInfo/FormInfo';
import FormInfo2 from 'components/Signup/FormInfo2/FormInfo2';
import Philosophy from 'components/Home/Philosophy/Philosophy';
import Catalog from 'components/Home/Catalog/Catalog';
import Booking from 'components/Home/Booking/Booking';
import Marketplace from 'components/Home/Marketplace/Marketplace';
import Dashboard from 'components/Dashboard/Dashboard';
import Settings from 'components/Dashboard/Settings/Settings';
import DashboardMarketplace from 'components/Dashboard/DashboardMarketplace/DashboardMarketplace';
import DashboardBooking from 'components/Dashboard/DashboardBooking/DashboardBooking';
import DashboardHelpCenter from 'components/Dashboard/DashboardHelpCenter/DashboardHelpCenter';
import DashboardPublicProfile from 'components/Dashboard/DashboardPublicProfile/DashboardPublicProfile';
import DashboardEditProfile from 'components/Dashboard/DashboardPublicProfile/DashboardEditProfile';
import DashboardNewMember from 'components/Dashboard/DashboardPublicProfile/DashboardNewMember';
import DashboardEditMember from 'components/Dashboard/DashboardPublicProfile/DashboardEditMember';
import DashboardBlacklist from 'components/Dashboard/DashboardPublicProfile/DashboardBlacklist';
import DasboardWithoutMembership from 'components/Dashboard/DashboardBooking/DasboardWithoutMembership';
import CreateVisit from 'components/Dashboard/DashboardBooking/CreateVisit';

function App() {
  return (
    <div className=''>
      <div className="row">
        <div className='col-12'>
          <img src={require('./assets/images/Logo.svg').default}
            alt=""
            className="logo"
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup/business-info" element={<BusinessInfo />} />
            <Route path='/signup/verify-Account' element={<VerifyAccount />} />
            <Route path='/signup/payment-address' element={<FormInfo />} />
            <Route path='/signup/payment-addres' element={<FormInfo2 />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/home/philosophy" element={<Philosophy />} />
            <Route path="/home/catalog" element={<Catalog />} />
            <Route path="/home/booking" element={<Booking />} />
            <Route path="/home/marketplace" element={<Marketplace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/marketplace" element={<DashboardMarketplace />} />
            <Route path="/dashboard/booking" element={<DashboardBooking />} />
            <Route path="/dashboard/help-center" element={<DashboardHelpCenter />} />
            <Route path="/dashboard/public-profile" element={<DashboardPublicProfile />} />
            <Route path="/dashboard/edit-profile" element={<DashboardEditProfile />} />
            <Route path="/dashboard/add-member" element={<DashboardNewMember />} />
            <Route path="/dashboard/edit-member" element={<DashboardEditMember />} />
            <Route path="/dashboard/blacklist" element={<DashboardBlacklist />} />
            <Route path="/dashboard/withoutmembership" element={<DasboardWithoutMembership />} />
            <Route path="/dashboard/booking/create-visit" element={<CreateVisit />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;