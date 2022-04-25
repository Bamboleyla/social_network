import "./Profile.css";
import { Outlet } from "react-router-dom";
import BlockHeaderContainer from "../../components/BlockHeader/BlockHeaderContainer";
import BlockNavigation from "../../components/BlockNavigation/BlockNavigation";

export const Profile = () => {
  return (
    <div className="app-wrapper">
      <BlockHeaderContainer />
      <BlockNavigation />
      <div className="app-wrapper-content">
        <Outlet />
      </div>
    </div>
  );
};
