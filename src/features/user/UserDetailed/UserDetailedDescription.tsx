import React, { FC } from "react";
import { Grid, Segment, Header, List, Item, Icon } from "semantic-ui-react";
import { IUserDetailedDescription } from "./Entity/UserDetailedEntity";
import { format } from "date-fns";

export const UserDetailedDescription: FC<IUserDetailedDescription> = (
  props
) => {
  const { profile } = props;
  const { interests } = profile;
  let createdAt;
  if (profile.createdAt) {
    createdAt = format(profile.createdAt.toDate(), "d MMM yyyy");
  }
  return (
    <Grid.Column width={12}>
      <Segment>
        <Grid columns={2}>
          <Grid.Column width={10}>
            <Header icon="smile" content="About Display Name" />
            <p>
              I am a: <strong>{profile.occupation || "tbn"}</strong>
            </p>
            <p>
              Originally from <strong>{profile.origin || "tbn"}</strong>
            </p>
            <p>
              Member Since: <strong>{createdAt}</strong>
            </p>
            <p>{profile.description}</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header icon="heart outline" content="Interests" />
            {interests ? (
              <List>
                {interests &&
                  interests.map((interest: any, index: number) => {
                    return (
                      <Item key={index}>
                        <Icon name="heart" />
                        <Item.Content>{interest}</Item.Content>
                      </Item>
                    );
                  })}
              </List>
            ) : (
              <p>No interests</p>
            )}
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedDescription;
