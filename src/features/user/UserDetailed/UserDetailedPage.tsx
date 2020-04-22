import React, { FC } from "react";
import { IUserDetailsPageFromProp } from "./Entity/UserDetailedEntity";
import {
  Grid,
  Segment,
  Item,
  Header,
  List,
  Icon,
  Button,
  Menu,
  Card,
  Image,
} from "semantic-ui-react";
import { IApplicationState } from "../../../app/store/configureStore";
import { connect } from "react-redux";
import UserDetailHeader from "./UserDetailHeader";
import UserDetailedDescription from "./UserDetailedDescription";
import UserDetailedSideBar from "./UserDetailedSideBar";
import UserDetailedPhotos from "./UserDetailedPhotos";
import UserDetailedEvent from "./UserDetailedEvent";

export const UserDetailedPage: FC<IUserDetailsPageFromProp> = (props) => {
  const { auth, profile, photos } = props;
  console.log("photos" + photos);
  return (
    <Grid>
      <UserDetailHeader profile={profile}></UserDetailHeader>
      <UserDetailedDescription profile={profile}></UserDetailedDescription>
      <UserDetailedSideBar></UserDetailedSideBar>
      <UserDetailedPhotos></UserDetailedPhotos>
      <UserDetailedEvent></UserDetailedEvent>
    </Grid>
  );
};

const mapStateToProps = (
  state: IApplicationState,
  ownProps: IUserDetailsPageFromProp
) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    photos: state.firestore.ordered.photos,
  };
};
export default connect(mapStateToProps, null)(UserDetailedPage);
