import React, { FC } from "react";
import { Grid, Segment, Header, Image } from "semantic-ui-react";
import { IUserDetailedPhotos } from "./Entity/UserDetailedEntity";

export const UserDetailedPhotos: FC<IUserDetailedPhotos> = (props) => {
  const { photos } = props;

  return (
    <Grid.Column width={12}>
      <Segment attached>
        <Header icon="image" content="Photos" />

        <Image.Group size="small">
          {photos &&
            photos.map((photoURL: string, index: number) => {
              return <Image src={photoURL} key={index} />;
            })}
        </Image.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedPhotos;
