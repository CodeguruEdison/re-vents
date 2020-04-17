import React, { FC, useState, useEffect } from "react";
import { IPhotosPageFromProp } from "../Entity/SettingsEntity";
import {
  Segment,
  Header,
  Grid,
  Divider,
  Card,
  Button,
  Image
} from "semantic-ui-react";
import DropZoneInput from "./DropZoneInput";
import CropperInput from "./CropperInput";

export interface IPhoPageState {
  files: any[];
}
export const PhotosPage: FC<IPhotosPageFromProp> = prop => {
  const [files, setFiles] = useState<any>([]);
  const [image, setImage] = useState<any>(null);

  useEffect(() => {
    return () => {
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);
  return (
    <Segment>
      <Header dividing size="large" content="Your Photos" />
      <Grid>
        <Grid.Row />
        <Grid.Column width={4}>
          <Header color="teal" sub content="Step 1 - Add Photo" />
          <DropZoneInput setFiles={setFiles}></DropZoneInput>
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color="teal" content="Step 2 - Resize image" />
          {files.length > 0 && (
            <CropperInput
              setImage={setImage}
              imagePreview={files[0].preview}
            ></CropperInput>
          )}
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color="teal" content="Step 3 - Preview & Upload" />
          {files.length > 0 && (
            <div
              className="img-preview"
              style={{
                minHeight: "200px",
                minWidth: "200px",
                overflow: "hidden"
              }}
            />
          )}
        </Grid.Column>
      </Grid>

      <Divider />
      <Header sub color="teal" content="All Photos" />

      <Card.Group itemsPerRow={5}>
        <Card>
          <Image src="https://randomuser.me/api/portraits/men/20.jpg" />
          <Button positive>Main Photo</Button>
        </Card>

        <Card>
          <Image src="https://randomuser.me/api/portraits/men/20.jpg" />
          <div className="ui two buttons">
            <Button basic color="green">
              Main
            </Button>
            <Button basic icon="trash" color="red" />
          </div>
        </Card>
      </Card.Group>
    </Segment>
  );
};
export default PhotosPage;
