import React, { FC, useEffect } from "react";
import { IUserDetailHeaderFromProps } from "./Entity/UserDetailedEntity";
import { Grid, Segment, Item, Header } from "semantic-ui-react";
import { differenceInYears } from "date-fns";

export const UserDetailHeader: FC<IUserDetailHeaderFromProps> = (props) => {
  const { profile } = props;
  const {occupation,displayName,city,origin,dateOfBirth}=profile;
  // console.log('dateofBirth'+ dateOfBirth);
   let age:string;
    if(dateOfBirth){
        age =differenceInYears(Date.now(),dateOfBirth.toDate()).toString();
    }else{
        age='unknown age';
    }
   useEffect(()=>{

   })
  return (
    <Grid.Column width={16}>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              avatar
              size="small"
              src={profile.photoURL || '/assets/user.png'}
            />
            <Item.Content verticalAlign="bottom">
              <Header as="h1">{displayName}</Header>
              <br />
              <Header as="h3">{occupation}</Header>
              <br />
              <Header as="h3">{age}, Lives in {city || 'unknown city'}, {origin}</Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailHeader;
