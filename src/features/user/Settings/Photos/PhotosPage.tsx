import React, { FC, useState, useEffect, Fragment } from "react";
import { IPhotosPageFromProp } from "../Entity/SettingsEntity";
import {
  Segment,
  Header,
  Grid,
  Divider,
  Card,
  Button,
  Image,
} from "semantic-ui-react";
import DropZoneInput from "./DropZoneInput";
import CropperInput from "./CropperInput";
import { connect } from "react-redux";
import { uploadPhotos } from "../../userAction";
import { toastr } from "react-redux-toastr";
import {compose} from 'redux';
import { firestoreConnect } from "react-redux-firebase";
import { IApplicationState } from "../../../../app/store/configureStore";
export interface IPhoPageState {
  files: any[];
}
export const PhotosPage: FC<IPhotosPageFromProp> = (props) => {
  const [files, setFiles] = useState<any>([]);
  const [image, setImage] = useState<any>(null);
  const { uploadPhotos } = props;
  //console.log(uploadPhotos);
  useEffect(() => {
    return () => {
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    };
  }, []);

  const handleUploadImage = async () => {
    try {
      await uploadPhotos(image, files[0].name);
      handleCancelCrop();
      toastr.success("Success", "Photo has been uploaded");
      //
    } catch (error) {
      console.log(error);
      toastr.error("Opps", "Something Went wrong");
    }
  };
  const handleCancelCrop = () => {
    setImage(null);
    setFiles([]);
  };
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
            <Fragment>
              <div
                className="img-preview"
                style={{
                  minHeight: "200px",
                  minWidth: "200px",
                  overflow: "hidden",
                }}
              />
              <Button.Group>
                <Button
                  onClick={handleUploadImage}
                  style={{ width: "100px" }}
                  positive
                  icon="check"
                ></Button>
                <Button
                  onClick={handleCancelCrop}
                  style={{ width: "100px" }}
                  icon="close"
                ></Button>
              </Button.Group>
            </Fragment>
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

const mapStateToProps = (store: IApplicationState) => {
   //console.log('map'+JSON.stringify(store.firebase.auth));
  return {
    auth:  store.firebase.auth,
    profile:store.firebase.profile
    
  };
};
const mapDispatchToProp =  {
   uploadPhotos
};
const query =({auth}:any)=>{
   console.log(JSON.stringify(auth));
 /* return [ {
      collection:'users',
      doc:auth.id,
      subcollections:[{collection:'photos'}],
      storeAs:'photos'
  }
 ]*/
}
export default compose(
  connect(mapStateToProps, mapDispatchToProp),
  //firestoreConnect(auth=>query(auth)),
)(PhotosPage) as any;
